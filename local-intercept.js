/* eslint-disable */
/**
 * Custom interceptors for the project.
 *
 * This project has a section in its package.json:
 *    "pwa-studio": {
 *        "targets": {
 *            "intercept": "./local-intercept.js"
 *        }
 *    }
 *
 * This instructs Buildpack to invoke this file during the intercept phase,
 * as the very last intercept to run.
 *
 * A project can intercept targets from any of its dependencies. In a project
 * with many customizations, this function would tap those targets and add
 * or modify functionality from its dependencies.
 */

// const { Targetables } = require('@magento/pwa-buildpack');
const componentOverrideMapping = require('./init/componentOverrideMapping');
const moduleOverridePlugin = require('./init/moduleOverridePlugin');

function localIntercept(targets) {
    // Add CMS topbar
    targets.of('@magento/pagebuilder').customContentTypes.tap(contentTypes => {
        contentTypes.add({
            contentType: 'topbar',
            importPath: require.resolve('./src/pagebuilder/Topbar')
        });
    });

    // override modules
    targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
        new moduleOverridePlugin(componentOverrideMapping).apply(compiler);
    });

    // const targetables = Targetables.using(targets);

    // // Create a TargetableReactComponent linked to the `currentFilter.js` file
    // const CurrentFilterComponent = targetables.reactComponent(
    //     '@magento/venia-ui/lib/components/FilterModal/CurrentFilters/currentFilter.js'
    // );
    // CurrentFilterComponent.addJSXClassName(
    //     'span className={classes.root} data-cy="CurrentFilter-root"',
    //     '"customFilter"'
    // );

    // Add payment method - Bank transfer
    targets.of('@magento/venia-ui').checkoutPagePaymentTypes.tap(payments =>
        payments.add({
            paymentCode: 'banktransfer',
            importPath: 'src/components/PaymentMethods/BankTransfer'
        })
    );

    targets.of('@magento/venia-ui').summaryPagePaymentTypes.tap(paymentsSummary =>
        paymentsSummary.add({
          paymentCode: 'banktransfer',
          importPath:
            'src/components/PaymentMethods/BankTransfer/Summary.jsx',
        })
      );
}

module.exports = localIntercept;

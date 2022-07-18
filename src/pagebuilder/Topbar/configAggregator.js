import { getAdvanced } from '@magento/pagebuilder/lib/utils';

export default node => {
    const headerEls = node.childNodes;
    const headers = Array.from(headerEls, headerEl => headerEl);
    return {
        text: node.textContent,
        headingType: node.nodeName.toLowerCase(),
        ...getAdvanced(node),
        headers
    };
};

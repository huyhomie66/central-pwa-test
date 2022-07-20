import React, { useEffect } from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './BankTransfer.module.css';
import QRCode from 'react-qr-code';
import { Clock } from 'react-feather';
import { useBankTransfer } from './useBankTransfer';

const qrCodeContent = {
    bankAccount: '123456789012',
    bankName: 'ACB',
    amount: '1000'
};

export default function BankTransfer(props) {
    const classes = useStyle(defaultClasses, props.classes);

    // const { shouldSubmit, onPaymentSuccess } = props;

    // useEffect(() => {
    //     if (shouldSubmit) {
    //         onPaymentSuccess();
    //     }
    // }, [shouldSubmit]);

    const talonProps = useBankTransfer(props);

    // return (
    //     <div className={classes.root}>
    //         <div className={classes.title}>QR payment</div>
    //         <div className={classes.subtitle}>
    //             Use your e-bank to scan this QR code by{' '}
    //             <span className={classes.time}>05:59</span>
    //         </div>
    //         <div className={classes.qrCodeWrapper}>
    //             <QRCode value={JSON.stringify(qrCodeContent)} />
    //         </div>
    //         <div className={classes.statusBox}>
    //             <Clock />
    //             <span>Processing...</span>
    //         </div>
    //         <div className={classes.bankInfo}>Bank CPN</div>
    //         <div className={classes.refNum}>Ref Number: CPN22032342332</div>
    //         <div className={classes.totalPayment}>
    //             <span>Grand Total</span>
    //             <span>1,000 THB</span>
    //         </div>
    //     </div>
    // );
    return <></>;
}

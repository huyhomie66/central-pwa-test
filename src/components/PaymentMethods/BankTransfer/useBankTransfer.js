import { useMutation } from '@apollo/client';
import { useCartContext } from '@magento/peregrine/lib/context/cart';
import { useEffect } from 'react';
import {
    SET_BILLING_ADDRESS,
    SET_PAYMENT_METHOD_ON_CART
} from './bankTransfer.gql';

export const useBankTransfer = props => {
    const [{ cartId }] = useCartContext();

    const { shouldSubmit, onPaymentSuccess } = props;

    const [setBillingAddress] = useMutation(SET_BILLING_ADDRESS);

    const [
        setPaymentMethod,
        { loading: setPaymentMethodLoading }
    ] = useMutation(SET_PAYMENT_METHOD_ON_CART);

    const handleSetPaymentMethod = async () => {
        await setBillingAddress({
            variables: {
                cartId
            }
        });

        await setPaymentMethod({
            variables: {
                cartId,
                paymentCode: 'banktransfer'
            }
        });

        onPaymentSuccess();
    };

    useEffect(() => {
        if (shouldSubmit) {
            handleSetPaymentMethod();
        }
    }, [shouldSubmit]);

    return {
        setPaymentMethodLoading,
        handleSetPaymentMethod
    };
};

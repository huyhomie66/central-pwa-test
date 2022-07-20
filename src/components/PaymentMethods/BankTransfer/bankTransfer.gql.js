import { gql } from '@apollo/client';

// Set payment method on cart
export const SET_PAYMENT_METHOD_ON_CART = gql`
    mutation setPaymentMethodOnCart($cartId: String!, $paymentCode: String!) {
        setPaymentMethodOnCart(
            input: { cart_id: $cartId, payment_method: { code: $paymentCode } }
        ) {
            cart {
                id
                selected_payment_method {
                    code
                    title
                }
            }
        }
    }
`;

// Set billing address
export const SET_BILLING_ADDRESS = gql`
    mutation setBillingAddress($cartId: String!) {
        setBillingAddressOnCart(
            input: {
                cart_id: $cartId
                billing_address: { same_as_shipping: true }
            }
        ) {
            cart {
                id
                billing_address {
                    firstname
                    lastname
                    country {
                        code
                    }
                    street
                    city
                    region {
                        code
                    }
                    postcode
                    telephone
                }
            }
        }
    }
`;

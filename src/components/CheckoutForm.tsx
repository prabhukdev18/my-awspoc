import React from 'react';
import {
    Elements,
    CardElement,
    useStripe,

} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


// Replace with your Stripe public key
const stripePromise = loadStripe('pk_test_...');

const CheckoutForm: React.FC = () => {
    const stripe = useStripe();




    return (
        <form>
            <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>

        </form>
    );
};

const StripeSetup: React.FC = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default StripeSetup;

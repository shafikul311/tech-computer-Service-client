import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripePayment from './StripePayment/StripePayment';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IhkmNJyOPkAyBp9rJOXZV0NhMcXf2z1XScXuVltrD8CyeHIq2ZLWe2s1wXZ5z8WL1ZtBaiKUE1AMXWAN6OIWd7G000ZjpVsw3');

const ProcessCard = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
      <StripePayment handlePayment={handlePayment}/>
    </Elements>
  );
};

export default ProcessCard;
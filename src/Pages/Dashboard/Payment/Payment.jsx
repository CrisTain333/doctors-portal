import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const data = useLoaderData()
    const {treatmentName,price,slot,appointmentDate} = data;
    const stripePromise = loadStripe(process.env.REACT_APP_payment);
    return (
        <div>
            <h2 className="text-4xl">Payment For {treatmentName}</h2>
            <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 mt-10'>
            <Elements stripe={stripePromise}>
      <CheckoutForm data={data} />
    </Elements>
            </div>
        </div>
    );
};

export default Payment;
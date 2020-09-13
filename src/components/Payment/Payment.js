import React from "react";
import "./Payment.scss";
import { useStateValue } from "../Provider/StateProvider";
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Payment = () => {
  const [{ basket, user }] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = e => {

  }

  const handleChange = e => {
    //Listen for changes in the CardElement
    //Display erros as card details are typed
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  }

  return (
    <div className="payment">
      <div className="payment__container">
          <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
          </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Street Road</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
            <div className="payment__title">
                <h3>Review Items and Delivery</h3>
            </div>
            <div className="payment__items">
                {basket.map(item => (
                    <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
                ))}
            </div>
        </div>
        <div className="payment__section">
            <div className="payment__title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

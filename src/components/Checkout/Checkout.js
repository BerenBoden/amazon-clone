import React from "react";
import "./Checkout.scss";
import checkoutAd from "../../img/checkout_ad.jpg";
import Subtotal from "./Subtotal";
import { useStateValue } from "../Provider/StateProvider";
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkoutAd} alt="" />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.map(item => (
            <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;

import React from "react";
import "./Home.scss";
import Product from "../Product/Product";
import productImg1 from "../../img/product_img_1.jpg";
import productImg2 from "../../img/product_img_2.jpg";
import productImg3 from "../../img/product_img_3.jpg";
import productImg4 from "../../img/product_img_4.jpg";
import productImg5 from "../../img/product_img_5.jpg";
import productImg6 from "../../img/product_img_6.jpg";
import backdrop from "../../img/backdrop_img.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={backdrop} alt="background img" />
        <div className="home__row">
          <Product title="The Lean Startup" price={29.99} image={productImg1} rating={5}/>
          <Product title="Garmin Forerunner 235, GPS Running Watch, Black/Gray" price={159.99} image={productImg2} rating={4}/>
        </div>
        <div className="home__row">
          <Product title="AmazonBasics Nylon Braided Lightning to USB A Cable, MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot" price={12.99} image={productImg3} rating={4}/>
          <Product title="BN-LINK Smart WiFi Heavy Duty Outdoor Outlet, Timer and Countdown Function, No Hub Required for Outdoor Lights, Compatible with Alexa and Google Assistant (Outdoor) 2.4 GHz Network only" price={34.53} image={productImg4} rating={5}/>
          <Product title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers | Upgraded Turntable Audio Sound| Includes Extra Stylus | Turquoise, Model Number: VSC-550BT-TQ" price={44.98} image={productImg5} rating={5}/>
        </div>
        <div className="home__row">
          <Product title="RUNMUS Stereo Gaming Headset for PS4, Xbox One, Nintendo Switch, PC, PS3, Mac, Laptop, Over Ear Headphones PS4 Headset Xbox One Headset with Surround Sound, LED Light & Noise Canceling Microphone" price={39.95} image={productImg6} rating={5}/>
        </div>
      </div>
    </div>
  );
};

export default Home;

//52:57
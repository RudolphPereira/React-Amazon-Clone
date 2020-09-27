import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/GW_Hero/Main_Desktop_1500x600_DS._CB404300086_.jpg"
        alt=""
        className="home__image"
      />

      <div className="home__row">
        <Product
          title="The All-new Echo Dot For Your Home"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/379x304_Desktop_Card_BE_01._SY304_CB404301999_.jpg"
          price={49.99}
          rating={5}
        />
        <Product
          title="The All-new Fire TV stick - Plug and Play"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/02_379x304_Desktop_Card_SP._SY304_CB404302689_.jpg"
          price={49.99}
          rating={4}
        />
        <Product
          title="New Echo Dot with a clock - Wake Up Cheerpy"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/06_379x304_Desktop_Card_GE._SY304_CB404302721_.jpg"
          price={69.99}
          rating={5}
        />
        <Product
          title="Amazon Smart Plug For all Your Devices"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/07_379x304_Desktop_Card_CR._SY304_CB404302460_.jpg"
          price={59.99}
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          title="Smartify your Home With Products Exclusive From Amazon. Buy Today and stand a chance to win an Ipad!"
          image="https://m.media-amazon.com/images/I/51GUqfXyxsL._AC_UY218_.jpg"
          price={29.99}
          rating={5}
        />
        <Product
          title="Introducing Echo Show 8 – Smart display with Alexa - 8 HD screen with stereo sound – Black"
          image="https://m.media-amazon.com/images/I/51UZ17lvVFL._AC_UY218_.jpg"
          price={100}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          title="All-new Echo Plus With Built in Surveillance that Keeps you Entertained and Safe all at Once! "
          image="https://m.media-amazon.com/images/I/61KIy6gX-CL._AC_UY218_.jpg"
          price={79.99}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import SubHeading from "../SubHeading/SubHeading"
import './Newsletter.css';

const Newsletter = () => (
  <div className="app_newsLetter">
    <div className="app_newsLetter-heading">
        <SubHeading title="NewsLetter"/>
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
    </div>
      <div className="app__newsLetter-input flex__center">
          <input type="email" placeholder="Enter Your Email"/>
          <button className="custom__button">Subscribe</button>
      </div>
  </div>
);

export default Newsletter;

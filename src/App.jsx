import { useState } from 'react'
import cover from './images/drawers.jpg'
import michelle from './images/avatar-michelle.jpg'
import facebook from './images/icon-facebook.svg'
import twitter from './images/icon-twitter.svg'
import pinterest from './images/icon-pinterest.svg'
import './App.css'
import './index.css'; 

function App() {
  const handleClick = (event) => {
    event.target.classList.toggle('shareDisplay');
    document.querySelector('.social').classList.toggle('active');
  };

  return (
    <main className='main container'>
      <section className="image-box">
        <img src={cover} alt="image-cover" />
      </section>
      <section className="top-page">
        <h1> Shift the overall look and feel by adding these wonderful 
          touches to furniture in your home</h1>
        <p> Ever been in a room and felt like something was missing? Perhaps 
          it felt slightly bare and uninviting. I’ve got some simple tips 
          to help you make any room feel complete.
        </p>

      <section className="content-footer">
        <div className='content'>
          <img src={michelle} alt="avatar" />
          <span>Michelle Appleton</span>
          <p>28 Jun 2020</p>
        </div>

        <button className="share" onClick={handleClick}></button>
        <ul className="social">
          <li>Share</li>
          <li><img src={facebook} alt="facebook-icon"/></li>
          <li><img src={twitter} alt="twitter-icon"/></li>
          <li><img src={pinterest} alt="pinterest-icon"/></li>
        </ul> 
        <div className="triangle-down">
        </div>
      </section>
      </section>
    </main>

  )
}

export default App

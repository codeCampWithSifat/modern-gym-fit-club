import React from 'react'
import Header from '../Header/Header'
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best add */}

        <div className="the-best-add">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figure content */}

        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+987</span>
            <span>Member Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Programme</span>
          </div>
        </div>

        {/* Hero Button */}
        
        <div className="hero-button">
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn More</button>
        </div>

      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>
        <div className="heart-rate">
            <img src={heart} alt="" />
            <span>Heart Rate</span>
            <span>bpm</span>
        </div>

        {/* Hero Image */}
        <img src={hero_image} alt="" className='hero-image' />
        <img src={hero_image_back} alt="" className='hero-image-back'/>

        {/* Calories */}

        <div className="calories">
            <img src={calories} alt="" />
            <div>
            <span>Calories</span>
            <span>220 Kca</span>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Hero

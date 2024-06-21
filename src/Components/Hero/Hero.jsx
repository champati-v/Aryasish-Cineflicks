import React from "react";
import "./Hero.css";
import hero1 from "../../assets/hero-1.png";
import wedding from "../../assets/wedding.png"

const Hero = () => {

  const handleButtonClick1 = () => {
    const url = "https://wa.me/+916370604291?text=I'm%20interested%20in%20your%20wedding%20video%20shoot%20service";
    window.open(url, '_blank');
  };

  return (
    <>
    <div className="hero-section" id="hero">
      <div className="hero-text">
        <h1>"Capture Your Story With <span>Cinematic</span> Excellence"</h1> <br />
        <h3>Crafting Timeless Narratives for Every Occasion</h3> <br />
        <br />
        <button onClick={handleButtonClick1} className="book-now">Book Now</button>
      </div>
      <div className="hero-image">
        <img src={hero1} alt="" srcset="" />
      </div>
    </div>

    <div className="container">
        <div className="container-image">
            <img src= {wedding} alt="" srcset="" />
        </div>
        <div className="container-text">
        <p>At <span className="red">Aryasish Cine flicks</span> , we believe every moment deserves to be immortalized with cinematic brilliance. Whether it's the magic of your <span className="red" >wedding day</span>, a compelling <span className="red" >corporate video</span>, or an <span className="red">artistic film</span>, let us create a visual masterpiece that you'll cherish forever</p>
        </div>
    </div>
    </>
  );
};

export default Hero;

import React from "react";
import "./Services.css";
import service_wedding from '../../assets/service_wedding.jpg';
import service_prewedding1 from '../../assets/service_prewedding1.jpg';
import service_music from '../../assets/service_music.jpg';
import service_youtube from '../../assets/service_youtube.jpg';
import shortfilm from '../../assets//shortfilm.jpg';
import service_advertise from '../../assets/service_advertise.jpg';


const Services = () => {

  const handleButtonClick1 = () => {
    const url = "https://wa.me/+916370604291?text=I'm%20interested%20in%20your%20wedding%20video%20shoot%20service";
    window.open(url, '_blank');
  };

  const handleButtonClick2 = () => {
    const url = "https://wa.me/+916370604291?text=I'm%20interested%20in%20your%20Cinematic%20wedding%20video%20shoot%20service";
    window.open(url, '_blank');
  };

  const handleButtonClick3 = () => {
    const url = "https://wa.me/+916370604291?text=I'm%20interested%20in%20your%20music%20video%20shoot%20service";
    window.open(url, '_blank');
  };

  const handleButtonClick4 = () => {
    const url = "https://wa.me/+916370604291?text=I'm%20interested%20in%20your%20Youtube%20Video%20shooting%20service";
    window.open(url, '_blank');
  };

  const handleButtonClick5 = () => {
    const url = "https://wa.me/+916370604291?text=I'm%20interested%20in%20your%20Film%20shooting%20service";
    window.open(url, '_blank');
  };

  const handleButtonClick6 = () => {
    const url = "https://wa.me/+916370604291?text=I'm%20interested%20in%20your%20Advertisement%20shoot%20service";
    window.open(url, '_blank');
  };

  return (
    <>
      <section className="portfolio" id="services" >
        <div className="heading">
          <h1 class="heading-text">Our <span>Services</span></h1>
        </div>


        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src={service_prewedding1} width="100%" alt="" />
            <div className="portfolio-layer">
              <h4>WEDDING VIDEO SHOOT</h4>
              <p>Pre-wedding and Post-wedding shooting and editing</p>
              <button onClick={handleButtonClick1} >Book Now</button>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={service_wedding} width="100%" alt="" />
            <div className="portfolio-layer">
              <h4>CINEMATIC WEDDING SHOOT</h4>
              <p>Traditional and cinematic wedding video shoot and editing</p>
              <button onClick={handleButtonClick2} >Book Now</button>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={service_music} width="100%" alt="" />
            <div className="portfolio-layer">
              <h4>MUSIC VIDEO SHOOT</h4>
              <p>Music video shooting and editing</p>
              <button onClick={handleButtonClick3} >Book Now</button>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={service_youtube} width="100%" alt="" />
            <div className="portfolio-layer">
              <h4>YOUTUBE</h4>
              <p>Youtube video shooting and editing</p>
              <button onClick={handleButtonClick4} >Book Now</button>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={shortfilm} width="100%" alt="" />
            <div className="portfolio-layer">
              <h4>FILM AND SHORT FILM</h4>
              <p>Short film and documentary shooting and editing</p>
              <button onClick={handleButtonClick5} >Book Now</button>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={service_advertise} width="100%" alt="" />
            <div className="portfolio-layer">
              <h4>ADVERTISEMENT SHOOT</h4>
              <p>Advertisement shoot and edit</p>
              <button onClick={handleButtonClick6} >Book Now</button>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default Services;

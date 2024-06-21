import React from 'react'
import './Footer.css'
import profile from '../../assets/profile.jpg'
import whatsapp from '../../assets/whatsapp.png'
import Linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import website from '../../assets/website.png'

function Footer() {
  return(
    <div className="about-developer">
      <div className="profile">
        <h1>About Developer</h1>
        <img src={profile} alt="" />
        <h4>Vibekananda Champati</h4>
        <h5>Engineering Student</h5>
      </div>
      <div className="social-links">
          <a href="https://www.linkedin.com/in/vchampati/" target='_blank'><img src={Linkedin} alt="social-link" /></a>
          <a href="https://github.com/champati-v" target='_blank' ><img src={github} alt="social-link" /></a>
          <a href="https://instagram.com/champati_v" target='_blank' ><img src={instagram} alt="social-link" /></a>
          <a href="https://vibek-portfolio.netlify.app/" target='_blank' ><img src={website} alt="social-link" /></a>
          <a href="https://wa.me/+919439978039" target='_blank' ><img src={whatsapp} alt="social-link" /></a>
      </div>
      <p>Crafted with passion and precision to help your vision come to life.</p>

      <footer>Made with &hearts; by Vibekananda Champati | Copyright &copy;2024 Aryasish Cine Flicks | All Rights Reserved</footer>
    </div>
  )
}

export default Footer
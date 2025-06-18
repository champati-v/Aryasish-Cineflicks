import React from "react";
import "./Contact.css";
import photographer from "../../assets/photographer.jpg";
import mail_icon from "../../assets/mail_icon.png";
import call_icon from "../../assets/call_icon.png";
import location_icon from "../../assets/location_icon.png";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a7202d4e-7585-49fe-820e-1126c0e090c1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Form submitted succesfully! Our Team will contact you soon.");
    }
  };


  return (
    <div className="contact" id="contact" >
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Your story deserves to be told with cinematic brilliance. Fill out
            the form below and we'll get back to you shortly.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" width= "50px" /><p><a href="mailto:aryasishcineflicks2023@gmail.com" target="_blank" >aryasishcineflicks2023@gmail.com</a></p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="" width= "50px" /> <p> <a href="tel:+916370604291" target="_blank" > +91-6370604291</a></p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" width= "50px" /> <p>Jatani, Khordha (Odisha)</p>
            </div>
          </div>
        </div>

        <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      
      <div className="contact-form">
        <form  onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />

          <label htmlFor="">Phone Number</label>
          <input
            type="number"
            placeholder="Enter your contact number"
            name="number"
          />

          <label htmlFor="">Write your message here: </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
          ></textarea>

          <button className="contact-submit" type="submit">
            Submit Now
          </button>
        </form>
      </div> 
      </div>
    </div>
  )
}

export default Contact;

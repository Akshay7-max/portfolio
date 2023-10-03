import React,{ useRef } from "react";
import "./Contact.css";
import Adobe from "../../assets/adobe.png";
import Facebook from "../../assets/facebook.png";
import Microsoft from "../../assets/microsoft.png";
import Walmart from "../../assets/walmart.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uc1cc79', 'template_ieq5tf7', form.current, 'sRlfhgrTyakwDeYEI')
            .then((result) => {
                console.log(result.text);
                e.target.reset(); //Clear our Form data after click on submit button
                alert('Email sent');

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <section id="contactPage">
                <div id="clients">
                    <h1 className="contactPageTitle">My Clients</h1>
                    <p className="clientsDesc">
                        I have had the opportunity to work with a diverse group of
                        companies. Some of the notable companies I have worked with
                        includes.
          </p>
                    <div className="clientsImgs">
                        <img src={Adobe} alt="Adobe" className="ClientsImg" />
                        <img src={Facebook} alt="Facebook" className="ClientsImg" />
                        <img src={Microsoft} alt="Microsoft" className="ClientsImg" />
                        <img src={Walmart} alt="Walmart" className="ClientsImg" />
                    </div>
                </div>

                <div id="contact">
                    <h1 className="contactPageTitle">Contact Me</h1>
                    <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                    <form action="" className="contactForm" ref={form} onSubmit={sendEmail} >
                        <input type="text" className="name" placeholder="Enter Name" name="user_name" />
                        <input type="email" className="email" placeholder="Enter Email Address" name="user_email" />
                        <textarea className="message" id="" rows="5" placeholder="Enter Message" name="message" ></textarea>
                        <button type="submit" className="submitBtn">Submit</button>
                        <div className="links">
                            <img src={FacebookIcon} alt="Facebook" className="link" />
                            <img src={InstagramIcon} alt="Instagram" className="link" />
                            <img src={TwitterIcon} alt="Twitter" className="link" />
                            <img src={YoutubeIcon} alt="YoutubeIcon" className="link" />
                        </div>
                    </form>
                </div>

            </section>
        </>
    );
};

export default Contact;

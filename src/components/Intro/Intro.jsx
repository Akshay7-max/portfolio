import React from "react";
import "./Intro.css";
import { Link } from 'react-scroll';  //npm i react-scroll
import background from "../../assets/image.png";
import btnImg from '../../assets/hireme.png';

const Intro = () => {
    return (
        <>
            <section id="intro">
                <div className="introContent">
                    <span className="hello">Hello,</span>
                    <span className="introText">I'm <span className="introName">Akshay</span><br />Website Designer</span>
                    <p className="introPara">I am a skilled and passionate web designer with experience in creating <br/> visually appealing and user-friendly websites. </p>
                    <Link><button className="btn"><img src={btnImg} className="btnImg" alt="hireMe" />Hire Me</button></Link>
                </div>
                <img src={background} alt="Profile" className="bg" />
            </section>
        </>
    );
};

export default Intro;

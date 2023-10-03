import React from 'react';
import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebsiteDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const Skills = () => {
    return (
        <>
            <section id="skills">
                <span className="skillTitle">What i do</span>
                <span className="skillDesciption">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>
                <div className="skillBars">
                    <div className="skillBar">
                        <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>UI/UX Design</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>

                    <div className="skillBar">
                        <img src={WebsiteDesign} alt="WebsiteDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Website Design</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>

                    <div className="skillBar">
                        <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>App Design</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills

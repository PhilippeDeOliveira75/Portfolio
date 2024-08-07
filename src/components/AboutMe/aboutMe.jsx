import './aboutMe.scss';
import { PiPathBold } from "react-icons/pi";
import { PiGearSixThin } from "react-icons/pi";

function AboutMe () {

    return (
        <div className="aboutMeContainer" id='about-me'>
            <div className="aboutMeTilteAndCitation">
                <h2 className="aboutMeTitle">ABOUT ME</h2>
                <p className='aboutMeCitation'>Bringing your vision to life with
                precision and passion</p>
            </div>

            <div className="w-aboutMeContent">
                <div className="w-aboutMeIconAndText">
                    <div className="w-aboutMeIcon">
                        <PiPathBold className='aboutMeIcon'/>
                        <div className="colorCircle"></div>
                    </div>
                    <h3>My Ambition</h3>
                    <p className="aboutMeContentText">I am a front-end developer. I have a passion for web development. I am a fast learner and always eager to learn new technologies. I thrive in collaborative environments and am eager to find new opportunities to grow my skills on exciting projects.</p>
                </div>
                <div className="w-aboutMeIconAndText">
                    <div className="w-aboutMeIcon">
                        <PiGearSixThin className='aboutMeIcon strokePlus'/>
                        <div className="colorCircle"></div>
                    </div>
                    <h3>My Approach</h3>
                    <p className="aboutMeContentText">I use a user-centered approach to create intuitive and responsive web applications, focusing on user experience and modern technologies. Collaboration and continuous improvement drive my process to ensure each project meets high standards.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe
                

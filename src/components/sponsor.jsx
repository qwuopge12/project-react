import React from "react";
import "./sponsor.css";
import Zurag1 from '../assets/indoor_hoops.jpg';
import Zurag2 from '../assets/Facebook-logo-blue-circle-large-transparent-png.png';
import Zurag3 from '../assets/download.png';
import Zurag4 from '../assets/logo-ig-stunning-instagram-logo-vector-download-for-new-7.png';
import Zurag5 from  '../assets/map (1).png'
import Zurag6 from '../assets/telephone (1).png'

function Sponsor (){
    return(
        <>
        <div className="box">
            <div className="socials">
                <img className="Zurag1" src={Zurag1} alt=''/>
                <p className="p1">Thanks for visitng our site</p>
                <p className="p2">Follow our socials for more!</p>
                <span>Follow us</span>
                <div className="logo-socials">
                    <img src={Zurag2} alt="" />
                    <img src={Zurag3} alt="" />
                    <img src={Zurag4} alt="" />
                </div>
            </div>
            <div className="tre">
                <div className="locate">
                    <div className="location">
                        <img src={Zurag5} alt="" />
                        <div className="Ub">
                            <span>UB Mongolia</span>
                            <span>District10</span>
                        </div>
                    </div>
                    <div className="likeshare">
                        <span>Like & Share</span>
                    </div>
                    <div className="Aboutus">
                        <span>About us</span> <span>Contact us</span>
                    </div>
                    <div className="Services">
                        <span>Services us</span> <span>Blog</span>
                    </div>
                    <div className="Projects">
                        <span>Projects us</span> <span>Testimonials</span>
                    </div>
                    <div className="Ourteam">
                        <span>Our Team</span> <span>Faq</span>
                    </div>
                </div>
                <div className="contact">
                    <div className="phone">
                        <img src={Zurag6} alt="" />
                        <div className="textphone">
                            <span>99-99-99-99</span> 
                            <span>Give us a call</span>
                        </div>
                    </div>
                    <div className="sub"></div>
                    <div className="Khasin"></div>
                    <div className="mail"></div>
                </div>  
            </div>
        </div>
        <div className="box2">

        </div>
        </>
    )
}
export default Sponsor 
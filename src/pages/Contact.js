import React from 'react';
import "./Contact.scoped.css";
import NavHead from '../component/Nav';
import {Input,Label} from 'reactstrap'
import {GoPaperAirplane} from "react-icons/go";

const Contact = () => {
    return(
        <div className="contact">
            <header>
                <NavHead></NavHead>
            </header>
            <body>
            <div className="container">
                <div className="title">
                    <h1 className='title-contact'>Contact Us</h1>
                    <p className= 'text-data'>Any Questions? Just write us a massage!</p>
                </div>
                <div className="contact-blog">
                    <div className="contact-info">
                        <h2 className='contact-info-title'>Contact Informations</h2>
                        <p className='text-data2'>Fill up the form and our team will get back to you within 24 hours.</p>
                        <div className="data">
                            <div className="call">
                                <img id="call" src="/call-outline.svg" alt="" />
                                <p className='text-data2'>xxx-xxx-xxxx</p>
                            </div>
                            <div className="mail">
                                <img id="mail" src="/mail-outline.svg" alt="" />
                                <p className='text-data2'>example@email.com</p>
                            </div>
                            <div className="location">
                                <img id="loca-icon" src="/location-outline.svg" alt="" />
                                <p className='text-data2'>King mongkut's University of Technology North Bangkok</p>
                            </div>
                        </div>
                    </div>
                    <div className="massage">
                        <div className="email__1">
                            <Label for='email'>Email</Label>
                            <Input type="text" className='email__mas' placeholder='Your email'/>
                        </div>
                        <textarea className="write-massage" name="" id="" cols="30" rows="15" placeholder='type your massage here'></textarea>
                        <button className='send-massage'>Send</button>
                    </div>
                </div>
            </div>
            </body>
        </div>
    );
};

export default Contact;
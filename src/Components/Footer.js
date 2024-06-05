import React from 'react'
import { Col, Row, Stack } from 'react-bootstrap'
import './Footer.css';
import { IoMailSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";

function Footer() {
  return (
    <div className='footermain'>
    <div className='container footer-div1'>
        <Row>
            <Col xs={6} md={6}>
                <img src='Images/Logo.png' className='footer-img' alt='footerimg'/>
                <p className='footer-p'>The best digital marketing agency in Pune with a proven 
                track record of consistently delivering quality service.</p>
                <p className='footer-p1'> Address</p>
                <p className='footer-p2'>Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.</p>
                <p className='footer-p3'>Contacts</p>
                    <Row>
                        <Col md={1} xs={2}><IoMailSharp /></Col>
                        <Col md={1} xs={10}><p className='footer-p6'>hello@osumare.in</p></Col>
                    </Row>
                    <Row>
                        <Col md={1} xs={2}><IoCallSharp /></Col>
                        <Col md={10} xs={10}> <p className='footer-p6'>+91 8459 8762 26</p></Col>
                    </Row>
            </Col>
            <Col xs={2} md={3}>
                <div className='text-justify'>
                    <p className='footer-p4'>Menu</p>
                    <p className='footer-menu'>Home</p>
                    <p className='footer-menu'>About</p>
                    <p className='footer-menu'>Services</p>
                    <p className='footer-menu'>Work</p>
                    <p className='footer-menu'>Blog</p>
                    <p className='footer-menu'>Career</p>
                </div>   
            </Col>
            <Col xs={4} md={3}>
                <p className='footer-p4'>Social</p>
                <Row>
                    <Col md={3} xs={1}><FaXTwitter className='socialicon'/></Col>
                    <Col md={3} xs={1} ><ImFacebook2 className='socialicon'/></Col>
                    <Col md={3} xs={1} ><FaYoutube className='socialicon'/></Col>
                    <Col md={3} xs={1}><FaPinterest className='socialicon'/></Col>
                </Row>        
                <Row className='footer-row'>   
                    <Col md={3}  xs={1}><IoLogoWhatsapp className='socialicon'/></Col>
                    <Col md={3}  xs={1}><PiInstagramLogoFill className='socialicon'/></Col>
                </Row>
            </Col>
        </Row>
    </div>
    <p className='footer-p5'>© 2023 Osumare. All rights reserved.</p>
    </div>
  )
}

export default Footer
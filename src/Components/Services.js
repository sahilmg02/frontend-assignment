import React from 'react'
import { Card,Button, Row, Col } from 'react-bootstrap';
import './Services.css';

function Services() {
  return (
    <div className='main-div'>
    <div className='container'>
        <div>
            <p className='commantitle'>Our Service Offering</p>
            <p className='commanp'>Strategies that Drive Property Market Excelllence </p>
        </div>

        <div className='services-card'>
          <Row>
            <Col md={3} xs={12} className='service-col1'>
                <div className='card1 card'>
                  <div className='d-flex justify-content-center align-items-center'>
                      <img src='Images/serviceicon/Seo.png' className='cardimg'/> 
                  </div>
                  <p className='card1-p1'>Automotive SEO</p>
                  <p className='card1-p' >Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today</p>
                </div>
            </Col>
            <Col md={3} xs={12} className='service-col1'>
                <div className='card1 card'>
                  <div className='d-flex justify-content-center align-items-center'>
                      <img src='Images/serviceicon/PPC.png' className='cardimg'/> 
                  </div>
                  <p className='card1-p1'>PPC Precision</p>
                  <p className='card1-p' >Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.</p>
                </div>
            </Col>
            <Col md={3} xs={12} className='service-col1'>
                <div className='card1 card'>
                  <div className='d-flex justify-content-center align-items-center'>
                      <img src='Images/serviceicon/Social.png' className='cardimg'/> 
                  </div>
                  <p className='card1-p1'>Social Acceleration</p>
                  <p className='card1-p' >  Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.</p>
                </div>
            </Col>
            <Col md={3} xs={12} className='service-col1'>
                <div className='card1 card'>
                  <div className='d-flex justify-content-center align-items-center'>
                      <img src='Images/serviceicon/content.png' className='cardimg'/> 
                  </div>
                  <p className='card1-p1'>Content Excellence</p>
                  <p className='card1-p' >Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.</p>
                </div>
            </Col>
            </Row>

            <Row className='services-row2'>
            <Col md={3} xs={12} className='service-col1'>
                <div className='card1 card'>
                  <div className='d-flex justify-content-center align-items-center'>
                      <img src='Images/serviceicon/Web design.png' className='cardimg'/> 
                  </div>
                  <p className='card1-p1'>Web Design</p>
                  <p className='card1-p' >Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.</p>
                </div>
            </Col>
            <Col md={3} xs={12} className='service-col1'>
                <div className='card1 card'>
                  <div className='d-flex justify-content-center align-items-center'>
                      <img src='Images/serviceicon/Data driven.png' className='cardimg'/> 
                  </div>
                  <p className='card1-p1'>Data-Driven Insights</p>
                  <p className='card1-p' >Leverage data to refine your strategies, making informed decisions that drive revenue growth.</p>
                </div>
            </Col>
            <Col md={3} xs={12} className='service-col1'>
                <div className='card1 card'>
                  <div className='d-flex justify-content-center align-items-center'>
                      <img src='Images/serviceicon/Solutions.png' className='cardimg'/> 
                  </div>
                  <p className='card1-p1'>End-to-End Solutions</p>
                  <p className='card1-p' >From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.</p>
                </div>
            </Col>
            <Col md={3} xs={12} className='service-col1'>
                <div className='card1 card'>
                 <div className='d-flex justify-content-center align-items-center'>
                      <img src='Images/serviceicon/Video.png' className='cardimg'/> 
                  </div>
                  <p className='card1-p1'>Video marketing</p>
                  <p className='card1-p' >Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.</p>
                </div>
            </Col>
            </Row>
            <div className='services-btn1 d-flex justify-content-center'>
            <Button className='services-btn'>Get started</Button>
        </div>
        </div>
       
    </div>  
    </div>
  )
}

export default Services
import React from 'react'
import './PropertyInq.css';

import { Button, Col, Row } from 'react-bootstrap';
function PropertyInq() {
  return (
    <div className='property-div1 container'>
            <div>
                <p className='commantitle'> Driving Property Inquiries to Conversions</p>
                <p className='commanp'>Streamlined Strategies for Real Estate Success</p>
            </div>
            <Row className='property-row'>
                <Col md={5} className='property-col'>
                    <img className='proprtyimg' src='/Images/bro.png' alt='searchhome'/>
                </Col>
                <Col md={7}>
                    <p className='newtitle'>Optimized Path to Property Purchase</p>
                    <p className='newp'>In the dynamic realm of real estate, the journey from a property inquiry to
                     a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers
                     through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</p>
                        <Button className='property-btn'>Get started</Button>
                </Col>
            </Row>

            <div>
                <p className='commantitle'> Driving Property Inquiries to Conversions</p>
            </div>

            <Row className='property-row1'>
                <Col md={6}>
                    <div className='card3 card container d-flex align-items-center'>
                      <img src='Images/virtual.png' className='cardimg3 mt-4'/>
                      <p className='card3-p1'>Call-to-Action Optimization</p>
                      <p className='card3-p' >Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='card3 card container d-flex align-items-center'>
                      <img src='Images/onlinestore.png' className='cardimg3 mt-4'/>
                      <p className='card3-p1'>Landing Page Efficiency</p>
                      <p className='card3-p' >Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.</p>
                    </div>
                </Col>
            </Row>
            <Row className='property-row2'>
                <Col md={6}>
                    <div className='card3 card container d-flex align-items-center'>
                      <img src='Images/3d.png' className='cardimg3 mt-4'/>
                      <p className='card3-p1'>Social Proof Utilization</p>
                      <p className='card3-p' >Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='card3 card container d-flex align-items-center'>
                      <img src='Images/augmented.png' className='cardimg3 mt-4'/>
                      <p className='card3-p1'>Mobile-Friendly Experience</p>
                      <p className='card3-p' >With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.</p>
                    </div>
                </Col>
            </Row>
    </div>
  )
}

export default PropertyInq
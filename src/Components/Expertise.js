import React from 'react'
import './Expertise.css';
import { Button, Col, Row } from 'react-bootstrap';

function Expertise() {
  return (
    <div className='expertise-div1 container'>
            <div className='expertise-title'>
                <h2 className='commantitle'> Our Expertise in Action</h2>
            </div>

            <Row className='expertise-row1'>
                <Col xs={12} md={6} className='expertise-col'>
                    <div className='card4 card container d-flex align-items-center'>
                      <img src='Images/weather.png' className='cardimg4 mt-4'/>
                      <p className='card4-p1'>Effective CTAs</p>
                      <p className='card4-p' > See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.</p>
                    </div>
                </Col>
                <Col  xs={12} md={6}>
                    <div className='card4 card container d-flex align-items-center'>
                      <img src='Images/mass.png' className='cardimg4 mt-4'/>
                      <p className='card4-p1'>Conversion-Optimized Landing Pages</p>
                      <p className='card4-p' >Explore a case study where our landing page optimization increased property lead conversion rates by 30%</p>
                    </div>
                </Col>
            </Row>
            <Row className='expertise-row2'>
                <Col xs={12} md={6}>
                    <div className='card4 card container d-flex align-items-center'>
                      <img src='Images/3dmodel.png' className='cardimg4 mt-4'/>
                      <p className='card4-p1'>Trust Building with Social Proof</p>
                      <p className='card4-p' >Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project</p>
                    </div>
                </Col>
                <Col  xs={12} md={6}>
                    <div className='card4 card container d-flex align-items-center'>
                      <img src='Images/medal.png' className='cardimg4 mt-4'/>
                      <p className='card4-p1'>Mobile-First Success:</p>
                      <p className='card4-p' > Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.</p>
                    </div>
                </Col>
            </Row>

            <div>
                <h2 className='commantitle'> Your Peace of Mind</h2><br/>
                <p className='card4-p2'>Through our conversion-focused strategies, we ensure that property seekers are not just
                   visitors, but engaged prospects ready to make their next move in the real estate market</p>
            </div>

            <div className='mt-3 mb-3 d-flex justify-content-center'>
                 <Button className='expertise-btn'>Get started</Button>
            </div>
            

    </div>
  )
}

export default Expertise
import React from 'react'
import './Home.css';
import { Button, Col, Row } from 'react-bootstrap';
function Home() {
  return (
    <div className='home-div1 '>
    <div className='container'>
        <div className='text-container'>
            <p className='home-p'>Elevate <span style={{color:'blue'}}>Real Estate Success with</span> </p>
            <p className='home-p'>Osumare's Digital Expertise</p>
        </div>    

        <p className='home-p1'>Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>

        <div className='d-flex justify-content-center'>
            <Button className='home-btn1'>Get started</Button>
        </div>
        
        <div className='home-img1'>
            <img src='\Images\HomeImg.png' alt='homeimg' className='home-img11'/>
        </div>
        <div>
            <p className='commantitle'>Real Estate-Focused Digital Mastery</p>
            <Row className='home-row1'>
                <Col md={5} xs={12}>
                    <img className='img' src='\Images\home-img2.png' alt='homeimg'/>
                </Col>
                <Col md={7} xs={12}>
                    <p className='home-p11'>Unlock the Potential of Digital Real Estate Excellence</p>
                    
                    <p className='home-p2'>At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the
                         intricacies of property marketing. Our range of specialized services 
                        is meticulously designed to catapult your brand's success in the ever-evolving digital property market.</p>
                       <div className='home-btn22'>
                            <Button className='home-btn2'>Get started</Button>
                       </div>     
                </Col>
            </Row>
        </div>
    </div>
    </div>
  )
}

export default Home
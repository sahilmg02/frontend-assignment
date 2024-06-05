import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Partner.css';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


function Partner() {
  return (
    <div className='partner-div1 container'>
        <div>
                <p className='commantitle'> What Our Pharma Partners Say  </p>
                <p className='p4 commanp'>Driving Transformations, One Brand at a Time</p>
        </div>
        <div className='container d-flex justify-content-center align-item-center'>
        <div className='partner-card card shadow '>
            <Row>
                <Col xs={12} md={8} className='partner-col1'>
                    <img src='Images/Tabish.png' alt='partner' className='partner-main'/>
                    <img src='Images/play.png' alt='partner' className='play'/>

                </Col>
                <Col xs={12} md={4} className='partner-col2'>
                    <Row className='partner-row'>
                        <Col xs={2} md={2}>
                            <img src='Images/Tabish 1.png' alt='partner' className='partner-logo'/>
                        </Col>
                        <Col xs={8} md={8}> 
                           <p className='name'>Tabish khan</p>
                        </Col>
                        <Col xs={2} md={2}>
                             <img src='Images/Symbol.png' alt='symbol' className='quote'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='partner-p mt-3'>Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        </div>
        <div className='d-flex justify-content-center'>
             <FaArrowLeft className='arrow me-4'/>
             <FaArrowRight className='arrow'/>
        </div>
    </div>
  )
}

export default Partner
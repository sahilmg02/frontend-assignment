import React from 'react'
import './Digital.css';
import { Card, Col, Row } from 'react-bootstrap';
function Digital() {
  return (
    <div className='container digital-div1'>
        <div>
            <p className='commantitle'>Navigating Real Estate's Digital Landscape</p>
            <p className='commanp'>Insights for Real Estate Marketing Adventure</p>
        </div>
        <div>
            <Row className='digital-row1'>
                <Col md={5} xs={12} className='digital-col1'>
                    <Row className='digital-row11'>
                        <Col>
                            <div className='card2 card'>
                                <Row className='digital-row'>
                                    <Col md={1} xs={1}>
                                        <img src='Images/serviceicon/bard-fill.png' className='card2img'/>
                                    </Col>
                                    <Col md={11} xs={11}>
                                        <p className='card2-p1'>Market Trends Analysis </p>
                                        <p className='card2-p'>Predictive insights to guide real estate strategies.</p>
                                    </Col>
                                </Row>
                            </div>
                         </Col>   
                    </Row>
                    <Row className='digital-row11 mb-3'>
                        <Col>
                            <div className='card2 card'>
                                <Row className='digital-row'>
                                    <Col md={1} xs={1}>
                                        <img src='Images/serviceicon/flashlight-fill.png' className='card2img'/>
                                    </Col>
                                    <Col md={11} xs={11}>
                                        <p className='card2-p1'>Targeted Buyer Persona </p>
                                        <p className='card2-p'>Understand and connect with your ideal property buyers.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>    
                    </Row>
                    <Row className='digital-row11 mb-3'>
                        <Col>
                            <div className='card2 card'>
                                <Row className='digital-row'>
                                    <Col md={1} xs={1}>
                                        <img src='Images/serviceicon/shield-check-fill.png' className='card2img'/>
                                    </Col>
                                    <Col md={11} xs={11}>
                                        <p className='card2-p1'>Competitor Insights</p>
                                        <p className='card2-p'>Stand out in the property market with informed strategies.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>    
                    </Row>
                    <Row className='digital-row11 mb-3'>
                        <Col>
                            <div className='card2 card'>
                                <Row className='digital-row'>
                                    <Col md={1} xs={1}>
                                        <img src='Images/serviceicon/phone-find-fill.png' className='card2img'/>
                                    </Col>
                                    <Col md={11} xs={11}>
                                        <p className='card2-p1'>Visual Content Appeal</p>
                                        <p className='card2-p'>Captivate buyers with appealing visuals and immersive experiences.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>    
                    </Row>
                </Col>
                <Col md={7} className='digital-img1'>
                    <img src='Images/digital.png' className='digital-img'/>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Digital


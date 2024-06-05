import React from 'react'
import './Contact.css';
import { Row,Col,Button,Form } from 'react-bootstrap';

function Contact() {
  return (
    <div className='contact-div1 container '>
        <div>
                <p className='commantitle'>Connect with Our Digital Marketing Experts</p>
                <p className='p2 commanp'>Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together</p>
        </div>
        
        <div className='container d-flex justify-content-center align-item-center'>
                 <div className='contact-card card shadow '>
                        <Row>
                            <Col md={6} xs={12}>
                                <Form.Group as={Col}  className='mb-3'>
                                    <Form.Label className='formlabel'>First name</Form.Label>
                                        <Form.Control className='textfield' type="text" placeholder="Enter your name" />
                                </Form.Group>
                                <Form.Group as={Col} className='mb-3'>
                                    <Form.Label className='formlabel'>Phone</Form.Label>
                                        <Form.Control className='textfield' type="text" placeholder="Enter your Phone" />
                                </Form.Group>
                                <Form.Group as={Col}  className='mb-3'>
                                    <Form.Label className='formlabel'>Email</Form.Label>
                                        <Form.Control className='textfield' type="text" placeholder="Enter your Email" />
                                </Form.Group>
                            </Col>
                            <Col md={6} xs={12}>
                                <Form.Group as={Col}>
                                    <Form.Label className='formlabel'>Message</Form.Label>
                                        <Form.Control className='textfield2' type="text" placeholder="Enter your message"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className='mt-3 mb-3 d-flex justify-content-center'>
                            <Button className='contact-btn'>Get started</Button>
                        </div>
                 </div>
            </div>
    </div>
  )
}

export default Contact
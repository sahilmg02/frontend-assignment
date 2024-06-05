import React from 'react'
import './Questions.css';
import { Row } from 'react-bootstrap';
function Questions() {
  return (
    <div className='que-div'>
    <div className='question-div1 container'>
           <div>
                <p className='commantitle'>Frequently Asked Questions</p>
                <p className='p3 commanp'>Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.</p>
            </div>

            <div className='container d-flex justify-content-center align-item-center'>
                 <div className='questions-card card shadow '>
                        <Row>
                            <p className='question1'>3. How does Osumare measure campaign success?</p>
                        </Row>
                        <Row>
                            <p className='question2'>3. How does Osumare measure campaign success?</p>
                        </Row>
                        <Row className='questions-row3'>
                            <p className='question3 shadow'>3. How does Osumare measure campaign success?</p>
                            <p className='answer'>We believe in measurable results. Our data-driven approach means that every campaign's performance 
                                is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics,
                                 giving you clear insights into how our strategies are driving growth for your brand.</p>
                        </Row>
                 </div>
            </div>        
    </div>
    </div>
  )
}

export default Questions
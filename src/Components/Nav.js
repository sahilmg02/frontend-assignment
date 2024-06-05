import {Container,Navbar,Button} from 'react-bootstrap';
import React from 'react'
import './Nav.css';

function Nav() {
  return (
    <div>
    <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img className='nav-logo' src='Images/Logo.png' alt='osumarelogo'/>
            </Navbar.Brand>

            <div className='ms-auto'>
                <Button className='nav-btn'>Contact us</Button> 
            </div>
        </Container>
    </Navbar>
    </div>
  )
}

export default Nav
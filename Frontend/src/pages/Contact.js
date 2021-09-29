import React from 'react'
import { Container, Row, Col } from "reactstrap";
import "./contact.css";
import googleMap from "../img/googlemap.jpg"
import address from "../img/address.svg"
import phone from "../img/phone.svg"
import email from "../img/email.svg"
import Website from "../img/website.svg"

function Contact() {
    return (
        
       <Container className="contact"  fluid>
            <Row className="row p-0" xs={1} md={2}>
            <Col className="col2 "><img src= {googleMap} alt="googleMap"/>
             
            </Col>

                <Col className="col1 p-4">
                <h2>Contact information</h2>
                    <p>contact us if you have any problem or question</p>
                    <ul>
                        <li><img  src={address} alt="address"/><span>Address:</span> 23214 Hamburg, city center str 2</li>
                        <li><img  src={phone} alt="phone"/><span>Phone:</span> +162 2342 87</li>
                        <li><img  src={email} alt="email"/><span>Email:</span> foodOrder@gmail.com</li>
                        <li><img  src={Website} alt="website"/><span>Website:</span> foodOrder.com</li>
                    </ul>
                   
                </Col>
                
            </Row>

  
        </Container>
    )
}

export default Contact

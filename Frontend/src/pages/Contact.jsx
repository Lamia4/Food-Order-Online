import React from 'react';
import {MapContainer, TileLayer} from "react-leaflet"

import { Container, Row, Col, List, ListInlineItem} from "reactstrap";
import "./contact.css";
import googlemap from "../img/map.svg"
import address from "../img/address.svg"
import phone from "../img/phone.svg"
import email from "../img/email.svg"
import Website from "../img/website.svg";



const DEFAULT_LATITUDE = 52.520008;
const DEFUALT_LANGITUDE = 13.404954;

function Contact() {
    return (
        <div className="contact">


       <Container>
            <Row className="row p-0" xs={1} md={2}>

                <Col className="col2 p-4 col-lg-8">
                    <MapContainer center={[DEFAULT_LATITUDE, DEFUALT_LANGITUDE]} zoom={12}>
                        <TileLayer 
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        ></TileLayer>
                    </MapContainer> 
                </Col>

                <Col className="col1  col-lg-4">
                <h2>Contact information</h2>
                    <p>contact us if you have any problem or question</p>
                    <List>
                        <ListInlineItem><img  src={address}/><span>Address:</span> <a href="https://www.google.com/maps/place/%D9%87%D8%A7%D9%85%D8%A8%D9%88%D8%B1%D8%BA%E2%80%AD/@53.5582447,10.207998,10z/data=!3m1!4b1!4m5!3m4!1s0x47b161837e1813b9:0x4263df27bd63aa0!8m2!3d53.5510846!4d9.9936819">23214 Berlin, city center str 2</a></ListInlineItem>
                        <ListInlineItem><img  src={phone}/><span>Phone:</span> +162 2342 87</ListInlineItem>
                        <ListInlineItem><img  src={email}/><span>Email:</span> foodOrder@gmail.com</ListInlineItem>
                        <ListInlineItem><img  src={Website}/><span>Website:</span> foodOrder.com</ListInlineItem>
                    </List>
                   
                </Col>
                
            </Row>
        </Container>
        </div>
    )
}

export default Contact

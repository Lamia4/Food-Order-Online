import React from 'react'
import { Row,Col, ListGroup, ListGroupItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";

function Footer() {
    return (
            <div className="footerDiv d-flex justify-content-space-between">
                <Row className="footerRow " >
                    <Col md={4} lg={4}  className="columnCenter" >
                    <ListGroup className="listGroupItems ">
                        <h3  className="listFooterItem footerTitle ">Information</h3>
                        <ListGroupItem className="listFooterItem" tag="a" href="https://www.instagram.com/" target="_blank" >Privacy & Terms</ListGroupItem>
                        <ListGroupItem className="listFooterItem" tag="a" href="#" >Terms of Service</ListGroupItem>
                        <ListGroupItem className="listFooterItem" tag="a" href="#" >FAQs</ListGroupItem>
                    </ListGroup>
                    </Col>
                    <Col md={4} lg={4} className="columnCenter" >
                    <ListGroup className=" listGroupItems footerTitle">
                        <h3 className="listFooterItem ">Services</h3>
                        <ListGroupItem  className="listFooterItem"  tag="a" href="#" >Best Service</ListGroupItem>
                        <ListGroupItem  className="listFooterItem" tag="a" href="#" >Safe Payment</ListGroupItem>
                       
                    </ListGroup>
                    </Col>
                   
                    <Col md={4}lg={4} className="columnCenter iconsRow">
                    <ListGroup className="listGroupItems">
                        <h3 className="listFooterItem footerTitle"> Social</h3>
                        <ListGroupItem  className="listFooterItem" tag="a" href="https://de-de.facebook.com/" ><i class="fab fa-facebook-f footerIcons"></i>Facebook</ListGroupItem>
                        <ListGroupItem  className="listFooterItem" tag="a" href="https://www.instagram.com/" ><i class="fab fa-instagram footerIcons"></i>Instagram</ListGroupItem>
                        <ListGroupItem  className="listFooterItem" tag="a" href="https://twitter.com/" ><i class="fab fa-twitter footerIcons"></i>Twitter</ListGroupItem>
                       
                    </ListGroup>
                    </Col>
                 
                    
                </Row>
            </div>
           
      
    )
}

export default Footer

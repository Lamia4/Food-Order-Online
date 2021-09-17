import React from 'react';
import { Row, Col, Card } from "react-bootstrap";


function Categories() {
    return (
        <div>
           <div className="container">
                <Row xs={1} sm={3} md={4} xl={5} className="g-4 align-items-center justify-content-md-center">
                    <Col  className="m-3">
                        <Card style={{ "width":"250px", "height":"500px"}}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">item.owner.login</Card.Subtitle>
                            <Card.Title>item.name</Card.Title>
                            <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                            </Card.Text>
                            <Card.Text className="text-right" style={{"fontSize":"12px"}}>
                        item.watchers
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    
                
                </Row>
            </div>
        </div>
    )
}

export default Categories;

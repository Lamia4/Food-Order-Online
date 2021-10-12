import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardImg, CardTitle, CardText, Button, CardBody} from 'reactstrap';
import { Carousel } from 'react-bootstrap';
import './About.css';
function About() {
    return (
        <div className="about">

            <div className="aboutBack">

            <Container className="aboutContainer">
                <h1 className="team">Our Team</h1> 

            <Row className="RowAbout">

            <Col className="col-lg-4 col-md-4 col-12">
            <Card className="picstyle"> 
                <CardImg src="https://media-exp1.licdn.com/dms/image/D4D35AQFlpX4L2af6dA/profile-framedphoto-shrink_200_200/0/1626249002718?e=1634090400&v=beta&t=hDzLMmV8mVH3QRIhJMKiKCO_iLnnsaPPv8-Axl7gq_4"
                    alt="" className="rounded-circle shadow-lg CardImg " style={{width: "180px", height: "180px", backgroundColor: '#333', borderColor: '#333' }}/>

                <CardBody>
                <CardTitle className="h3">Lamia</CardTitle>

                <CardText>Hi there, I'm Lamia, Ich bin ein Web-developer und befinde mich derzeit in einer 1-jährigen Vollzeit Ausbildung im Bereich Fullstack Webentwicklung.</CardText>

                    <Button href="https://www.linkedin.com/in/g%C3%BClsah-lamia-elmas-54b329177/" className="btn btn-secondary buttonstyle">View on <i className="bi bi-github"></i></Button>

                </CardBody>

                </Card>

            </Col>


            <Col className="col-lg-4 col-md-4 col-12">
            <Card className="picstyle"> 
                <CardImg src="https://avatars.githubusercontent.com/u/72548900?v=4"
                    alt="" className="rounded-circle shadow-lg CardImg " style={{width: "180px", height: "180px", backgroundColor: '#333', borderColor: '#333' }}/>

                <CardBody>
                <CardTitle className="h3">Zeynep</CardTitle>

                <CardText>Hi there, I'm Zeynep, Ich bin ein Web-developer und befinde mich derzeit in einer 1-jährigen Vollzeit Ausbildung im Bereich Fullstack Webentwicklung.</CardText>

                    <Button href="https://www.linkedin.com/in/zeynep-gultekin/" className="btn btn-secondary buttonstyle">View on <i className="bi bi-github"></i></Button>

                </CardBody>

                </Card>

            </Col>




            <Col className="col-lg-4 col-md-4 col-12">
            <Card className="picstyle"> 
                <CardImg src="https://avatars.githubusercontent.com/u/74236959?v=4"
                    alt="" className="rounded-circle shadow-lg CardImg " style={{width: "180px", height: "180px", backgroundColor: '#333', borderColor: '#333' }}/>

                <CardBody>
                <CardTitle className="h3">Ahmad</CardTitle>

                <CardText>Hi there, I'm Ahmad, Ich bin ein Web-developer und befinde mich derzeit in einer 1-jährigen Vollzeit Ausbildung im Bereich Fullstack Webentwicklung.</CardText>

                    <Button href="https://www.linkedin.com/in/ahmad-hasan-229603217/" className="btn btn-secondary buttonstyle">View on <i className="bi bi-github"></i></Button>

                </CardBody>

                </Card>

            </Col>

            </Row>
        </Container>

            </div>

        

       

       

        </div>
    )
}
export default About
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import './About.css';
function About() {
    return (
        <div className="about">
        <Container>
            <h1 className="team">Our Team</h1>
            <div className="dciLogo">
            <img src="https://cdn.join.com/5e32e16223847f000181564c/dci-digital-career-institute-logo-xl.png"
                    alt="" className="rounded-circle shadow-lg" style={{width: "160px", height: "160px"}}/>
           <h2 className="dci">Digital Career Institute</h2> 
           </div>
            <p className='aboutDci' >The Digital Career Institute was born as an initiative to integrate refugees into digital jobs. Today it is committed to train anyone who wants to pursue a tech career.
            <br />
            <b>Passion:  </b>
            We're driven by a passionate belief in the work we do. This passion can be found in our classrooms, our office and in the work of our students. We're proud to have created a buzzing environment driven by a sense of purpose and dedication.</p>
            <Row>
           
            <Col className="col-lg-4 col-md-4 col-12">
            <div className="picstyle"> 
                <img src="https://avatars.githubusercontent.com/u/74236959?v=4"
                    alt="" className="rounded-circle shadow-lg" style={{width: "130px", height: "130px"}}/>
                <h3>Ahmad</h3>
                </div>
                <p>Hi there, I'm Ahmad, Ich bin ein Web-developer und befinde mich derzeit in einer 1-jährigen Vollzeit Ausbildung im Bereich Fullstack Webentwicklung.</p>
                <p className="buttonstyle">
                    <a href="https://github.com/ahmadaflak8" className="btn btn-secondary">View on <i className="bi bi-github"></i></a>
                </p>
            </Col>
            <Col className="col-lg-4 col-md-4 col-12">
            <div className="picstyle"> 
                <img src="https://avatars.githubusercontent.com/u/68332300?v=4"
                    alt="" className="rounded-circle shadow-lg" style={{width: "130px", height: "130px"}}/>
                <h3>Lamia</h3>
                </div>
                <p>Hi there, I'm Lamia, Ich bin ein Web-developer und befinde mich derzeit in einer 1-jährigen Vollzeit Ausbildung im Bereich Fullstack Webentwicklung.</p>
                <p className="buttonstyle">
                    <a href="https://github.com/Lamia4" className="btn btn-secondary">View on <i className="bi bi-github"></i></a>
                </p>
            </Col>

            <Col className="col-lg-4 col-md-4 col-12">
            <div className="picstyle"> 
                <img src="https://avatars.githubusercontent.com/u/72548900?v=4"
                    alt="" className="rounded-circle shadow-lg" style={{width: "130px", height: "130px"}}/>
                <h3>Zeynep</h3>
                </div>
                <p>Hi there, I'm Zeynep, Ich bin ein Web-developer und befinde mich derzeit in einer 1-jährigen Vollzeit Ausbildung im Bereich Fullstack Webentwicklung.</p>
                <p className="buttonstyle">
                    <a href="https://github.com/ZeynepGultekin" className="btn btn-secondary">View on <i className="bi bi-github"></i></a>
                </p>
            </Col>
            </Row>
            <Row>
            
            
            </Row>
        </Container>

        </div>
    )
}
export default About
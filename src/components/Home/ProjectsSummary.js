import React, {useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import previewProjects from '../../Assets/previewProjects.png'
import Tilt from 'react-parallax-tilt'
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";
import {ImPointRight} from "react-icons/im";

function AboutSummary() {

    return (

    <Container fluid className='home-projects-summary-section' id='projects-summary'>
        <Container>
            <Row>
                <Col md={8} className='home-projects-summary-description'>
                    <h1 style={{fontSize: '2.6em'}}>
                        MY <span className='purple'> PROJECTS </span>
                    </h1>
                    <p className='home-about-summary-body'>
                        Here you can find some of my <span className='purple'> recent projects </span> and some old ones. I'm always looking for <span className='purple'> new challenges </span> and new projects to work on. <br/>
                        Some of them are: <br/> <br/>
                        <ImPointRight/> A Steampunk Game <br/>
                        <ImPointRight/> A Tip Calculator <br/>
                        <ImPointRight/> A few Minecraft Mods
                    </p>
                    <Nav.Link as={Link} to='/project' className='link'>
                        <AiOutlineFundProjectionScreen style={{marginBottom: '2px'}}/> See my projects
                    </Nav.Link>
                </Col>
                <Col md={4} className='previewProjects'>
                        <Tilt>
                            <img src={previewProjects} className='img-fluid' alt='previewProjects'/>
                        </Tilt>
                </Col>
            </Row>
        </Container>
    </Container>
    )
}
export default AboutSummary
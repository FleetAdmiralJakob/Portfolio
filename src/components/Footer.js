import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {AiFillGithub,} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <Container fluid className='footer'>
            <Row>
                <Col md='4' className='footer-copyright'>
                    <h3>Designed and Developed with <div className='text-red-500 px-2 text-2xl'>&#10084;</div> by Jakob
                        Rössner
                    </h3>
                </Col>
                <Col md='4' className='footer-copyright'>
                    <h3>Copyright © {year} JR</h3>
                </Col>
                <Col md='4' className='footer-body'>
                    <ul className='footer-icons'>
                        <li className='social-icons'>
                            <a
                                href='https://github.com/FleetAdmiralJakob'
                                style={{color: 'white'}}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <AiFillGithub/>
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a
                                href='https://www.linkedin.com/in/jakob-r%C3%B6ssner-532b93214/'
                                style={{color: 'white'}}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FaLinkedinIn/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer

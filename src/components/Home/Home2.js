import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import myImg from '../../Assets/avatar2.png'
import Tilt from 'react-parallax-tilt'
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Home2() {
    return (
        <Container fluid className='home-about-section' id='about'>
            <Container>
                <Row>
                    <Col md={8} className='home-about-description'>
                        <h1 style={{fontSize: '2.6em'}}>
                            LET ME <span className='purple'> INTRODUCE </span> MYSELF
                        </h1>
                        <p className='home-about-body'>
                            I fell in love with programming and I have at least learnt
                            something, I think… 🤷‍♂️
                            <br/>
                            <br/>I am fluent in classics like
                            <i>
                                <b className='purple'> Java, Javascript, Kotlin, C#. </b>
                            </i>
                            <br/>
                            <br/>
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className='purple'>Web Technologies and Products </b> and
                                also in areas related to{' '}
                                <b className='purple'>
                                    Deep Learning and Natural Language Processing &nbsp;
                                </b>
                                or <b className='purple'> Game Development. </b>
                            </i>
                            <br/>
                            <br/>
                            Whenever possible, I also apply my passion for developing products
                            with <b className='purple'>Node.js</b> and
                            <i>
                                <b className='purple'>
                                    {' '}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className='purple'> React.js and Next.js.</b>
                            </i>
                            <br/>
                            <br/>
                            Still I'm learning new things in Mobile Development with <b className='purple'> Java and
                            Kotlin. </b>
                        </p>
                    </Col>
                    <Col md={4} className='myAvtar'>
                        <Tilt>
                            <img src={myImg} className='img-fluid' alt='avatar'/>
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='home-about-social'>
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className='purple'>connect </span>with me
                        </p>
                        <h2>
              <span className='point' role='img' aria-labelledby='wave'>
                👇
              </span>
                        </h2>
                        <ul className='home-about-social-links'>
                            <li className='social-icons'>
                                <a
                                    href='https://github.com/FleetAdmiralJakob'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour  home-social-icons'
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className='social-icons'>
                                <a
                                    href='https://www.linkedin.com/in/jakob-r%C3%B6ssner-532b93214/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour  home-social-icons'
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Home2

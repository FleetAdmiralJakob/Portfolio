import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import steampunk from '../../Assets/Projects/steampunk.png'
import biggernumber from '../../Assets/Projects/biggernumber.png'

function Projects () {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={steampunk}
              isBlog={false}
              title='A Steampunk Game'
              description='A small game created by me with Javascript, CSS and HTML'
              ghLink='https://github.com/FleetAdmiralJakob/Steampunk-Game'
              demoLink='http://steampunk-game.me/Steampunk-Game/'
            />
            </Col>
            <Col md={4} className='project-card'>
            <ProjectCard
                imgPath={biggernumber}
                isBlog={false}
                title='Bigger Number Game'
                description='A simple Android app to demonstrate the use of Kotlin in Android development. The user is presented 2 numbers on buttons- depending on if the larger number was clicked, the background color will change.'
                ghLink='https://github.com/FleetAdmiralJakob/Bigger-Number-Game'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects

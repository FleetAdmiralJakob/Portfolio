import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import steampunk from '../../Assets/Projects/steampunk.png'
import biggernumber from '../../Assets/Projects/biggernumber.png'
import tippy from '../../Assets/Projects/tippy2.png'
import curseforge from '../../Assets/Projects/curseforge.png'

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
              description='A simple Android app to demonstrate the use of Kotlin in Android app development. The user are presented 2 numbers on buttons- depending on if the larger number was clicked, the background color will change.'
              ghLink='https://github.com/FleetAdmiralJakob/Bigger-Number-Game'
              downloadLink='https://github.com/FleetAdmiralJakob/Bigger-Number-Game/releases'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={tippy}
              isBlog={false}
              title='Tippy'
              description='A tip calculator (for Android)!'
              ghLink='https://github.com/FleetAdmiralJakob/Tippy'
              downloadLink='https://github.com/FleetAdmiralJakob/Tippy/releases'
            />
          </Col>
        </Row>
        <h1 className='project-heading'>
          Other <strong className='purple'>Projects </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are some other projects.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={curseforge}
              isBlog={false}
              title='Minecraft mods by mine!'
              description='On the site curseforge.com you can find some of my first projects. 2 years ago I built some Minecraft Mods in Java! Sometimes I update them to maintain my skills.'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects

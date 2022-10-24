import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  DiJavascript1,
  DiReact,
  DiNpm,
  DiGit,
  DiJava,
  DiGithub,
  DiWordpress
} from 'react-icons/di'
import {
  SiCsharp,
  SiKotlin,
  SiNextdotjs,
  SiMarkdown
} from 'react-icons/si'

function Techstack () {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNpm />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJava />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGithub />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiKotlin />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiWordpress />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiMarkdown />
      </Col>
    </Row>
  )
}

export default Techstack

import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard () {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Jakob Felix Eugen Rössner </span>
            from <span className='purple'> Berlin, Germany.</span>
            <br />I am a student at the <span className='purple'>Friedrich-Schiller-Gymnasium.</span>
            <br />
            <br />
            Apart from coding, these are some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Playing Games
            </li>
            <li className='about-activity'>
              <ImPointRight /> Play Hockey
            </li>
            <li className='about-activity'>
              <ImPointRight /> Traveling
            </li>
            <li className='about-activity'>
              <ImPointRight /> Reading Books
            </li>
            <li className='about-activity'>
              <ImPointRight /> Play Piano and Organ
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className='blockquote-footer'>Jakob</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard

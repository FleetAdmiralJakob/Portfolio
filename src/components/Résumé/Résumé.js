import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Particle from '../Particle'
import pdf_de from '../../Assets/../Assets/Résumé_de_Jakob_Rössner.pdf'
import pdf_en from '../../Assets/../Assets/Résumé_en_Jakob_Rössner.pdf'
import { AiOutlineDownload } from 'react-icons/ai'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink_de =
    'https://raw.githubusercontent.com/FleetAdmiralJakob/Portfolio/85d231d60b5ae306c3cffab2314eabed2f4eaac4/src/Assets/R%C3%A9sum%C3%A9_de.pdf'
const resumeLink_en =
    'https://raw.githubusercontent.com/FleetAdmiralJakob/Portfolio/85d231d60b5ae306c3cffab2314eabed2f4eaac4/src/Assets/R%C3%A9sum%C3%A9_en.pdf'

function ResumeNew () {
  const [width, setWidth] = useState(1200)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <div>
      <Container fluid className='resume-section'>
        <Particle />

        <Row className='resume'>
          <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
            German <strong className='purple'>Résumé</strong>
          </h1>
          <Document file={resumeLink_de} className='d-flex justify-content-center'>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant='primary'
            href={pdf_de}
            target='_blank'
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
                        &nbsp;Download PDF
          </Button>
        </Row>


        <Row className='resume'>
          <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
            English <strong className='purple'>Résumé</strong>
          </h1>
          <Document file={resumeLink_en} className='d-flex justify-content-center'>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant='primary'
            href={pdf_en}
            target='_blank'
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
                        &nbsp;Download PDF
          </Button>
        </Row>
      </Container>
    </div>
  )
}

export default ResumeNew

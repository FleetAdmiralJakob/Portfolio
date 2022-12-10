import React, {useEffect, useState} from 'react'
import {Container, Row} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
// @ts-ignore
import pdf_de from '../../Assets/../Assets/Résumé_de_Jakob_Rössner.pdf'
// @ts-ignore
import pdf_en from '../../Assets/../Assets/Résumé_en_Jakob_Rössner.pdf'
import {AiOutlineDownload} from 'react-icons/ai'
import {Document, Page, pdfjs} from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import loadable from '@loadable/component'

const Particle = loadable(() => import('../Particle'))

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const resumeLink_de =
    'https://raw.githubusercontent.com/FleetAdmiralJakob/Portfolio/e0299f2368df3da62cdc8707c7fb63713083cc34/src/Assets/R%C3%A9sum%C3%A9_de_Jakob_R%C3%B6ssner.pdf'
const resumeLink_en =
    'https://raw.githubusercontent.com/FleetAdmiralJakob/Portfolio/e0299f2368df3da62cdc8707c7fb63713083cc34/src/Assets/R%C3%A9sum%C3%A9_en_Jakob_R%C3%B6ssner.pdf'

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
            <Page className="resume-document" pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
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
            <Page className="resume-document" pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
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

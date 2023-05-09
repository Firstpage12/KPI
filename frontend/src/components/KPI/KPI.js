import React from 'react'
import { Container,Form } from 'react-bootstrap'
import Progess from '../KpiBar/Progess'
import './KPI.css'
const KPI = (props) => {
  const {formData} = props
  return (
    <Container>
      <Form className='my-form'>
      <Progess formData={formData}/>

      </Form>
    </Container>
    
  )
}

export default KPI
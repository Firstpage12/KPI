import React, {useState} from 'react'
import { Nav, Navbar,ProgressBar } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './KpiBar.css'
const KpiBar = () => {
  
  return (
    <>
    
    <Navbar bg="light" expand="lg">
      
      <Navbar.Toggle  />
      <Navbar.Collapse>
        <Nav className="mx-auto">
          <Nav.Link className='nav'as={Link} to="/KPI1">KPI1</Nav.Link>
          <Nav.Link className='nav' as={Link} to="/KPI2"  >KPI2</Nav.Link>
          <Nav.Link className='nav' as={Link} to="/KPI3" >KPI3</Nav.Link>
          <Nav.Link className='nav' as={Link} to="/KPI4">KPI4</Nav.Link>
          <Nav.Link className='nav' as={Link} to="/KPI5" >KPI5</Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    </>

   
  )
}

export default KpiBar
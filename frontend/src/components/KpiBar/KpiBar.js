import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './KpiBar.css'
const KpiBar = () => {
  return (
    <Navbar bg="light" expand="lg" className='fill'>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link className='nav'as={Link} to="/KPI1" exact activeClassName="active">KPI1</Nav.Link>
          <Nav.Link className='nav' as={Link} to="/KPI2"  activeClassName="active">KPI2</Nav.Link>
          <Nav.Link className='nav' as={Link} to="/KPI3" exact activeClassName="active">KPI2</Nav.Link>
          <Nav.Link className='nav' as={Link} to="/KPI4" exact activeClassName="active">KPI4</Nav.Link>
          <Nav.Link className='nav' as={Link} to="/KPI5" exact activeClassName="active">KPI5</Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>

   
  )
}

export default KpiBar
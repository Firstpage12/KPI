import React from 'react';

import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';




const Header = () => {

    

    return (
        <Navbar expand="sm" >
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ">
                    
                    
                    
                        
                            <NavDropdown title="KPI" id='adminmenu'>
                                <LinkContainer to='/KPI1'>
                                    <NavDropdown.Item>KPI1</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/Home'>
                                    <NavDropdown.Item>KPI2</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/KPI3'>
                                    <NavDropdown.Item>KPI3</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header

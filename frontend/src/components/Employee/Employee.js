import React from 'react'
import { useNavigate } from "react-router-dom";
import {
    Form,
    Button,
    Dropdown,
    DropdownButton,

    Row,
    Col,
    Container,
} from 'react-bootstrap'


const Employee = () => {
    const navigate = useNavigate();
  return (
    <Form>
        <Row>
                    <Col md={5}>
                    
                            
                        
                        <Form.Group controlId='name'>
                           
                            <Form.Label>Name <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                            
                                required
                                
                            ></Form.Control><br/>
                             <Form.Label>Employee Code<span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Employee Code"
                            
                                required
                                
                            ></Form.Control><br/>
                        </Form.Group >
                        <Button onClick={() => navigate("/KPI1")}>Start KPI </Button>
                        </Col>
                        </Row>
                        

    </Form>
  )
}

export default Employee
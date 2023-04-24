import React, { useState, useEffect } from 'react'
import './KPI.css'
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
import KpiBar from '../KpiBar/KpiBar';




const KPI1 = () => {
    const navigate = useNavigate();
    const [value,setValue]=useState('select ');
    const [value2,setValue2]=useState('select ');
    const [value3,setValue3]=useState('select ');
    const [sum, setSum] = useState(0);
    const [r1,setr1] = useState("")
    const [r2,setr2] = useState("")
    const [r3,setr3] = useState("")
    const[rating,setRating]=useState('')
    
    const handleSelect=(e)=>{
        console.log(e);
        setValue(e);
       
    }
    const handleSelect2=(e)=>{
        console.log(e);
        setValue2(e);
       
    }
    const handleSelect3=(e)=>{
        console.log(e);
        setValue3(e);
       
    }
    const handleChange = (event, setter) => {
        setter(event.target.value);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        const fr1 = parseFloat(r1);
        const fr2 = parseFloat(r2);
        const fr3 = parseFloat(r3);
        const rating = (0.5*fr1)+(0.2*fr2)+(0.15*fr3)+(0.15*sum)
        setRating(rating.toFixed(2)); // round to 2 decimal places
      };
    

  const handleInputChange = (event) => {
    const input = event.target.value;
    let newSum = 0;
    if (!isNaN(input)) { // check if the input is a number
      newSum = Number(input) + sum;
    }
    setSum(newSum);
  };

  return (
    <>
    <KpiBar/>
    
    
    
        <Container>
            <div className='header'><h1>KPI -1 DELIVERY/REMOTE PROJECT</h1></div>
            
            
            <Form className='my-form' onSubmit={handleSubmit}>
                
                

                <Row>
                    <Col md={5}>
                    
                            
                        
                        <Form.Group controlId='project'>
                           
                            <Form.Label>No. of Projects <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="project"
                                placeholder="Project"
                            
                                required
                                
                            ></Form.Control><br/>
                        </Form.Group >
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                        <Form.Group className="my-form-group1"controlId='name'>
                        <Form.Label>Consultant </Form.Label><br/>
                            <Form.Label>Name <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter name"
                            
                                required
                                
                            ></Form.Control>
                            <Form.Label>Client <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="Client"
                                placeholder="Enter Client"
                            
                                required
                                
                            ></Form.Control>
                            <Form.Label>Title <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="title"
                                placeholder="Enter title"
                            
                                required
                                
                            ></Form.Control>
                            <Form.Label>Start Date <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Enter Date"
                            
                                required
                                
                            ></Form.Control><br/>
                        </Form.Group>
                        </Col>
                        <Col md={5}>
                        <Form.Group  className="my-form-group2" controlId='project'>
                            <Form.Label>Project Duration</Form.Label><br/>
                            <Form.Label>Duration<span style={{ color: 'red' }}>*</span></Form.Label>
                            <DropdownButton id="my-dropdown" title={value} onSelect={handleSelect}>
                            <Dropdown.Item eventKey="0::No Data Avaliable">0::No Data Available</Dropdown.Item>
                            <Dropdown.Item eventKey="1::less than 1  month">1::less than 1  month</Dropdown.Item>
                            <Dropdown.Item eventKey="2::1-2 months">2::1-2 months</Dropdown.Item>
                            <Dropdown.Item eventKey="3::2-3 months">3::2-3 Months</Dropdown.Item>
                            <Dropdown.Item eventKey="4::3-4 months">4::3-4 months</Dropdown.Item>
                            <Dropdown.Item eventKey="5::more than 5 months">5::more than 5 months</Dropdown.Item>

                         </DropdownButton>
                            <Form.Label>Rating<span style={{ color: 'red' }}>*</span></Form.Label>
                            <DropdownButton id="my-dropdown" title={value2} onSelect={handleSelect2}>
                            
                            <Dropdown.Item eventKey="1">1</Dropdown.Item>
                            <Dropdown.Item eventKey="2">2</Dropdown.Item>
                            <Dropdown.Item eventKey="3">3</Dropdown.Item>
                            <Dropdown.Item eventKey="4">4</Dropdown.Item>
                            <Dropdown.Item eventKey="5">5</Dropdown.Item>
                            </DropdownButton>

                            <Form.Label>Reason for Project End<span style={{ color: 'red' }}>*</span></Form.Label>
                            <DropdownButton id="my-dropdown" title={value3} onSelect={handleSelect3}>
                            <Dropdown.Item eventKey="0::Project ended or fired due to performance">0::Project ended or fired due to performance</Dropdown.Item>
                            <Dropdown.Item eventKey="1::Project ended due to budget">1::Project ended due to budget</Dropdown.Item>
                           
                            </DropdownButton>

                            <Form.Label>Final Rating<span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="number"
                                value={r1}
                                onChange={(e) => handleChange(e, setr1)}
                            
                                required
                                
                            ></Form.Control>

                        </Form.Group>
                       
                       
                       
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group className="my-form-group1"controlId='name'>
                        <Form.Label>PROJECT LEARNING </Form.Label><br/>
                            <Form.Label>Self Learning from project<span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                            
                                required
                                
                            ></Form.Control>
                            <Form.Label>Final Learning from Project<span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="number"
                                value={r2}
                                onChange={(e) => handleChange(e, setr2)}
                            
                                required
                                
                            ></Form.Control>
                           
                        </Form.Group>

                    </Col>
                    <Col>
                    <Form.Group className="my-form-group2"controlId='name'>
                        <Form.Label>SUPPORT TAKEN DURING PROJECT </Form.Label><br/>
                            <Form.Label>Amount of support taken<span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                            
                                required
                                
                            ></Form.Control>
                            <Form.Label>Final Support taken Rating<span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="number"
                                value={r3}
                                onChange={(e) => handleChange(e, setr3)}
                            
                                required
                                
                            ></Form.Control>
                           
                        </Form.Group>

                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group className="my-form-group1"controlId='name'>
                        <Form.Label>Project Complex</Form.Label><br/>
                        <Form.Label>Faced Audio/ Video Issue<span style={{ color: 'red' }}>*</span></Form.Label>
                            {/* <DropdownButton id="my-dropdown" title={value} onSelect={handleSelect}>
                            <Dropdown.Item eventKey="0">0</Dropdown.Item>
                            <Dropdown.Item eventKey="1">1</Dropdown.Item>
                            

                         </DropdownButton> */}
                          <Form.Control
                                type="text"
                                style={{ width: "200px" }}
                                onChange={handleInputChange} 
                            
                                required
                                
                            ></Form.Control>
                            <Form.Label>Faced Issues in getting remote access to client<span style={{ color: 'red' }}>*</span></Form.Label>
                            {/* <DropdownButton id="my-dropdown" title={value2} onSelect={handleSelect2}>
                            
                            <Dropdown.Item eventKey="0">0</Dropdown.Item>
                            <Dropdown.Item eventKey="1">1</Dropdown.Item>
                          
                            </DropdownButton> */}
                             <Form.Control
                                type="text"
                                style={{ width: "200px" }}
                                onChange={handleInputChange} 
                            
                                required
                                
                            ></Form.Control>

                            <Form.Label>Worked oncall/Support for more than 40+ hours <span style={{ color: 'red' }}>*</span></Form.Label>
                            {/* <DropdownButton id="my-dropdown" title={value3} onSelect={handleSelect3}>
                            <Dropdown.Item eventKey="0">0</Dropdown.Item>
                            <Dropdown.Item eventKey="1">1</Dropdown.Item>
                           
                            </DropdownButton> */}
                             <Form.Control
                                type="text"
                                style={{ width: "200px" }}
                                onChange={handleInputChange} 
                            
                                required
                                
                            ></Form.Control>

                            <Form.Label>Faced Issues in getting clear requirment from client<span style={{ color: 'red' }}>*</span></Form.Label>
                            {/* <DropdownButton id="my-dropdown" title="Select">
                            <Dropdown.Item eventKey="0">0</Dropdown.Item>
                            <Dropdown.Item eventKey="0">1</Dropdown.Item>
                            
                            </DropdownButton> */}
                             <Form.Control
                                type="text"
                                style={{ width: "200px" }}
                                onChange={handleInputChange} 
                            
                                required
                                
                            ></Form.Control>
                            <Form.Label>If less than 1.5 years experience client ask for hourly timesheet<span style={{ color: 'red' }}>*</span></Form.Label>
                            {/* <DropdownButton id="my-dropdown" title="Select">
                            <Dropdown.Item eventKey="0">0</Dropdown.Item>
                            <Dropdown.Item eventKey="0">1</Dropdown.Item>
                            
                            </DropdownButton> */}
                             <Form.Control
                                type="text"
                                style={{ width: "200px" }}
                                onChange={handleInputChange} 
                            
                                required
                                
                            ></Form.Control>

                            <Form.Label>Sum of all the extra Effort<span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                style={{ width: "200px" }}
                                value={sum} readOnly
                            
                                required
                                
                            ></Form.Control>
                            </Form.Group>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                            <Form.Group>
                            <Form.Label>Final Project Effort Rating<span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                style={{ width: "200px" }}
                                value={rating}
                            
                                
                                
                            ></Form.Control>
                       
                            
                        

                        </Form.Group>
                        </Col>
                        <Col>
                        <Button type="submit">Calculate Rating</Button> 
                        </Col>

                        
                       

                    
                   
                </Row>
                <Row>
                    <Col>
                    <Button  className='button' type='submit' onClick={() => navigate("/KPI2")}>Save and Next</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
        </>
  )
}

export default KPI1
















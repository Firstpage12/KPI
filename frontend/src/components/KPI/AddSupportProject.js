import React, { useState, useRef } from "react";
import "./KPI.css";

import { useNavigate, Link } from "react-router-dom";
import {
  Form,
  Button,
  Dropdown,
  DropdownButton,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import KpiBar from "../KpiBar/KpiBar";

import PreviewForm from "./PreviewForm";
import { formControlClasses } from "@mui/base";

const AddSupportProject = ({ setFormData }) => {
  const navigate = useNavigate();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    ProjectName: "",
    Name: "",
    Client: "",
    Title: "",
    StartDate: "",
    consultantss1: "",
    consultantss2: "",
    consultantts1: "",
    consultantts2: "",
    final: "",
    duration: "",
    fpr1: " ",
    learning: "",
    fpr2: " ",
    pc1: "",
    pc2: "",
    pc3: "",
    pc4: "",
    pc5: "",
    pc6: "",
    pc7: "",
  });
  const previewRef = useRef(null);

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormData((prevProjects) => [...prevProjects, formValues]);
    navigate("/KPI");
    // props.onSubmit(formValues)

    setFormSubmitted(true);
  };
  const handleScroll = () => {
    previewRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Container>
        <Form className="my-form" onSubmit={handleFormSubmit}>
          <Row>
            <Col md={5}>
              <Form.Group controlId="project">
                <Form.Label>
                  Name of the Project<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="project"
                  placeholder="Project"
                  name="ProjectName"
                  value={formValues.ProjectName}
                  onChange={handleChange}
                  required
                ></Form.Control>
                <br />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="my-form-group1" controlId="name">
                <Form.Label>
                  <h5>Consultant</h5>{" "}
                </Form.Label>
                <br />
                <Form.Label>
                  Name <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="name"
                  style={{ width: "250px" }}
                  placeholder="Enter name"
                  name="Name"
                  value={formValues.Name}
                  onChange={handleChange}
                  required
                ></Form.Control>
                <Form.Label>
                  Client <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="Client"
                  style={{ width: "250px" }}
                  placeholder="Enter Client"
                  name="Client"
                  value={formValues.Client}
                  onChange={handleChange}
                  required
                ></Form.Control>
                <Form.Label>
                  Title <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="title"
                  style={{ width: "250px" }}
                  placeholder="Enter title"
                  name="Title"
                  value={formValues.Title}
                  onChange={handleChange}
                  required
                ></Form.Control>
                <Form.Label>
                  Start Date <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="date"
                  style={{ width: "250px" }}
                  placeholder="Enter Date"
                  name="StartDate"
                  value={formValues.StartDate}
                  onChange={handleChange}
                  required
                ></Form.Control>
                <br />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="my-form-group2 " controlId="project">
                <Form.Label>
                  <h5>Project Improvement</h5>
                </Form.Label>
                <br />
                <Form.Label>
                  Consultant Soft Skills/Communication Level at start of Support
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  className="my-dropdown"
                  as="select"
                  name="consultantss1"
                  value={formValues.consultantss1}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="0::No Data Avaliable">
                    0::No Data Avaliable
                  </option>
                  <option value="1::Need help with day time meeting Client -0%">
                    1::Need help with day time meeting Client -0%
                  </option>
                  <option value="2::Need notes for client meeting.Client-25%">
                    2::Need notes for client meeting.Client-25%
                  </option>
                  <option value="3::Can manage Client with verbal guidance.Client-50%">
                    3::Can manage Client with verbal guidance.Client-50%
                  </option>
                  <option value="4::Able to get requirements with cross questioning-75%">
                    4::Able to get requirements with cross questioning-75%
                  </option>
                  <option value="5::Suggest solutions to client by own-100%">
                    5::Suggest solutions to client by own-100%
                  </option>
                </Form.Control>

                <Form.Label>
                  Consultant Soft Skills/Communication Level in last 1 week of
                  Support
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="select"
                  name="consultantss2"
                  value={formValues.consultantss2}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="0::No Data Avaliable">
                    0::No Data Avaliable
                  </option>
                  <option value="1::Need help with day time meeting Client -0%">
                    1::Need help with day time meeting Client -0%
                  </option>
                  <option value="2::Need notes for client meeting.Client-25%">
                    2::Need notes for client meeting.Client-25%
                  </option>
                  <option value="3::Can manage Client with verbal guidance.Client-50%">
                    3::Can manage Client with verbal guidance.Client-50%
                  </option>
                  <option value="4::Able to get requirements with cross questioning-75%">
                    4::Able to get requirements with cross questioning-75%
                  </option>
                  <option value="5::Suggest solutions to client by own-100%">
                    5::Suggest solutions to client by own-100%
                  </option>
                </Form.Control>
                <Form.Label>
                  Consultant Technical Skill Level in First 2 week of Support
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="select"
                  name="consultantts1"
                  value={formValues.consultantts1}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="0::No Data Avaliable">
                    0::No Data Avaliable
                  </option>
                  <option value="1 ::  Does not have any tech knowledge - Tech 0%">
                    1 :: Does not have any tech knowledge - Tech 0%
                  </option>
                  <option value="2 :: Has basic fundamental knowledge - Tech 25%">
                    2 :: Has basic fundamental knowledge - Tech 25%
                  </option>
                  <option value="3 :: Can understand code and able to navigate - Tech 50%">
                    3 :: Can understand code and able to navigate - Tech 50%
                  </option>
                  <option value="4 :: Can do repeated task and give  inputs on new tasks- Tech 75%">
                    4 :: Can do repeated task and give inputs on new tasks- Tech
                    75%
                  </option>
                  <option value="5 :: Expert">5 :: Expert</option>
                  <option value="can manage independently Tech 100%">
                    can manage independently Tech 100%"
                  </option>
                </Form.Control>

                <Form.Label>
                  Consultant Technical Skill Level in Last 1 week of Support
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="select"
                  name="consultantts2"
                  value={formValues.consultantts2}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="0::No Data Avaliable">
                    0::No Data Avaliable
                  </option>
                  <option value="1 ::  Does not have any tech knowledge - Tech 0%">
                    1 :: Does not have any tech knowledge - Tech 0%
                  </option>
                  <option value="2 :: Has basic fundamental knowledge - Tech 25%">
                    2 :: Has basic fundamental knowledge - Tech 25%
                  </option>
                  <option value="3 :: Can understand code and able to navigate - Tech 50%">
                    3 :: Can understand code and able to navigate - Tech 50%
                  </option>
                  <option value="4 :: Can do repeated task and give  inputs on new tasks- Tech 75%">
                    4 :: Can do repeated task and give inputs on new tasks- Tech
                    75%
                  </option>
                  <option value="5 :: Expert">5 :: Expert</option>
                  <option value="can manage independently Tech 100%">
                    can manage independently Tech 100%"
                  </option>
                </Form.Control>

                <Form.Label>
                  Final<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  name="final"
                  value={formValues.final}
                  onChange={handleChange}
                  required
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="my-form-group1" controlId="name">
                <Form.Label>
                  <h5>Project Duration</h5>{" "}
                </Form.Label>
                <br />
                <Form.Label>
                  Duration of Project as of Current Date
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="select"
                  name="duration"
                  value={formValues.duration}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="0::No Data Avaliable">
                    0::No Data Avaliable
                  </option>
                  <option value="1::less than 1  month">
                    1::less than 1 month
                  </option>
                  <option value="2::1-2 months">2::1-2 months</option>
                  <option value="3::2-3 months">3::2-3 months</option>
                  <option value="4:Independent before 3 months of your Support">
                    4:Independent before 3 months of your Support
                  </option>
                  <option value="5::Independent after 3 months of your Support">
                    5::Independent after 3 months of your Support
                  </option>
                </Form.Control>

                <Form.Label>
                  Final Project Rating<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  name="fpr1"
                  value={formValues.fpr1}
                  onChange={handleChange}
                  style={{ width: "250px" }}
                  required
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="my-form-group2" controlId="name">
                <Form.Label>
                  <h5>Project Learning</h5>{" "}
                </Form.Label>
                <br />
                <Form.Label>
                  Learning from Project<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="select"
                  name="learning"
                  value={formValues.learning}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="0::No Data Avaliable">
                    0::No Data Avaliable
                  </option>
                  <option value="1::less than 5% of tech stack was new">
                    1::less than 5% of tech stack was new
                  </option>
                  <option value="2::5-15% of Tech Stack was new">
                    2::5-15% of Tech Stack was new
                  </option>
                  <option value="3::15-30% of Tech Stack was new">
                    3::15-30% of Tech Stack was new
                  </option>
                  <option value="4::30-50% of Tech Stack was new">
                    4::30-50% of Tech Stack was new
                  </option>
                  <option value="5::more than 50% of techstack was new">
                    5::more than 50% of techstack was new
                  </option>
                </Form.Control>

                <Form.Label>
                  Final Project taken Rating
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  name="fpr2"
                  value={formValues.fpr2}
                  onChange={handleChange}
                  style={{ width: "250px" }}
                  required
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="my-form-group1" controlId="name">
                <Form.Label>
                  <h5>Project Complex</h5>
                </Form.Label>
                <br />

                <Form.Label>
                  Faced Issues in Laptop Remote Access (Zoom, GotoMeeting, Jump,
                  Join.me etc) for more than 3 weeks
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>

                <Form.Control
                  type="text"
                  style={{ width: "200px" }}
                  name="pc1"
                  value={formValues.pc1}
                  onChange={handleChange}
                  required
                ></Form.Control>

                <Form.Label>
                  Did Consultant asked for US Day Support and You helped in
                  Night shift for more than 3 weeks ?
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>

                <Form.Control
                  type="text"
                  style={{ width: "200px" }}
                  name="pc2"
                  value={formValues.pc2}
                  onChange={handleChange}
                  required
                ></Form.Control>

                <Form.Label>
                  Was consultant not able to handle meetings and need Writing
                  Notes or preparation even after 45days --
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>

                <Form.Control
                  type="text"
                  style={{ width: "200px" }}
                  name="pc3"
                  value={formValues.pc3}
                  onChange={handleChange}
                  required
                ></Form.Control>
                <Form.Label>
                  Issues in Requirement Accessibility from Consultant, are you
                  watching videos or listening to recordings to understand
                  client requirements even after 45days ?
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>

                <Form.Control
                  type="text"
                  style={{ width: "200px" }}
                  name="pc4"
                  value={formValues.pc4}
                  onChange={handleChange}
                  required
                ></Form.Control>
                <Form.Label>
                  Did you had issues with Consultant Cooperative /
                  Approachability<span style={{ color: "red" }}>*</span>
                </Form.Label>

                <Form.Control
                  type="text"
                  style={{ width: "200px" }}
                  name="pc5"
                  value={formValues.pc5}
                  onChange={handleChange}
                  required
                ></Form.Control>

                <Form.Label>
                  Sum of all Extra Efforts
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "200px" }}
                  name="pc6"
                  value={formValues.pc6}
                  onChange={handleChange}
                  required
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>
                  Final Project Effort Rating
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "200px" }}
                  name="pc7"
                  value={formValues.pc7}
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button className="button" type="submit">
                Add Project
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default AddSupportProject;

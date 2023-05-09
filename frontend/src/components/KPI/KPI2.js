import React, { useState, useEffect } from "react";
import "./KPI.css";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Dropdown,
  DropdownButton,
  Row,
  Col,
  Container,
  ProgressBar,
} from "react-bootstrap";
import KpiBar from "../KpiBar/KpiBar";

const KPI2 = () => {
  const [formValues, setFormValues] = useState({
    noofTest: "",
    points: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const isFormFilled = () => {
    return formValues.noofTest.trim() !== "" && formValues.points.trim() !== "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormFilled()) {
      // your form submission logic here
    } else {
      // handle form not filled error here
    }
  };

  return (
    <>
      <Container>
        <Form>
          <div className="header">
            <h1>KPI -2 CONSULTANT TESTS</h1>
          </div>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>
                  No of Tests<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="No of Tests"
                  name="noofTest"
                  value={formValues.noofTest}
                  onChange={handleInputChange}
                  required
                ></Form.Control>
                <br />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>
                  Total Points<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  step="0.1"
                  placeholder="Points"
                  name="points"
                  value={formValues.points}
                  onChange={handleInputChange}
                  required
                ></Form.Control>
                <br />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="button" disabled={!isFormFilled()}>
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default KPI2;

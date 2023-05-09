import React, { useState } from "react";
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
import "./KPI.css";
import KpiBar from "../KpiBar/KpiBar";

const KPI3 = () => {
  const [formValues, setFormValues] = useState({
    easy: "",
    mediam: "",
    hard: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const isFormFilled = () => {
    return (
      formValues.easy.trim() !== "" &&
      formValues.mediam.trim() !== "" &&
      formValues.difficult.trim() != ""
    );
  };

  return (
    <>
      <Container>
        <Form>
          <div className="header">
            <h1>KPI -3 LEARNING::(CODING)</h1>
          </div>

          <Form.Group
            as={Row}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form.Label column sm={5}>
              No of Easy Questions<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="number"
                placeholder="Easy Questions"
                name="easy"
                value={formValues.easy}
                onChange={handleInputChange}
                required
              ></Form.Control>
            </Col>
            <br />
          </Form.Group>
          <br />
          <Form.Group
            as={Row}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form.Label column sm={5}>
              No of Mediam Questions<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="number"
                placeholder="Mediam Questions"
                name="mediam"
                value={formValues.mediam}
                onChange={handleInputChange}
                required
              ></Form.Control>
            </Col>
            <br />
          </Form.Group>
          <br />
          <Form.Group
            as={Row}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form.Label column sm={5}>
              No of Hard Questions<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="number"
                placeholder="Hard Questions"
                name="hard"
                value={formValues.hard}
                onChange={handleInputChange}
                required
              ></Form.Control>
            </Col>
            <br />
          </Form.Group>
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

export default KPI3;

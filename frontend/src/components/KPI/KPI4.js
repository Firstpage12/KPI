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

const KPI4 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [otherValue, setOtherValue] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOtherChange = (event) => {
    setOtherValue(event.target.value);
  };

  return (
    <>
      <Container>
        <Form>
          <div className="header">
            <h1>KPI -3 CERTIFICATION</h1>
          </div>
          <Form.Group
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form.Label column sm={5}>
              Have you done any certification
              <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Row>
              <Col>
                <Form.Control
                  as="select"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="">Select an option</option>
                  <option value="AWS">None</option>
                  <option value="AWS">AWS</option>
                  <option value="Microsoft Asure">Microsoft Asure</option>
                  <option value="SalesForce Cerification">
                    SalesForce Certification
                  </option>
                  <option value="other">Other</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
          <br />
          <Form.Group
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selectedOption === "other" && (
              <>
                <Form.Label column sm={5}>
                  Please Specify
                </Form.Label>
                <Row>
                  <Col>
                    <Form.Control type="text" />
                  </Col>
                </Row>
              </>
            )}
          </Form.Group>

          <br />

          <Row>
            <Col>
              <Button className="button">Add Certification</Button>
            </Col>

            <Col>
              <Button className="button">Save</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default KPI4;

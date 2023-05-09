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
} from "react-bootstrap";
import "./KPI.css";
import KpiBar from "../KpiBar/KpiBar";

const KPI4 = () => {
  return (
    <>
      <Container>
        <Form>
          <div className="header">
            <h1>KPI -5 Other</h1>
          </div>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>OTHER</Form.Label>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control as="textarea" rows={3}></Form.Control>
                <br />
              </Form.Group>
            </Col>
          </Row>
          <Row>
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

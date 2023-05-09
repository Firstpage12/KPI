import React, { useState, useEffect } from "react";
import "./KPI.css";
import { useNavigate, Link, NavLink } from "react-router-dom";
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

const KPI1 = ({ formData }) => {
  const navigate = useNavigate();

  if (!formData || Object.keys(formData).length === 0) {
    return (
      <Container>
        <Form>
          <div className="header">
            <h1>KPI -1 SUPPORT PROJECT</h1>
          </div>

          <Row>
            <Col>
              <Button
                className="button"
                type="submit"
                onClick={() => navigate("/AddSupportProject")}
              >
                Add New Project
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }

  return (
    <Container>
      <Form>
        <div className="header">
          <h1>KPI -1 SUPPORT PROJECT</h1>
        </div>
        {formData.map((data) => (
          <NavLink to="/AddSupportProject" className="link">
            <div className="tab-container">
              <Row>
                <Col>
                  <h2>{data.ProjectName}</h2>
                </Col>

                <Col>
                  <strong>Name:</strong>
                  {data.Name}
                  <Row>
                    <Col>
                      <strong>Title:</strong>
                      {data.Name}
                    </Col>
                  </Row>
                </Col>

                <Col>
                  <strong>Client:</strong>
                  {data.Client}
                  <Row>
                    <Col>
                      <strong>Start Date:</strong>
                      {data.StartDate}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </NavLink>
        ))}

        <Row>
          <Col>
            <Button
              className="button1"
              type="submit"
              onClick={() => navigate("/AddSupportProject")}
            >
              Add Another Project
            </Button>
          </Col>

          <Col>
            <Button onClick={() => navigate("/previewForm")} className="button">
              Preview
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default KPI1;

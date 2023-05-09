import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button, Row, Col } from "react-bootstrap";
import "./KPI.css";

const PreviewForm = ({ formData }) => {
  const capturePreview = async () => {
    const preview = document.querySelector(".preview");
    const canvas = await html2canvas(preview);
    return canvas.toDataURL();
  };

  const downloadPDF = async () => {
    const imgData = await capturePreview();
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0);
    pdf.save("preview.pdf");
  };

  return (
    <>
      <Button className="download" onClick={downloadPDF}>
        <i className="fa fa-download"></i>Download PDF
      </Button>
      <div className="preview">
        <h2>Projects</h2>
        {formData.map((data) => (
          <div className="preview">
            <h5>Name of the Project:</h5>
            <h6> {data.ProjectName}</h6>
            <Row>
              <Col>
                <h5>Consultant</h5>
                <ul>
                  <li>
                    <strong>Name:</strong>
                    {data.Name}
                  </li>
                  <li>
                    <strong>Client:</strong>
                    {data.Client}
                  </li>
                  <li>
                    <strong>Title:</strong>
                    {data.Title}
                  </li>
                  <li>
                    <strong>Start Date:</strong>
                    {data.StartDate}
                  </li>
                </ul>
              </Col>
              <Col>
                <h5>Project Improvement</h5>
                <ul>
                  <li>
                    <strong>
                      Consultant Soft Skills/ Communication Level at start of
                      Support:
                    </strong>
                    {data.consultantss1}
                  </li>
                  <li>
                    <strong>
                      Consultant Soft Skills/Communication Level in last 1 week
                      of Support:
                    </strong>
                    {data.consultantss2}
                  </li>
                  <li>
                    <strong>
                      Consultant Technical Skill Level in First 2 week of
                      Support:
                    </strong>
                    {data.consultantts1}
                  </li>
                  <li>
                    <strong>
                      Consultant Technical Skill Level in Last 1 week of
                      Support:
                    </strong>
                    {data.consultantts2}
                  </li>
                  <li>
                    <strong>Final:</strong>
                    {data.final}
                  </li>
                </ul>
              </Col>
            </Row>

            <Row>
              <Col>
                <h5>Project Duration</h5>
                <ul>
                  <li>
                    <strong>Duration of Project as of Current Date:</strong>
                    {data.duration}
                  </li>
                  <li>
                    <strong>Final Project Rating:</strong>
                    {data.fpr1}
                  </li>
                </ul>
              </Col>
              <Col>
                <h5>Project Learning</h5>
                <ul>
                  <li>
                    <strong>Learning from Project:</strong>
                    {data.learning}
                  </li>
                  <li>
                    <strong>Final Project taken Rating:</strong>
                    {data.fpr2}
                  </li>
                </ul>
              </Col>
            </Row>

            <Row>
              <Col>
                <h5>Project Complex</h5>

                <ul>
                  <li>
                    <strong>
                      Faced Issues in Laptop Remote Access (Zoom, GotoMeeting,
                      Jump, Join.me etc) for more than 3 weeks?
                    </strong>
                    {data.pc1}
                  </li>
                  <li>
                    <strong>
                      Did Consultant asked for US Day Support and You helped in
                      Night shift for more than 3 weeks ?
                    </strong>
                    {data.pc2}
                  </li>
                  <li>
                    <strong>
                      Was consultant not able to handle meetings and need
                      Writing Notes or preparation even after 45days?
                    </strong>
                    {data.pc3}
                  </li>
                  <li>
                    <strong>
                      Issues in Requirement Accessibility from Consultant, are
                      you watching videos or listening to recordings to
                      understand client requirements even after 45days ?
                    </strong>
                    {formData.pc4}
                  </li>
                  <li>
                    <strong>
                      Did you had issues with Consultant Cooperative /
                      Approachability
                    </strong>
                    {data.pc5}
                  </li>
                  <li>
                    <strong>Sum of all Extra Efforts</strong>
                    {data.pc6}
                  </li>
                  <li>
                    <strong>Final Project Effort Rating</strong>
                    {data.pc7}
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </>
  );
};

export default PreviewForm;

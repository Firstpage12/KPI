import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <Form>
      <Button onClick={() => navigate("/Employee")}>Insert KPI</Button>
    </Form>
  );
};

export default Home;

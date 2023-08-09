import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../../Header/Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
const Contact = (props) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const numberRef = useRef("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const contactData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phNumber: numberRef.current.value,
    };
    props.onAddContact(contactData);
    navigate("/Store");
  };
  return (
    <>
      <Header />

      <Form onSubmit={submitHandler}>
        <Container className="m-5">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your name"
              ref={nameRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Number"
              ref={numberRef}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
      <Footer />
    </>
  );
};

export default Contact;

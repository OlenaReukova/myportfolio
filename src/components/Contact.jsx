import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1f265c;
  padding-top: 65px;
  @media only screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 96%;
  max-width: 1280px;
  margin: 60px auto;
  z-index: 1;
  min-height: calc(100vh - 120px);
  -webkit-box-pack: justify;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    align-items: center;
    width: 95%;
    justify-content: start;
    gap: 0rem;
    margin: 0;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 72px;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 768px) {
    padding-bottom: 30px;
    font-size: 2rem;
    font-weight: normal;
  }
`;

const Form = styled.form`
  width: 500px;
  border-color: black;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #1f265c;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  color: ${(props) => (props.sent ? "#FFB3CF" : "white")};
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #32327a;
  }
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    fontt-weght: normal;
  }
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");

  const validateForm = () => {
    const errors = {};
    if (!ref.current.name.value.trim()) {
      errors.name = "Name is required";
    }
    if (!ref.current.email.value.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(ref.current.email.value.trim())) {
      errors.email = "Invalid email format";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          "service_wr8c149",
          "template_va0waf2",
          ref.current,
          "jbb-FyJ6Bb0yJ74s0"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true);
            setButtonText("Sent");
            ref.current.reset();
          },
          (error) => {
            console.log(error.text);
            setSuccess(false);
            setButtonText("Send");
          }
        );
    } else {
      setErrors(errors);
    }
  };

  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Get in touch</Title>
            <Input
              placeholder="Name"
              name="name"
              autoComplete="name"
              style={{ borderColor: errors.name && "red" }}
            />
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
            <Input
              placeholder="Email"
              name="email"
              autoComplete="email"
              style={{ borderColor: errors.email && "red" }}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit" sent={buttonText === "Sent"}>
              {buttonText}
            </Button>
            {success &&
              "Your message has been sent. I'll get back to you soon."}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;

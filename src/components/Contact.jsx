import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
  border: 2px solid ${({ error }) => (error ? "red" : "transparent")};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ error }) => (error ? "darked" : "#1f265c")};
  }
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: 1px solid ${({ error }) => (error ? "red" : "transparent")};
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
  color: ${(props) => (props.$sent ? "#00bcd4" : "white")};
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #32327a;
  }
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    font-weght: normal;
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_wr8c149",
        "template_va0waf2",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "jbb-FyJ6Bb0yJ74s0"
      )
      .then(() => {
        setSent(true);
        reset();
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        setError("Failed to send message. Please try again.");
      });
  };

  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Title>Get in touch</Title>
            <Input
              placeholder="Name"
              {...register("name", { required: true, maxLength: 20 })}
            />
            {errors.name && <p style={{ color: "red" }}>Name is required</p>}
            <Input
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
            <TextArea
              placeholder="Write your message"
              rows={10}
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
            {sent && (
              <p style={{ color: " #00bcd4" }}>Message sent successfully!</p>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Button type="submit" $sent={sent}>
              Send
            </Button>
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

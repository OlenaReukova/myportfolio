import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Map from './Map';
import Footer from './Footer';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 80px;
  min-height: calc(100vh - 30px);
`;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 96%;
  max-width: 1280px;
  margin: 0px auto;
  z-index: 1;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  border-color: black;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 70%;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  padding: 14px 24px;
  border: none;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s,
    -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  color: #fff;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!ref.current.name.value.trim()) {
      errors.name = 'Name is required';
    }
    if (!ref.current.email.value.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(ref.current.email.value.trim())) {
      errors.email = 'Invalid email format';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          'service_wr8c149',
          'template_va0waf2',
          ref.current,
          'jbb-FyJ6Bb0yJ74s0'
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true);
          },
          (error) => {
            console.log(error.text);
            setSuccess(false);
          }
        );
    } else {
      setErrors(errors);
    }
  };

  return (
    <Section>
      <Container id='contact'>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input
              placeholder='Name'
              name='name'
              autoComplete='name'
              style={{ borderColor: errors.name && 'red' }}
            />
            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            <Input
              placeholder='Email'
              name='email'
              autoComplete='email'
              style={{ borderColor: errors.email && 'red' }}
            />
            {errors.email && (
              <span style={{ color: 'red' }}>{errors.email}</span>
            )}
            <TextArea
              placeholder='Write your message'
              name='message'
              rows={10}
            />
            <Button type='submit'>Send</Button>
            {success &&
              "Your message has been sent. I'll get back to you soon."}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
      <Footer />
    </Section>
  );
};

export default Contact;

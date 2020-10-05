import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ChevronRight, User } from "react-feather";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 2.4rem;
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.5rem;
`;

const StyledField = styled(Field)`
  width: 100%;
  height: 5.6rem;
  padding-left: 5.2rem;
  border: 2px solid #18191f;
  border-radius: 16px;
  font-family: inherit;
  font-size: 2.1rem;
  color: #18191f;
  outline: none;

  /* Remove number input arrow */
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const Alert = styled.div`
  color: #f95a2c;
  padding-left: 2rem;
  margin-top: -2rem;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
`;

const SendForm = styled.button`
  width: 33rem;
  height: 6rem;
  background: #18191f;
  border: none;
  border-radius: 16px;
  font-family: inherit;
  font-weight: 800;
  font-size: 2.1rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 0;
  margin-top: 4rem;

  & > span {
    margin-right: 1rem;
    transform: translateY(-1px);
  }
`;

const RequestDonorFormik = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        fullname: "",
        age: "",
        bloodtype: "",
        bloodbagsamount: "",
        place: "",
      }}
      validationSchema={Yup.object({
        fullname: Yup.string().required("Required"),
        age: Yup.number().required("Required"),
        bloodtype: Yup.string().required("Required"),
        bloodbagsamount: Yup.number().required("Required"),
        place: Yup.string().required("Required"),
      })}
      onSubmit={(val) => {
        handleSubmit(val);
      }}
    >
      <Form>
        <InputContainer>
          <Icon>
            <User />
          </Icon>
          <StyledField name="fullname" type="text" placeholder="Full Name" />
        </InputContainer>
        <ErrorMessage name="fullname">
          {(msg) => <Alert>{msg}</Alert>}
        </ErrorMessage>
        <InputContainer>
          <Icon>
            <User />
          </Icon>
          <StyledField name="age" type="number" placeholder="Age" />
        </InputContainer>
        <ErrorMessage name="age">{(msg) => <Alert>{msg}</Alert>}</ErrorMessage>
        <InputContainer>
          <Icon>
            <User />
          </Icon>
          <StyledField name="bloodtype" type="text" placeholder="Bloodtype" />
        </InputContainer>
        <ErrorMessage name="bloodtype">
          {(msg) => <Alert>{msg}</Alert>}
        </ErrorMessage>
        <InputContainer>
          <Icon>
            <User />
          </Icon>
          <StyledField
            name="bloodbagsamount"
            type="number"
            placeholder="Blood Bags Amount"
          />
        </InputContainer>
        <ErrorMessage name="bloodbagsamount">
          {(msg) => <Alert>{msg}</Alert>}
        </ErrorMessage>
        <InputContainer>
          <Icon>
            <User />
          </Icon>
          <StyledField name="place" type="text" placeholder="Place" />
        </InputContainer>
        <ErrorMessage name="place">
          {(msg) => <Alert>{msg}</Alert>}
        </ErrorMessage>
        <SendForm type="submit">
          <span>Send Form</span>
          <ChevronRight />
        </SendForm>
      </Form>
    </Formik>
  );
};

export default RequestDonorFormik;

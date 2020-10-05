import React from "react";
import { useField, useFormikContext } from "formik";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import addDays from "date-fns/addDays";

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: 5.6rem;
  padding-left: 5.2rem;
  border: 2px solid #18191f;
  border-radius: 16px;
  font-family: inherit;
  font-size: 2.1rem;
  color: #18191f;
  outline: none;
  background-color: transparent;
`;

const DatePickerField = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <StyledDatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      dateFormat="dd/MM/yyyy"
      placeholderText="Select a date"
      minDate={new Date()}
      maxDate={addDays(new Date(), 7)}
      autoComplete="off"
    />
  );
};

export default DatePickerField;

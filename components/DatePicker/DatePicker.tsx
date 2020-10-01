import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import styles from "./DatePicker.module.css";
import addDays from "date-fns/addDays";

const DatePickerField = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  console.log(field);

  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      className={styles.date}
      calendarClassName={styles.calendar}
      dateFormat="dd/MM/yyyy"
      placeholderText="Select a date"
      minDate={new Date()}
      maxDate={addDays(new Date(), 7)}
    />
  );
};

export default DatePickerField;

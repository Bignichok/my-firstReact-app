import React from "react";
import styles from "./FormsControls.module.css";

const FormControl = ({ input, meta, element, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={`${styles.formControl} ${hasError && styles.error}`}>
      <div>{React.createElement(element, { ...input, ...props })}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  return <FormControl {...props} element={"textarea"}></FormControl>;
};

export const Input = (props) => {
  return <FormControl {...props} element={"input"}></FormControl>;
};

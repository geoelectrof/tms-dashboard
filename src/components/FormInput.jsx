import { useState } from "react";
import { Form } from "react-bootstrap";
import "./formInput.scss";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      {/* <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span> */}
        <Form.Group
            className="mb-3"
        >

            <Form.Label>{label}</Form.Label>
            <Form.Control 
                {...inputProps}
                // name = {props.name}
                // type = {props.type}
                // placeholder={props.placeholder}
                onChange={onChange}
                onBlur={handleFocus}
                // onFocus=
                // {() => inputProps.name === "confirmPassword" && setFocused(true)}
                focused={focused.toString()}
                />
            <span>{errorMessage}</span>
        </Form.Group>
    </div>
  );
};

export default FormInput;

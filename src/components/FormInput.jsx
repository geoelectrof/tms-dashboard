import { useState } from "react";
import { Form } from "react-bootstrap";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
        <Form.Group
            className="mb-3"
        >
            <Form.Label>{label}</Form.Label>
            <Form.Control 
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
                />
            <span>{errorMessage}</span>
        </Form.Group>
    </div>
  );
};

export default FormInput;

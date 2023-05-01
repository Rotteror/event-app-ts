import "./input.css";
import { useState } from "react";

const InputLogin = (props: any) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: any) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label className="label-field">{label}</label>
      <input
        className="input-field"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "repeatPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span className="error-message">{errorMessage}</span>
    </div>
  );
};

export default InputLogin;

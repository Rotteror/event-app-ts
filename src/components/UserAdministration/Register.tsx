import "./register.css";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";

import Input from "../UserAdministration/Input";

import {InputI} from "./Login";

const RegisterForm = () => {
  const inputs: InputI[] = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email adress",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "repeatPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password doesn't match",
      //   pattern: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$",
      required: true,
    },
  ];

  const [error, setError] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (values.password !== values.repeatPassword) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    // TODO REGISTER ACTION: TRY/CATCH BLOCK + ACTIONS
  };

  return (
    <div className="register">
      <form className="form-one" onSubmit={handleLogin}>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={values[input.name as keyof typeof values]}
            onChange={onChange}
          />
        ))}
        <div className="div-btn">
          <button className="btnlogin" type="submit">
            Register
          </button>
          <p className="p-auth-info">
            Have already an account?{" "}
            <Link className="link-auth" to="/login">
              {" "}
              Login
            </Link>{" "}
          </p>
          {error && <p className="error-register">Passwords does not match</p>}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

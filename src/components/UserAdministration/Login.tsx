import "./login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import Input from "./Input";

export interface InputI {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  pattern?: string;
  errorMessage: string;
  label: string;
  required: boolean;
}

const LoginForm = () => {
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
        "Minimum six characters, at least one letter and one number",
      required: true,
    },
  ];

  const [error, setError] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleLogin = (event: any) => {
    event.preventDefault();

    // LOGIN USER ACTIONS
  };

  return (
    <div className="login">
      <form className="form-one" onSubmit={handleLogin}>
        {inputs.map((input: InputI) => (
          <Input
            key={input.id}
            {...input}
            value={values[input.name as keyof typeof values]}
            onChange={onChange}
          />
        ))}
        <div className="div-btn">
          <button disabled={error} className="btn-login">
            Login
          </button>
          <p className="p-auth-info">
            Don't Have an Account?{" "}
            <Link className="link-auth" to="/register">
              {" "}
              Register
            </Link>{" "}
          </p>
          {error && <p className="error-login">Incorrect Credentials</p>}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

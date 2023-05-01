import "./login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useAppDispatch } from "../../store";
import { fetchUser } from "../../store/User/userAction";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

import Input from "./Input";
import microCopy from "../../constants/microCopy";
import { InputI } from "../../models/user-administration";

const {
  auth: { incorrectLogin },
} = microCopy;

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

  const handleLogin = async (event: any) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      if (auth.currentUser) dispatch(fetchUser(auth.currentUser?.uid));
      navigate("/");
    } catch (error) {
      setError(true);
    }
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
          {error && <p className="error-login">{incorrectLogin}</p>}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

import "./register.css";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUser } from "../../store/User/userAction";
import { useAppDispatch } from "../../store";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import Input from "../UserAdministration/Input";

import { InputI } from "../../models/user-administration";
import microCopy from "../../constants/microCopy";

const {
  userAdministration: { rePassword },
} = microCopy;

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

  const handleRegister = async (e: any) => {
    e.preventDefault();

    if (values.password !== values.repeatPassword) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      dispatch(
        createUser({ email: values.email, purchases: [], wishList: [] })
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <form className="form-one" onSubmit={handleRegister}>
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
          {error && <p className="error-register">{rePassword}</p>}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

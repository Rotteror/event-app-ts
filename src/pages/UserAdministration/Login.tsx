import { useRef } from "react";
import jsPDF from "jspdf";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";

import LoginForm from "../../components/UserAdministration/Login";

const Login = () => {

  return (
    <div className="container">
      <LoginForm />
    </div>
  );
};

export default Login;

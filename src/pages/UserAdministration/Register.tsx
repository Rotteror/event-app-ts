import { useRef } from "react";
import jsPDF from "jspdf";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";

import RegisterForm from "../../components/UserAdministration/Register";

const Register = () => {

  return (
    <div className="container">
      <RegisterForm />
    </div>
  );
};

export default Register;

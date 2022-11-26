import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpPageOne from "./SignUpPageOne/SignUpPageOne";
import SignUpPageTwo from "./SignUpPageTwo/SignUpPageTwo";
import SignUpPageThree from "./SignUpPageThree/SignUpPageThree";
import BackdropLoader from '../Loader/BackdropLoader';

import { useDispatch, useSelector } from 'react-redux';
import { register, login } from '../../redux/auth/AuthActions';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    employmentStatus: "",
    phone: "",
    email: "",
    password: "",
    workLocation: "",
    courseOfExpertise: "",
    workEmail: "",
    gender: "",
    address: "",
    stateOfOrigin: "",
    lga: "",
    noOfSubjects: "",
  });

  const [step, setStep] = useState(1);

  const { loading } = useSelector((state) => state.userRegister);

  const onContinue = async (input, index) => {
    setData({ ...data, ...input });

    if (index === 3) {
      // submit to server
      dispatch(register(data));

      //login user
      dispatch(login(data));

      // navigate to complete signup page
      setTimeout(() => {
        navigate("/completeSignUp");
      }, 1000);

    }
    setStep(index + 1);
  };
  return (
    <>
      {loading && <BackdropLoader />}
      {step === 1 && <SignUpPageOne onContinue={onContinue} />}
      {step === 2 && <SignUpPageTwo onContinue={onContinue} />}
      {step === 3 && <SignUpPageThree onContinue={onContinue} />}
    </>
  );
};

export default Signup;

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpPageOne from "./SignUpPageOne/SignUpPageOne";
import SignUpPageTwo from "./SignUpPageTwo/SignUpPageTwo";
import SignUpPageThree from "./SignUpPageThree/SignUpPageThree";
import BackdropLoader from '../Loader/BackdropLoader';
import { useDispatch, useSelector } from 'react-redux';
import { register, login, clearErrors, clearState } from '../../redux/auth/AuthActions';
import useAlert from "../../customHooks/useAlert";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

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

  const { loading: loadingUserLogin, error: errorUserLogin, success: successUserLogin } = useSelector((state) => state.userLogin);
  const { loading: loadingcreateTeacher, error: errorcreateTeacher, success: successcreateTeacher } = useSelector((state) => state.userRegister);

  const onContinue = async (input, index) => {
    setData({ ...data, ...input });

    if (index === 3) {
      // submit to server
      dispatch(register(data));
    }
    setStep(index + 1);
  };

  React.useEffect(() => {
    if (errorcreateTeacher) {
      if (errorcreateTeacher) {
        alert('Error', errorcreateTeacher, 'error', 'Ok', () => {
          dispatch(clearErrors());
        });
      }
    }
    if (successcreateTeacher) {
      alert('Success', "Account created successfully", 'success', 'Ok', () => {
        dispatch(clearState());
        //login user
        dispatch(login(data));
      });
    }
  }, [errorcreateTeacher, successcreateTeacher, alert, dispatch, data]);

  React.useEffect(() => {
    if (successUserLogin) {
      navigate('/completeSignUp');
    }
  }, [errorUserLogin, successUserLogin, navigate]);


  return (
    <>
      {loadingUserLogin || loadingcreateTeacher ? <BackdropLoader /> : null}
      {step === 1 && <SignUpPageOne onContinue={onContinue} />}
      {step === 2 && <SignUpPageTwo onContinue={onContinue} />}
      {step === 3 && <SignUpPageThree onContinue={onContinue} />}
    </>
  );
};

export default Signup;


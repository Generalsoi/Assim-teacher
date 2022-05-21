import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignUpPageTwo.css";
import Logo from "../../../assets/images/Logo.png";
import LargeLogo from "../../../assets/images/large-logo.png";

const SignUpPageTwo = ({ onContinue }) => {
  // const schema = yup.object({
  //   school: yup.string().required(),
  //   favoriteSubject: yup.string().required(),
  //   leastFavoriteSubject: yup.string().required(),
  // });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });

  const onSubmit = (data) => {
    onContinue(data, 2);
    // navigate("/studentSignUpPageThree");
  };

  return (
    <div className="signup-pagetwo">
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="assim-logo" />
        </Link>
      </div>

      <div className="signupcontents">
        <div className="contentOne content">
          <img src={LargeLogo} alt="large-assim-logo" />
        </div>

        <div className="contentTwo content">
          <h4>Basic Government Information</h4>

          <div className="form-two">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  {...register("workLocation", {
                    required: "Please enter your work location",
                    minLength: {
                      value: 1,
                      message: "Your school name must exceed 1 characters",
                    },
                  })}
                  type="text"
                  placeholder="Where do you work?"
                />
                {errors.workLocation && (
                  <p
                    className="error"
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "0",
                      marginBottom: "0",
                    }}
                  >
                    {errors.workLocation.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("courseOfExpertise", {
                    required: "Please enter your course of expertise",
                    minLength: {
                      value: 1,
                      message: "Your school name must exceed 1 characters",
                    },
                  })}
                  type="text"
                  placeholder="What is your course of expertise?"
                />
                {errors.courseOfExpertise && (
                  <p
                    className="error"
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "0",
                      marginBottom: "0",
                    }}
                  >
                    {errors.courseOfExpertise.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("workEmail")}
                  type="text"
                  placeholder="Enter work email address"
                />
              </div>
              <div>
                <button type="submit">Next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageTwo;

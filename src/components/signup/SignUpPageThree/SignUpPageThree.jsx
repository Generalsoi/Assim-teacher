import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignUpPageThree.css";
import Logo from "../../../assets/images/Logo.png";
import LargeLogo from "../../../assets/images/large-logo.png";

const SignUpPageThree = ({ onContinue }) => {
  // const schema = yup.object({
  //   address: yup.string().required(),
  //   school: yup.string().required(),
  //   gender: yup.string().required(),
  //   stateOfOrigin: yup.string().required(),
  //   lga: yup.string().required(),
  //   noOfSubjects: yup.string(),
  // });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });

  const onSubmit = (data) => {
    onContinue(data, 3);
    // navigate("/completeSignUp");
  };

  return (
    <div className="signup-pagethree">
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="assim-logo" />
        </Link>
      </div>

      <div className="signupcontents">
        <div className="content-One content">
          <img src={LargeLogo} alt="large-assim-logo" />
        </div>

        <div className="content-Two content">
          <h4>Basic Personal Information</h4>

          <div className="form-two">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <select
                  {...register("gender", {
                    required: "Please, select your gender",
                  })}
                  id="gender"
                >
                  <option value="">---Select Gender---</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <p
                    className="error"
                    style={{ color: "red", fontSize: "12px", marginTop: "0" }}
                  >
                    {errors.gender.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("address")}
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div>
                <select {...register("stateOfOrigin")} id="origin">
                  <option value="origin">State of Origin</option>
                </select>
              </div>
              <div>
                <select {...register("lga")} id="lga">
                  <option value="lga">Local Government Area</option>
                </select>
              </div>
              <div>
                <select
                  {...register("highestLevelOfEdu", {
                    required: "Please select highest level of education",
                  })}
                  id="lga"
                >
                  <option value="">---Highest Level of Education---</option>
                  <option value="ssce">SSCE</option>
                  <option value="Bachelors">Bachelor's degree</option>
                  <option value="Masters">Masters</option>
                  <option value="phd">PHD</option>
                </select>
              </div>
              {errors.highestLevelOfEdu && (
                <p
                  className="error"
                  style={{ color: "red", fontSize: "12px", marginTop: "0" }}
                >
                  {errors.highestLevelOfEdu.message}
                </p>
              )}
              <div>
                <select
                  {...register("maritalStatus", {
                    required: "Please select a valid marital status",
                  })}
                  id="lga"
                >
                  <option value="">---Marital Status---</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                </select>
              </div>
              {errors.maritalStatus && (
                <p
                  className="error"
                  style={{ color: "red", fontSize: "12px", marginTop: "0" }}
                >
                  {errors.maritalStatus.message}
                </p>
              )}
              <div>
                <select
                  {...register("title", {
                    required: "Please select a valid title",
                  })}
                  name="title"
                  id="title"
                >
                  <option value="">---Title---</option>
                  <option value="mr">Mr</option>
                  <option value="mrs">Mrs</option>
                  <option value="master">Master</option>
                  <option value="miss">Miss</option>
                </select>
              </div>
              {errors.title && (
                <p
                  className="error"
                  style={{ color: "red", fontSize: "12px", marginTop: "0" }}
                >
                  {errors.title.message}
                </p>
              )}
              <div>
                <button type="submit">Complete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageThree;

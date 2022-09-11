import React from "react";
import { Link } from "react-router-dom";
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
              <label>
                <p className="issued-id">* Government Issued ID</p>
              </label>
              <div className="input-file-div">
                <label for="govID">
                  <p>Click here to upload</p>
                  <input
                    {...register("governmentIDUrl", {
                      required: "Please upload your government issued ID",
                      validate: {
                        lessThan10MB: (files) =>
                          files[0]?.size < 10000000 || "Max 10MB",
                        acceptedFormats: (files) =>
                          ["image/jpeg", "image/png", "image/gif"].includes(
                            files[0]?.type
                          ) || "Only PNG, JPEG e GIF",
                      },
                    })}
                    id="govID"
                    type="file"
                    accept="image/png, image/jpg, image/gif, image/jpeg"
                    placeholder="Click here to upload"
                  />
                </label>
              </div>
              {errors.governmentIDUrl && (
                <p
                  className="error"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginTop: "0",
                    marginBottom: "0",
                  }}
                >
                  {errors.governmentIDUrl.message}
                </p>
              )}
              <label>
                <p className="issued-id">* Work ID Card</p>
              </label>
              <div className="input-file-div">
                <label for="workID">
                  <p>Click here to upload</p>
                  <input
                    {...register("workIDUrl", {
                      required: "Please upload your workID card",
                      validate: {
                        lessThan10MB: (files) =>
                          files[0]?.size < 10000000 || "Max 10MB",
                        acceptedFormats: (files) =>
                          ["image/jpeg", "image/png", "image/gif"].includes(
                            files[0]?.type
                          ) || "Only PNG, JPEG e GIF",
                      },
                    })}
                    id="workID"
                    type="file"
                    accept="image/png, image/jpg, image/gif, image/jpeg"
                    placeholder="Click here to upload"
                  />
                </label>
              </div>
              {errors.workIDUrl && (
                <p
                  className="error"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginTop: "0",
                    marginBottom: "0",
                  }}
                >
                  {errors.workIDUrl.message}
                </p>
              )}
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

import React, { useState } from "react";
import Logo from "../../../../assets/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../../Sidebar/Sidebar";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import useAxiosPost from "../../../../customHooks/useAxiosPost";
import { accessToken } from "../../../../config";
import BackdropLoader from "../../../Loader/BackdropLoader";
import useAlert from "../../../../customHooks/useAlert";
import { useEffect } from "react";

const NewClass = () => {
  const alert = useAlert();
  const [activeMenu, setActiveMenu] = useState("menu1");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const ownerId = userInfo.user.id;

  const { loading, error, success, fetchData } = useAxiosPost({
    method: "post",
    url: "classes?access_token=" + accessToken,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ownerId,
      name,
      description,
    }),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  useEffect(() => {
    if (error) {
      alert("Error", error, "error", "Ok", () => {});
    }
    if (success) {
      alert("Success", success, "success", "Ok", () => {
        window.location.href = "/classes";
      });
    }
  }, [error, alert, success]);

  return (
    <>
      {loading && <BackdropLoader />}
      <div className="dashboard">
        <div className={open ? "sidebar-mobile open" : "sidebar"}>
          <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>
        <div className="content">
          <div className="student-dashboard">
            <StudentDashboardHeader />

            <div className="upload_course_message">
              <h2>Create New Class</h2>
            </div>
            <div className="upload_course_area">
              <div className="upload_course_body">
                <form onSubmit={handleSubmit}>
                  <div className="upload_course_form">
                    <div className="form_div">
                      <h6>Enter Class name</h6>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Class Name"
                        required
                      />
                    </div>

                    <div className="form_div">
                      <h6>Class Description</h6>
                      <textarea
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Decription of your course"
                      ></textarea>
                    </div>
                  </div>
                  <div className="submitBtn">
                    <button type="submit">Click to Proceed</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-view">
          <img src={Logo} alt="assim-logo" />
          <MenuIcon className="hamburger" onClick={handleClick} />
        </div>

        {open && <div className="overlay" />}
      </div>
    </>
  );
};

export default NewClass;

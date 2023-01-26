import React, { useEffect, useState } from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import Sidebar from "../../Sidebar/Sidebar";
import UploadImage from "../../../../assets/images/uploadArea.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../../assets/images/Logo.png";
import "./Assignment.css";
import useAxiosGetWithoutToken from "../../../../customHooks/useAxiosGetWithoutToken";
import { accessToken } from "../../../../config";
import useAxiosPost from "../../../../customHooks/useAxiosPost";
import BackdropLoader from "../../../Loader/BackdropLoader";
import useAlert from "../../../../customHooks/useAlert";

const NewAssignment = () => {
  const alert = useAlert();
  const [activeMenu, setActiveMenu] = useState("menu1");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [classId, setClassId] = useState("");
  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleFlieClick = (event) => {
    hiddenFileInput.current.click();
  };

  const [recentClassContents, setRecentClassContents] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const ownerId = userInfo.user.id;

  const { response } = useAxiosGetWithoutToken({
    method: "get",
    url: "classes?ownerId=" + ownerId + "&access_token=" + accessToken,
  });

  useEffect(() => {
    if (response) {
      setRecentClassContents(response.rows);
    }
  }, [response]);

  const { loading, error, success, fetchData } = useAxiosPost({
    method: "post",
    url: "documents?access_token=" + accessToken,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ownerId,
      name,
      description,
      classId,
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
      alert("Success", "Asignment Created Successfully", "success", "Ok", () => {
        window.location.href = "/select-class";
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
              <h2>New Assignment</h2>
            </div>
            <div className="upload_course_area">
              <div className="upload_course_body">
                <form onSubmit={handleSubmit}>
                  <div className="upload_course_form">
                    <div className="form_div" onClick={handleFlieClick}>
                      <h6>Upload File</h6>
                      <div className="fileUploadArea">
                        <h4>JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.</h4>
                        <div className="uploadImage">
                          <img src={UploadImage} alt="Assim" />
                        </div>
                        <p>Drag and Drop File </p>
                        <p>or browse media on your device</p>
                      </div>
                      <input
                        type="file"
                        ref={hiddenFileInput}
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="form_div">
                      <h6>Title</h6>
                      <input
                        type="text"
                        placeholder="Enter the Title"
                        required
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="form_div">
                      <h6>Description</h6>
                      <textarea
                        name="description"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Decription of the Assignment"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>

                    <div className="form_div">
                      <h6>Select Class</h6>
                      <select
                        name="classId"
                        value={classId}
                        onChange={(e) => setClassId(e.target.value)}
                        id=""
                        required
                      >
                        <option value="">Select Class</option>
                        {recentClassContents.map((content) => (
                          <option value={content.id}>{content.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="submitBtn">
                    <button type="submit">Create Assingment</button>
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

export default NewAssignment;

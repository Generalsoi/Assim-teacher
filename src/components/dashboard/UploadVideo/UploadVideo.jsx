import React, { useEffect, useState } from "react";
import StudentDashboardHeader from '../../../common/StudentDashboardHeader/StudentDashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import Logo from "../../../assets/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SimpleFileUpload from 'react-simple-file-upload';
import useAxiosGetWithoutToken from "../../../customHooks/useAxiosGetWithoutToken";
import { accessToken } from "../../../config";
import useAxiosPost from "../../../customHooks/useAxiosPost";
import BackdropLoader from "../../Loader/BackdropLoader";
import useAlert from "../../../customHooks/useAlert";
import "./UploadVideo.css";

const UploadVideo = () => {
    const alert = useAlert();

    const [activeMenu, setActiveMenu] = useState("menu1");
    const [open, setOpen] = useState(false);
    const [recentClassContents, setRecentClassContents] = useState([]);
    const [classId, setClassId] = useState("");
    const [videoUrl, setVideoUrl] = useState("");

    const handleClick = () => {
        setOpen(!open);
    };

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

    // upload video
    const { loading, error, success, fetchData } = useAxiosPost({
        method: "post",
        url: "videos?access_token=" + accessToken,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ownerId,
            classId,
            videoUrl,
        }),
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };
    useEffect(() => {
        if (error) {
            alert("Error", error, "error", "Ok", () => { });
        }
        if (success) {
            alert("Success", "Video Uploaded Successfully", "success", "Ok", () => {
                window.location.href = "/select-class";
            });
        }
    }, [error, alert, success]);

    const handleFile = (url) => {
        setVideoUrl(url);
    };

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
                            <h2>Upload New Video</h2>
                        </div>
                        <div className="upload_course_area">
                            <div className="upload_course_body">
                                <form onSubmit={handleSubmit}>
                                    <div className="upload_course_form">
                                        <div className="upload_web">
                                            <SimpleFileUpload
                                                apiKey="7bf4c18d68525050ba347ff1ccf39e6c"
                                                onSuccess={handleFile}
                                                preview={true}
                                                width="490"
                                                height="200"
                                            />
                                        </div>

                                        <div className="upload_mobile">
                                            <SimpleFileUpload
                                                apiKey="7bf4c18d68525050ba347ff1ccf39e6c"
                                                onSuccess={handleFile}
                                                preview={true}
                                                width="300"
                                                height="100"
                                            />
                                        </div>

                                        <br />
                                        <br />

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

                                        <div className="submitBtn">
                                            <button type="submit" 
                                             disabled={classId === "" || videoUrl === "" || ownerId === "" ? true : false}
                                             style={{ backgroundColor: classId === "" || videoUrl === "" || ownerId === "" ? "#ccc" : "#7777F9" }}
                                            >Create Assingment</button>
                                        </div>

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

export default UploadVideo;
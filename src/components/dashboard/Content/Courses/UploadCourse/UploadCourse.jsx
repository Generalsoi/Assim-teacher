import React, { useState } from 'react'
import StudentDashboardHeader from '../../../../../common/StudentDashboardHeader/StudentDashboardHeader';
import Sidebar from '../../../Sidebar/Sidebar';
import Logo from "../../../../../assets/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import "./UploadCourse.css";
import UploadImage from "../../../../../assets/images/uploadArea.svg";

const UploadCourse = () => {
    const [activeMenu, setActiveMenu] = useState("menu1");
    const [open, setOpen] = useState(false);
    const hiddenFileInput = React.useRef(null);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleFlieClick = (event) => {
        hiddenFileInput.current.click();
    };

    return (
        <>
            <div className="dashboard">
                <div className={open ? "sidebar-mobile open" : "sidebar"}>
                    <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                </div>
                <div className="content">
                    <div className="student-dashboard">
                        <StudentDashboardHeader />


                        <div className="upload_course_message">
                            <h2>Upload New Course</h2>
                        </div>
                        <div className="upload_course_area">
                            <div className="upload_course_body">
                                <form action="">
                                    <div className="upload_course_form">
                                        <div className="form_div" onClick={handleFlieClick}>
                                            <h6>Upload Course</h6>
                                            <div className='fileUploadArea'>
                                                <h4>JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.</h4>
                                                <div className='uploadImage'>
                                                    <img src={UploadImage} alt="Assim" />
                                                </div>
                                                <p>Drag and Drop File </p>
                                                <p>or browse media on your device</p>
                                            </div>
                                            <input type="file" ref={hiddenFileInput} style={{ display: 'none' }} />
                                        </div>
                                        <div className='form_div'>
                                            <h6>Course</h6>
                                            <input type="text" placeholder='Course Name' />
                                        </div>

                                        <div className='form_div'>
                                            <h6>Description</h6>
                                            <textarea name="" id="" cols="30" rows="10" placeholder='Decription of your course'></textarea>
                                        </div>

                                        <div className='form_div'>
                                            <h6>Class</h6>
                                            <input type="text" placeholder='Enter Class' />
                                        </div>
                                    </div>
                                    <div className='submitBtn'>
                                        <button>Create Course</button>
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
    )
}

export default UploadCourse
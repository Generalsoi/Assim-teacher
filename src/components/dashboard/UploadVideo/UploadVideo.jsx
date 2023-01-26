import React, { useState } from 'react'
import StudentDashboardHeader from '../../../common/StudentDashboardHeader/StudentDashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import UploadImage from '../../../assets/images/uploadArea.svg'
import Logo from "../../../assets/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const UploadVideo = () => {
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
                            <h2>Upload New Video</h2>
                        </div>
                        <div className="upload_course_area">
                            <div className="upload_course_body">
                                <form action="">
                                    <div className="upload_course_form">
                                        <div className="form_div" onClick={handleFlieClick}>
                                            <h6>Upload Video</h6>
                                            <div className='fileUploadArea'>
                                                <h4>WEBM, MP3, MP4, MPV, Max 200mb.</h4>
                                                <div className='uploadImage'>
                                                    <img src={UploadImage} alt="Assim" />
                                                </div>
                                                <p>Drag and Drop File </p>
                                                <p>or browse media on your device</p>
                                            </div>
                                            <input type="file" ref={hiddenFileInput} style={{ display: 'none' }} />
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
    )
}

export default UploadVideo
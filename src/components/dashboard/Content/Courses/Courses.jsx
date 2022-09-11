import React, { useState } from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import Sidebar from "../../Sidebar/Sidebar";
import './Courses.css';
import Logo from "../../../../assets/images/Logo.png";
import Course1 from "../../../../assets/images/course1.png";
import Play from "../../../../assets/images/play.png";
import Doc from "../../../../assets/images/doc.png";
import Json from "../../../../assets/images/json.png";
import Txt from "../../../../assets/images/txt.png";
import MenuIcon from "@mui/icons-material/Menu";
import TopClassesAndPerformers from "./TopClassesAndPerformers/TopClassesAndPerformers";

const Courses = () => {
    const [activeMenu, setActiveMenu] = useState("menu1");
    const [open, setOpen] = useState(false);
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(false);
    const [tab3, setTab3] = useState(false);
    const [tab4, setTab4] = useState(false);

    const handleTab1 = () => {
        setTab1(true);
        setTab2(false);
        setTab3(false);
        setTab4(false);
    };
    const handleTab2 = () => {
        setTab1(false);
        setTab2(true);
        setTab3(false);
        setTab4(false);
    };
    const handleTab3 = () => {
        setTab1(false);
        setTab2(false);
        setTab3(true);
        setTab4(false);
    };
    const handleTab4 = () => {
        setTab1(false);
        setTab2(false);
        setTab3(false);
        setTab4(true);
    };

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className="dashboard">
            <div className={open ? "sidebar-mobile open" : "sidebar"}>
                <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </div>
            <div className="content">
                <div className="student-dashboard">
                    <StudentDashboardHeader />

                    <div className="welcome-message">
                        <h2>
                            Courses
                        </h2>
                    </div>


                    <div className="courses_tab">
                        <div className={tab1 ? 'courses_tab_item_active' : 'courses_tab_item'} onClick={handleTab1}>
                            All Courses
                        </div>
                        <div className={tab2 ? 'courses_tab_item_active' : 'courses_tab_item'} onClick={handleTab2}>
                            Documents
                        </div>
                        <div className={tab3 ? 'courses_tab_item_active' : 'courses_tab_item'} onClick={handleTab3}>
                            Audios
                        </div>
                        <div className={tab4 ? 'courses_tab_item_active' : 'courses_tab_item'} onClick={handleTab4}>
                            Videos
                        </div>
                    </div>


                    {tab1 && (
                        <div className="courses_card_wrapper">
                            <div className="courses_card_item">
                                <div className="course_type_img">
                                    <img src={Play} alt="" />
                                </div>
                                <img src={Course1} alt="" />

                                <div className="course_detail">
                                    <h2>Mathematics</h2>
                                    <p>Learn all topics on how to broaden your understanding in this course .</p>
                                    <div className="course_action_btn">
                                        <button className="edit_btn">Edit</button>
                                        <button className="delete_btn">Delete</button>
                                    </div>
                                </div>

                            </div>
                            <div className="courses_card_item">
                                <div className="course_type_img">
                                    <img src={Doc} alt="" />
                                </div>
                                <img src={Course1} alt="" />

                                <div className="course_detail">
                                    <h2>Mathematics</h2>
                                    <p>Learn all topics on how to broaden your understanding in this course .</p>
                                    <div className="course_action_btn">
                                        <button className="edit_btn">Edit</button>
                                        <button className="delete_btn">Delete</button>
                                    </div>
                                </div>

                            </div>
                            <div className="courses_card_item">
                                <div className="course_type_img">
                                    <img src={Txt} alt="" />
                                </div>
                                <img src={Course1} alt="" />

                                <div className="course_detail">
                                    <h2>Mathematics</h2>
                                    <p>Learn all topics on how to broaden your understanding in this course .</p>
                                    <div className="course_action_btn">
                                        <button className="edit_btn">Edit</button>
                                        <button className="delete_btn">Delete</button>
                                    </div>
                                </div>

                            </div>
                            <div className="courses_card_item">
                                <div className="course_type_img">
                                    <img src={Json} alt="" />
                                </div>
                                <img src={Course1} alt="" />

                                <div className="course_detail">
                                    <h2>Mathematics</h2>
                                    <p>Learn all topics on how to broaden your understanding in this course .</p>
                                    <div className="course_action_btn">
                                        <button className="edit_btn">Edit</button>
                                        <button className="delete_btn">Delete</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}

                    {tab2 && (
                        <div className="courses_card_wrapper">
                            <div className="courses_card_item">
                                <div className="course_type_img">
                                    <img src={Doc} alt="" />
                                </div>
                                <img src={Course1} alt="" />

                                <div className="course_detail">
                                    <h2>Mathematics</h2>
                                    <p>Learn all topics on how to broaden your understanding in this course .</p>
                                    <div className="course_action_btn">
                                        <button className="edit_btn">Edit</button>
                                        <button className="delete_btn">Delete</button>
                                    </div>
                                </div>

                            </div>
                            <div className="courses_card_item">
                                <div className="course_type_img">
                                    <img src={Doc} alt="" />
                                </div>
                                <img src={Course1} alt="" />

                                <div className="course_detail">
                                    <h2>Mathematics</h2>
                                    <p>Learn all topics on how to broaden your understanding in this course .</p>
                                    <div className="course_action_btn">
                                        <button className="edit_btn">Edit</button>
                                        <button className="delete_btn">Delete</button>
                                    </div>
                                </div>

                            </div>
                            <div className="courses_card_item">
                                <div className="course_type_img">
                                    <img src={Doc} alt="" />
                                </div>
                                <img src={Course1} alt="" />

                                <div className="course_detail">
                                    <h2>Mathematics</h2>
                                    <p>Learn all topics on how to broaden your understanding in this course .</p>
                                    <div className="course_action_btn">
                                        <button className="edit_btn">Edit</button>
                                        <button className="delete_btn">Delete</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}

                    {tab3 && (
                        <div className="courses_card_wrapper">
                            <div className="courses_card_item">
                                <div className="course_type_img">
                                    <img src={Txt} alt="" />
                                </div>
                                <img src={Course1} alt="" />

                                <div className="course_detail">
                                    <h2>Mathematics</h2>
                                    <p>Learn all topics on how to broaden your understanding in this course .</p>
                                    <div className="course_action_btn">
                                        <button className="edit_btn">Edit</button>
                                        <button className="delete_btn">Delete</button>
                                    </div>
                                </div>

                            </div>
                            <div className="courses_card_item">
                                <div className="course_type_img">
                                    <img src={Txt} alt="" />
                                </div>
                                <img src={Course1} alt="" />

                                <div className="course_detail">
                                    <h2>Mathematics</h2>
                                    <p>Learn all topics on how to broaden your understanding in this course .</p>
                                    <div className="course_action_btn">
                                        <button className="edit_btn">Edit</button>
                                        <button className="delete_btn">Delete</button>
                                    </div>
                                </div>

                            </div>
                            <div className="courses_card_item">
                                <div className="course_type_img">
                                    <img src={Txt} alt="" />
                                </div>
                                <img src={Course1} alt="" />

                                <div className="course_detail">
                                    <h2>Mathematics</h2>
                                    <p>Learn all topics on how to broaden your understanding in this course .</p>
                                    <div className="course_action_btn">
                                        <button className="edit_btn">Edit</button>
                                        <button className="delete_btn">Delete</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}

                    {tab4 && (
                        <div className="courses_card_wrapper">
                            <div className="courses_card_item">
                                <div className="course_type_img">
                                    <img src={Json} alt="" />
                                </div>
                                <img src={Course1} alt="" />

                                <div className="course_detail">
                                    <h2>Mathematics</h2>
                                    <p>Learn all topics on how to broaden your understanding in this course .</p>
                                    <div className="course_action_btn">
                                        <button className="edit_btn">Edit</button>
                                        <button className="delete_btn">Delete</button>
                                    </div>
                                </div>

                            </div>
                            <div className="courses_card_item">
                                <div className="course_type_img">
                                    <img src={Json} alt="" />
                                </div>
                                <img src={Course1} alt="" />

                                <div className="course_detail">
                                    <h2>Mathematics</h2>
                                    <p>Learn all topics on how to broaden your understanding in this course .</p>
                                    <div className="course_action_btn">
                                        <button className="edit_btn">Edit</button>
                                        <button className="delete_btn">Delete</button>
                                    </div>
                                </div>

                            </div>
                            <div className="courses_card_item">
                                <div className="course_type_img">
                                    <img src={Json} alt="" />
                                </div>
                                <img src={Course1} alt="" />

                                <div className="course_detail">
                                    <h2>Mathematics</h2>
                                    <p>Learn all topics on how to broaden your understanding in this course .</p>
                                    <div className="course_action_btn">
                                        <button className="edit_btn">Edit</button>
                                        <button className="delete_btn">Delete</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}

                    <TopClassesAndPerformers />

                </div>
            </div>

            <div className="mobile-view">
                <img src={Logo} alt="assim-logo" />
                <MenuIcon className="hamburger" onClick={handleClick} />
            </div>

            {open && <div className="overlay" />}
        </div>
    );
};

export default Courses;

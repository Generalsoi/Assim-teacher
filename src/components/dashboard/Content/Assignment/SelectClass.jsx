import React, { useState } from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import Sidebar from "../../Sidebar/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../../assets/images/Logo.png";
import "./Assignment.css";
import useAxiosGetWithoutToken from "../../../../customHooks/useAxiosGetWithoutToken";
import { accessToken } from "../../../../config";
import { getPostedDate, shortenText } from "../../../../functions";
import { Link } from "react-router-dom";

const SelectClass = () => {
  const [activeMenu, setActiveMenu] = useState("menu1");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [recentClassContents, setRecentClassContents] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const ownerId = userInfo.user.id;

  const { response } = useAxiosGetWithoutToken({
    method: "get",
    url: "classes?ownerId=" + ownerId + "&access_token=" + accessToken,
  });

  React.useEffect(() => {
    if (response) {
      setRecentClassContents(response.rows);
    }
  }, [response]);

  return (
    <>
      <div className="dashboard">
        <div className={open ? "sidebar-mobile open" : "sidebar"}>
          <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>
        <div className="content">
          <div className="classes">
            <StudentDashboardHeader />

            <div className="welcome-message">
              <h2>Select Class</h2>
            </div>
            <br></br>

            <div className="classess-div">
              {recentClassContents.map((content) => (
                <Link
                  to={`/assignments?class=${content.id}`}
                  className="select-class"
                  key={content.id}
                >
                  <div>
                    <p>{shortenText(content.name, 15)}</p>
                    <h4>{shortenText(content.description, 35)}</h4>
                    <h5>{getPostedDate(content.createdAt)}</h5>
                  </div>
                </Link>
              ))}
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

export default SelectClass;

import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ClassOneImg from "../../../../assets/images/classone.png";
import { accessToken } from "../../../../config";
import useAxiosGetWithoutToken from "../../../../customHooks/useAxiosGetWithoutToken";
import { getPostedDate, shortenText } from "../../../../functions";
import BackdropLoader from '../../../Loader/BackdropLoader';


const RecentlyAdded = () => {
  const [recentClassContents, setRecentClassContents] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const ownerId = userInfo.user.id;
  const tutor = userInfo.user.name;

  const { response, loading } = useAxiosGetWithoutToken({
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
      {loading && <BackdropLoader />}
      <React.Fragment>
        <h5 className="class-section-heading">Recently Added</h5>
        <div className="single-classes">
          {recentClassContents.map((content) => (
            <div className="single-class" key={content.id}>
              <div className="class-image">
                <img src={ClassOneImg} alt={content.name} />
              </div>
              <h5 className="class-title">{shortenText(content.name, 15)}</h5>
              <div className="class-tutor">
                <div>
                  <PersonIcon className="person-icon" />
                  <p className="class-tutor-name">{shortenText(tutor, 10)}</p>
                </div>
                <div className="class-length">
                  <p>{getPostedDate(content.createdAt)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    </>
  );
};

export default RecentlyAdded;

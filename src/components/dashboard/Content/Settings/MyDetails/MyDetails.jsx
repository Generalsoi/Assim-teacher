import React, { useEffect, useState } from "react";
import "./MyDetails.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";
import { apiEndpoint } from "../../../../../config";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import useAxiosGet from "../../../../../customHooks/useAxiosGet";

const MyDetails = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")

  const { userData } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userData === null) {
      window.location.href = "/sign-in";
    }
  }, [userData]);
  const { response } = useAxiosGet({
    method: 'get',
    url: `users/me`,
  });

  React.useEffect(() => {
    if (response) {
      console.log(response)
      const splitName = response.name.split(" ")
      setFirstname(splitName[0])
      setLastname(splitName[1])
      setEmail(response.email)
    }
  }, [response]);

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    let firstname = event.target.elements.firstname.value;
    let lastname = event.target.elements.lastname.value;
    let email = event.target.elements.email.value;

    const user = {
      "email": email,
      "name": firstname + " " + lastname,
    };

    try {
      await axios({
        method: 'put',
        url: `${apiEndpoint}users/${userInfo.user.id}`,
        data: user,
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + userInfo.token
        },
      })
      toast.success("Profile Updated successfuly")
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="my-details">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <div className="personal-info-heading">
                  <div>
                    <h5>Personal Info</h5>
                    <p>Update your photo and personal details here.</p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            <TableCell component="th" scope="row">
              <form onSubmit={handleProfileUpdate}>
                <div className="created-personal-data">
                  <div className="name">
                    <p>Name</p>
                  </div>
                  <div className="name-inputs">
                    <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    <input type="text" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                  </div>
                </div>
                <br />
                <br />

                <div className="created-personal-data">
                  <div className="email">
                    <p>Email Address</p>
                  </div>
                  <div className="email-inputs">
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
                  </div>
                </div>
                <br />
                <br />

                <div className="created-personal-data">
                  <div className="your-photo">
                    <h5>Your photo</h5>
                    <p>This will be displayed on your profile.</p>
                  </div>
                  <div className="your-photo-inputs">
                    <input type="file" name="picture" />
                  </div>
                </div>
                <div className="created-password-data-buttons">
                  <div className="update-password">
                    <button className="cancel-btn">Cancel</button>
                    <button className="update-password-btn" type="submit">Update</button>
                  </div>
                </div>
              </form>
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyDetails;

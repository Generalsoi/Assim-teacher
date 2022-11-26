import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  CLEAR_ERRORS,
  CLEAR_STATE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
} from "./AuthTypes";
import axios from "axios";
import { accessToken, apiEndpoint } from "../../config";

export const createUser = (body) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_USER_REQUEST
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    body = {
      ...body,
      "name": body.firstname + " " + body.lastname,
      "profileType": "teacher"
    }

    const { data } = await axios.post(`${apiEndpoint}users?access_token=${accessToken}`, body, config);

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data,
    });
    localStorage.setItem('token', data.token)
    localStorage.setItem('userId', data.user.id)

  } catch (error) {
    dispatch({
      type: CREATE_USER_FAIL,
      payload:
        error.response && error.response.data.message
    });
  }
};

export const register = (body) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      },
    };

    body = {
      ...body,
      "userId": localStorage.getItem('userId')
    }

    const { data } = await axios.post(`${apiEndpoint}teachers?access_token=${accessToken}`, body, config);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    localStorage.removeItem("token")
    localStorage.removeItem("userId")

  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
    });
  }
};

export const login = (body) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const { data } = await axios.post(`${apiEndpoint}auth/new?access_token=${accessToken}`, body);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));

  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
    });
  }
};

export const logout = () => (dispatch) => {
  sessionStorage.removeItem("userToken");
  dispatch({ type: USER_LOGOUT });
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const clearState = () => async (dispatch) => {
  dispatch({ type: CLEAR_STATE });
};
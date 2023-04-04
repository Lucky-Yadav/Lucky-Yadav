// import axios from "axios";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  SET_ACTIVE_NAV,
  SET_STICKY_NAV,
} from "./actiontype";

// Action to set the state to loading when login is initiated
export const loginloading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

// Action to set the state to success when login is successful
export const sucessLogin = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

// Action to set the state to error when login fails
export const loginerror = () => {
  return {
    type: LOGIN_ERROR,
  };
};

// Action to handle logout and set the state back to initial state
export const logoutsuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

//
//

// export const SET_ACTIVE_NAV = "SET_ACTIVE_NAV";

export const setActiveNav = (nav) => ({
  type: SET_ACTIVE_NAV,
  payload: nav,
});
export const setstickynav = (nav) => ({
  type: SET_STICKY_NAV,
  payload: nav,
});

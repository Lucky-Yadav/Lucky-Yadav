import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actiontype";
import { SET_ACTIVE_NAV } from "./actiontype";
import { SET_STICKY_NAV } from "./actiontype";
//initial state of the login object
const init = {
  loading: false,
  error: false,
  token: "",
};

const initialState = {
  activeNav: "#home",
};
const initialStateNav = {
  stickynav: "false",
};

export const events = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_NAV:
      console.log(action.payload);
      return {
        ...state,
        activeNav: action.payload,
      };
    default:
      return state;
  }
};
export const nav_events = (state = initialStateNav, action) => {
  switch (action.type) {
    case SET_STICKY_NAV:
      return {
        ...state,
        stickynav: action.payload,
      };
    default:
      return state;
  }
};
// Reducer function to handle the actions related to login and logout
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      //When the login process is initiated, set loading state to true
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      //When the login is successful, update the loading and error state and update the token,username and email
      return {
        ...state,
        loading: false,
        error: false,
        token: payload.token,
        username: payload.user.username,
        email: payload.user.email,
      };
    case LOGIN_ERROR:
      //When login fails, set error state to true
      return {
        ...state,
        loading: false,
        error: true,
      };
    case LOGOUT_SUCCESS:
      //When the logout is successful, reset the state to initial state
      return init;

    default:
      //return the initial state
      return state;
  }
};

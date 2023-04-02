import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginloading, sucessLogin } from "../../store/auth/action";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  // import the token from the redux store
  const token = useSelector((state) => state.auth.token);
  // import the useDispatch hook
  const dispatch = useDispatch();
  // useState hook to keep track of the login form data
  const [loginData, setloginData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // function to handle changes on the input fields
  const handlechange = (e) => {
    const { name, value } = e.target;
    setloginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // function to handle login
  const handlelogin = () => {
    // call the loginloading action
    dispatch(loginloading());
    // make a post request to the server
    axios({
      method: "post",
      url: "https://ideotic-backend-gilt.vercel.app/users/signup",
      data: loginData,
    })
      .then((res) => {
        // call the sucessLogin action and pass the token as an argument
        dispatch(sucessLogin(res.data.token));
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  };
  // if the token exists, navigate to the homepage
  if (token) {
    return <Navigate to={"/"} />;
  }
  // render the login form and the login button
  return (
    <div>
      <div className="login_body">
        <div className="boxb">
          <span className="borderLineB"></span>
          <form action="">
            <h2>Sign Up</h2>
            {Object.keys(loginData).map((el) => (
              <div className="inputBox" key={el}>
                <input
                  value={loginData[el]}
                  onChange={handlechange}
                  name={el}
                  id={el}
                  required
                />
                <span>{el.toLocaleUpperCase()}</span>
                <i></i>
              </div>
            ))}
            <div className="links">
              <Link></Link>
              <Link to={"/login"}>Log in</Link>
            </div>
            {/* <input type="submit" value="login" /> */}
            <div className="button">
              <Button onClick={handlelogin} variant="outlined">
                {token ? "log out" : "Sign up"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

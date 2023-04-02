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

const Login = () => {
  //Retrieve the auth token from the store
  const token = useSelector((state) => state.auth.token);
  //Allows the component to use the Redux Dispatch function
  const dispatch = useDispatch();
  //State hook to manage the loginData object
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  //Function handlechange, to update the loginData state object
  const handlechange = (e) => {
    const { name, value } = e.target;
    setloginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //Function to handle the login process
  const handlelogin = () => {
    console.log(1);
    //dispatch an action to change the loading state of the component
    dispatch(loginloading());
    axios({
      method: "post",
      url: "https://ideotic-backend-gilt.vercel.app/users/signin",
      data: loginData,
    })
      .then((res) => {
        //dispatch an action to change the login state after a successful login
        dispatch(sucessLogin(res.data));
        let token = res.data.token;
        //store the login data in localstorage
        localStorage.setItem("logindata", JSON.stringify(loginData));
        console.log(res, token);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  };
  //check if the user is already logged in and redirect if true
  if (token) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <div className="login_body">
        <div className="boxa">
          <span className="borderLine"></span>
          <form action="">
            <h2>Log in</h2>
            {Object.keys(loginData).map((el) => (
              <div className="inputBox" key={el}>
                <div className="login_input">
                  <input
                    value={loginData[el]}
                    onChange={handlechange}
                    name={el}
                    id={el}
                    required
                    type={el}
                  />
                  <span>{el.toLocaleUpperCase()}</span>
                  <i></i>
                </div>
              </div>
            ))}
            <div className="links">
              <Link>Forgot Password</Link>
              <Link to={"/signup"}>Sign up</Link>
            </div>
            {/* <input type="submit" value="login" /> */}
            <div className="button">
              <br />
              <Button
                className="Login_Button"
                onClick={handlelogin}
                variant="outlined"
                // disabled
                // endIcon={<SendIcon />}
              >
                {token ? "log out" : "login"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

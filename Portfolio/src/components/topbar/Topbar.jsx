import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { VscProject } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { sucessLogin } from "../../store/auth/action";
import { logoutsuccess } from "../../store/auth/action";
// import { RiServiceLine } from 'react-icons/ri';
// import { BiMessageSquareDetail } from 'react-icons/bi';
import { RiContactsBookLine } from "react-icons/ri";
import "./topbar.css";

const Topbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [stickynav, setstickynav] = useState("false");

  const events = useSelector((state) => state.auth);
  // const Dispatch = useDispatch();
  console.log(events);

  var timeout;

  document.onmousemove = function () {
    if (timeout <= 5000) {
      setstickynav("false");
    }
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      setstickynav("true");
    }, 8000);
  };
  document.onscroll = function () {
    if (timeout <= 5000) {
      setstickynav("false");
    }
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      setstickynav("true");
    }, 8000);
  };
  // useEffect hook to check for login data in localStorage
  useEffect(() => {
    let logindata = JSON.parse(localStorage.getItem("logindata"));
    if (logindata) {
      // setisprocessing(true);
      axios({
        method: "post",
        url: "https://ideotic-backend-gilt.vercel.app/users/signin",
        data: logindata,
      }).then((res) => {
        dispatch(sucessLogin(res.data));
        console.log(res, token);
        // setisprocessing(false);
      });
    }
    // eslint-disable-next-line
  }, []);

  // useSelector hook to get the token from the Redux store
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  // function to handle logout button click
  const handlelogout = () => {
    // setisprocessing(true);
    localStorage.removeItem("logindata");
    dispatch(logoutsuccess());
    // setisprocessing(false);
  };

  return (
    <>
      <nav className="navb">
        <a
          href="/#home"
          onClick={() => setActiveNav("#home")}
          className={activeNav === "#home" ? "active" : ""}
        >
          <p className="p2">HOME</p>
        </a>
        <div className="right_nav">
          <a
            href="/#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <p className="p2">ABOUT</p>
          </a>
          <a
            href="/#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            <p className="p2">SKILLS</p>
          </a>
          <a
            href="/#portfolio"
            onClick={() => setActiveNav("#portfolio")}
            className={activeNav === "#portfolio" ? "active" : ""}
          >
            <p className="p2">PROJECTS</p>
          </a>
          <a
            href="/#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <p className="p2">Contact</p>
          </a>
          {token ? (
            <div className="registration">
              <Link>
                <Box
                  onClick={handlelogout}
                  style={{ cursor: "pointer" }}
                  sx={{ flexGrow: 0 }}
                >
                  Log Out
                </Box>
              </Link>
            </div>
          ) : (
            <div className="registration">
              <Link
                to="/login"
                onClick={() => setActiveNav("#login")}
                className={activeNav === "#login" ? "active" : ""}
              >
                <Box style={{ cursor: "pointer" }} sx={{ flexGrow: 0 }}>
                  Login
                </Box>
              </Link>
              <Link
                to="/signup"
                onClick={() => setActiveNav("#Signup")}
                className={activeNav === "#Signup" ? "active" : ""}
              >
                <Box style={{ cursor: "pointer" }} sx={{ flexGrow: 0 }}>
                  Sign up
                </Box>
              </Link>
            </div>
          )}
        </div>
      </nav>
      <div className={stickynav === "false" ? " stickynav " : "hidden"}>
        <nav className="jss1">
          <a
            href="/#home"
            className={activeNav === "#home" ? "active jssb" : "jssb"}
          >
            <AiOutlineHome size={15} />
            <p className="p1">HOME</p>
          </a>
          <a
            href="/#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active jssb" : "jssb"}
          >
            <AiOutlineUser size={15} />
            <p className="p1">ABOUT</p>
          </a>
          <a
            href="/#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active jssb" : "jssb"}
          >
            <BiBook size={15} />
            <p className="p1">SKILLS</p>
          </a>
          <a
            href="/#portfolio"
            onClick={() => setActiveNav("#portfolio")}
            className={activeNav === "#portfolio" ? "active jssb" : "jssb"}
          >
            <VscProject size={15} />
            <p className="p1">PROJECTS</p>
          </a>
          <a
            href="/#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active jssb" : "jssb"}
          >
            {" "}
            <RiContactsBookLine size={15} />
            <p className="p1">CONTACTS</p>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Topbar;

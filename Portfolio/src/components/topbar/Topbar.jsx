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
import {
  setActiveNav,
  sucessLogin,
  setstickynav,
} from "../../store/auth/action";
import { logoutsuccess } from "../../store/auth/action";
// import { RiServiceLine } from 'react-icons/ri';
// import { BiMessageSquareDetail } from 'react-icons/bi';
import { RiContactsBookLine } from "react-icons/ri";
import "./topbar.css";
import { useLocation } from "react-router-dom";

const Topbar = () => {
  // const [activeNav, setActiveNav] = useState("#home");
  // const [stickynav, setstickynav] = useState("false");

  const activeNav = useSelector((state) => state.events.activeNav);
  const stickynav = useSelector((state) => state.nav_events.stickynav);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const Dispatch = useDispatch();
  const DisPatch = useDispatch();
  const [Login_path, setLogin_path] = useState(false);
  // console.log(activeNav);
  // window.location.replace(`/${activeNav}`);

  const [navState, setnavState] = useState(false);
  const location = useLocation();
  // console.log(location.pathname);

  let timeoutId;

  const setNavState = (state) => {
    Dispatch(setActiveNav(state));
    // console.log(activeNav);
  };
  // console.log(stickynav);
  // console.log(setstickynav);

  if (Login_path === false) {
    document.onmousemove = function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        DisPatch(setstickynav("true"));
      }, 8000);

      DisPatch(setstickynav("false"));
    };
    document.onscroll = function () {
      if (timeoutId) {
        DisPatch(setstickynav("false"));
      }
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        DisPatch(setstickynav("true"));
      }, 8000);
    };
  } else {
    DisPatch(setstickynav("true"));
  }

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
    if (location.pathname === "/login") {
      setLogin_path(true);
      setnavState(true);
      DisPatch(setstickynav("true"));
      Dispatch(setActiveNav("#login"));
    } else if (location.pathname === "/signup") {
      setnavState(true);
      Dispatch(setActiveNav("#signup"));
    } else {
      setnavState(false);
      setLogin_path(false);
    }

    // eslint-disable-next-line
  }, [activeNav]);

  // useSelector hook to get the token from the Redux store

  // function to handle logout button click
  const handlelogout = () => {
    // setisprocessing(true);
    localStorage.removeItem("logindata");
    dispatch(logoutsuccess());
    // setisprocessing(false);
  };

  return (
    <>
      <nav className={navState === false ? "navb" : "navb login_active"}>
        <Link
          to={"/#home"}
          onClick={() => setNavState("#home")}
          className={activeNav === "#home" ? "active" : ""}
        >
          <p className="p2">Home</p>
        </Link>
        <div className="right_nav">
          <Link
            to={"/#about"}
            onClick={() => setNavState("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <p className="p2">About</p>
          </Link>
          <Link
            to={"/#experience"}
            onClick={() => setNavState("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            <p className="p2">Skills</p>
          </Link>
          <Link
            to={"/#portfolio"}
            onClick={() => setNavState("#portfolio")}
            className={activeNav === "#portfolio" ? "active" : ""}
          >
            <p className="p2">Projects</p>
          </Link>
          <Link
            to={"#contact"}
            onClick={() => setNavState("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <p className="p2">Contact</p>
          </Link>
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
                onClick={() => setNavState("#login")}
                className={activeNav === "#login" ? "active" : ""}
              >
                <Box style={{ cursor: "pointer" }} sx={{ flexGrow: 0 }}>
                  Login
                </Box>
              </Link>
              <Link
                to="/signup"
                onClick={() => setNavState("#signup")}
                className={activeNav === "#signup" ? "active" : ""}
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
            onClick={() => setNavState("#about")}
            className={activeNav === "#about" ? "active jssb" : "jssb"}
          >
            <AiOutlineUser size={15} />
            <p className="p1">ABOUT</p>
          </a>
          <a
            href="/#experience"
            onClick={() => setNavState("#experience")}
            className={activeNav === "#experience" ? "active jssb" : "jssb"}
          >
            <BiBook size={15} />
            <p className="p1">SKILLS</p>
          </a>
          <a
            href="/#portfolio"
            onClick={() => setNavState("#portfolio")}
            className={activeNav === "#portfolio" ? "active jssb" : "jssb"}
          >
            <VscProject size={15} />
            <p className="p1">PROJECTS</p>
          </a>
          <a
            href="/#contact"
            onClick={() => setNavState("#contact")}
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

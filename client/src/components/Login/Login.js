import React, { useState, useEffect } from "react";
import "./Login.css";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import * as ActionCreators from "../../redux/ActionCreators";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import HOSTURL from "../../Config";

const Login = () => {
  const [username, setUsername] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isUsernameTouched, setIsUsernameTouched] = useState(false);

  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const [isValidForm, setIsValidForm] = useState(false);
  const [buttonIsTouched, setButtonIsTouched] = useState(false);

  const [error, setError] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const navigate = useNavigate();

  const isUserAuth = useSelector((state) => state.userAuthenticated);
  const dispatch = useDispatch();
  const { authenticateUser, showAlert } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  const loginUserHandler = () => {
    setShowSpinner(true);
    setButtonIsTouched(true);
    const loginUser = {
      username,
      password,
    };

    axios
      .post(`${HOSTURL}/admin/login`, loginUser)
      .then((res) => {
        if (res.data.verification) {
          const userDetails = {
            username: res.data.username,
            token: res.data.token,
          };
          const formattedUserDetails = JSON.stringify(userDetails);
          localStorage.setItem("userDetails", formattedUserDetails);
          setError(false);
          setShowSpinner(false);
          authenticateUser(true);
          return;
        } else {
          setError(true);
          setShowSpinner(false);
        }
      })
      .catch((err) => {
        showAlert(true, "#ff0000", "SERVER ERROR", "Something Went Wrong");
        authenticateUser(false);
      });
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
    setIsUsernameTouched(true);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    setIsPasswordTouched(true);
  };

  useEffect(() => {
    if (isUserAuth) {
      navigate("/admin/manage");
    }
  }, [isUserAuth, navigate]);

  useEffect(() => {
    if (username.trim() !== "") {
      setIsValidUsername(true);
    } else {
      setIsValidUsername(false);
    }
  }, [username]);

  useEffect(() => {
    if (password !== "") {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  }, [password]);

  useEffect(() => {
    if (!isValidPassword || !isValidUsername) {
      setIsValidForm(false);
    } else {
      setIsValidForm(true);
    }
  }, [isValidPassword, isValidUsername]);

  return (
    <div className="Login">
      <div className="Login-Wrapper p-4 bg-light">
        <h1 className="text-center display-4">Login</h1>
        {error && (
          <p className="text-center text-danger">wrong username / password</p>
        )}
        {showSpinner && <Spinner />}
        <div className="mb-3">
          <label htmlFor="username" className="form-label lead">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={usernameHandler}
          />
        </div>
        {isUsernameTouched && !isValidUsername && (
          <p className="text-danger">username is required</p>
        )}

        <div className="mb-3">
          <label htmlFor="password" className="form-label lead">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={passwordHandler}
          />
        </div>
        {isPasswordTouched && !isValidPassword && (
          <p className="text-danger">password is required</p>
        )}
        <button
          className="btn btn-outline-primary btn-block"
          onClick={loginUserHandler}
          disabled={!isValidForm}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;

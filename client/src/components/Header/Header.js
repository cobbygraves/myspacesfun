import React from "react";
import { useSelector, useDispatch } from "react-redux";
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../../redux/actionCreators";
import "./header.css";

const Header = () => {
  const isUserAuth = useSelector((state) => state.userAuthenticated);
  const dispatch = useDispatch();
  const { authenticateUser } = bindActionCreators(ActionCreators, dispatch);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          SPACES.FUN
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active lead" aria-current="page" href="/">
                Blog
              </a>
            </li>
            <li className="nav-item" onClick={() => navigate("/vlog")}>
              <a className="nav-link lead">Vlog</a>
            </li>
            <li className="nav-item" onClick={() => navigate("/gallery")}>
              <a className="nav-link lead">Gallery</a>
            </li>
            <li className="nav-item" onClick={() => navigate("/contact")}>
              <a className="nav-link lead">Contact Us</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle lead"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item text-muted">disclaimer</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-muted">privacy policy</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-muted">terms of use</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle lead"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Reviews
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item text-muted">products</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-muted">spaces</a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle lead"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item text-muted">krysevoke</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle lead"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {isUserAuth ? (
                  <>
                    <li
                      onClick={() => {
                        authenticateUser(false);
                        localStorage.removeItem("userDetails");
                        navigate("/");
                      }}
                    >
                      <a className="dropdown-item text-muted">logout</a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li
                      onClick={() => {
                        navigate("/admin/create");
                      }}
                    >
                      <a className="dropdown-item text-muted">create post</a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li onClick={() => navigate("/admin/manage")}>
                      <a className="dropdown-item text-muted">manage posts</a>
                    </li>
                  </>
                ) : (
                  <li onClick={() => navigate("/login")}>
                    <a className="dropdown-item text-muted">login</a>
                  </li>
                )}
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;

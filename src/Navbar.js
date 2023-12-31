import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "./images/movies-browser-low-resolution-logo-color-on-transparent-background.png";
import Footer from "./Footer";
import "./App.css";
import React, { useState } from "react";

function Navbar({ searchText, setSearchText }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function updateSearch(event) {
    navigate("/moviecard");
    setSearchText(event.target.value);
    // console.log(searchText)
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Showing results for ${searchText}`);
  }
  if (isOpen) {
    var collapse = 'open'
  } else {
    var collapse = 'close' 
  }
  const collapseClass = `${collapse} navbar-collapse drop`
  return (
    <>
      <div className="page-wrap text-light pb-5">
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">
              <img style={{ width: "15rem" }} src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={collapseClass}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <form onSubmit={handleSubmit} className="d-flex" role="search">
                <input
                  type="search"
                  className="input"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchText}
                  onChange={updateSearch}
                />
                <input
                  className="button--submit"
                  value="Search"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Navbar;

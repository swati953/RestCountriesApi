import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    let { mode, toggleMode } = this.props;
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} py-3 fixed-top`}>
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <div className={`form-check form-switch text-${
                  mode === "dark" ? "light" : "dark"
                }`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={toggleMode}
                  id="flexSwitchCheckDefault"
                />
                <label
                  className={`form-check-label`} htmlFor="flexSwitchCheckDefault" style={{color:`${mode === "dark" ? "dark" : "light"}`}}>
                  Dark mode enable
                </label>  
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

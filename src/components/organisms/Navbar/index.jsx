import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Button } from "antd";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="nav-logo-link">
        <img src="/images/Logo.png" alt="Logo" className="logo-img" />
        <div>
          <Link className="nav-link" to="/find-jobs">
            Find Jobs
          </Link>
          <Link className="nav-link" to="/find-jobs">
            Browse Companies
          </Link>
        </div>
      </div>
      <div className="auth">
        <Button className="btn-link" type="link">
          Login
        </Button>
        <Button type="primary">Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;

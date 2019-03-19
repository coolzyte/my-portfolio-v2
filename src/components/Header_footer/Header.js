import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

import { Logo } from "../Logo/Logo";

class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          background: "#EDEDED",
          boxShadow: "none",
          padding: "10px 0",
          borderBottom: "2px solid rgba(0, 0, 0, 0.1)"
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">
              <Logo link={true} linkTo="/" width="70px" height="70px" />
            </div>
          </div>
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/about">
            <Button color="inherit">About</Button>
          </Link>
          <Link to="/portfolio">
            <Button color="inherit">Portfolio</Button>
          </Link>
          <Link to="/blog">
            <Button color="inherit">Blog</Button>
          </Link>
          <Link to="/contact">
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;

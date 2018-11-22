import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../Toolbar/SideDrawer/SideDrawer";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: false,
    percentage: 0
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Container}>{this.props.children}</main>
        <Footer />
      </Aux>
    );
  }
}

export default Layout;

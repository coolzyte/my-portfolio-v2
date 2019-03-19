import React, { Component } from "react";
import Aux from "./Aux";
import Toolbar from "../components/Toolbar/Toolbar";
import SideDrawer from "../components/Toolbar/SideDrawer/SideDrawer";
import Footer from "../components/Footer/Footer";

class Layout extends Component {
  state = {
    showSideDrawer: false
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
        <main>{this.props.children}</main>
        <Footer />
      </Aux>
    );
  }
}

export default Layout;

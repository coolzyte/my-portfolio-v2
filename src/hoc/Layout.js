import React, { Component } from "react";
import Aux from "./Aux";
import Header from "../components/Header_footer/Header";
import Footer from "../components/Header_footer/Footer/Footer";

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
        {/* <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        /> */}
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </Aux>
    );
  }
}

export default Layout;

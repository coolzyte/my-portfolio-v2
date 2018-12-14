import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Layout from "../Layout/Layout";
import Banner from "../../components/Banner/Banner";
import Map from "../Map/Map";
import Form from "../Form/Form";
import classes from "../Pages/ContactPage.module.css";

class ContactPage extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Banner name="Get In Touch" />
          <section className={classes.Contact}>
            <div className="contact__area">
              <div className="contact__container">
                <Map />
                <Form />
              </div>
            </div>

            <div className="contact__support">
              <div className="grid">
                <div className="desc">
                  <h6>Contact Number</h6>
                  <span>+1 222 3333</span>
                </div>

                <div className="desc">
                  <h6>Address</h6>
                  <span>Address will be here</span>
                </div>

                <div className="desc">
                  <h6>Mail Us</h6>
                  <span>info@coolzyte.com</span>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </Aux>
    );
  }
}

export default ContactPage;

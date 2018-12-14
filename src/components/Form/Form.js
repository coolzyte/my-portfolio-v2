import React from "react";
import Button from "../../components/Button/Button";
import classes from "../Form/Form.module.css";

const Form = props => (
  <div className={classes.Info}>
    <h3>
      <span>Want to connect</span> with us
      <br /> Here is our <span> contact information</span>
    </h3>
    <form
      id="contact-form"
      className={classes.Form}
      action="mail.php"
      method="post"
    >
      <h6>Send us a message</h6>
      <div className={classes.Address}>
        <div className="address__name">
          <label>Name</label>
          <input className={classes.Control} name="name" type="text" />
        </div>
        <div className="address__email">
          <label>Email</label>
          <input className={classes.Control} name="email" type="email" />
        </div>
        <label>Message</label>
        <div className="address__textarea">
          <textarea name="message" className={classes.Control} />
        </div>
      </div>
      <div className="footer-content">
        <div className="send-email">
          <Button name="Send Now" />
        </div>
      </div>
    </form>
    <p className="form-message" />
  </div>
);

export default Form;

import React from "react";
import Button from "../../components/Button/Button";

const Form = props => (
  <div className="contact__info">
    <h3 className="contact__title">
      <span>Want to connect</span> with us
      <br /> Here is our <span> contact information</span>
    </h3>
    <form
      id="contact-form"
      className="contact__form"
      action="mail.php"
      method="post"
    >
      <h6>Send us a message</h6>
      <div className="address">
        <div className="address__name">
          <label>Name</label>
          <input className="address__control" name="name" type="text" />
        </div>
        <div className="address__email">
          <label>Email</label>
          <input className="address__control" name="email" type="email" />
        </div>
        <label>Message</label>
        <div className="address__textarea">
          <textarea name="message" className="address__control" />
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

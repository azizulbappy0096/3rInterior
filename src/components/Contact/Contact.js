import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (e) => {};

  return (
    <div className="contact" id="contactUs">
      <h1> Connecting with us </h1>

      <form className="contact__form">
        <div className="contact__input">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name..."
            onChange={handleInput}
          />
          <input
            type="text"
            name="email"
            value={email}
            placeholder="E-mail..."
            onChange={handleInput}
          />
        </div>
        <br />
        <input
          type="text"
          name=""
          value={subject}
          placeholder="Subject..."
          onChange={handleInput}
        />
        <br />
        <textarea
          name="textArea"
          value={message}
          placeholder="Your message..."
          rows="25"
          onChange={handleInput}
        />
      </form>
    </div>
  );
}

export default Contact;

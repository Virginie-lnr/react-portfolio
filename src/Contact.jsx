import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const isEmail = () => {
  //   let email = document.getElementById("not-mail"); 
  //   let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   if (email.match(regex)) {
  //     email.style.display = "none";
  //     return true;
  //   }
  // }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && message) {

      sendFeedback("template_k9cicoz", {
        name,
        company,
        phone,
        email,
        message,
      });
    } else {
      console.log('error');
    }
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("service_0l9zyvq", "template_k9cicoz", variables)
      .then((res) => {
        console.log('success !');
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
          "An error occurred, please try again later.")
  };
  return (
    <div className="content-wrapper">
      <form className="contact-form">
        <h2>Contact me</h2>
        <div className="form-content">
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="nom *"
            value={name}
            autoComplete="off"
          />
          <input
            type="text"
            id="company"
            name="company"
            onChange={(e) => setCompany(e.target.value)}
            placeholder="société"
            value={company}
          />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="téléphone"
            value={phone}
          />
          <div className="email-content">
            <label className="not-mail">Email not valid</label>
            <input
              type="mail"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email *"
              value={email}
              autoComplete="off"
            />
          </div>
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message *"
            value={message}
          />
        </div>
        <input
          className="button"
          type="button"
          value="Envoyer"
          onClick={handleSubmit}
        />
        <div className="form-message"></div>
      </form>
    </div>
  );
}
export default Contact;
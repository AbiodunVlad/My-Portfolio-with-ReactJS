import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Send from "../../Buttons/Send";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    const serviceId = "service_t9o2qmt";
    const templateId = "template_ilhd5lr";
    const publicKey = "RKZcexxzKS4a5uCut";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Abiodun Omonijo",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Message has been sent!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Error sending message.", error);
      });
  };

  return (
    <div className="contact" id="contact">
      <h2 className="contactH2">Contact Me</h2>

      <div className="contactDiv">
        <form className="form" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            className="contactInput"
            value={name}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="contactInput"
            value={email}
          />

          <textarea
            type="text"
            placeholder="Message"
            name="message"
            required
            onChange={(e) => setMessage(e.target.value)}
            className="contactInput textarea"
            value={message}
          />

          <Send />
        </form>

        <div className="socialContact">
          <a
            href="https://wa.me/+2348138672689"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="socialIcon whatsapp"
            />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/abiodun-omonijo/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="socialIcon linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

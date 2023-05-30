import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [mail, setMail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const baseUrl = "http://localhost:5000";

  async function submitHandler(e: any) {
    e.preventDefault();
    const data = { mail, title, message };
    let trimmedMail = mail.trim();

    let messageRegEx = new RegExp(trimmedMail, "i");

    if (!messageRegEx.test(message)) {
      alert("Message should end or atleast contain your email address");
      return;
    }

    if (mail && title && message) {
      await axios.post(`${baseUrl}/send_email`, data);
      alert("Mail Sent");
      setMail("");
      setTitle("");
      setMessage("");
      return;
    }
    return alert("fill in all fields");
  }

  return (
    <div className={styles["contact-form"]}>
      <h3>Contact Form</h3>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          placeholder="example@email.com"
          id="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          required
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="title goes here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="let me know what you think"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <p>Ensure you end your MESSAGE with same email</p>
        <motion.button whileTap={{ scale: 0.8 }}> SEND</motion.button>
      </form>
    </div>
  );
}

export default ContactForm;

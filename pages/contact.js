import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const submitHandller = () => {
    if (
      name.length > 0 &&
      email.length > 0 &&
      mobile.length > 0 &&
      message.length > 0
    ) {
      const data = new FormData();
      data.append("name", name);
      data.append("email", email)
      data.append("mobile", mobile)
      data.append("message", message)
      fetch("https://formspree.io/f/xyyooypw", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then((res)=>{
           if(res.ok){
             toast.success("THANKS FOR CONTACTING US");
             setName('')
             setEmail('')
             setMobile('')
             setMessage('')
           }else{
             toast.error("Something Happened Wrong! Try again")
           }
      })
    } else {
      toast.error("All Fields Are Required !");
    }
  };
  return (
    <div className={styles.root}>
      <h1>Contact Us</h1>
      {name.length > 1 && <p>Thanks For Contacting {name}</p>}
      <div className={styles.form}>
        <TextField
          label="Full Name"
          required
          fullWidth
          className={styles.field}
          placeholder="KSR Blue Metals"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          label="Email"
          required
          type={"email"}
          fullWidth
          className={styles.field}
          placeholder="contact@ksr.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          type="tel"
          required
          fullWidth
          className={styles.field}
          label="Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
        />
        <TextField
          multiline
          rows={5}
          required
          label="Your Message"
          fullWidth
          className={styles.field}
          placeholder="your message for us"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <Button variant="contained" onClick={submitHandller}>
          Send
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;

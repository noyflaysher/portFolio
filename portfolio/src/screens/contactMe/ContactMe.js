import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./contactMe.css";
import { navigationLinks } from "../../helpers/navigationLinks";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SocialMedia from "./SocialMedia";

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx}>
      <a href={e.ref}>{e.name}</a>
    </p>
  ));
}

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState();
  const [nameError, setNameError] = useState();
  const [messageError, setMessageError] = useState();
  const [formIsValid, setFormIsValid] = useState();
  const form = useRef();

  let result = 0;

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  const changeMessageHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (name.length > 0) {
      setNameError(false);
      result++;
    } else setNameError(true);

    if (/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError(false);
      result++;
    } else setEmailError(true);

    if (message.length > 0) {
      setMessageError(false);
      result++;
    } else setMessageError(true);

    if (result === 3) sendEmail(event);

    setName("");
    setEmail("");
    setMessage("");
  };

  const sendEmail = (e) => {
    console.log("send");

    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_5eb8f7e", form.current, "T_nEY98BzJbsxVeUC")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="x">
      <div className="contactMe__container" id="contact">
        <h1 className="contactMe__headline">CONTACT ME</h1>
        <div>
          <form ref={form}>
            <div className="contactMe__input">
              <TextField
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                label="Full Name"
                onChange={changeNameHandler}
                name="name"
                value={name}
                error={nameError}
                fullWidth
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    color: "black",
                    fontFamily: "inherit",
                    fontSize: "1.1rem",
                  },
                }}
              />
            </div>
            <div className="contactMe__input">
              <TextField
                variant="outlined"
                id="input-with-icon-textfield"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                label="Email"
                name="email"
                error={emailError}
                value={email}
                onChange={changeEmailHandler}
                fullWidth
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    color: "black",
                    fontFamily: "inherit",
                    fontSize: "1.1rem",
                  },
                }}
              />
            </div>
            <div className="contactMe__input">
              <TextField
                id="input-with-icon-textfield"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <EditIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                label="Message"
                name="message"
                error={messageError}
                value={message}
                onChange={changeMessageHandler}
                multiline
                fullWidth
                row={10}
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    height: "200px",
                    color: "black",
                    fontFamily: "inherit",
                    fontSize: "1.1rem",
                  },
                }}
              />
            </div>
            <Button
              onClick={submitHandler}
              type="submit"
              size="md"
              variant="outlined"
              sx={{
                mt: 1.7,
                mb: 2,
                width: "90px",
                fontWeight: "bold",
                border: "3px",
                fontSize: "1.1rem",
              }}
              endIcon={<KeyboardArrowRightIcon />}
            >
              Send
            </Button>
            {/* <button
            // disabled={!formIsValid}
            onClick={submitHandler}
            className="contactMe__button"
            type="submit"
          >
            Submit
          </button> */}
          </form>
        </div>
      </div>
      <SocialMedia />
      {/* <div className="socialMedia" id="#social-media">
        <h1>Connect with me</h1>
        <div className="social">
          <LinkedInIcon />
          <GitHubIcon />
          <FacebookOutlinedIcon />
        </div>
      </div> */}
    </div>
  );
}

export default ContactMe;

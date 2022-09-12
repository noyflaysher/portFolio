import React from "react";
import "./contactMe.css";
import { navigationLinks } from "../../helpers/navigationLinks";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx}>
      <a href={e.ref}>{e.name}</a>
    </p>
  ));
}

function ContactMe() {
  return (
    <div className="contactMe__container" id="contact">
      <h1 className="contactMe__headline">CONTACT ME</h1>
      <div>
        <form>
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
              name="name"
              fullWidth
              sx={{
                "& > :not(style)": {
                  m: 1,
                  //   width: "500px",
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
              fullWidth
              sx={{
                "& > :not(style)": {
                  m: 1,
                  //   width: "500px",
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
              multiline
              fullWidth
              row={10}
              sx={{
                "& > :not(style)": {
                  m: 1,
                  //   width: "500px",
                  height: "200px",
                  color: "black",
                  fontFamily: "inherit",
                  fontSize: "1.1rem",
                },
              }}
            />
          </div>

          <button className="contactMe__button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;

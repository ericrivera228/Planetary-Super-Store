// React imports
import React from "react";

// Material UI imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Local imports
import HidableTextField from "./HidableTextField";
import "./SignInPage.css";
import image from "./images/planet.jpg";

export default function SignInPage() {
  return (
    <div className="sign-in-page">
      <div>
        <img src={image}></img>

        <h3>Welcome to the...</h3>
        <h1>Planetary Super Store!</h1>

        <div>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="form-field"
          />
          <HidableTextField label="Password" />
        </div>

        <Button variant="contained" color="secondary">
          Sign In
        </Button>
      </div>
    </div>
  );
}

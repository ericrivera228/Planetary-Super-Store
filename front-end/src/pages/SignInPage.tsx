// React imports
import React from "react";

// Material UI imports
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// Local imports
import HidableTextField from "components/HidableTextField";
import image from "assets/planet.jpg";

import "./SignInPage.css";

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

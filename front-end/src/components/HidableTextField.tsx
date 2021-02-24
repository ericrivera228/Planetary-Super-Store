// React imports
import React, { useState } from "react";

// Material UI imports
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

// Icon imports
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

interface iHidableTextFieldProps {
  // Label for this this field; the value of this props will appear in the field's placeholder.
  label: string;
}

export default function HidableTextField(props: iHidableTextFieldProps) {
  const [showValue, setShowValue] = useState(false);

  /**
   * Handler for when the user clicks the eye icon to in the field. Shows, or
   * stops showing the value of the field - whichever is the opposite of the
   * current state.
   */
  const handleClickShowValue = () => {
    setShowValue(!showValue);
  };

  return (
    <FormControl variant="outlined" className="form-field">
      <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>
      <OutlinedInput
        type={showValue ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowValue} edge="end">
              {showValue ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        label={props.label}
      />
    </FormControl>
  );
}

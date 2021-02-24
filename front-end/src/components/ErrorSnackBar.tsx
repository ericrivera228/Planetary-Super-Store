// React imports
import React from "react";

// Material UI imports
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

interface ErrorSnackBarProps {
  error: string;

  // Callback method for when the error snackbar closes
  onClose: () => void;
}

/**
 * Component for displaying an error message in a snackbar popup.
 */
export default function ErrorSnackBar(props: ErrorSnackBarProps) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      color="red"
      open={props.error !== ""}
      autoHideDuration={6000}
      onClose={props.onClose}
    >
      <MuiAlert elevation={6} variant="filled" severity="error">
        {props.error}
      </MuiAlert>
    </Snackbar>
  );
}

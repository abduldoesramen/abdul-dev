import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function SimpleSnackbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  // const handleClose = (
  //   event: React.SyntheticEvent | Event,
  //   reason?: SnackbarCloseReason
  // ) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpen(false);
  // };

  // const action = (
  //   <IconButton
  //     size="small"
  //     aria-label="close"
  //     color="inherit"
  //     onClick={handleClose}
  //   >
  //     <CloseIcon fontSize="small" />
  //   </IconButton>
  // );

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      message="Please fill in all fields"
    />
  );
}

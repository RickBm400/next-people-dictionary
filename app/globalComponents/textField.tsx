import {
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { inter, michroma } from "@/utils/font";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";

// props object interface structure
interface props {
  value: string;
  label: String;
  type: string;
  handler: any;
  variant?: "standard" | "outlined" | "filled";
}

// eye button end adornment
function eyeButton(
  type: string,
  iconSwitch: boolean,
  handler: React.MouseEventHandler<HTMLButtonElement>
) {
  // prevent button event default
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // checks if field is password
  if (type == "password") {
    return (
      <>
        <InputAdornment position="end">
          <IconButton
            onMouseDown={handleMouseDownPassword}
            aria-label="toggle password visibility"
            edge="end"
            onClick={handler}
          >
            {iconSwitch ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
        {iconSwitch}
      </>
    );
  }

  return null;
}

// main component
export default function TextFieldComp({
  value,
  label,
  type = "text",
  handler,
  variant = "outlined",
}: props) {
  //password eye switch
  const [passwordEye, setPasswordEye] = useState(false);

  return (
    <FormControl variant={`${variant}`} fullWidth>
      <TextField
        id={`outline-adornment-${label}`}
        type={passwordEye ? `${type}` : ""}
        label={`${label}`}
        variant={`${variant}`}
        value={value}
        onChange={handler}
        InputProps={{
          endAdornment: eyeButton(type, passwordEye, () =>
            setPasswordEye((val) => !val)
          ),
        }}
      ></TextField>
    </FormControl>
  );
}

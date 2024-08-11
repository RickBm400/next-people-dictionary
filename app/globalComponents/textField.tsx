import {
  FormControl,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface props {
  value: string;
  label: String;
  type: string;
  handler: any;
  variant?: "standard" | "outlined" | "filled";
}

function adornment(type: string) {
  if (type == "password") {
    return (
      <>
        <InputAdornment position="end">
          <IconButton aria-label="toggle password visibility" edge="end">
            {true ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      </>
    );
  }
}

export default function TextFieldComp({
  value,
  label,
  type = "text",
  handler,
  variant = "outlined",
}: props) {
  return (
    <FormControl variant={`${variant}`}>
      <TextField
        id={`outline-adornment-${label}`}
        type={`${type}`}
        label={`${label}`}
        variant={`${variant}`}
        value={value}
        onChange={handler}
        InputProps={{
          endAdornment: adornment(type),
        }}
      ></TextField>
    </FormControl>
  );
}

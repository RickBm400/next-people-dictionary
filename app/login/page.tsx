"use client";
import {
  Card,
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
import "./login.sass";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <main id="login" className="flex h-[100vh]">
      <section className="login__info w-[60%] h-screen grid ">
        <div className="login__info-background">olas</div>
      </section>
      <section className="login__form w-[40%] h-screen grid  bg-white">
        <div className="login__form-div">
          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="Email"
              id="email"
              type="email"
              variant="outlined"
              value={email}
              onChange={handleEmail}
            />
            <TextField
              label="Password"
              id="email"
              type="password"
              variant="outlined"
              value={password}
              onChange={handlePassword}
            ></TextField>
          </Box>
        </div>
      </section>
    </main>
  );
}

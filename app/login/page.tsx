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
import React, { useState } from "react";
import TexFieldComps from "globalComponents/textField";
import "./login.sass";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            <TexFieldComps
              value={email}
              label="email"
              type="email"
              handler={handleEmail}
            ></TexFieldComps>
            <TexFieldComps
              value={password}
              label="Password"
              type="password"
              handler={handlePassword}
            ></TexFieldComps>
          </Box>
        </div>
      </section>
    </main>
  );
}

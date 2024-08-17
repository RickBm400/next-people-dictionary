"use client";
import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { michroma, inter } from "@/utils/font";
import TexFieldComps from "@/_globalComponents/textField";
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
        <div className="login__info-background">
          <div className="login__info-background-title">
            <h1
              className={`${michroma.className}`}
              style={{ fontWeight: "700" }}
            >
              Login
            </h1>
            <div className="corner-1"></div>
            <div className="corner-2"></div>
          </div>
        </div>
      </section>
      <section className="login__form w-[40%] h-screen grid  bg-white">
        <div className="login__form-div flex items-center justify-center">
          <Box>
            <Grid container spacing={2}>
              <Grid
                component="form"
                autoComplete="off"
                item
                xs={12}
                className="space-y-6"
              >
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
                <Button
                  fullWidth
                  variant="contained"
                  disableElevation
                  className={`${inter.className} capitalize font-[700]`}
                  style={{ fontWeight: "800", backgroundColor: "#cccccc" }}
                >
                  Login
                </Button>
                <div className="flex justify-between">
                  <a href="" className={`${inter.className} link`}>
                    Create an Account
                  </a>
                  <a href="" className={`${inter.className} link`}>
                    Forgot password?
                  </a>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </section>
    </main>
  );
}

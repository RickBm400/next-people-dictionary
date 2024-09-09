"use client";
import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { michroma, inter } from "@/utils/font";
import TexFieldComps from "@/_globalComponents/textField";
import "./login.sass";

export default function Login() {
  interface typenvalue {
    type: string;
    value: string;
  }
  const [loginCredentials, setLoginCredentials] = useState<
    Record<string, typenvalue>
  >({
    email: {
      type: "email",
      value: "",
    },
    password: {
      type: "password",
      value: "",
    },
  });

  function getArrayOfCredentials(array: object): Array<string> {
    return Object.keys(array);
  }

  const loginCredentialHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setLoginCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: {
        ...prevCredentials[name],
        value: value,
      },
    }));
  };

  async function _login() {
    try {
    } catch (error) {
      console.log();
    }
  }

  return (
    <main id="login" className="flex h-[100vh]">
      <section className="login__info w-[60%] h-screen grid ">
        <div className="login__info-background">
          <div className="login__info-background-title">
            <h1
              className={`${michroma.className}`}
              style={{ fontWeight: "700" }}>
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
                className="space-y-6">
                {getArrayOfCredentials(loginCredentials).map((field) => (
                  <TexFieldComps
                    value={loginCredentials[field].value}
                    label="Password"
                    name={field}
                    type={loginCredentials[field].type}
                    handler={loginCredentialHandler}></TexFieldComps>
                ))}
                <Button
                  fullWidth
                  variant="contained"
                  disableElevation
                  onClick={_login}
                  className={`${inter.className} capitalize font-[700]`}
                  style={{ fontWeight: "800", backgroundColor: "#cccccc" }}>
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

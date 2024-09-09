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
  // false > login; true > signup
  const [isLogIn, setIsLogin] = useState<boolean>(false);
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

  const [signUpCredentials, setSignUpCredentials] = useState<
    Record<string, typenvalue>
  >({
    name: {
      type: "text",
      value: "",
    },
    last_name: {
      type: "text",
      value: "",
    },
    email: {
      type: "email",
      value: "",
    },
    password: {
      type: "password",
      value: "",
    },
    confirm_password: {
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
    const modifyStateCallback = (prevCredentials: any) => ({
      ...prevCredentials,
      [name]: {
        ...prevCredentials[name],
        value: value,
      },
    });
    if (isLogIn) {
      setLoginCredentials(modifyStateCallback);
    } else {
      setSignUpCredentials(modifyStateCallback);
    }
  };

  function _changeForm() {
    setIsLogin((prev) => !prev);
  }

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
              style={{ fontWeight: "700" }}
            >
              {isLogIn ? "login" : "sign up"}
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
                {((changeForm: boolean): any => {
                  let formCursor = changeForm
                    ? loginCredentials
                    : signUpCredentials;
                  return getArrayOfCredentials(formCursor).map((field) => (
                    <TexFieldComps
                      value={formCursor[field].value}
                      label={field}
                      name={field}
                      type={formCursor[field].type}
                      handler={loginCredentialHandler}
                    ></TexFieldComps>
                  ));
                })(isLogIn)}
                <Button
                  fullWidth
                  variant="contained"
                  disableElevation
                  onClick={_login}
                  className={`${inter.className} capitalize font-[700]`}
                  style={{ fontWeight: "800", backgroundColor: "#cccccc" }}
                >
                  {isLogIn ? "Log In" : "Continue"}
                </Button>
                <div className="flex justify-between">
                  <a
                    className={`${inter.className} link`}
                    onClick={_changeForm}
                  >
                    {isLogIn ? "Create an Account" : "Return to login"}
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

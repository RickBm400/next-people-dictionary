"use client";
import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { michroma, inter } from "@/utils/font";
import Image from "next/image";
import TexFieldComps from "@/_globalComponents/textField";
import "./login.sass";

export default function Login() {
  type formInterface = Record<
    string,
    {
      type: string;
      value: string;
    }
  >;

  // false > login; true > signup
  const [isLogIn, setIsLogin] = useState<boolean>(true);
  const [loginCredentials, setLoginCredentials] = useState<formInterface>({
    email: {
      type: "email",
      value: "",
    },
    password: {
      type: "password",
      value: "",
    },
  });

  const [signUpCredentials, setSignUpCredentials] = useState<formInterface>({
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

  function getArrayOfCredentials(array: object): string[] {
    return Object.keys(array);
  }

  const formsStateCallback = ({ name, value }: any) => {
    return (previousValue: any) => ({
      ...previousValue,
      [name]: {
        ...previousValue[name],
        value: value,
      },
    });
  };

  const loginCredentialHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    if (isLogIn) {
      setLoginCredentials(formsStateCallback({ name, value }));
    } else {
      setSignUpCredentials(formsStateCallback({ name, value }));
    }
  };

  function resetValueAtStates(
    state: formInterface,
    stateFunction: React.Dispatch<React.SetStateAction<formInterface>>
  ) {
    Object.keys(state).forEach((key) => {
      stateFunction(formsStateCallback({ name: key, value: "" }));
    });
  }

  function _changeForm() {
    resetValueAtStates(loginCredentials, setLoginCredentials);
    resetValueAtStates(signUpCredentials, setSignUpCredentials);
    setIsLogin((prev) => !prev);
  }

  const currentForm = isLogIn ? loginCredentials : signUpCredentials;

  async function _login() {
    console.log(currentForm);
    try {
    } catch (error) {
      console.log();
    }
  }

  return (
    <main id="login" className="flex h-[100vh]">
      <section className="login__info w-[60%] h-screen grid ">
        <div className="login__info-background">
          <Image
            src="/images/coffe-cup.jpg"
            alt="login"
            objectFit="cover"
            quality={100}
            layout="fill"
            style={{
              zIndex: -1,
              borderRadius: "24px",
              filter: "brightness(80%)",
            }}
          />
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
                {getArrayOfCredentials(currentForm).map((field) => (
                  <TexFieldComps
                    key={field}
                    value={currentForm[field].value}
                    label={field}
                    name={field}
                    type={currentForm[field].type}
                    handler={loginCredentialHandler}
                  ></TexFieldComps>
                ))}
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

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import { LoginFormImage } from "../components/FormImage";
import { SignupForm } from "../components/SignupForm";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export const SignupPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <LoginFormImage />
        <SignupForm />
      </Grid>
    </ThemeProvider>
  );
};

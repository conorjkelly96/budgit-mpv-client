import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import { LoginFormImage } from "../components/LoginFormImage";
import { LoginForm } from "../components/LoginForm";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export const LoginPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <LoginFormImage />
        <LoginForm />
      </Grid>
    </ThemeProvider>
  );
};

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import { LoginFormImage } from "../components/FormImage";
import { CreateBudgetForm } from "../components/CreateBudgetForm";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export const CreateBudget = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <CreateBudgetForm />
      </Grid>
    </ThemeProvider>
  );
};

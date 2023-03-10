import * as React from "react";
import { useMutation } from "@apollo/client";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AppProvider";
import { LOGIN_USER } from "../mutations";
import { loginForm, postButton } from "../styles";

export const LoginForm = () => {
  const { setIsLoggedIn, setUser } = useAuth();
  const [executeLogin, { loading, error }] = useMutation(LOGIN_USER);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    console.log(email, password);
    const { data } = await executeLogin({
      variables: {
        input: {
          email: email.toLowerCase().trim(),
          password,
        },
      },
    });

    if (data) {
      const { token, user } = data.loginUser;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log(user);

      setIsLoggedIn(true);
      setUser({
        id: user.id,
        firstName: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      });

      navigate("/dashboard", { replace: true });
    }
  };

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            id="email"
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            {...register("email", { required: true })}
            error={!!errors.email}
            disabled={loading}
          />
          <TextField
            type="password"
            margin="normal"
            id="password"
            label="Password"
            name="password"
            variant="outlined"
            fullWidth
            {...register("password", { required: true })}
            error={!!errors.password}
            disabled={loading}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {error && (
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={loginForm.errorContainer}
            >
              Failed to login, please enter valid email address and/or password.
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

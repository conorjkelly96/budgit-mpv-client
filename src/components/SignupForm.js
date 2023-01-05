import { useRef, useState } from "react";
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
import ErrorIcon from "@mui/icons-material/Error";
import Typography from "@mui/material/Typography";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAuth } from "../contexts/AppProvider";
import { SIGNUP_USER } from "../mutations";
import { loginForm, postButton } from "../styles";
import { Divider, FormControl, InputLabel, Select } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export const SignupForm = () => {
  const [executeSignUp, { loading, error }] = useMutation(SIGNUP_USER);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
    control,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const navigate = useNavigate();

  const onSubmit = async ({
    firstName,
    lastName,
    username,
    email,
    password,
  }) => {
    try {
      const { data } = await executeSignUp({
        variables: {
          input: {
            firstName: firstName.toLowerCase().trim(),
            lastName: lastName.toLowerCase().trim(),
            username: username.toLowerCase().trim(),
            email: email.toLowerCase().trim(),
            password,
          },
        },
      });

      if (data) {
        navigate("/login", { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const styles = {
    container: {
      backgroundColor: "#fff",
    },
    header: {
      paddingTop: 2,
      paddingBottom: 2,
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 4,
    },
    loadingButton: { marginTop: 3, marginBottom: 2 },
    errorContainer: {
      marginTop: 2,
      color: "#d32f2f",
      textAlign: "center",
    },
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
        <Typography
          variant="h4"
          gutterBottom
          component="h1"
          align="center"
          sx={styles.header}
        >
          Student Sign Up
        </Typography>
        <Divider />
        <Box
          component="form"
          sx={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            margin="normal"
            id="firstName"
            label="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
            {...register("firstName", { required: true })}
            error={!!errors.firstName}
            disabled={loading}
          />
          <TextField
            margin="normal"
            id="lastName"
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            {...register("lastName", { required: true })}
            error={!!errors.lastName}
            disabled={loading}
          />
          <TextField
            margin="normal"
            id="username"
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            {...register("username", { required: true })}
            error={!!errors.username}
            disabled={loading}
          />
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
          <TextField
            type="password"
            margin="normal"
            id="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            variant="outlined"
            fullWidth
            {...register("confirmPassword", {
              required: true,
              validate: (value) => getValues("password") === value,
            })}
            error={!!errors.confirmPassword}
            disabled={loading}
            helperText={errors.confirmPassword ? "Passwords do not match" : ""}
          />

          <LoadingButton
            loading={loading}
            loadingIndicator="Loading..."
            variant="contained"
            fullWidth
            type="submit"
            sx={loading ? styles.loadingButton : { ...postButton, m: 2 }}
            startIcon={error && <ErrorIcon />}
            color={error ? "error" : "primary"}
          >
            Sign Up
          </LoadingButton>

          <Link
            component={RouterLink}
            to="/login"
            variant="body2"
            underline="none"
          >
            Already have an account? Login
          </Link>
          {error && (
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={styles.errorContainer}
            >
              Failed to sign up, please make sure you enter the correct details
              or try again later.
            </Typography>
          )}
        </Box>
      </Box>
    </Grid>
  );
};

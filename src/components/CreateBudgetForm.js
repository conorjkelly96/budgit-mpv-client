import { useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { SIGNUP_USER } from "../mutations";
import { Avatar, Button, Container, CssBaseline, Grid } from "@mui/material";

export const CreateBudgetForm = () => {
  const [executeCreateBudget, { loading, error }] = useMutation(CREATE_BUDGET);

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
    name,
    salary,
    other,
    rentmortgage,
    gym,
    groceries,
    housebills,
    creditcard,
    phone,
    subscriptions,
    holidaycost,
    savings,
    enjoymentfund,
  }) => {
    try {
      const { data } = await executeCreateBudget({
        variables: {
          input: {
            name,
            salary,
            other,
            rentmortgage,
            gym,
            groceries,
            housebills,
            creditcard,
            phone,
            subscriptions,
            holidaycost,
            savings,
            enjoymentfund,
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

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Your Budget
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                {...register("name", { required: false })}
                error={!!errors.name}
                disabled={loading}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="salary"
                label="Salary"
                name="salary"
                autoComplete="salary"
                {...register("salary", { required: false })}
                error={!!errors.salary}
                disabled={loading}
              />
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="other"
                label="Other"
                name="other"
                autoComplete="other"
                {...register("other", { required: false })}
                error={!!errors.other}
                disabled={loading}
              />
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="rentmortgage"
                label="Rent / Mortgage (Monthly)"
                name="rentmortgage"
                autoComplete="rentmortgage"
                {...register("rentmortgage", { required: false })}
                error={!!errors.rentmortgage}
                disabled={loading}
              />
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="gym"
                label="Gym"
                name="gym"
                autoComplete="gym"
                {...register("gym", { required: false })}
                error={!!errors.gym}
                disabled={loading}
              />
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="groceries"
                label="Groceries"
                name="groceries"
                autoComplete="groceries"
                {...register("groceries", { required: false })}
                error={!!errors.groceries}
                disabled={loading}
              />
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="housebills"
                label="Utilities"
                name="housebills"
                autoComplete="housebills"
                {...register("housebills", { required: false })}
                error={!!errors.housebills}
                disabled={loading}
              />
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="creditcard"
                label="Credit Card Bill"
                name="creditcard"
                autoComplete="creditcard"
                {...register("creditcard", { required: false })}
                error={!!errors.creditcard}
                disabled={loading}
              />
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="phone"
                label="Phone Bill(s)"
                name="phone"
                autoComplete="phone"
                {...register("phone", { required: false })}
                error={!!errors.phone}
                disabled={loading}
              />
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="subscriptions"
                label="Subscriptions"
                name="subscriptions"
                autoComplete="subscriptions"
                {...register("subscriptions", { required: false })}
                error={!!errors.subscriptions}
                disabled={loading}
              />
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="holidaycost"
                label="Holiday Savings"
                name="holidaycost"
                autoComplete="holidaycost"
                {...register("holidaycost", { required: false })}
                error={!!errors.holidaycost}
                disabled={loading}
              />
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="savings"
                label="Savings"
                name="savings"
                autoComplete="savings"
                {...register("savings", { required: false })}
                error={!!errors.savings}
                disabled={loading}
              />
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="enjoymentfund"
                label="You Have this month to enjoy:"
                name="enjoymentfund"
                autoComplete="enjoymentfund"
                {...register("enjoymentfund", { required: false })}
                error={!!errors.enjoymentfund}
                disabled={loading}
              />
            </Grid>{" "}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

import React from "react";
import { Box, Container, Grid, TextField } from "@mui/material";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { useForm } from "react-hook-form";
import { loginFormOptions } from "../../validation/loginValidation";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(loginFormOptions);

  const onSubmit = (data: any) => {
    console.log("Data--------", data);
  };

  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
  >
  
      <Container maxWidth="xs">
        <h1>Login Page</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={3}>
          <TextField
            variant="outlined"
            label="email"
            fullWidth
            autoFocus
            {...register('email')}
            error={!!errors?.email}
            helperText={errors.email ? errors?.email.message: null}
          />
        </Box>
        <Box mb={3}>
            <TextField 
            variant="outlined"
            label="password"
            type="password"
            fullWidth
            inputProps={{ maxLength: 15 }}
            {...register("password")}
            error={!!errors?.password}
            helperText={errors.password ? errors?.password.message : null}
            />
        </Box>

        <CustomButton type="submit" variant="contained" fullWidth>
          Sign In
        </CustomButton>
    </form>
      </Container>
      </Grid>
  );
};

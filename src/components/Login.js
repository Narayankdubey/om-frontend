import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Container, Box, TextField, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { authenticateUser } from "../store/login-actions";
import { Link, useNavigate } from "react-router-dom";

const initialstate = {
  loginDetails: {
    email: "",
    password: "",
  },
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState(initialstate);
  const {
    loginDetails: { email, password },
  } = state;
  const LoginDetails = (event) => {
    event.preventDefault();
    setState(initialstate);
    dispatch(authenticateUser(state.loginDetails)).then((res) => {
      if (res) {
        navigate("/home");
      }
    });
  };

  const handleDetails = ({ target }) => {
    setState({
      ...state,
      loginDetails: {
        ...state.loginDetails,
        [target.name]: target.value,
      },
    });
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            // marginTop: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PersonIcon fontSize="350px" />
          <Box component="form" onSubmit={LoginDetails} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              variant="outlined"
              placeholder="Email"
              value={email}
              onChange={handleDetails}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              variant="outlined"
              value={password}
              onChange={handleDetails}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
          </Box>
          Don't have an account?
          <Link to="/registration" style={{ textDecoration: "none" }}>
            Signup
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default Login;

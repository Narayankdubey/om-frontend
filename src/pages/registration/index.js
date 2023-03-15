import React, { useState, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Container, Box, TextField, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { authenticateUser } from "../../store/login-actions";
import { addUserDetails } from "../../store/user-actions";
import { Link, useNavigate } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";
import AuthContext from "../../utils/AuthContext";

const initialstate = {
  loginDetails: {
    email: "",
    password: "",
    name: "",
  },
};

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState(initialstate);
  const { authenticated } = useContext(AuthContext);
  const {
    loginDetails: { email, password, name },
  } = state;
  const LoginDetails = (event) => {
    event.preventDefault();
    setState(initialstate);
    dispatch(addUserDetails(state.loginDetails)).then((res) => {
      if (res) {
        navigate("/login");
        dispatch(
          uiActions.showNotification({
            status: "success",
            message: "Successfully Signup",
          })
        );
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
  useEffect(() => {
    if (authenticated) {
      navigate("/");
    }
  }, [authenticated, navigate]);
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
              id="username"
              name="name"
              variant="outlined"
              placeholder="Username"
              value={name}
              onChange={handleDetails}
            />
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
              Sign Up
            </Button>
          </Box>
          Have an account?
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default Registration;

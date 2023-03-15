import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../store/login-actions";

const AppSkeleton = () => {
  // hooks
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <>
      <Button
        onClick={() => {
          dispatch(logoutUser()).then(() => {
            navigate("/login");
          });
        }}
      >
        Logout
      </Button>
      <Outlet />
      <footer>
        {/* <Row justify="center" style={{ textAlign: "center" }}>
            Copyrights @ 2022. Valuebound. All rights reserved
          </Row> */}
      </footer>
    </>
  );
};

export default AppSkeleton;

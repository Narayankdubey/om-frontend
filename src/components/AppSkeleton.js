import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";



const AppSkeleton= () => {
  // hooks
  const navigate = useNavigate();
  const location = useLocation();



  return (
    <>

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

import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import { Home, Illustration, NotFound } from "../pages";
import { AppSkeleton,PrivateRoute } from ".";
import { ROUTES } from "../utils/constants";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path={ROUTES.HOME}
        element={
          <PrivateRoute>
            <AppSkeleton />
          </PrivateRoute>
        }
      >
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ILLUSTRATION} element={<Illustration />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AnimatedRoutes;

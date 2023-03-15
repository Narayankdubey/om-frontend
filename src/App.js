import { BrowserRouter } from "react-router-dom";
import { Fragment } from "react";

import "./App.css";
import { AnimatedRoutes } from "./components";
import Notification from "./components/Notification/Notification";
import { useSelector } from "react-redux";

function App() {
  const notification = useSelector((state) => state.ui.notification);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

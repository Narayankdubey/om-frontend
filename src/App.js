import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import { AnimatedRoutes } from "./components";
import Notification from "./components/widget/Notification/Notification";

function App() {
  const notification = useSelector((state) => state.ui.notification);

  return (
    <>
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
    </>
  );
}

export default App;

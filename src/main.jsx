import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserInfo.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <UserProvider>
      <div className="mianroot">
        <App />
      </div>
    </UserProvider>
  </BrowserRouter>
  // </StrictMode>
);

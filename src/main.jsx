import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserInfo.jsx";
import "./i18n.js";
import { ChatbarProvider } from "./context/ChatbarContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <UserProvider>
      {/* <ChatbarProvider> */}
        <div className="mianroot">
          <App />
        </div>
      {/* </ChatbarProvider> */}
    </UserProvider>
  </BrowserRouter>
  // </StrictMode>
);

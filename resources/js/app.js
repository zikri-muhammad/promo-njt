require("./bootstrap");
import React from "react";
import ReactDOM from "react-dom/client";  // Mengimpor dari 'react-dom/client' untuk React 18
import App from "./Components/App";
import Nav from "./Components/Nav";

if (document.getElementById("app")) {
    const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<Nav />);
}
require("./bootstrap");
import React from "react";
import ReactDOM from "react-dom"; 
import { createInertiaApp } from "@inertiajs/inertia-react";
// import App from "./Components/App";
// import Nav from "./Components/Nav";

// if (document.getElementById("app")) {
//     const root = ReactDOM.createRoot(document.getElementById("app"));
//     root.render(<Nav />);
// }

createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`).default,
    setup({ el, App, props }) {
        return ReactDOM.render(<App {...props} />, el);
    },
});

// InertiaProgress.init();
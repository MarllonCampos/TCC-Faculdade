import React from "react";
import ReactDOM from "react-dom";
import *as serviceWorker from "./serviceWorker";

import {BrowserRouter} from "react-router-dom";
import {Routes} from ".routes";

ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();
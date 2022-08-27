import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Counter from "./pages/counter/Counter";

const App = () => <Counter />;
ReactDOM.render(<App />, document.getElementById("app"));

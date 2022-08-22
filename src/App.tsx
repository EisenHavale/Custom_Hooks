import React from "react";
import ReactDOM from "react-dom";
import { Container } from "./components/molecules/container/Container";

import "./index.css";
import { Counter } from "./pages/Counter/Counter";

const App = () => <Counter />;
ReactDOM.render(<App />, document.getElementById("app"));

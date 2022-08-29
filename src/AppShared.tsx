import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Counter from "./pages/counter/Counter";
import { Provider } from 'react-redux';
import {HookStore} from "./app/store/hookStore";

const AppShared = () => 
        <Provider store={HookStore}>
            <Counter />
        </Provider>
;
ReactDOM.render(<AppShared />, document.getElementById("app"));

export default AppShared;
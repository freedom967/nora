import React from "react";
import ReactDOM from "react-dom";
import 'bulma'
import { Layout } from "./layout";

export function App() {
    return (
        <Layout />
    );
}

ReactDOM.render(
    <App />, document.getElementById('app')
);
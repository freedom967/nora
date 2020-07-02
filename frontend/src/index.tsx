import React, { FormEvent } from "react";
import ReactDOM from "react-dom";
import { ItemCard } from "./Card";

import 'bulma'

export function App() {
    return (
        <>
            <header className="container is-fullhd">
                <div className="notification">
                    <h1>Welcome to nora app</h1>
                </div>
            </header>
            <section className="section">
                <div className="container">
                    <ItemCard />
                </div>
            </section>

        </>
    );
}

ReactDOM.render(
    <App />, document.getElementById('app')
);
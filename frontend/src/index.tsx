import React, { FormEvent } from "react";
import ReactDOM from "react-dom";
import { ItemCard } from "./Card";

import 'bulma'

export function App() {
    return (
        <>
            <section className="hero is-primary is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Wecome to nora app
      </h1>
                        <h2 className="subtitle">
                            enjoy your time
      </h2>
                    </div>
                </div>
                <div className="hero-foot">
                    <nav className="tabs">
                        <div className="container">
                            <ul>
                                <li className="is-active"><a>Home</a></li>
                                <li><a>About ua</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
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
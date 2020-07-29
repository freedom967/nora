import { ItemCard } from "../Card";
import React from "react";
import { Columns, Column } from "../lib/column";
import { Container } from "../lib/container";
import { Navbar } from "../components/navBar";


export const Home = () => {
    return (
        <div className="container">
            <Navbar/>
            <Columns>
                <Column size='is-3' >
                <div className="box content">
                        <ItemCard />
                    </div>
                </Column>
                <Column size='is-9'>
                </Column>
            </Columns>
        </div>
    );
}
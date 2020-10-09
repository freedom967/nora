import { ItemCard } from "../Card";
import React from "react";
import { Columns, Column } from "../lib/column";
import { Container } from "../lib/container";
import { Navbar } from "../components/navBar";


export const Home = () => {
    return (
        <div className="container">
            <Navbar />
            <ItemCard />
        </div>
    );
}
import { ItemCard } from "../Card";
import React from "react";
import { Columns, Column } from "../lib/column";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="container">
            <Columns>
            <Column size='is-3' >
                <Link to='/addnote' className='button is-primary is block' replace>add</Link>
            </Column>
            <Column size='is-9'>
                <div className="box content">
                    <ItemCard/>
                </div>
            </Column>
            </Columns>
        </div>
    );
}
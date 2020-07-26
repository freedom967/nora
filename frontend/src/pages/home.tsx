import { ItemCard } from "../Card";
import React from "react";
import { Columns, Column } from "../lib/column";
import { Link } from "react-router-dom";
import { Container } from "../lib/container";

export const Home = () => {
    return (
        <div className="container">
            <Columns>
            <Column size='is-3' >
                <Container>
                <Link to='/addnote' className='button is-primary' replace>add</Link>
                </Container>
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
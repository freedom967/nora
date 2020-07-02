import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Note {
    title: string;
    content: string;
    note_id: string
}

export const ItemCard = () => {
    const [show, setShow] = useState(false);
    const [contentArray, setArray] = useState<Note[]>([]);

    useEffect(() => {
        axios.get('/note/').then(data => {
            setArray(data.data);
            setShow(true);
        }
        ).catch(function (err) {
            console.log(err)
        });
    }, []
    )

    return (
        <>
            <ul>
                {show && contentArray.map((item, index) =>
                    <article className="media" key={item.note_id}>
                        <div className="media-content">
                            <strong>{item.title}</strong>
                            <br />
                            <p>{item.content}</p>
                        </div>
                    </article>
                )}
            </ul>
        </>
    );
}
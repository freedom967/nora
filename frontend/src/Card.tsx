import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Columns, Column } from './lib/column';

interface Note {
    title: string;
    content: string;
    note_id: number
}

export const ItemCard = () => {
    const [show, setShow] = useState(false);
    const [contentArray, setArray] = useState<Note[]>([]);
    const [contentDetail,showDetail] = useState('');

    useEffect(() => {
        axios.get('/note/').then(data => {
            setArray(data.data);
            setShow(true);
            showDetail(data.data[0].content);
        }
        ).catch(function (err) {
            console.log(err)
        });
    }, []
    );

    function editContent(id:number){
showDetail(contentArray[id].content);
    }

    function handleContentChange(){
        
    }

    return (
        <>
         <Columns>
                <Column size='is-3' >
                <div className="box content">
                <ul>
                {show && contentArray.map((item, index) =>
                    <article className="media" key={item.note_id} onClick={()=>editContent(item.note_id)}>
                        <div className="media-content">
                            <strong>{item.title}</strong>
                            <br />
                            <p>{item.content}</p>
                        </div>
                    </article>
                )}
            </ul>
                    </div>
                </Column>
                <Column size='is-9'>
                    <h1></h1>
                    <textarea value={contentDetail} onChange={handleContentChange}></textarea>
                    <div className="content">
                    {contentDetail}
                    </div>
                </Column>
            </Columns>
            
        </>
    );
}
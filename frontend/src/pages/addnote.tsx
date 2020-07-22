import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export const AddNote = () => {
    const [tilteInput, setTitle] = useState('');
    const [contentInput, setContent] = useState('');

    const history = useHistory();

    function handleSubmit() {
        if (tilteInput && contentInput) {
            axios.post('/note/', { title: tilteInput, content: contentInput }).catch(err => console.log(err));
            history.push('/');
        }
    }

    function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }
    function handleContentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value)
    }

    return (
        <div className="columns">
            <div className="column is-half is-offset-one-quarter">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input className="input" type="text" onChange={handleTitleChange} value={tilteInput} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Content</label>
                        <div className="control">
                            <textarea className="textarea" onChange={handleContentChange} value={contentInput} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="button is-primary is-fullwidth " type="submit" value="ADD" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
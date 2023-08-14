import React, { useState } from "react";
import './admin.css'
import { Header } from "../Generics/header";

export function TextUploader() {
    const [text, setText] = useState('');
    const [isLocked, setIsLocked] = useState(false);

    const handleSubmit = async () => {
        fetch('http://127.0.0.1:3002/uploadPassage', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ PASSAGE: text })
        }).then(async value => {
            const data = await value.json();
            alert(data.response)
        }).catch(error => {
            alert(error);
        }).finally(() => {
            setIsLocked(false);
            setText('');
        });
    };

    return (
        <>
            <Header admin={true} />
            <div className="textUploader">
                <textarea
                    placeholder="Write a passage"
                    className="textUploader__textarea"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    disabled={isLocked}
                />
                <button
                    className="textUploader__button"
                    onClick={handleSubmit}
                    disabled={isLocked}
                >
                    {isLocked ? 'Loading...' : 'Submit'}
                </button>
            </div>
        </>
    );
}

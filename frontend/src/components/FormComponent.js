import React, { useState } from 'react';

function FormComponent() {
    const [inputText, setInputText] = useState('');
    const [responseText, setResponseText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async () => {
        // Make a request to the backend to process the input
        const response = await fetch('/api/process-input', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input: inputText }),
        });

        if (response.ok) {
            const data = await response.json();
            setResponseText(data.response);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Submit</button>
            <p>Response from backend: {responseText}</p>
        </div>
    );
}

export default FormComponent;

// Only used for testing a submit button
import React, { useState } from 'react';
import {getSummonerInfo} from "../services/AppService";

function FormComponent() {
    const [summonerName, setSummonerName] = useState('');
    const [responseText, setResponseText] = useState('');

    const handleInputChange = (event) => {
        setSummonerName(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await getSummonerInfo(summonerName);
            setResponseText(response.response);
        } catch (error) {
            console.error('Error fetching summoner info:', error);
            setResponseText('Error fetching summoner info');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={summonerName}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Submit</button>
            <p>Response from backend: {responseText}</p>
        </div>
    );
}

export default FormComponent;

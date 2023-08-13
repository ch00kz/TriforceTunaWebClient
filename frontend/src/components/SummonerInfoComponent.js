import React, { useState } from 'react';
import axios from 'axios';

function SummonerInfoComponent() {
    const [summonerName, setSummonerName] = useState('');
    const [summonerInfo, setSummonerInfo] = useState(null);

    const handleGetSummonerInfo = async () => {
        try {
            const response = await axios.get(`/api/summoner-info?summonerName=${summonerName}`);
            setSummonerInfo(response.data);
        } catch (error) {
            console.error('Error fetching summoner info:', error);
            setSummonerInfo(null);
        }
    };

    return (
        <div>
            <input type="text" value={summonerName} onChange={(e) => setSummonerName(e.target.value)} />
            <button onClick={handleGetSummonerInfo}>Get Summoner Info</button>
            {summonerInfo && (
                <div>
                    <h2>Summoner Info</h2>
                    <pre>{JSON.stringify(summonerInfo, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default SummonerInfoComponent;

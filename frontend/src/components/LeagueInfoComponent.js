import React, { useState } from 'react';
import axios from 'axios';

function LeagueInfoComponent() {
    const [summonerName, setEncryptedSummonerId] = useState('');
    const [leagueInfo, setLeagueInfo] = useState([]);

    const handleGetLeagueInfo = async () => {
        try {
            const response = await axios.get(`/api/league-info?summonerName=${summonerName}`);
            setLeagueInfo(response.data); // Set leagueInfo as an array
        } catch (error) {
            console.error('Error fetching league info:', error);
            setLeagueInfo([]); // Reset leagueInfo on error
        }
    };

    return (
        <div>
            <input type="text" value={summonerName} onChange={(e) => setEncryptedSummonerId(e.target.value)} />
            <button onClick={handleGetLeagueInfo}>Get League Info</button>
            {leagueInfo.length > 0 && (
                <div>
                    <h2>League Info</h2>
                    {/* Map through the array and display each leagueInfo object */}
                    {leagueInfo.map((info, index) => (
                        <div key={index}>
                            <pre>{JSON.stringify(info, null, 2)}</pre>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LeagueInfoComponent;

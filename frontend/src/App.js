import React, { useState } from 'react';
import './App.css';
import axios from "axios";
import SummonerInfoComponent from './components/SummonerInfoComponent';
import LeagueInfoComponent from './components/LeagueInfoComponent';

function App() {
    const [summonerName, setSummonerName] = useState('');
    const [summonerInfo, setSummonerInfo] = useState(null);
    const [leagueInfo, setLeagueInfo] = useState([]);

    const fetchAllData = async () => {
        try {
            // Responses are what we get from the backend vai ApiController
            const response = await axios.get(`/api/summoner-info?summonerName=${summonerName}`);
            setSummonerInfo(response.data);
            const leagueResponse = await axios.get(`/api/league-info?summonerName=${summonerName}`);
            setLeagueInfo(leagueResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setSummonerInfo(null);
            setLeagueInfo([]);
        }
    };

    return (
        <div>
            <h1>Z41N - Springboot/React RiotGames API System</h1>
            <p>Please enter the summoner name below:</p>
            <input
                type="text"
                value={summonerName}
                onChange={(e) => setSummonerName(e.target.value)}
            />
            <button onClick={fetchAllData}>Search</button>

            <SummonerInfoComponent summonerInfo={summonerInfo} />
            <LeagueInfoComponent leagueInfo={leagueInfo} />
        </div>
    );
}

export default App;

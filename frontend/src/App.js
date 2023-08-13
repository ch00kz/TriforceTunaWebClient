import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
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
        <div className="app">
            <header className="header">
                <h1 className="title">Z41N Gaming Analytics</h1>
                <p className="subtitle">Get insights for competitive gaming</p>
            </header>
            <main className="main">
                <div className="search-container">
                    <p className="search-description">Please enter the summoner name below:</p>
                    <div className="search-input">
                        <input
                            type="text"
                            value={summonerName}
                            onChange={(e) => setSummonerName(e.target.value)}
                            placeholder="Summoner Name"
                        />
                        <button onClick={fetchAllData}>Search</button>
                    </div>
                </div>
                <div className="data-container">
                    <SummonerInfoComponent summonerInfo={summonerInfo} />
                    <LeagueInfoComponent leagueInfo={leagueInfo} />
                </div>
            </main>
        </div>
    );
}

export default App;

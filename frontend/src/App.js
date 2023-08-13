import './App.css';
import SummonerInfoComponent from "./components/SummonerInfoComponent";
import LeagueInfoComponent from "./components/LeagueInfoComponent";

function App() {
    return (
        <div>
            <h1>Z41N - Springboot/React RiotGames API System</h1>
            <SummonerInfoComponent />
            <h1>League Info</h1>
            <LeagueInfoComponent />
        </div>
    );
}

export default App;

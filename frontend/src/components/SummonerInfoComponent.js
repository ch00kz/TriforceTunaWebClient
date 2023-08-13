import React from 'react';

function SummonerInfoComponent({ summonerInfo }) {
    return (
        <div>
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

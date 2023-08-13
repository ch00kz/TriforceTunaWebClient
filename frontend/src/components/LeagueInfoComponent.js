import React from 'react';

function LeagueInfoComponent({ leagueInfo }) {
    return (
        <div>
            {leagueInfo.length > 0 && (
                <div>
                    <h2>League Info</h2>
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

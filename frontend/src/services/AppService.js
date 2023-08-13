export async function getSummonerInfo(summonerName) {
    const response = await fetch(`/api/summoner-info?summonerName=${summonerName}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}



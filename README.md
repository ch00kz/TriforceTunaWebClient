# TriforceTunaClient

Lets make something...




## Dependencies

- Backend: SpringBoot 3.1.2; Java 17
- Fontend: React


## How to Build

- BACKEND:
  - Open IntelliJ and click Run (configuration is setup and ready)
- FRONTEND: 
  - Open terminal > cd `frontend` > run `npm install`
  - {UNIX ONLY}: Run `export RIOT_API_KEY=<your-api-key>` to store key locally and not in repo
  - {WINDOWS}: Run `set RIOT_API_KEY=<your-api-key>` to store key locally and not in repo
    - If this does not work, set one manually to your System Environment Variables
  - Run `npm start`

## How it works:
1.) Frontend Initialization: `index.js` entry point (Loads App.js)

2.) Rendering the Main App: App.js renders the components i.e. `SummonerInfoComponent.js`

3.) User Interaction: User inputs name and clicks submit. Request is submitted to backend.

4.) Backend API Call: When submit is clicked and request received by endpoint, `ApiController.java` takes over and uses the `RiotGamesApiService.java` class to fetch data from the Riot Games API.

5.) Riot Games API Call: `RiotGamesApiService` makes request to RG API using the provided info. Retrieves the information and returns to us i.e. `SummonerInfo`

6.) Displays Data: Done
package com.z41n.TriforceTunaWebClient.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.z41n.TriforceTunaWebClient.models.SummonerInfoModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RiotGamesApiService {
    private final String apiKey;

    public RiotGamesApiService(@Value("${riot.api.key}") String apiKey) {
        this.apiKey = apiKey;
    }

    public SummonerInfoModel getSummonerInfo(String summonerName) {
        RestTemplate restTemplate = new RestTemplate();
        String apiUrl = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName;

        HttpHeaders headers = new HttpHeaders();
        headers.set("X-Riot-Token", apiKey);
        HttpEntity<?> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(apiUrl, HttpMethod.GET, entity, String.class);

        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.readValue(response.getBody(), SummonerInfoModel.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Error parsing summoner info", e);
        }
    }
}


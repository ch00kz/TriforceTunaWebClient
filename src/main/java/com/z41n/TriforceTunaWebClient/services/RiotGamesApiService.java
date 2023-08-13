package com.z41n.TriforceTunaWebClient.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;
import com.z41n.TriforceTunaWebClient.models.LeagueInfoModel;
import com.z41n.TriforceTunaWebClient.models.SummonerInfoModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class RiotGamesApiService {
    private final String apiKey;
    private final HttpHeaders headers;
    private final HttpEntity<?> entity;

    public RiotGamesApiService(@Value("${riot.api.key}") String apiKey) {
        this.apiKey = apiKey;
        this.headers = new HttpHeaders();
        this.headers.set("X-Riot-Token", apiKey);
        this.entity = new HttpEntity<>(headers);
    }

    public SummonerInfoModel getSummonerInfo(String summonerName) {
        RestTemplate restTemplate = new RestTemplate();
        String apiUrl = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName;

        ResponseEntity<String> response = restTemplate.exchange(apiUrl, HttpMethod.GET, entity, String.class);

        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.readValue(response.getBody(), SummonerInfoModel.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Error parsing summoner info", e);
        }
    }

    /*
    NOTE: Pulled my hair out trying to figure out why this deserialization was causing issues
    Turns out, this specific league-info call returns a LIST of the LeagueDTO.
    It does not return the DTO directly like summoner-info lolz
     */
    public List<LeagueInfoModel> getLeagueInfo(String encryptedSummonerId) {
        RestTemplate restTemplate = new RestTemplate();
        String apiUrl = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + encryptedSummonerId;

        ResponseEntity<String> response = restTemplate.exchange(apiUrl, HttpMethod.GET, entity, String.class);

        ObjectMapper mapper = new ObjectMapper();
        CollectionType listType = mapper.getTypeFactory().constructCollectionType(List.class, LeagueInfoModel.class);
        try {
            return mapper.readValue(response.getBody(), listType);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Error parsing league info", e);
        }
    }

}


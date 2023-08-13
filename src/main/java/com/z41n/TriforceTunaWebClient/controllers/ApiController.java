package com.z41n.TriforceTunaWebClient.controllers;

import com.z41n.TriforceTunaWebClient.models.SummonerInfoModel;
import com.z41n.TriforceTunaWebClient.services.RiotGamesApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {
    private final RiotGamesApiService riotGamesApiService;

    @Autowired
    public ApiController(RiotGamesApiService riotGamesApiService) {
        this.riotGamesApiService = riotGamesApiService;
    }

    @GetMapping("/api/summoner-info")
    public ResponseEntity<SummonerInfoModel> getSummonerInfo(@RequestParam String summonerName) {
        SummonerInfoModel summonerInfoModel = riotGamesApiService.getSummonerInfo(summonerName);
        return ResponseEntity.ok(summonerInfoModel);
    }
}
package com.z41n.TriforceTunaWebClient.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/*
https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName
 */

@Getter
@Setter
@ToString
public class SummonerInfoModel {
    private String id;
    private String accountId;
    private String puuid;
    private String name;
    private int profileIconId;
    private long revisionDate;
    private int summonerLevel;
}


package com.z41n.TriforceTunaWebClient.models;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/*
https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntriesForSummoner
 */

@Getter
@Setter
@ToString
public class LeagueInfoModel {

    private String leagueId;
    private String summonerId;
    private String summonerName;
    private String queueType;
    private String tier;
    private String rank;
    private int leaguePoints;
    private int wins;
    private int losses;
    private boolean hotStreak;
    private boolean veteran;
    private boolean freshBlood;
    private boolean inactive;
    private Object miniSeries;

}

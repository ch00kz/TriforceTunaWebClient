package com.z41n.TriforceTunaWebClient.models;

public class ApiResponse {
    private String response;

    public ApiResponse(String response) {
        this.response = response;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }
}
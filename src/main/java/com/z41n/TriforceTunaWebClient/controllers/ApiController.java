package com.z41n.TriforceTunaWebClient.controllers;

import com.z41n.TriforceTunaWebClient.models.ApiResponse;
import com.z41n.TriforceTunaWebClient.models.InputData;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @PostMapping("/api/process-input")
    public ApiResponse processInput(@RequestBody InputData inputData) {
        // Process the input data
        String response = inputData.getInput();

        return new ApiResponse(response);
    }

}

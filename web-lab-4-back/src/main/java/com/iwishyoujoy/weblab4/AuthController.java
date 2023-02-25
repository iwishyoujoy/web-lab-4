package com.iwishyoujoy.weblab4;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {
    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/api/register")
    public void register(@RequestParam("login") String login, @RequestParam("password") String password) {
        authService.register(login, password);
    }

    @PostMapping("/api/login")
    public void login(@RequestHeader("Authorization") String authorization) {
        authService.check(authorization);
    }
}

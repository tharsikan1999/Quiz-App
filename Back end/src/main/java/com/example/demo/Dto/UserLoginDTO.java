package com.example.demo.Dto;

public class UserLoginDTO {
    private String userEmail;
    private String userPassword;

    public UserLoginDTO() {
    }

    public UserLoginDTO(String userEmail, String userPassword) {
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }
}

package com.example.demo.Dto;

import jakarta.persistence.Column;

import java.util.Objects;

public class UserDto {
    private String userName;
    private String indexNo;
    private String field;
    private String userEmail;
    private String userPassword;



    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(String indexNo) {
        this.indexNo = indexNo;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDto userDto = (UserDto) o;
        return Objects.equals(userName, userDto.userName) && Objects.equals(indexNo, userDto.indexNo) && Objects.equals(field, userDto.field) && Objects.equals(userEmail, userDto.userEmail) && Objects.equals(userPassword, userDto.userPassword);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userName, indexNo, field, userEmail, userPassword);
    }

    @Override
    public String toString() {
        return "UserDto{" +
                ", userName='" + userName + '\'' +
                ", indexNo='" + indexNo + '\'' +
                ", field='" + field + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userPassword='" + userPassword + '\'' +
                '}';
    }
}

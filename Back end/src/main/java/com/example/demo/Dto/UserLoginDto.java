package com.example.demo.Dto;

import java.util.Objects;

public class UserLoginDto {
    private String indexNo;
    private String userPassword;



    public String getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(String indexNo) {
        this.indexNo = indexNo;
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
        UserLoginDto that = (UserLoginDto) o;
        return Objects.equals(indexNo, that.indexNo) && Objects.equals(userPassword, that.userPassword);
    }

    @Override
    public int hashCode() {
        return Objects.hash(indexNo, userPassword);
    }

    @Override
    public String toString() {
        return "UserLoginDto{" +
                "indexNo='" + indexNo + '\'' +
                ", userPassword='" + userPassword + '\'' +
                '}';
    }
}

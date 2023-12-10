package com.example.demo.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "\"users\"")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "userid", length = 10)
    private Integer userId;
    @Column(name = "username" , length = 50)
    private String userName;
    @Column(name = "indexno" , length = 10)
    private String indexNo;
    @Column(name = "field" , length = 25)
    private String field;
    @Column(name = "email" , length = 25)
    private String userEmail;
    @Column(name = "password" , length = 25)
    private String userPassword;

    public User(Integer userId, String userName, String indexNo, String field, String userEmail, String userPassword) {
        this.userId = userId;
        this.userName = userName;
        this.indexNo = indexNo;
        this.field = field;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }

    public User(String userName, String indexNo, String field, String userEmail, String userPassword) {
        this.userName = userName;
        this.indexNo = indexNo;
        this.field = field;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }

    public User() {
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

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
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", indexNo='" + indexNo + '\'' +
                ", field='" + field + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userPassword='" + userPassword + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(userId, user.userId) && Objects.equals(userName, user.userName) && Objects.equals(indexNo, user.indexNo) && Objects.equals(field, user.field) && Objects.equals(userEmail, user.userEmail) && Objects.equals(userPassword, user.userPassword);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, userName, indexNo, field, userEmail, userPassword);
    }
}

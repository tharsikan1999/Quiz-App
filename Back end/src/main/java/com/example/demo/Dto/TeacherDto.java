package com.example.demo.Dto;

import jakarta.persistence.Column;

import java.util.Objects;

public class TeacherDto {
    private  String teacherName;
    private String teacherEmail;
    private String teacherPassword;

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public String getTeacherEmail() {
        return teacherEmail;
    }

    public void setTeacherEmail(String teacherEmail) {
        this.teacherEmail = teacherEmail;
    }

    public String getTeacherPassword() {
        return teacherPassword;
    }

    public void setTeacherPassword(String teacherPassword) {
        this.teacherPassword = teacherPassword;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TeacherDto that = (TeacherDto) o;
        return Objects.equals(teacherName, that.teacherName) && Objects.equals(teacherEmail, that.teacherEmail) && Objects.equals(teacherPassword, that.teacherPassword);
    }

    @Override
    public int hashCode() {
        return Objects.hash(teacherName, teacherEmail, teacherPassword);
    }

    @Override
    public String toString() {
        return "TeacherDto{" +
                "teacherName='" + teacherName + '\'' +
                ", teacherEmail='" + teacherEmail + '\'' +
                ", teacherPassword='" + teacherPassword + '\'' +
                '}';
    }
}

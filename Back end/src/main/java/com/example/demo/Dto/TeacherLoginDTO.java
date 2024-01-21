package com.example.demo.Dto;

public class TeacherLoginDTO {
    private String teacherEmail;
    private String teacherPassword;

    public TeacherLoginDTO() {
    }

    public TeacherLoginDTO(String teacherEmail, String teacherPassword) {
        this.teacherEmail = teacherEmail;
        this.teacherPassword = teacherPassword;
    }

    public String getTeacherEmail() {
        return teacherEmail;
    }

    public String getTeacherPassword() {
        return teacherPassword;
    }
}

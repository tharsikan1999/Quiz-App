package com.example.demo.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "\"teacher\"")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "teacherid",length = 10)
    private  Integer teacherId;
    @Column(name = "teachername",length = 25)
    private  String teacherName;
    @Column(name = "teacheremail",length = 20)
    private String teacherEmail;
    @Column(name = "teacherPassword",length = 25)
    private String teacherPassword;

    public Teacher(Integer teacherId, String teacherName, String teacherEmail, String teacherPassword) {
        this.teacherId = teacherId;
        this.teacherName = teacherName;
        this.teacherEmail = teacherEmail;
        this.teacherPassword = teacherPassword;
    }

    public Teacher(String teacherName, String teacherEmail, String teacherPassword) {
        this.teacherName = teacherName;
        this.teacherEmail = teacherEmail;
        this.teacherPassword = teacherPassword;
    }

    public Teacher() {
    }

    public Integer getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(Integer teacherId) {
        this.teacherId = teacherId;
    }

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
        Teacher teacher = (Teacher) o;
        return Objects.equals(teacherId, teacher.teacherId) && Objects.equals(teacherName, teacher.teacherName) && Objects.equals(teacherEmail, teacher.teacherEmail) && Objects.equals(teacherPassword, teacher.teacherPassword);
    }

    @Override
    public int hashCode() {
        return Objects.hash(teacherId, teacherName, teacherEmail, teacherPassword);
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "teacherId=" + teacherId +
                ", teacherName='" + teacherName + '\'' +
                ", teacherEmail='" + teacherEmail + '\'' +
                ", teacherPassword='" + teacherPassword + '\'' +
                '}';
    }


}

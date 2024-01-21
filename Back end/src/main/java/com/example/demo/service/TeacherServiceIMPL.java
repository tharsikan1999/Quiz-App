package com.example.demo.service;

import com.example.demo.Dto.TeacherDto;
import com.example.demo.Dto.TeacherLoginDTO;
import com.example.demo.entity.Teacher;
import com.example.demo.repo.TeacherRepo;
import com.example.demo.response.LoginMesage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TeacherServiceIMPL implements TeacherService{
    @Autowired
    TeacherRepo teacherRepo;

@Autowired
private PasswordEncoder passwordEncoder;

    @Override
    public String addTeacher(TeacherDto teacherDto) {
        Teacher teacher = new Teacher(
                teacherDto.getTeacherName().toLowerCase(),
                teacherDto.getTeacherEmail().toLowerCase(),
                teacherDto.getTeacherPassword().toLowerCase()
        );

        teacherRepo.save(teacher);
        return teacher.getTeacherName();
    }

    @Override
    public LoginMesage loginEmployee(TeacherLoginDTO teacherLoginDTO) {
        String msg = "";
        Teacher employee1 = teacherRepo.findByTeacherEmail(teacherLoginDTO.getTeacherEmail());
        if (employee1 != null) {
            String password = teacherLoginDTO.getTeacherPassword();
            Optional<Teacher> employee = teacherRepo.findOneByTeacherEmailAndAndTeacherPassword(teacherLoginDTO.getTeacherEmail(), password);
            if (employee.isPresent()) {
                return new LoginMesage("Login Success", true);
            } else {
                return new LoginMesage("Login Failed", false);
            }
        } else {
            return new LoginMesage("password Not Match", false);
        }
    }


}

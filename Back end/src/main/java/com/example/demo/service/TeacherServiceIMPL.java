package com.example.demo.service;

import com.example.demo.Dto.TeacherDto;
import com.example.demo.entity.Teacher;
import com.example.demo.repo.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherServiceIMPL implements TeacherService{
    @Autowired
    TeacherRepo teacherRepo;

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
}

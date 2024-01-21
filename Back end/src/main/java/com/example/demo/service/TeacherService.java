package com.example.demo.service;

import com.example.demo.Dto.TeacherDto;
import com.example.demo.Dto.TeacherLoginDTO;
import com.example.demo.response.LoginMesage;

public interface TeacherService {
  public   String addTeacher(TeacherDto teacherDto);


  LoginMesage loginEmployee(TeacherLoginDTO teacherLoginDTO);
}

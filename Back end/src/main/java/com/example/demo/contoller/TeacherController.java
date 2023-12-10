package com.example.demo.contoller;

import com.example.demo.Dto.TeacherDto;
import com.example.demo.Dto.UserDto;
import com.example.demo.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/")
public class TeacherController {
    @Autowired
    TeacherService teacherService;

    @PostMapping("add/teacher")
    public String addTeacher(@RequestBody TeacherDto teacherDto){
        String teacherName = teacherService.addTeacher(teacherDto);
        return teacherName;

    }

}

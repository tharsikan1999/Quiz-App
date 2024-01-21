package com.example.demo.contoller;

import com.example.demo.Dto.TeacherLoginDTO;
import com.example.demo.Dto.UserDto;
import com.example.demo.Dto.UserLoginDTO;
import com.example.demo.response.LoginMesage;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/")
public class UserContoller {
    @Autowired
    UserService userService;

    @PostMapping(path = "add/user")
    public String addUser(@RequestBody UserDto userDto){
        String addUsername =userService.
                addUser(userDto);
        return addUsername;
    }

    @PostMapping(path = "/login/user")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginDTO userLoginDTO)
    {
        LoginMesage loginResponse = userService.loginUser(userLoginDTO);
        return ResponseEntity.ok(loginResponse);
    }



}

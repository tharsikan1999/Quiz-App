package com.example.demo.service;

import com.example.demo.Dto.UserDto;
import com.example.demo.Dto.UserLoginDTO;
import com.example.demo.response.LoginMesage;

public interface UserService {
    public String addUser(UserDto userDto);


    LoginMesage loginUser(UserLoginDTO userLoginDTO);
}

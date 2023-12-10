package com.example.demo.service;

import com.example.demo.Dto.UserDto;

public interface UserService {
    public String addUser(UserDto userDto);

    public String getUser(String indexNo);
}

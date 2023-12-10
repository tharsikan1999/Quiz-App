package com.example.demo.service;

import com.example.demo.Dto.UserDto;
import com.example.demo.Dto.UserLoginDto;
import com.example.demo.entity.User;
import com.example.demo.repo.UserRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceIMPL implements UserService{
    @Autowired
    UserRepo userRepo;

    @Transactional
    @Override
    public String addUser(UserDto userDto) {
        User user = new User(

                userDto.getUserName().toLowerCase(),
                userDto.getIndexNo().toLowerCase(),
                userDto.getField().toLowerCase(),
                userDto.getUserEmail().toLowerCase(),
                userDto.getUserPassword().toLowerCase()
        );
        userRepo.save(user);
        return user.getUserName();
    }

    @Override
    public String getUser(String indexNo) {
        Optional<User> user = userRepo.findByIndexNo(indexNo);
        User userEntity = user.get();
        UserLoginDto userLoginDto = new UserLoginDto();
        userLoginDto.setIndexNo(userEntity.getIndexNo());
        userLoginDto.setUserPassword(userEntity.getUserPassword());
        return userLoginDto.getUserPassword();

    }
}

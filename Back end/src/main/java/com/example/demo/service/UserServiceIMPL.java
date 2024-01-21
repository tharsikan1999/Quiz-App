package com.example.demo.service;

import com.example.demo.Dto.TeacherLoginDTO;
import com.example.demo.Dto.UserDto;
import com.example.demo.Dto.UserLoginDTO;
import com.example.demo.entity.Teacher;
import com.example.demo.entity.User;
import com.example.demo.repo.UserRepo;
import com.example.demo.response.LoginMesage;
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
    public LoginMesage loginUser(UserLoginDTO userLoginDTO) {
        String msg = "";
        User employee1 = userRepo.findByUserEmail(userLoginDTO.getUserEmail());
        if (employee1 != null) {
            String password = userLoginDTO.getUserPassword();
            Optional<User> employee = userRepo.findOneByUserEmailAndAndUserPassword(userLoginDTO.getUserEmail(), password);
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

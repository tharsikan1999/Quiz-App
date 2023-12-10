package com.example.demo.contoller;

import com.example.demo.Dto.UserDto;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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
    @GetMapping(path = "{indexNo}")
    public String getUser(@PathVariable String indexNo){
        String getuser =userService.getUser(indexNo.toLowerCase());
        return getuser;
    }

}

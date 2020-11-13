package com.example.gce.controller;

import com.example.gce.model.User;
import com.example.gce.services.GceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.List;

@ComponentScan(basePackages={"com.example.gce.controller"})
@SpringBootApplication
@RestController
@Service
public class GceRestController {
    @Autowired

    private GceService service;


     @GetMapping("/getuserList")
     @CrossOrigin(origins = "http://localhost:4200")

     public List<User> fetchUserList() {
     List<User> users = new ArrayList<User>();
     users = service.fetchuserList();
        return users;
}

    @PostMapping("/adduser")    public User saveUser (@RequestBody User user) {
         return service.saveUserToDB(user);
    }

    @GetMapping("/getuserbyid/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public User fetchUserById(@PathVariable int id) {
        return service.fetchUserById(id).get();
      }

    @DeleteMapping ("/deleteuserbyid/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public String DeleteUserById (@PathVariable int id) {
        return service.deleteUserById(id);
    }


}
package com.example.gce.Registration.controller;


import com.example.gce.Registration.service.RegistrationService;
import com.example.gce.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;


@SpringBootApplication
@RestController
@Service
@ComponentScan({"com.example.registration.controller"})
public class RegistrationController {

    @Autowired
    private RegistrationService service;

    @PostMapping("/registeruser")
    public User registrationUser(@RequestBody User user) throws Exception {
      String tempEmail = user.getEmail();
        if(tempEmail != null && "".equals(tempEmail)) {
            User userobj = service.fetchUserByEmail(tempEmail);
            if (userobj != null) {
                throw new Exception("user with"+tempEmail +" is already exist" );
            }

        }

        User userObj = null;
        userObj = service.saveUser(user);
        return userObj;
    }
@CrossOrigin(origins = "http://localhost:4200")
@PostMapping("/login")
    public User loginUser(@RequestBody User user) throws Exception {
        String tmpEmail = user.getEmail();
        String tmpPass = user.getPassword();
        User userObj = null;
        if( tmpEmail != null && tmpPass != null) {
            userObj = service.fetchUserByEmailAndPassword(tmpEmail,tmpPass);
        }
        if (userObj == null) {
            throw new Exception("bad credentials");
        }
return userObj;
    }



}

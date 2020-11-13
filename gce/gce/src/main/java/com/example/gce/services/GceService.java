package com.example.gce.services;
import com.example.gce.model.User;
import com.example.gce.repo.GceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class GceService {
    @Autowired
    private GceRepo repo;

    public List<User> fetchuserList(){
    return repo.findAll();
    }

   /* public List<Admin> fetchAdminList(){
        return repo.findAll();
    }
*/
    public User saveUserToDB(User user) {
       return repo.save(user);

    }
/*
    public Admin saveAdminToDB(Admin admin) {
        return repo.save(admin);

    }
*/

    public Optional<User> fetchUserById(int id) {
        return repo.findById(id);
    }

    public String deleteUserById(int id) {
String result;
            try {
                repo.deleteById(id);
                result = "user succesfully deleted";
            }catch (Exception e) {
                result = "user with id unsuccesfully deleted";
            }
            return result;
    }








}

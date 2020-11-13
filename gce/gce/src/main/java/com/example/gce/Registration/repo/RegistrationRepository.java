package com.example.gce.Registration.repo;

import com.example.gce.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<User, Integer> {

        public User findByEmail(String email);
        public User findByEmailAndPassword(String email, String password);

}

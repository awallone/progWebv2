package com.example.gce.repo;

import com.example.gce.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GceRepo extends JpaRepository<User,Integer> {

}

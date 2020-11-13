package com.example.gce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GceApplication {

	public static void main(String[] args) {

		SpringApplication.run(GceApplication.class, args);

		System.out.println("Bienvenue à toi !!");
	}

}

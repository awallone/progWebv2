import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Utilisateur } from "../utilisateur";
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
utilisateur = new Utilisateur;
msg='';
  constructor(private _service : RegistrationService, private _route:Router, private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

loginUser() {
  this._service.loginUserFromRemote(this.utilisateur).subscribe(
    data =>{
      console.log("response received");
      this._route.navigate(['home'])
    },
    error => {
      console.log("exception occured"),
      this.msg="Please enter a valid email and password"
    }
  );
}
}

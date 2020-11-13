import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Utilisateur } from '../utilisateur';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  utilisateur = new Utilisateur();
  constructor(private _route:Router, private _service: NgserviceService) { }
  ngOnInit() {
  }

utilisateurajoutformsubmit()
{
  this._service.addUtilisateurToRemote(this.utilisateur).subscribe
  (
    data =>
          {
            console.log("data added succesful");
            this._route.navigate(['utilisateurliste']);
  },
  error=>console.log("error")
)
}

gotolist(){
console.log("go back")
this._route.navigate(['utilisateurliste']);

}

}

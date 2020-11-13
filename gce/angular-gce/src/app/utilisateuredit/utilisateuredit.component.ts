import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Utilisateur } from '../utilisateur';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-utilisateuredit',
  templateUrl: './utilisateuredit.component.html',
  styleUrls: ['./utilisateuredit.component.css']
})
export class UtilisateureditComponent implements OnInit {

  utilisateur = new Utilisateur();
  constructor(private _route:Router, private _service: NgserviceService, private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {

    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchUtilisateurByidFromRemote(id).subscribe(
      data =>{
        console.log("data received");
      this.utilisateur = data;
      },
      error => console.log("exception")
    )
  }

  utilisateurupdateformsubmit()
  {
    this._service.addUtilisateurToRemote(this.utilisateur).subscribe
    (
      data =>
            {
              console.log("data update succesful");
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

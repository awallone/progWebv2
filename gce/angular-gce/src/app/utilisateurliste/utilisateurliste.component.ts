import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Utilisateur } from '../utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateurliste',
  templateUrl: './utilisateurliste.component.html',
  styleUrls: ['./utilisateurliste.component.css']
})
export class UtilisateurlisteComponent implements OnInit {

  _utilisateurliste: Utilisateur[];

  constructor(private _service:NgserviceService, private _route:Router) { }

  ngOnInit() {
        this._service.fetchUtilisateurListFromRemote().subscribe(
          data=> {
            console.log("response received")
            this._utilisateurliste=data;
          },
          error=>console.log("exception occured")
        )
      }

goToAjoutUtilisateur () {
  this._route.navigate(['/utilisateurajout']);
}

goToEditUtilisateur(id : number){
  console.log("id"+id);
  this._route.navigate(['/utilisateuredit',id])
}

goToVueUtilisateur (id : number) {
      console.log("id"+id);
  this._route.navigate(['/utilisateurvue',id])
}

supprimerUtilisateur (id : number) {
  this._service.deleteUtilisateurByidFromRemote(id).subscribe(
    data=> {
      console.log("delete succesful");
        this._route.navigate(['/utilisateurliste']);
    },
    error=>console.log("delete unsuccesful")
  )



}





}

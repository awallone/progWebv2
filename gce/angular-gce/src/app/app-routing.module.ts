import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UtilisateurlisteComponent } from "./utilisateurliste/utilisateurliste.component";
import { UtilisateureditComponent } from "./utilisateuredit/utilisateuredit.component";
import { UtilisateurevueComponent } from "./utilisateurevue/utilisateurevue.component";
import { UtilisateurajoutComponent } from "./utilisateurajout/utilisateurajout.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path: 'home', component:HomeComponent },
{path:'utilisateurajout', component:UtilisateurajoutComponent},
{path:'utilisateuredit/:id', component:UtilisateureditComponent},
{path:'utilisateuredit', component:UtilisateureditComponent},
{path:'utilisateurvue', component:UtilisateurevueComponent},
{path:'utilisateurvue/:id', component:UtilisateurevueComponent},
{path:'utilisateurliste', component:UtilisateurlisteComponent},
{path:'login', component:LoginComponent},
{path:'registration', component:RegistrationComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

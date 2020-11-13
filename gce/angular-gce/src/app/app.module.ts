import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UtilisateurlisteComponent } from './utilisateurliste/utilisateurliste.component';
import { UtilisateureditComponent } from './utilisateuredit/utilisateuredit.component';
import { UtilisateurevueComponent } from './utilisateurevue/utilisateurevue.component';
import { AppRoutingModule } from './app-routing.module';
import { UtilisateurajoutComponent } from './utilisateurajout/utilisateurajout.component';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    UtilisateurlisteComponent,
    UtilisateureditComponent,
    UtilisateurevueComponent,
    UtilisateurajoutComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'hexadefence',
        clientId: 'angular-client',
      },
      initOptions: {
        onLoad: 'login-required',  // allowed values 'login-required', 'check-sso';
        flow: "standard"          // allowed values 'standard', 'implicit', 'hybrid';
      },
    });
}

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }

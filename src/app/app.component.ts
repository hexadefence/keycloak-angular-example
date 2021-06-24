import { Component } from '@angular/core';
import {ConfigService} from './config.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfigService]
})
export class AppComponent {
  title = 'keycloak-angular-example';

  constructor(private service: ConfigService){

  }

  callGet(): void{
    console.log('called get')
    this.service.get();
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-barbieri';
  email : string = "";
  estratto : string = "";
  testo : string = "";
  registrazione(Email : HTMLInputElement, Testo : HTMLInputElement,  Oggetto : HTMLInputElement ){
    console.log(Email.value, Oggetto.value, Testo.value)
    this.estratto = (Email.value) + " " + (Oggetto.value)
  }
}

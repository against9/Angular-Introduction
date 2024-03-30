import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PersonTableComponent} from "./components/person-table/person-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Alexandros";

  person0=
    {
    givenName: "Alexandros",
    surName: "Chrisafidis",
    age: 0x32,
    email: "cf5@aueb.gr",
    address:"Athens, Greece"
  }
  person1=
    {
      givenName: "John",
      surName: "Giannakis",
      age: 0x32,
      email: "cf3@aueb.gr",
      address:"London, England"
    }

}

import { Component } from '@angular/core';
import {Person} from "../../shared/interfaces/person";
import {PersonTableComponent} from "../person-table/person-table.component";

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0 :Person =
    {
      givenName: "Alexandros",
      surName: "Chrisafidis",
      age: 0x32,
      email: "cf5@aueb.gr",
      address: "Athens, Greece"
    }
  person1: Person =
    {
      givenName: "John",
      surName: "Giannakis",
      age: 0x32,
      email: "cf3@aueb.gr",
      address: "London, England"
    }

}

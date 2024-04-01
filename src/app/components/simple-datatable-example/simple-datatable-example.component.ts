import { Component } from '@angular/core';
import {SimpleDatatableComponent} from "../simple-datatable/simple-datatable.component";
import {EPerson, ManyPerson} from "../../shared/interfaces/person";

@Component({
  selector: 'app-simple-datatable-example',
  standalone: true,
  imports: [SimpleDatatableComponent],
  templateUrl: './simple-datatable-example.component.html',
  styleUrl: './simple-datatable-example.component.css'
})
export class SimpleDatatableExampleComponent {
  manyperson: EPerson= ManyPerson
}

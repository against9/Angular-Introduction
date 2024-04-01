import {Component} from '@angular/core';

@Component({
  selector: 'app-event-bind-example',
  standalone: true,
  imports: [],
  templateUrl: './event-bind-example.component.html',
  styleUrl: './event-bind-example.component.css'
})
export class EventBindExampleComponent {
  time: number = 0
  userInput: string = ""

  incrementTimes() {
    this.time++
  }

  decrementTimes() {
    this.time--
  }

  resetTimes() {
    this.time = 0
  }

  onUserInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.userInput = value
  }


}

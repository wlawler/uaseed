import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children: Child[] | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
   <passenger-dashboard></passenger-dashboard>
  `
})
export class AppComponent {
 
}
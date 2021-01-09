import { Component } from '@angular/core';



@Component({
  selector: 'not-found',
  styleUrls: ['app.component.scss'],
  template: `
  <div>
     Not Found, <a routerLink="/"> go home </a>
   </div>
  `
})
export class NotFoundComponent {
 
}
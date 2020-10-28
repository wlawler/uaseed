import { Component} from '@angular/core'; 


@Component({
  selector:`app-root`, 
  styleUrls: [ `app.component.scss`],
  template:`
  <div> 
     <h1>{{title}}</h1>
     <input type = 'text' [value] = 'name'> 
  </div> 
  <div>{{name}}</div>
  `
  
})
export class AppComponent {
  
  title: string;
  
  name: string = 'Wes';
   
  constructor() {
   this.title = 'Ultimate Angular'; 

  }
}


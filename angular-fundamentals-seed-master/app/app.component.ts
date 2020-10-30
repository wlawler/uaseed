import { Component} from '@angular/core'; 


@Component({
  selector:`app-root`, 
  styleUrls: [ `app.component.scss`],
  template:`
  <div class="app"> 
    
     <input 
     type = 'text'
      [value] = 'name'
      (blur)="handleBlur($event)"> 
  
  <div>{{name}}</div>
  </div>
  `
  
})
export class AppComponent {
  
  title: string;
  
  name: string = 'Wes';
  handleBlur (event: any){
    console.log (event);
  }
   
  constructor() {
   this.title = 'Ultimate Angular'; 

  }

}


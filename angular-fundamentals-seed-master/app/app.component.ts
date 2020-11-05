import { Component} from '@angular/core'; 


@Component({
  selector:`app-root`, 
  styleUrls: [ `app.component.scss`],
  template:`
  <div class="app"> 
    <button (click)="handleClick(username.value)">
    Get Value
    </button>

  <input  type = 'text' #username >
  <div>{{name}}</div>
  </div>
  `
  
})
export class AppComponent {
  
  title: string;
  
  name: string = 'Wes';
  handleClick(value: any) {
 console.log(value); 
  }

  
  constructor() {
   this.title = 'Ultimate Angular'; 

  }

}


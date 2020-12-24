import { Component} from '@angular/core'; 

@Component({
    selector:'passenger-form', 
    styleUrls: ['passenger-form.component.scss'], 
    templateUrl: './passenger-form.component.html'
})

export class PassengerFormComponent {
    detail: Passenger; 
}
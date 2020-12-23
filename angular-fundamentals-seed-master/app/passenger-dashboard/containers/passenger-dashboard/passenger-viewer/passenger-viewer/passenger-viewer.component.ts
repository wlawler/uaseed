import {Component, OnInit} from '@angular/core'; 
import { Passenger} from '../../../../models/passenger.interface'; 
import { PassengerDashboardService } from '../../../../passenger-dashboard.service';


@Component({
    selector: 'passenger-viewer', 
    templateUrl: './passenger-viewer.component.html', 
    styleUrls: ['passenger-viewer.component.scss'] 

})

export class PassengerViewerComponent implements OnInit{
    passenger: Passenger; 
    constructor(private passengerService: PassengerDashboardService) {}
        ngOnInit () {
         this.passengerService
          .getPassenger (1) 
          .subscribe((data: Passenger) => this.passenger = data);
        }
    
}
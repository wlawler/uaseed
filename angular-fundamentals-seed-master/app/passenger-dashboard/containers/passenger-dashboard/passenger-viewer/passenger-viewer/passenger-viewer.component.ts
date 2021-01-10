import {Component, OnInit} from '@angular/core'; 
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Passenger} from '../../../../models/passenger.interface'; 
import { PassengerDashboardService } from '../../../../passenger-dashboard.service';


@Component({
    selector: 'passenger-viewer', 
    templateUrl: './passenger-viewer.component.html', 
    styleUrls: ['passenger-viewer.component.scss'] 

})

export class PassengerViewerComponent implements OnInit{
    passenger: Passenger; 
    constructor(
        private router: Router, 
        private route: ActivatedRoute,
        private passengerService: PassengerDashboardService
        
        ) {}
        ngOnInit () {
         this.route.params
          .switchMap((data: Passenger) => { return this.passengerService.getPassenger(data['id'])  ; 
          })
        
          .subscribe((data: Passenger) => this.passenger = data);
        }
        onUpdatePassenger(event: Passenger) {
            this.passengerService
            .updatePassenger(event)
            .subscribe((data: Passenger) => {
                this.passenger = Object.assign({}, this.passenger, event)
            }); 
        }
}
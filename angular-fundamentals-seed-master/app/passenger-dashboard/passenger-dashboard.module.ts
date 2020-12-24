import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http'; 
//container
import { PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-viewer/passenger-dashboard/passenger-dashboard.component'
import { PassengerViewerComponent} from './containers/passenger-dashboard/passenger-viewer/passenger-viewer/passenger-viewer.component'
//component
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

//service 
import {PassengerDashboardService} from './passenger-dashboard.service'; 
@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent, 
    PassengerDetailComponent
  ],
  imports: [
    CommonModule, 
    HttpModule
  ], 
  exports: [
        //PassengerDashboardComponent
     PassengerViewerComponent
      
  ], 
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http'; 
import { FormsModule} from'@angular/forms';
//container
import { PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-viewer/passenger-dashboard/passenger-dashboard.component'
import { PassengerViewerComponent} from './containers/passenger-dashboard/passenger-viewer/passenger-viewer/passenger-viewer.component'
//component
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
//service 
import {PassengerDashboardService} from './passenger-dashboard.service'; 

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent, 
    PassengerDetailComponent, 
    PassengerFormComponent
  ],
  imports: [
    CommonModule, 
    HttpModule, 
    FormsModule
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
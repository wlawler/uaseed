import { Component, Input, Output, EventEmitter, OnChanges} from '@angular/core'; 
import { Passenger } from '../../models/passenger.interface';


@Component({
    selector:'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    templateUrl: './passenger-detail.component.html'
})

export class PassengerDetailComponent implements OnChanges {
    @Input()
    detail: Passenger;
    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter<Passenger>(); 
    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    editing: boolean = false; 

    constructor() {}

    ngOnChanges(changes) {
        if (changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
     
    }

 
    onNameChange(value: string) {
        this.detail.fullname = value; 
    }
    toggleEdit(){
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove() {
        this.remove.emit(this.detail);

    }
}
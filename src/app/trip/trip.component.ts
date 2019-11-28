import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Trip } from '../entities/trip';
import { DataService } from '../data.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  @Input() lift: Trip;
  @Output() tripDeleteEmitter: EventEmitter<any> = new EventEmitter<any>();


  private trips: Trip[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.trips = this.data.trips;
  }


  onTripDelete(id: string){
    this.tripDeleteEmitter.emit(id);
  }
}

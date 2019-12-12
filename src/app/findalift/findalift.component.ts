import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Trip } from '../entities/trip';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';
import { LiftActions } from './lift-actions';

@Component({
  selector: 'app-findalift',
  templateUrl: './findalift.component.html',
  styleUrls: ['./findalift.component.scss']
})
export class FindaliftComponent implements OnInit {
  
  private isLift: boolean;
  private lifts: Trip[];
    
  constructor( private liftActions: LiftActions,
    private ngRedux: NgRedux<AppState>) { }

// Subscribe to the store.
ngOnInit() {
this.ngRedux.select(x => x.trips).subscribe((state) => {
  this.isLift = state.isLift;
  this.lifts = state.lifts;
});
  this.liftActions.getTrips();
}
  onTripDelete(id: string):void  {
  
    this.liftActions.DeleteTrip(id);
  }

  onTestClick(): void {
    // dispatch action by calling an action creator.
    this.liftActions.setType(true);
  }

}


import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';
import { Trip } from '../entities/trip';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class LiftActions {

constructor (private ngRedux: NgRedux<AppState>, private apiService: ApiService,  private router: Router) {} 

  static SET_TYPE: string = 'SET_TYPE'; 
  static MyAction: string = 'MY_ACTION'; 
  static CreateAction: string = 'CREATE_ACTION';
  static DeleteAction: string = 'DELETE_ACTION';
  static GetAction: string = 'GET_ACTION'; // action is the trip

  static IS_LOADING: string = 'IS_LOADING'; 

  getTrips(){
    this.apiService.GetAllTrips().subscribe((result: any[]) => {
        const myTrips = result.filter(x => x.localFilter == 'Arnold' );
        console.log(myTrips);
    
    
        this.ngRedux.dispatch({
          type: LiftActions.GetAction,
          payload: myTrips
      }); 
    });
  }

callDeleteAction(id: string): void {
    this.ngRedux.dispatch({
      type: LiftActions.DeleteAction,
      payload: id
    });
  }

  callCreateAction(trip: Trip): void {

    this.ngRedux.dispatch({

      type: LiftActions.IS_LOADING,
      payload: true
    });


    this.apiService.CreateTrip(trip).subscribe((tripObjFromApi: Trip) => {

      this.ngRedux.dispatch({
        type: LiftActions.CreateAction,
        payload: tripObjFromApi
      });
      this.router.navigate(['/portal/findalift']);
    });

    console.log("Hi");

  }  


callMyAction(isLift: boolean): void {
    this.ngRedux.dispatch({
      type: LiftActions.MyAction,
      payload: isLift
    });
  }


setType(isLift: boolean): void {
    this.ngRedux.dispatch({
      type: LiftActions.SET_TYPE,
      payload: isLift
    });
  }
}
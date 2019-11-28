import { tassign } from 'tassign';
import { TripState } from './store';
import { LiftActions } from '../findalift/lift-actions';
import { DataService } from '../data.service';
import { Trip } from '../entities/trip';

let dataService =  new DataService();
const INITIAL_STATE: TripState = {isLift: false,  lifts: dataService.tempData, };

export function tripsReducer(state: TripState = INITIAL_STATE, action: any) {
 switch (action.type) {
  
  case LiftActions.SET_TYPE:
        return tassign(state, { isLift: action.payload});
  
  //case LiftActions.MyAction:

  case LiftActions.CreateAction:
    // return Object.assign({}, state,{ isLifts: action.payload });
    // Should: ___CREATE a new state object___
    const newLifts = state.lifts.concat([action.payload]);
    return tassign(state, {lifts: newLifts});
    
  case LiftActions.DeleteAction:
      const deleteLifts: Trip[] = state.lifts.filter(x => x._id !== action.payload);
      return tassign(state,{lifts: deleteLifts});
      

   default:
    return state;   
}
}
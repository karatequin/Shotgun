import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Trip } from '../entities/trip';

@Pipe({name: 'filterLift'})
@Injectable()
export class FilterLift implements PipeTransform {
     transform(items: Trip[], search: any): any {
  // your custom code here
     
      
      if(search === undefined){
          return items
      }
      
      
      search = search.toLowerCase();
      let result = items.filter(trip => trip.destination && trip.destination.toLowerCase().includes(search) || 
      trip.origin && trip.origin.toLowerCase().includes(search) ||
      trip.availableSeats && trip.availableSeats >= search);
        console.log(result);
        console.log(search);
        return result;
    }
}
     
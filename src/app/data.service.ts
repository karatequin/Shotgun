import { Injectable } from '@angular/core';
import { Trip } from './entities/trip';
import { User } from './entities/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tempData: Trip[] = [
    {_id: '3fdska', 
    origin: 'Albertslund', 
    destination: 'Copenhagen', 
    availableSeats: 4, 
    departureTime: new Date(2019, 0, 1, 8, 0,0 ), 
    owner: {_id: '21', firstName: 'Eric', lastName: "Sørensen"} as User },
    
    {_id: '2', 
    origin: 'Hillerød', 
    destination: 'Copenhagen', 
    availableSeats: 4, 
    departureTime: new Date(2019, 1, 1, 8, 0,0 ), 
    owner: {_id: '1', firstName: 'Christian'} as User },
    
    {_id: '3', 
    origin: 'Roskilde', 
    destination: 'Copenhagen', 
    availableSeats: 3, 
    departureTime: new Date(2019, 1, 2, 9, 0,0 ), 
    owner: {_id: '2', firstName: 'Simon'} as User }
  ];
  trips: Trip[];

  constructor() { }


  addTrip(trip: Trip) : void {
    // generate an _id until we learn to call the web service
    // where an id wil be generated for us
    this.tempData.push(trip);
  
  }

  deleteTrip(id: string) : void {
    // this.tempData.splice(id);
   this.tempData = this.tempData.filter(x => x._id !== id);
    
  }
}

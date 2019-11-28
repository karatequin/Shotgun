import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from './entities/trip';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'http://angular2api2.azurewebsites.net/api/internships';
  
  constructor(private http: HttpClient) { }
    
  GetAllTrips() : Observable<any>{
    return this.http.get(this.baseUrl)
    }
  
  CreateTrip(trip: Trip){
    trip.localFilter = 'Arnold';
    return this.http.post(this.baseUrl, trip);
  }
}

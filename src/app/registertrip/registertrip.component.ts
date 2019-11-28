import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../data.service';
import { Trip } from '../entities/trip';
import { LiftActions } from '../findalift/lift-actions';

@Component({
  selector: 'app-registertrip',
  templateUrl: './registertrip.component.html',
  styleUrls: ['./registertrip.component.scss']
})
export class RegistertripComponent implements OnInit {

  registerTripForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dataservice: DataService, private auth: AuthService, 
    private liftActions: LiftActions) {}

  ngOnInit() {
    this.registerTripForm = this.fb.group({
      "origin":["", Validators.required],
      "destination":["", Validators.required],
      "availableSeats":["", Validators.required],
      "departureTime":[Validators.required],

    })

  }

  onTripSubmit():void {
    if(this.registerTripForm.valid){
      let trip = this.registerTripForm.value as Trip;
      trip.owner = this.auth.loggedInUser;
      
      this.liftActions.callCreateAction(trip);
      //this.dataservice.addTrip(trip);
      this.router.navigate(["/portal/findalift"]);
    }  
  }
}
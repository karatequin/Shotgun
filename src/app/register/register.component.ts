import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  this.registerForm = this.fb.group({
    "firstName": ['', Validators.required],
    "lastName": ['', Validators.required],
    "email": ['', Validators.email],
    "password": ['', Validators.required],
    "city": ['', Validators.required],
    "locationOfEducation": ['', Validators.required],
    "birthDate": ['', Validators.required],
    "phoneNumber": ['', Validators.required],
  })
  }

  onRegisterClick() : void {
    console.log(this.registerForm);

      // If this form is valid - then call the serve.
      if(this.registerForm.valid) {
      
      } else{
        console.log("Cant. Must fix register form errors first");
      }
      // then cal the server
  }
  
}

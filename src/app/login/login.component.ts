import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // DI - Dependency Injection (this is how you get acces to other classes)
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  this.loginForm = this.fb.group({
    "username": ['', Validators.required],
    "password": ['', Validators.required]
  })
  }
  
  onLoginClick() : void {
    console.log(this.loginForm);

      // If this form is valid - then call the serve.
      if(this.loginForm.valid) {
      
      } else{
        console.log("Cant. Must fix form errors first");
      }
      // then cal the server
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UseradminService } from '../useradmin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // DI - Dependency Injection (this is how you get acces to other classes)
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService,
    private adminauth: UseradminService) { }

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
        // if tjek om username er admin
        if(this.loginForm.value.username == 'admin'){
        this.adminauth.admin().subscribe(() =>
        this.router.navigate(['/portal/useradmin']));
        
        }else {console.log("auth service");
        this.auth.login().subscribe(result => {
          console.log(result)
          this.router.navigate(['portal']); 
        });
      
      }} else{
        console.log("Cant. Must fix form errors first");
      }

      // then cal the server
  
  }
}

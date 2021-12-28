import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup

  constructor(private _LS: LoginService, private builder: FormBuilder,private router:Router) {
    this.loginForm = builder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  public loading:boolean = false

  ngOnInit(): void {
  }
  
  get loginFormControls() {
    return this.loginForm.controls
  }
  
  //LOGIN FUNCTION
  login(): void {
    this.loading = true;
    this._LS.loginUser(this.loginForm.value).subscribe(()=>this.router.navigate(['home']));
  }

}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  constructor() { }

  ngOnInit(): void {

  }

  //send control back to view for validation
  get f(){
    return this.loginForm.controls;
  }

  onSubmit(): void {
    console.warn(this.loginForm.value);
  }


}

import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../../Service/auth.service";
import {User} from "../../Model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const user: User = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
      role: ''
    };

    this.authService.login(user).subscribe(
      () => {
        // Login successful
        // Perform any necessary actions
      },
      (error) => {
        console.error('Login error:', error);
        // Handle login error
      }
    );
  }
}

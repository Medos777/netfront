import { Component } from '@angular/core';
import {User} from "../../Model/user";
import {AuthService} from "../../Service/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  roles: string[] = ['admin', 'user'];

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  register(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const user: User = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      role: this.registerForm.value.role
    };

    this.authService.register(user).subscribe(
      () => {
        // Registration successful
        // Perform any necessary actions
      },
      (error) => {
        console.error('Registration error:', error);
        // Handle registration error
      }
    );
  }
}

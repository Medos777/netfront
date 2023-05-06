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
  user: User= new User(0,"","");

  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmit() {
    this.authService.login(this.user).subscribe(
      (response) => {

        console.log("succee");
       // this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Login failed, display error message
        console.error(error);
      }
    );
  }

}

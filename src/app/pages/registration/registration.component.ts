import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: any = {
    name: null,
    username: null,
    email: null,
    password: null,
    number: null,
    address: null,
    role: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const { name, username, email, password, number, address, role } = this.form;

    this.authService.register(name, username, email, password,
      number, address, role).subscribe({
        next: data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          window.location.href = "/login";
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
  }

}

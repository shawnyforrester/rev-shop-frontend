import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import{ User} from '../../Models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = {

    id: 0,
    name: "",
    username: "",
    email: "",
    password: "",
    number: "",
    address: "",
    role: ""
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log(this.user);
    this.authService.register(this.user).subscribe(data => {
          console.log(data);
          this.router.navigateByUrl('login')
    },
        error => {
          this.errorMessage = error.message;
          this.isSignUpFailed = true;
        },
        () => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        }
    );
  }

}

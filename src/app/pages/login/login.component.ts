import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role = '';

  constructor(private authService: AuthServiceService, private storageService: StorageServiceService,
    private route: Router, private appComponent: AppComponent) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.role = this.storageService.getUser().role;
    }
  }

  ngOnChange():void{
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  onSubmit(): void {
    this.isLoggedIn = true;
    this.authService.login(this.user).subscribe(data => {
         this.storageService.saveUser(data);
         this.appComponent.ngOnInit();
      },
      error => {
        console.log(error)
        this.isLoginFailed = true
      },
      () => {
         this.isLoginFailed = false
         this.role = this.storageService.getUser().role;
         this.reloadPage()
      }
    );
  }

  reloadPage(): void {
    this.route.navigateByUrl('profile');

  }
}

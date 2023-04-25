import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  currentUser: any;

  currentPassword: String = "";
  newPassword: String =  "";
  confirmPassword: String = "";

  error:String ="";


  constructor(private storageService: StorageServiceService,
    private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {

    this.currentUser = this.storageService.getUser();

  }

  ngOnDestroy(): void {

    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        localStorage.clear();

        this.router.navigate(['/home']);

      },
      error: err => {
        console.log(err);
      }
    });
  }
  passSubmit():void{
    console.log(this.currentPassword);
    console.log(this.newPassword);
    console.log(this.confirmPassword);

    console.log(this.currentUser);
    if(this.currentUser.password != this.currentPassword){
      this.error = "Current password input is incorrect.";
    }
    else if(this.currentPassword == this.newPassword){
      this.error = "New password can't be the same as the current password";
    }
    else if(this.newPassword != this.confirmPassword){
      this.error = "Password confirmation doesn't match new password";
    }
    else if(this.newPassword.length < 5){
      this.error = "New pass must be at least 6 characters";
     }
    else{
      console.log("password can update")
    }
   }
}

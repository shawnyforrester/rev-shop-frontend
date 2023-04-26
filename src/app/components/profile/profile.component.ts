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

  message:String ="";


  constructor(private storageService: StorageServiceService,
    private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {

    this.currentUser = this.storageService.getUser();

  }

  ngOnDestroy(): void {

    this.authService.logout().subscribe( res => {
        console.log(res);
        },
        error => {
          console.log(error);
        },
        () => {
          this.storageService.clean();
          this.router.navigateByUrl('home')
       }
    );
  }
  passSubmit():void{
    console.log(this.currentPassword);
    console.log(this.newPassword);
    console.log(this.confirmPassword);

    if(this.currentUser.password != this.currentPassword){
      this.message = "Current password input is incorrect.";
    }
    else if(this.currentPassword == this.newPassword){
      this.message = "New password can't be the same as the current password";
    }
    else if(this.newPassword != this.confirmPassword){
      this.message = "Password confirmation doesn't match new password";
    }
    else if(this.newPassword.length < 5){
      this.message = "New pass must be at least 6 characters";
     }
    else{

      this.currentUser.password = this.newPassword;
      this.authService.changePassword(this.currentUser.id,this.currentUser).subscribe(data => {
      console.log(this.currentUser);
      });
      this.message="Password updated successfully!";
    }
  }
}

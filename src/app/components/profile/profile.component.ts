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



}

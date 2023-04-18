import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { StorageServiceService } from './services/storage-service.service';
import { AuthServiceService } from './services/auth-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rev-shop-frontend';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showRetailerBoard = false;
  username?: string;

  constructor(private storageService: StorageServiceService, 
    private router: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showRetailerBoard = this.roles.includes('ROLE_RETAILER');

      this.username = user.username;
    }

  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}

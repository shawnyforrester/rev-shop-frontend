import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-buyer',
  templateUrl: './board-buyer.component.html',
  styleUrls: ['./board-buyer.component.css']
})
export class BoardBuyerComponent implements OnInit {
  
    constructor(private router: Router) { }
  
    ngOnInit(): void {

      this.router.navigate(['/products-page']);
    }

}

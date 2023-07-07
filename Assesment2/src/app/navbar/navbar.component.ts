import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ImagePath: string;
  constructor(public authService: AuthserviceService) {
    this.ImagePath = 'assets/img/logo3.jpg';
  }

  ngOnInit() {}
  
}

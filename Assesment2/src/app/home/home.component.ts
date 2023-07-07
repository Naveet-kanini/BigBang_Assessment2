import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ImagePath1: string;
  constructor() {
    this.ImagePath1 = 'assets/img/bg.avif';
  }
}

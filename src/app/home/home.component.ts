import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  toggled: boolean;
  constructor() { }

  ngOnInit() {
    this.toggled = false;
  }

}

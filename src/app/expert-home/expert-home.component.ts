import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-home',
  templateUrl: './expert-home.component.html',
  styleUrls: ['./expert-home.component.scss']
})
export class ExpertHomeComponent implements OnInit {
  
  toggled: boolean;
  constructor() { }

  ngOnInit() {
    this.toggled = false;
  }

  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  host: {'class': 'row'}
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

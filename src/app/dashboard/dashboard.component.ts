import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  timeOfDay = Math.round(Math.random());
  classNames = [ 'day', 'night' ];
  daytime: string = this.classNames[this.timeOfDay];

  constructor() { }

  ngOnInit() {
  }

}

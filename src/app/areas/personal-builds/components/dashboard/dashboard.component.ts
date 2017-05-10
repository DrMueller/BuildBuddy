import { Component, OnInit } from '@angular/core';

import { BuildOverviewService } from '../../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private buildOverviewService: BuildOverviewService) { }

  ngOnInit() {
    this.buildOverviewService.getBuilds();
  }

}

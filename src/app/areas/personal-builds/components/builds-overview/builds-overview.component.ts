import { Component, OnInit, Input } from '@angular/core';

import { VssBuild } from 'app/common/core-services/vss';

import { BuildOverviewService } from '../../services';

@Component({
  selector: 'app-builds-overview',
  templateUrl: './builds-overview.component.html',
  styleUrls: ['./builds-overview.component.scss']
})
export class BuildsOverviewComponent implements OnInit {
  public vssBuilds: VssBuild[];

  constructor(private buildsOverviewService: BuildOverviewService) { }

  ngOnInit() {
    this.buildsOverviewService.getOverview()
      .then(f => {
        this.vssBuilds = f;
      });
  }
}

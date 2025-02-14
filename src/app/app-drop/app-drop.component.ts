import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {DropService} from './shared/service/drop.service';
import {DropModel} from './shared/model/drop.model';
import {DropPlayerModel} from './shared/model/drop-player.model';
import {DropPlayerService} from './shared/service/drop-player.service';

@Component({
  selector: 'app-drop',
  templateUrl: './app-drop.component.html',
  styleUrl: './app-drop.component.scss',
  imports: [NgOptimizedImage, CommonModule],
  providers: [DropService, DropPlayerService],
})
export class AppDropComponent implements OnInit {
  public dropId: number = 0;
  public drop: DropModel = new DropModel();
  public dropPlayers: DropPlayerModel[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dropService: DropService,
    private dropPlayerService: DropPlayerService,
  ) {
    this.dropId = +(this.activatedRoute.snapshot.paramMap.get('id') ?? 0);
  }

  public ngOnInit() {
    this.getDrop();
  }

  public async getDrop(): Promise<void> {
    this.drop = await this.dropService.getDrop(this.dropId);
    this.dropPlayers = await this.dropPlayerService.getPlayerByDropId(this.dropId);
  }
}

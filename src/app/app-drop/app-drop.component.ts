import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {DropService} from './shared/service/drop.service';
import {DropModel} from './shared/model/drop.model';
import {DropPlayerModel} from './shared/model/drop-player.model';
import {DropPlayerService} from './shared/service/drop-player.service';
import {DropPlayerFormGroup} from './shared/form/drop-player.form-group';
import {ReactiveFormsModule} from '@angular/forms';
import {ClassService} from './shared/service/class.service';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {CodeNameBaseModel} from '../../shared/model/base/code-name-base.model';
import {MatCheckbox} from '@angular/material/checkbox';

@Component({
  selector: 'app-drop',
  templateUrl: './app-drop.component.html',
  styleUrl: './app-drop.component.scss',
  imports: [
    NgOptimizedImage,
    CommonModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    MatCheckbox,
  ],
  providers: [DropService, DropPlayerService, ClassService],
})
export class AppDropComponent implements OnInit {
  public dropId: number = 0;
  public drop: DropModel = new DropModel();
  public dropPlayers: DropPlayerModel[] = [];

  public classList: CodeNameBaseModel[] = [];

  public formGroup: DropPlayerFormGroup = new DropPlayerFormGroup();

  constructor(
    private activatedRoute: ActivatedRoute,
    private dropService: DropService,
    private dropPlayerService: DropPlayerService,
    private classService: ClassService,
  ) {
    this.dropId = +(this.activatedRoute.snapshot.paramMap.get('id') ?? 0);
  }

  public ngOnInit() {
    this.getDrop();
    this.getClassList();
  }

  public async getDrop(): Promise<void> {
    this.drop = await this.dropService.getDrop(this.dropId);
    this.dropPlayers = await this.dropPlayerService.getPlayerByDropId(this.dropId);
  }

  public async getClassList(): Promise<void> {
    this.classList = await this.classService.getClassList();
  }

  public getSum(dropPlayer: DropPlayerModel): number {
    if (this.drop.id && this.dropPlayers.length && dropPlayer.part) {
      return (
        (this.drop.price / this.dropPlayers.reduce((acc: number, item: DropPlayerModel) => acc + (item.part || 0), 0)) *
        dropPlayer.part
      );
    }

    return 0;
  }

  public async addPlayer(): Promise<void> {
    this.dropPlayerService.addPlayer(this.formGroup.getRawValue());
  }
}

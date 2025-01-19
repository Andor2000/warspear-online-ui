import {Component, OnInit} from '@angular/core';
import {SideBarService} from '../side-bar/shared/service/side-bar.service';
import {DropJournalService} from './shared/services/drop-journal.service';
import {DropModel} from '../app-drop/shared/model/drop.model';
import {JournalDropFilterModel} from './shared/model/journal-drop-filter.model';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CodeNameBaseModel} from '../../shared/model/base/code-name-base.model';
import {ServerService} from './shared/services/server.service';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-drop-journal',
  imports: [MatAutocompleteModule, MatInputModule, ReactiveFormsModule, CommonModule, MatSelect],
  providers: [DropJournalService, ServerService],
  templateUrl: './drop-journal.component.html',
  styleUrl: './drop-journal.component.scss',
})
export class DropJournalComponent implements OnInit {
  public count: number = 0;
  public dropJournal: DropModel[] = [];
  public filter: JournalDropFilterModel = new JournalDropFilterModel();
  public servers: CodeNameBaseModel[] = [];

  constructor(
    private dropJournalService: DropJournalService,
    private serverService: ServerService,
    private sideBarService: SideBarService,
  ) {
    sideBarService.adminLinks = [
      {
        id: 0,
        name: 'Админка',
        link: '',
      },
      {
        id: 1,
        name: 'Выйти',
        link: '',
      },
    ];
  }

  public ngOnInit(): void {
    this.initJournal();
    this.initDictionary();
  }

  public async initJournal(): Promise<void> {
    this.count = await this.dropJournalService.getJournalDropCount(this.filter);
    if (this.count) {
      this.dropJournal = await this.dropJournalService.getJournalDrop(this.filter);
    }
  }

  public async initDictionary(): Promise<void> {
    this.servers = await this.serverService.getServerList();
  }
}

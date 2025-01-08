import {Component} from '@angular/core';
import {SideBarService} from '../side-bar/shared/service/side-bar.service';

@Component({
  selector: 'app-drop-journal',
  imports: [],
  templateUrl: './drop-journal.component.html',
  styleUrl: './drop-journal.component.scss',
})
export class DropJournalComponent {
  constructor(private sideBarService: SideBarService) {
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
}

import {Component} from '@angular/core';
import {SideBarService} from '../side-bar/shared/service/side-bar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  imports: [],
  providers: [],
})
export class AdminComponent {
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

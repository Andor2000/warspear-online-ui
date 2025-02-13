import {Routes} from '@angular/router';
import {AppDropComponent} from './app-drop/app-drop.component';
import {AppAuthorizeComponent} from './app-authorize/app-authorize.component';
import {AdminComponent} from './admin/admin.component';
import {DropJournalComponent} from './drop-journal/drop-journal.component';

export const routes: Routes = [
  {path: 'drop/:id', component: AppDropComponent},
  {path: 'drop-journal', component: DropJournalComponent},
  {path: 'auth', component: AppAuthorizeComponent},
  {path: 'admin', component: AdminComponent},
];

import {Injectable} from '@angular/core';
import {SideBarItemModel} from '../model/side-bar-item.model';

@Injectable()
export class SideBarService {
  public mainLinks: SideBarItemModel[] = [];
  public adminLinks: SideBarItemModel[] = [];
}

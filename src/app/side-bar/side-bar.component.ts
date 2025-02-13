import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideBarService} from './shared/service/side-bar.service';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  constructor(public sideBarService: SideBarService) {}
}

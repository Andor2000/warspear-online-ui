import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {SideBarComponent} from './side-bar/side-bar.component';
import {SideBarService} from './side-bar/shared/service/side-bar.service';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule, RouterOutlet, SideBarComponent],
  providers: [HttpClient, ToastrService, SideBarService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

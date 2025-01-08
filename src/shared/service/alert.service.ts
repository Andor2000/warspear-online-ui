import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private toastr: ToastrService) {}

  public errorShow(msg: string): void {
    this.toastr.error(`<div class="msg-icon"><span class="fas fa-ban"></span><span>${msg}</span></div>`, '', {
      enableHtml: true,
    });
  }
}

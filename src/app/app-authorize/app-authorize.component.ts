import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AutorizeService} from './shared/service/autorize.service';
import {CommonModule} from '@angular/common';
import {AlertService} from '../../shared/service/alert.service';
import {UserSessionModel} from './shared/model/user-session.model';
import {AuthService} from '../../shared/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authorize',
  templateUrl: './app-authorize.component.html',
  styleUrl: './app-authorize.component.scss',
  imports: [FormsModule, CommonModule],
  providers: [AutorizeService, Router],
})
export class AppAuthorizeComponent {
  public login: string = '';
  public password: string = '';
  public repeatPassword: string = '';

  public isExist: boolean | null = null;

  constructor(
    private autorizeService: AutorizeService,
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router,
  ) {}

  public async checkLogin(): Promise<void> {
    this.isExist = await this.autorizeService.checkExistLoginAndFilledPassword(this.login);
  }

  public async signIn(): Promise<void> {
    let res: UserSessionModel | null;

    if (this.isExist) {
      res = await this.autorizeService.signIn(this.login, this.password);
    } else {
      if (this.password !== this.repeatPassword) {
        this.alertService.errorShow('Пароли не совпадают.');
        return;
      }
      res = await this.autorizeService.registration(this.login, this.password);
    }

    if (res) {
      this.authService.saveSession(res.token, res.dateExpiresAt.toISOString());
      this.router.navigate(['/drop-journal']);
    }
  }
}

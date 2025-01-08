import {Injectable} from '@angular/core';
import {firstValueFrom, map} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AlertService} from '../../../../shared/service/alert.service';
import {UserSessionModel} from '../model/user-session.model';
import {plainToInstance} from 'class-transformer';

@Injectable()
export class AutorizeService {
  private url: string = 'https://localhost:44333/api/user/authorize';

  constructor(
    private httpClient: HttpClient,
    private alertService: AlertService,
  ) {}

  /**
   * Проверка существования логина.
   */
  public async checkExistLoginAndFilledPassword(login: string): Promise<boolean | null> {
    try {
      return await firstValueFrom(
        this.httpClient.post<boolean>(this.url + '/CheckExistLoginAndFilledPassword', {login}),
      );
    } catch (error: any) {
      console.error(error);
      this.alertService.errorShow(error.error.message);
      return null;
    }
  }

  /**
   * Авторизация.
   */
  public async signIn(login: string, password: string): Promise<UserSessionModel | null> {
    try {
      return await firstValueFrom(
        this.httpClient
          .post<UserSessionModel>(this.url + '/SignIn', {login, name: login, password})
          .pipe(map((res: UserSessionModel) => plainToInstance(UserSessionModel, res))),
      );
    } catch (error: any) {
      console.error(error);
      this.alertService.errorShow(error.error.message);
      return null;
    }
  }

  /**
   * Регистрация.
   */
  public async registration(login: string, password: string): Promise<UserSessionModel | null> {
    try {
      return await firstValueFrom(
        this.httpClient
          .post<UserSessionModel>(this.url + '/Registration', {login, name: login, password})
          .pipe(map((res: UserSessionModel) => plainToInstance(UserSessionModel, res))),
      );
    } catch (error: any) {
      console.error(error);
      this.alertService.errorShow(error.error.message);
      return null;
    }
  }
}

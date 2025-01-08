import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DropModel} from '../model/drop.model';
import {firstValueFrom, map} from 'rxjs';
import {plainToInstance} from 'class-transformer';

@Injectable()
export class DropService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Получение информации о дропе.
   */
  public async getDrop(): Promise<DropModel | null> {
    try {
      return await firstValueFrom(
        this.httpClient
          .get<DropModel>('https://localhost:44333/')
          .pipe(map((res: DropModel) => plainToInstance(DropModel, res))),
      );
    } catch (error) {
      console.error(error);
      alert(error);
      return null;
    }
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DropPlayerModel} from '../model/drop-player.model';
import {firstValueFrom, map} from 'rxjs';
import {plainToInstance} from 'class-transformer';

@Injectable()
export class DropPlayerService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Получить список игроков по дропу.
   */
  public async getPlayerByDropId(dropId: number): Promise<DropPlayerModel[]> {
    try {
      return await firstValueFrom(
        this.httpClient
          .get<DropPlayerModel[]>('https://localhost:44333/api/DropPlayer/List/' + dropId)
          .pipe(map((res: DropPlayerModel[]) => plainToInstance(DropPlayerModel, res))),
      );
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  /**
   * Добавить игрока в список дропа.
   */
  public async addPlayer(dropPlayer: DropPlayerModel): Promise<DropPlayerModel> {
    try {
      return await firstValueFrom(
        this.httpClient
          .post<DropPlayerModel>('https://localhost:44333/api/DropPlayer/', dropPlayer)
          .pipe(map((res: DropPlayerModel) => plainToInstance(DropPlayerModel, res))),
      );
    } catch (error) {
      console.error(error);
      return new DropPlayerModel();
    }
  }
}

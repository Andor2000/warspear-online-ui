import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DropModel} from '../model/drop.model';
import {firstValueFrom, map} from 'rxjs';
import {plainToInstance} from 'class-transformer';
import {CodeNameBaseModel} from '../../../../shared/model/base/code-name-base.model';

@Injectable()
export class ClassService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Получение списка классов.
   */
  public async getClassList(): Promise<CodeNameBaseModel[]> {
    try {
      return await firstValueFrom(
        this.httpClient
          .get<CodeNameBaseModel[]>('https://localhost:44333/api/Generic/Class/List')
          .pipe(map((res: CodeNameBaseModel[]) => plainToInstance(CodeNameBaseModel, res))),
      );
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

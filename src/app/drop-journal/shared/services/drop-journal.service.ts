import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DropModel} from '../../../app-drop/shared/model/drop.model';
import {firstValueFrom, map} from 'rxjs';
import {plainToInstance} from 'class-transformer';
import {AlertService} from '../../../../shared/service/alert.service';
import {JournalDropFilterModel} from '../model/journal-drop-filter.model';
import {BaseService} from '../../../../shared/service/base/base.service';

@Injectable()
export class DropJournalService extends BaseService {
  private url: string = 'https://localhost:44333/api/JournalDrop';

  constructor(
    protected override httpClient: HttpClient,
    private alertService: AlertService,
  ) {
    super(httpClient);
  }

  /**
   * Получение количество записей журнала дропа.
   */
  public async getJournalDropCount(filter: JournalDropFilterModel): Promise<number> {
    try {
      return await firstValueFrom(this.get<number>(this.url + '/Count', filter));
    } catch (error) {
      console.error(error);
      this.alertService.errorShow('Не удалось получить журнал дропа.');
      return 0;
    }
  }

  /**
   * Получение журнала дропа.
   */
  public async getJournalDrop(filter: JournalDropFilterModel): Promise<DropModel[]> {
    try {
      return await firstValueFrom(
        this.get<DropModel[]>(this.url, filter).pipe(map((res: DropModel[]) => plainToInstance(DropModel, res))),
      );
    } catch (error) {
      console.error(error);
      this.alertService.errorShow('Не удалось получить журнал дропа.');
      return [];
    }
  }
}

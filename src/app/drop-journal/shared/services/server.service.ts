import {Injectable} from '@angular/core';
import {BaseService} from '../../../../shared/service/base/base.service';
import {HttpClient} from '@angular/common/http';
import {AlertService} from '../../../../shared/service/alert.service';
import {CodeNameBaseModel} from '../../../../shared/model/base/code-name-base.model';
import {firstValueFrom, map} from 'rxjs';
import {plainToInstance} from 'class-transformer';

@Injectable()
export class ServerService extends BaseService {
  private url: string = 'https://localhost:44333/api/Generic/Server';

  constructor(
    protected override httpClient: HttpClient,
    private alertService: AlertService,
  ) {
    super(httpClient);
  }

  public async getServerList(): Promise<CodeNameBaseModel[]> {
    try {
      return await firstValueFrom(
        this.get<CodeNameBaseModel[]>(this.url + '/List').pipe(
          map((res: CodeNameBaseModel[]) => plainToInstance(CodeNameBaseModel, res)),
        ),
      );
    } catch (error) {
      console.error(error);
      this.alertService.errorShow('Не удалось получить список серверов.');
      return [];
    }
  }
}

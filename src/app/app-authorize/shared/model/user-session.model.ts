import {minDate} from '../../../../shared/function/date.function';
import {Type} from 'class-transformer';
import {CodeNameBaseModel} from '../../../../shared/model/base/code-name-base.model';

export class UserSessionModel {
  /**
   * Токен.
   */
  public token: string = '';

  /**
   * Дата и время истечения срока действия токена.
   */
  @Type(() => Date)
  public dateExpiresAt: Date = minDate();

  /**
   * Уровень доступа.
   */
  @Type(() => CodeNameBaseModel)
  public accessLevel: CodeNameBaseModel = new CodeNameBaseModel();

  /**
   * Роли.
   */
  @Type(() => CodeNameBaseModel)
  public roles: CodeNameBaseModel[] = [];
}

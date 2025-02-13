import {BaseModel} from '../../../../shared/model/base/base.model';
import {CodeNameBaseModel} from '../../../../shared/model/base/code-name-base.model';
import {Type} from 'class-transformer';

export class PlayerModel extends BaseModel {
  /**
   * Ник.
   */
  public nick: string = '';

  /**
   * Класс.
   */
  @Type(() => CodeNameBaseModel)
  public class: CodeNameBaseModel = new CodeNameBaseModel();

  /**
   * Сервер.
   */
  @Type(() => CodeNameBaseModel)
  public server: CodeNameBaseModel = new CodeNameBaseModel();

  /**
   * Фракция.
   */
  @Type(() => CodeNameBaseModel)
  public fraction: CodeNameBaseModel = new CodeNameBaseModel();
}

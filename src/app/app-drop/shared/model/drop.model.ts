import {minDate} from '../../../../shared/function/date.function';
import {ObjectModel} from './object.model';
import {BaseModel} from '../../../../shared/model/base/base.model';
import {GroupModel} from './group.model';
import {CodeNameBaseModel} from '../../../../shared/model/base/code-name-base.model';

export class DropModel extends BaseModel {
  /**
   * Дата дропа.
   */
  public date: Date = minDate();

  /**
   * Цена.
   */
  public price: number = 0;

  /**
   * Количество игроков.
   */
  public playersCount: number = 0;

  /**
   * Доля / часть денег.
   */
  public part: number = 0;

  /**
   * Объект.
   */
  public Object: ObjectModel = new ObjectModel();

  /**
   * Группа.
   */
  public group: GroupModel = new GroupModel();

  /**
   * Сервер.
   */
  public server: CodeNameBaseModel = new CodeNameBaseModel();

  /**
   * Фракция.
   */
  public fraction: CodeNameBaseModel = new CodeNameBaseModel();
}

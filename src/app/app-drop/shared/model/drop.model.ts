import {minDate} from '../../../../shared/function/date.function';
import {ObjectModel} from './object.model';
import {BaseModel} from '../../../../shared/model/base/base.model';
import {GroupModel} from './group.model';
import {Type} from 'class-transformer';
import {CodeNameBaseModel} from '../../../../shared/model/base/code-name-base.model';

export class DropModel extends BaseModel {
  /**
   * Дата дропа.
   */
  @Type(() => Date)
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
  @Type(() => ObjectModel)
  public object: ObjectModel = new ObjectModel();

  /**
   * Группа.
   */
  @Type(() => GroupModel)
  public group: GroupModel = new GroupModel();

  /**
   * Статус.
   */
  @Type(() => CodeNameBaseModel)
  public status: CodeNameBaseModel = new CodeNameBaseModel();
}

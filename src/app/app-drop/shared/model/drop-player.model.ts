import {BaseModel} from '../../../../shared/model/base/base.model';
import {PlayerModel} from './player.model';
import {Type} from 'class-transformer';
import {CodeNameBaseModel} from '../../../../shared/model/base/code-name-base.model';

export class DropPlayerModel extends BaseModel {
  /**
   * Доля.
   */
  public part: number | null = null;

  /**
   * Признак выплаты.
   */
  public isPaid: boolean = false;

  /**
   * Ник.
   */
  public nick: string = '';

  /**
   * Класс.
   */
  @Type(() => CodeNameBaseModel)
  public class: CodeNameBaseModel = new CodeNameBaseModel();

  // нужно будет удалить это поле с фронта и с бэка
  /**
   * Класс.
   */
  @Type(() => PlayerModel)
  public player: PlayerModel = new PlayerModel();
}

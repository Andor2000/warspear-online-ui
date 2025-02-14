import {BaseModel} from '../../../../shared/model/base/base.model';
import {PlayerModel} from './player.model';
import {Type} from 'class-transformer';

export class DropPlayerModel extends BaseModel {
  /**
   * Доля.
   */
  public part: number = 0;

  /**
   * Признак выплаты.
   */
  public isPaid: boolean = false;

  /**
   * Класс.
   */
  @Type(() => PlayerModel)
  public player: PlayerModel = new PlayerModel();
}

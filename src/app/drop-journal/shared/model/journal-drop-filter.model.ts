import {BaseFilterModel} from '../../../../shared/model/base/base-filter.model';
import {DropPaymentStatusEnum} from '../../../../shared/enum/drop-payment-status.enum';

export class JournalDropFilterModel extends BaseFilterModel {
  /**
   * Идентификатор группы.
   */
  public groupId: number = 0;

  /**
   * Идентификатор объекта.
   */
  public objectId: number = 0;

  /**
   * Идентификатор типа объекта.
   */
  public objectTypeId: number = 0;

  /**
   * Идентификатор игрока.
   */
  public playerId: number = 0;

  /**
   * Статус выплаты игроку.
   */
  public dropPaymentStatusPlayer: DropPaymentStatusEnum = DropPaymentStatusEnum.All;
}

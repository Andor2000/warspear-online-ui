import {NameBaseModel} from '../../../../shared/model/base/name-base.model';
import {CodeNameBaseModel} from '../../../../shared/model/base/code-name-base.model';

export class GroupModel extends NameBaseModel {
  /**
   * Сервер.
   */
  public server: CodeNameBaseModel = new CodeNameBaseModel();

  /**
   * Фракция.
   */
  public fraction: CodeNameBaseModel = new CodeNameBaseModel();
}

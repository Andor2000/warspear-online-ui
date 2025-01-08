import {CodeNameBaseModel} from '../../../../shared/model/base/code-name-base.model';

export class ObjectModel extends CodeNameBaseModel {
  /**
   * Изображение объекта.
   */
  public image: string = '';

  /**
   * Тип объекта.
   */
  public objectType: CodeNameBaseModel = new CodeNameBaseModel();
}

export class BaseFilterModel {
  /**
   * Идентификатор сервера.
   */
  public serverId: number = 0;

  /**
   * Идентификатор фракции.
   */
  public fractionId: number = 0;

  /**
   * Количество записей.
   */
  public take: number = 20;

  /**
   * Смещение.
   */
  public skip: number = 0;
}

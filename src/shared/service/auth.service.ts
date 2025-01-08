import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY: string = 'token';
  private readonly EXPIRES_AT_KEY: string = 'dateExpiresAt';

  // Сохранение данных
  public saveSession(token: string, dateExpiresAt: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.EXPIRES_AT_KEY, dateExpiresAt);
  }

  // Получение токена
  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Проверка истечения сессии
  public isSessionValid(): boolean {
    const expiresAt = localStorage.getItem(this.EXPIRES_AT_KEY);
    if (!expiresAt) {
      return false;
    }
    const now = new Date();
    return new Date(expiresAt) > now;
  }

  // Очистка данных сессии
  public clearSession(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.EXPIRES_AT_KEY);
  }
}

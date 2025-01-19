import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class BaseService {
  protected headers: HttpHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Accept', 'application/json');
  }

  public get<T>(url: string, parameters?: Object): Observable<T> {
    return this.httpClient.get<T>(url + (parameters ? this.getParameters(parameters) : ''), {
      headers: this.headers,
    });
  }

  private getParameters(parameters?: Record<string, any>): string {
    let params: string = '?';

    for (const param in parameters) {
      params += param + '=' + String(parameters[param]) + '&';
    }

    return params.slice(0, -1);
  }
}

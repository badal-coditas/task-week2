import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  headerOption = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };
  readonly registerUrl = 'http://localhost:3000/registerUser';
  readonly cardUrl = 'http://localhost:3000/cardDetails';
  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(this.registerUrl, userData, this.headerOption);
  }

  checkLoginData(email: any, password: any): Observable<any> {
    return this.http.get(
      this.registerUrl + '?email=' + email + '&&password=' + password,
      this.headerOption
    );
  }

  getAllCardsData(): Observable<any> {
    return this.http.get(this.cardUrl, this.headerOption);
  }

  addAndUpdateProductCard(prouctData: any, id: any): Observable<any> {
    if (id == null || id == '') {
      return this.http.post(this.cardUrl, prouctData, this.headerOption);
    } else {
      return this.http.put(
        this.cardUrl + '/' + id,
        prouctData,
        this.headerOption
      );
    }
  }

  getValueFromLocalStorage(key: any) {
    return localStorage.getItem(key);
  }

  getDataFor(id: any): Observable<any> {
    return this.http.get(this.cardUrl + '?id=' + id, this.headerOption);
  }

  deleteCard(id: any): Observable<any> {
    return this.http.delete(this.cardUrl + '/' + id, this.headerOption);
  }
}

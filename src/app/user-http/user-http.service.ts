import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserHttpService {
  headerOption = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }
  readonly registerUrl = "http://localhost:3000/registerUser";
  readonly cardUrl = "http://localhost:3000/cardDetails"
  constructor(private http: HttpClient) { }


  registerUser(userData): Observable<any> {
    return this.http.post(this.registerUrl, userData, this.headerOption);
  }

  checkLoginData(email, password): Observable<any> {
    return this.http.get(this.registerUrl + "?email=" + email + "&&password=" + password, this.headerOption);
  }

  getAllCardsData(): Observable<any> {
    return this.http.get(this.cardUrl, this.headerOption);
  }

  addProduct(prouctData): Observable<any> {
    return this.http.post(this.cardUrl, prouctData, this.headerOption);
  }

}

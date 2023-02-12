import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams()
      .set('fields', 'name,flags,capital,population,cioc');

  }

  constructor(private http: HttpClient) { }

  searchCountryByName(textToSearch: string): Observable<Country[]> {
    const url: string = `${this._apiUrl}/name/${textToSearch}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
    // .pipe(
    //   catchError(err => of([]))
    // );
  }

  searchCountryByCapital(textToSearch: string): Observable<Country[]> {
    const url: string = `${this._apiUrl}/capital/${textToSearch}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
    // .pipe(
    //   catchError(err => of([]))
    // );
  }

  getCountryByCode(code: string) {
    const url: string = `${this._apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url);
  }

  getCountriesByRegion(region: string) {


    const url: string = `${this._apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

}

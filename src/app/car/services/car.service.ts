import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  public api: string = 'https://spring-restapi-cars.herokuapp.com/api/cars';

  constructor(private http: HttpClient) {}

  public getCars() {
    return this.http.get<any>(this.api);
  }
}

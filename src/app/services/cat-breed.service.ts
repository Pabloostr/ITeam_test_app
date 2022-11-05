import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatBreedService {
  constructor(private http: HttpClient) { }

  getBreeds(): Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/breeds')
  }

  getCats(limit: number, id: string): Observable<any> {
    return this.http.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${id}`)
  }
}

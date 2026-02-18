import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface SeriesInterface {
    id: number,
    title: string,
    rating: number,
    channel: string
}

@Injectable({
  providedIn: 'root',
})

export class SeriesService {
  private readonly url = 'https://peticiones.online/api/series';

  constructor(private http: HttpClient) {}

  getAll(): Observable<SeriesInterface[]> {
    return this.http.get<SeriesInterface[]>(this.url);
  }

  create(serie: SeriesInterface) {
    return this.http.post<SeriesInterface>(this.url, serie);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IData, IFilm, IFilmDetails } from '../model/film.model';

const API_URL = 'http://www.omdbapi.com';
const API_KEY = '564c3bc3';

@Injectable({
    providedIn: 'root',
})
export class FilmService {
    constructor(private http: HttpClient) {}

    getFilmsByTitle(title:string, type:string, page:number): Observable<IData> {
        return this.http.get<IData>(`${API_URL}/?apikey=${API_KEY}&s=${title}&type=${type}&page=${page}`);
    }
    getFilmById(id:string): Observable<IFilmDetails> {
        return this.http.get<IFilmDetails>(`${API_URL}/?apikey=${API_KEY}&i=${id}`);
    }
    // getFilmsByPage(title:string, type:string, page:number): Observable<IFilm> {
    //     return this.http.get<IFilm>(`${API_URL}/?apikey=${API_KEY}&s=${title}&type=${type}&page=${page}`);
    // }
} 
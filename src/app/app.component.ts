import { Component } from '@angular/core';
import { IData, IFilm, IFilmDetails } from './shared/model/film.model';
import { FilmService } from './shared/service/film.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private filmService: FilmService) {}

    films: IFilm[]=[];
    // datas!: IData;
    
    getFilms(title:string, type:string, page:number):void {
        this.filmService.getFilmsByTitle(title, type, page).subscribe((datas: IData) => {
            // this.datas = datas;
            this.films = datas.Search;
            console.log(this.films);
        })
    }
}
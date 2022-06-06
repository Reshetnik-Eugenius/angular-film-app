import { Component, OnInit, Input } from '@angular/core';
import { IFilm, IFilmDetails } from 'src/app/shared/model/film.model';
import { FilmService } from 'src/app/shared/service/film.service';
// import { FilmDetailsComponent } from '../film-details/film-details.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
  constructor(private filmService: FilmService, public dialog: MatDialog) { }
  // private dialog: MatDialog,
  ngOnInit(): void {
  }

  @Input() film!: IFilm; 

  getMovieById(id:string): void {
    this.filmService.getFilmById(id).subscribe((film: IFilmDetails) => {
      // this.datas = datas;
      // this.film = film;

      this.showSelectMovie(film);
      this.openDialog();
      // console.log(film);
  }) 
}
openDialog() {
  console.log("asd");
  this.dialog.open(ModalComponent);
}
// getFilmById
showSelectMovie(movie: IFilmDetails) {
    
    let filmView = {
        Title: movie.Title,
        Released: movie.Released,
        Gentre: movie.Genre,
        Country: movie.Country,
        Director: movie.Director,
        Writer: movie.Writer,
        Actors: movie.Actors,
        Awards: movie.Awards,
    };

    // while(tableFilmInfo.rows.length) {
    //     tableFilmInfo.deleteRow(0);
    // }
    // for(let key in filmView) {
    //     let tr = document.createElement('tr');    
    //     let th = document.createElement('th');
    //     let td = document.createElement('td');
        
    //     th.innerHTML = key + ': ';
    //     td.innerHTML = filmView[key];

    //     tr.append(th);
    //     tr.append(td);
    //     tableFilmInfo.append(tr);

    //     filmInfoImg.src = movie.Poster; 
    // }
}

} 
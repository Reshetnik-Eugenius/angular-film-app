import { Component, OnInit, Input } from '@angular/core';
import { IFilmDetails,IFilm } from 'src/app/shared/model/film.model';
import { FilmService } from 'src/app/shared/service/film.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
const tableFilmInfo: any = document.querySelector("#tableFilmInfoID");
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  @Input() filmInfo!: IFilm;
  // @Input() filmsDetailsResponse!: IFilmDetails;
  constructor( private filmService: FilmService ) { //private userService: UserService

  }

  ngOnInit(): void {
    this.getMovieById('tt0318403');
  }
  tabKey:any = [];
  tabValue: any = [];
  array:any;
  dis:any;
  // getData(){
  //   console.log()
  // }

    getMovieById(id:string): void {
    this.filmService.getFilmById(id)
    .subscribe((film)=>{
      // console.log(film.Actors);

      let filmView:any = {
        Title: film.Title,
        Released: film.Released,
        Genre: film.Genre,
        Country: film.Country,
        Director: film.Director,
        Writer: film.Writer,
        Actors: film.Actors,
        Awards: film.Awards,
        // Year: film.Year,
        // Rated: film.Rated,
        // Runtime: film.Runtime,
        // Plot: film.Plot,
        // Language: film.Language,
        // Poster: film.Poster,
        // Ratings: film.Ratings,
        // Metascore: film.Metascore,
        // imdbRating: film.imdbRating,
        // imdbVotes: film.imdbVotes,
        // imdbID: film.imdbID,
        // Type: film.Type,
        // DVD: film.DVD,
        // BoxOffice: film.BoxOffice,
        // Production: film.Production,
        // Website: film.Website,
        // Response: film.Response
      };
      this.array = Object.entries(filmView);

        // console.log(Object.keys(filmView));
        // console.log(Object.values(filmView));
        // console.log(Object.entries(filmView));
        console.log(filmView);

      this.dis = film.Poster;
      let ks:any = Object.keys(filmView);

      // console.log(filmView);
      // for(let key in filmView) {
      //   console.log(filmView[key]);
      // }
        //   for(let key in filmView) {
        // let tr = document.createElement('tr');    
        // let th = document.createElement('th');
        // let td = document.createElement('td');
        
        // th.innerHTML = key + ': ';
        // td.innerHTML = filmView[key];

        // tr.append(th);
        // tr.append(td);
        // tableFilmInfo.append(tr);
    // }
      // this.dataSource.data = res;
      // console.log(this.dataSource);
      // this.showSelectMovie(res);
    })

} 








//-------------------------------------------------------------------------------
// import { Component, OnInit } from '@angular/core';
// import { IFilmDetails } from 'src/app/shared/model/film.model';
// import { FilmService } from 'src/app/shared/service/film.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
//   styleUrls: ['./modal.component.scss']
// })
// export class ModalComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
//   tableFilmInfo: any = document.querySelector("#tableFilmInfoID");
//   // tableFilmInfo: any;
//   filmView: any;
  

//   constructor(private filmService: FilmService) { }

//   ngOnInit(): void {
//     this.getMovieById('tt0318403');
//   }

//   getMovieById(id:string): void {
//     this.filmService.getFilmById(id)
//     .subscribe((res)=>{
//       console.log(res);
//       // this.dataSource.data = res;
//       // console.log(this.dataSource);
//       this.showSelectMovie(res);
//     })
    
//   }
//   showSelectMovie(film: IFilmDetails) {
    
//     let filmView: IFilmDetails = {
//       Title: film.Title,
//       Released: film.Released,
//       Genre: film.Genre,
//       Country: film.Country,
//       Director: film.Director,
//       Writer: film.Writer,
//       Actors: film.Actors,
//       Awards: film.Awards,
//       Year: film.Year,
//       Rated: film.Rated,
//       Runtime: film.Runtime,
//       Plot: film.Plot,
//       Language: film.Language,
//       Poster: film.Poster,
//       Ratings: film.Ratings,
//       Metascore: film.Metascore,
//       imdbRating: film.imdbRating,
//       imdbVotes: film.imdbVotes,
//       imdbID: film.imdbID,
//       Type: film.Type,
//       DVD: film.DVD,
//       BoxOffice: film.BoxOffice,
//       Production: film.Production,
//       Website: film.Website,
//       Response: film.Response
//     };

//     while(this.tableFilmInfo.rows.length) {
//       this.tableFilmInfo.deleteRow(0);
//     }
//     for(let key in filmView) {
//         let tr = document.createElement('tr');    
//         let th = document.createElement('th');
//         let td = document.createElement('td');
        
//         th.innerHTML = key + ': ';
//         td.innerHTML = this.filmView[key];

//         tr.append(th);
//         tr.append(td);
//         this.tableFilmInfo.append(tr);

//         // filmInfoImg.src = film.Poster; 
//     }
// }
} 
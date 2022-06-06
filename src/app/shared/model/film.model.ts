export interface IData {
    Response:   string,
    Search:     IFilm[],
    totalResults: number
}
export interface IFilm {
    Title:  string,
    Year:   number,
    imdbID: string,
    Type:   string,
    Poster: string
}
export interface IFilmDetails {
    Title:      string,
    Year:       number,
    Rated:      string,
    Released:   string,
    Runtime:    string,
    Genre:      string,
    Director:   string,
    Writer:     string,
    Actors:     string,
    Plot:       string,
    Language:   string,
    Country:    string,
    Awards:     string,
    Poster:     string,
    Ratings:    IRating[],
    Metascore:  number,
    imdbRating: number,
    imdbVotes:  number,
    imdbID:     string,
    Type:       string,
    DVD:        string,
    BoxOffice:  string,
    Production: string,
    Website:    string,
    Response:   boolean
}
export interface IRating {
    Source: string,
    Value:  string
}
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { APICallerService } from "src/app/SharedModule/Services/apiCaller.service";
import { IMovieItem } from "../MovieItem/iMovieItem";

@Injectable()
export class MovieListModel {

  constructor(private apiCaller: APICallerService, private router: Router) {
    this.getMovies();
  }

  //=========================Data======================
  public movies: Array<IMovieItem> = new Array<IMovieItem>();
  public obj : any;
  public actionMovies: Array<IMovieItem> = new Array<IMovieItem>();
  public crimeMovies: Array<IMovieItem> = new Array<IMovieItem>();
  public dramaMovies: Array<IMovieItem> = new Array<IMovieItem>();

  // Get Movies
  public getMovies() {
    this.apiCaller.getMovies().subscribe(res => {
      this.obj = res;
      this.movies = this.obj.movies;
      this.getActionMovies();
      this.getCrimeMovies();
      this.getDramaMovies();
    })
  }

  // Get Action Movies
  public getActionMovies() {
    this.movies.forEach(obj => {
      obj.genres.forEach(genre => {
        if(genre == "Action")
          this.actionMovies.push(obj);
      })
    })
  }

  // Get Crime Movies
  public getCrimeMovies() {
    this.movies.forEach(obj => {
      obj.genres.forEach(genre => {
        if(genre == "Crime")
          this.crimeMovies.push(obj);
      })
    })
  }

  // Get Drama Movies
  public getDramaMovies() {
    this.movies.forEach(obj => {
      obj.genres.forEach(genre => {
        if(genre == "Drama")
          this.dramaMovies.push(obj);
      })
    })
  }

  // To Details
  public toDetails(item: IMovieItem) {
    this.router.navigate(["/movies/details",item.id]);
  }

}

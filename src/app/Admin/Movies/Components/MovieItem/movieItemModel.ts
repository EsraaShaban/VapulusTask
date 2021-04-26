import { EventEmitter, Injectable } from "@angular/core";
import { MovieType } from "./enums";
import { IMovieItem } from "./iMovieItem";

@Injectable()
export class MovieItemModel {

  //===================Data=================
  public data: IMovieItem = {} as IMovieItem;
  public actionMovies: Array<IMovieItem> = new Array<IMovieItem>();
  public movieType: MovieType = MovieType.Action;

  //===================Events=================
  public onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.data.genres = [];
    this.data.cast = [];
  }

  // Click
  public click() {
    this.onClick.emit();
  }

  public get MovieType() {
    this.data.genres.forEach(item => {
      if(item == "Action")
        this.movieType = MovieType.Action;
    })
    return this.movieType;
  }

}

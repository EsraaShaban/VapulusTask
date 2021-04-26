import { Component, EventEmitter, Output } from '@angular/core';
import { IMovieItem } from '../MovieItem/iMovieItem';
import { MovieListModel } from './movieListModel';

@Component({
  selector: 'movie-list',
  templateUrl: './movieList.component.html',
  styleUrls: ['./movieList.component.scss'],
  providers: [MovieListModel]
})

export class MovieListComponent {

  @Output() public onClick: EventEmitter<IMovieItem> = new EventEmitter<IMovieItem>();

  constructor(public model: MovieListModel) {
    this.model.onClick.subscribe((item) => this.onClick.emit(item));
  }

}

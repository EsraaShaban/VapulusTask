import { Component } from '@angular/core';
import { MovieListModel } from './movieListModel';

@Component({
  selector: 'movie-list',
  templateUrl: './movieList.component.html',
  styleUrls: ['./movieList.component.scss'],
  providers: [MovieListModel]
})

export class MovieListComponent {

  constructor(public model: MovieListModel) { }

}

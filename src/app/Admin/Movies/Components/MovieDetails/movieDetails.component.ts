import { Component } from '@angular/core';
import { MovieDetailsModel } from './movieDetailsModel';

@Component({
  selector: 'movie-details',
  templateUrl: './movieDetails.component.html',
  styleUrls: ['./movieDetails.component.scss'],
  providers: [MovieDetailsModel]
})

export class MovieDetailsComponent  {

  constructor(public model: MovieDetailsModel) { }

}

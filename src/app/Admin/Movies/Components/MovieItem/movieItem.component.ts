import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieItemModel } from './movieItemModel';
import { IMovieItem } from './iMovieItem';

@Component({
  selector: 'movie-item',
  templateUrl: './movieItem.component.html',
  styleUrls: ['./movieItem.component.scss'],
  providers: [MovieItemModel]
})

export class MovieItemComponent {

  @Input() public set data(data: IMovieItem) {
    this.model.data = data;
  }
 // @Input() public set type(type: IMovieItem) {
  //  this.model.data = data;
  //}
  @Output() public onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(public model: MovieItemModel) {
    this.model.onClick.subscribe(() => this.onClick.emit());
  }

}

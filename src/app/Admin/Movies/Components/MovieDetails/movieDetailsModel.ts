import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { APICallerService } from "src/app/SharedModule/Services/apiCaller.service";
import { IMovieItem } from "../MovieItem/iMovieItem";
import { MovieItemComponent } from "../MovieItem/movieItem.component";
import { MovieItemModel } from "../MovieItem/movieItemModel";

@Injectable()
export class MovieDetailsModel {

  //========================Data==================
  public data: IMovieItem = {} as IMovieItem;
  public itemModel: MovieItemModel = new MovieItemModel();
  public itemCmp: MovieItemComponent = new MovieItemComponent(this.itemModel);
  public movies: Array<IMovieItem> = new Array<IMovieItem>();
  public obj : any;
  public firstStarFilled: boolean = false;
  public secondStarFilled: boolean = false;
  public thirdStarFilled: boolean = false;
  public fourthStarFilled: boolean = false;
  public fifthStarFilled: boolean = false;

  constructor(private apiCaller: APICallerService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.data.id = params["id"];
    })
    if(this.data.id)
      this.getMovieDetails();
  }

  // Get Movies
  public getMovieDetails() {
    this.apiCaller.getMovies().subscribe(res => {
      this.obj = res;
      this.movies = this.obj.movies;
      this.movies.forEach(obj => {
        if(this.data.id == obj.id)
          this.data = obj;
      })
      this.reviewRating();
      this.getRating();
    })
  }


  public reviewRating(num: number = 0) {
    return Math.ceil(num)
  }

  public getRating() {
    if(this.reviewRating(this.data.imdb_rating) <= 2)
      this.firstStarFilled = true;
    if(this.reviewRating(this.data.imdb_rating) <= 4) {
      this.firstStarFilled = true;
      this.secondStarFilled = true;
    }
    if(this.reviewRating(this.data.imdb_rating) <= 6) {
      this.firstStarFilled = true;
      this.secondStarFilled = true;
      this.thirdStarFilled = true;
    }
    if(this.reviewRating(this.data.imdb_rating) < 10) {
      this.firstStarFilled = true;
      this.secondStarFilled = true;
      this.thirdStarFilled = true;
      this.fourthStarFilled = true;
    }
    if(this.reviewRating(this.data.imdb_rating) == 10) {
      this.firstStarFilled = true;
      this.secondStarFilled = true;
      this.thirdStarFilled = true;
      this.fourthStarFilled = true;
      this.fifthStarFilled = true;
    }
  }

}

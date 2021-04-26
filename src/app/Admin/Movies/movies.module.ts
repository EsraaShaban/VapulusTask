import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "src/app/AngularMaterialModule/AngularMaterialModule";
import { MovieItemComponent } from "./Components/MovieItem/movieItem.component";
import { MovieListComponent } from "./Components/MovieList/movieList.component";
import { MoviesRoutingModule } from "./movies-routing.module";
import { MovieDetailsComponent } from "./Components/MovieDetails/movieDetails.component";
import { MoviesComponent } from "./Pages/movies/movies.component";

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    MoviesRoutingModule
  ],
  declarations: [
    MoviesComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailsComponent
  ],
  exports: [],
  providers: []
})

export class MoviesModule { }

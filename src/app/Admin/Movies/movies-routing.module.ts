import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieDetailsComponent } from "./Components/MovieDetails/movieDetails.component";
import { MoviesComponent } from "./Pages/movies/movies.component";

const MoviesRoutes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'details/:id', component: MovieDetailsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MoviesRoutes)
  ],
  exports:[RouterModule]
})

export class MoviesRoutingModule { }

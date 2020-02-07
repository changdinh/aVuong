import { Component, OnInit } from '@angular/core';
import { MovieClass } from '../../models/MovieClass';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  listMovie: MovieClass[];
  selectedMovie: MovieClass;
  // selectedMovie = {
  //   id: null,
  //   name: ''
  // };
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getListMovieFromService();
  }

  getListMovieFromService(): void {
    // this.listMovie = this.movieService.getMovieList();
    this.listMovie = this.movieService.movies;
  }

  onClick(item: MovieClass): void {
    this.selectedMovie = item;
  }
}

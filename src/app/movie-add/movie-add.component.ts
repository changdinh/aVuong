import { Component, OnInit } from '@angular/core';
import { MovieClass } from '../../models/MovieClass';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  listMovie: MovieClass[];
  newName = '';
  constructor( private movieService: MovieService) { }

  ngOnInit() {
    this.getListMovieFromService();
  }

  getListMovieFromService() {
    this.listMovie = this.movieService.getMovieList();
  }

  addMovie() {
    const newMovie = {
      id: ++this.listMovie.length,
      name: this.newName
    };
    this.listMovie.push(newMovie);
    this.newName = '';
  }
}

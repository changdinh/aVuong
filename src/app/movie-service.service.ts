import { Injectable } from '@angular/core';
import { MovieClass} from '../models/MovieClass';
import { listMovie} from './movieList';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies = listMovie;
  constructor() { }
  getMovieList(): MovieClass[] {
    return listMovie;
  }
}

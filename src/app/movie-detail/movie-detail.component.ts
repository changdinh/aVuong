import { Component, OnInit, Input } from '@angular/core';
import { MovieClass } from '../../models/MovieClass';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() selectedMovie: MovieClass;
  constructor() { }

  ngOnInit() {
  }

}

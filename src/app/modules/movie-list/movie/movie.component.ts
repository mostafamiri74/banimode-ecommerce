import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  @Input() movie: any;

  @Output() movieClick = new EventEmitter<string>();

  clickOnMovie() {
    this.movieClick.emit('yek film click shod');
  }
}

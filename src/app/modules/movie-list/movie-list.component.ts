import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { TestService } from 'src/app/core/service/test.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  allMovie: any[] = [];
  event: any;

  constructor(
    private testService: TestService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  private getAllMovies(): void {
    this.testService.getAllMovie().subscribe((res: any) => {
      this.allMovie = res.data;
      console.log(this.allMovie);
    });
  }

  public movieClick(event: string) {
    console.log(event);
  }
}

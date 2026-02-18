import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { SeriesInterface, SeriesService } from '../../service/series.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
    series$: Observable<SeriesInterface[]>;

  constructor(private seriesService: SeriesService) {
    this.series$ = this.seriesService.getAll();
  }


}

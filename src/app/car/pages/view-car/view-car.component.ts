import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../interfaces/car.interface';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styles: [],
})
export class ViewCarComponent implements OnInit {
  public cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCarComponent } from './pages/view-car/view-car.component';
import { FibonacciComponent } from './pages/fibonacci/fibonacci.component';
import { FibonacciInputComponent } from './components/fibonacci-input/fibonacci-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewCarComponent, FibonacciComponent, FibonacciInputComponent],
  exports: [ViewCarComponent, FibonacciComponent],
  imports: [CommonModule, FormsModule],
})
export class CarModule {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci-input',
  templateUrl: './fibonacci-input.component.html',
  styles: [],
})
export class FibonacciInputComponent {
  public number: string = '';

  public result: number[] = [];

  constructor() {}

  public calculate() {
    this.result = [];

    const number = parseInt(this.number);
    let x = 0,
      y = 1,
      next;

    console.log('Fibonacci Series:');

    for (let i = 1; i <= number; i++) {
      this.result.push(x);

      next = x + y;
      x = y;
      y = next;
    }
  }
}

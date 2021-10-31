import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCarComponent } from './car/pages/view-car/view-car.component';
import { FibonacciComponent } from './car/pages/fibonacci/fibonacci.component';

const routes: Routes = [
  {
    path: '',
    component: FibonacciComponent,
    pathMatch: 'full',
  },
  {
    path: 'cars',
    component: ViewCarComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

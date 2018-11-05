import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ListingComponent,
  CompareComponent,
  DetailingComponent
} from './components';

const routes: Routes = [
  { path: '', redirectTo: 'listing', pathMatch: 'full' },
  { path: 'listing', component: ListingComponent },
  {
    path: 'compare', component: CompareComponent, children: [
      { path: ':name', component: DetailingComponent, outlet: 'foo' },
      { path: ':name', component: DetailingComponent, outlet: 'bar' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

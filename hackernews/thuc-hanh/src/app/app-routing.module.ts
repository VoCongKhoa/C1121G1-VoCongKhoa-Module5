import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HackernewsComponent } from './hackernews/hackernews.component'


const routes: Routes = [
  { path: '', component: HackernewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

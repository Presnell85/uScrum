// IMPORT MODULES
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORT COMPONENTS
import { HomeComponent } from '../components/home/home.component';
import { SprintComponent } from '../components/sprint/sprint.component';

// DEFINE APP-LEVEL ROUTES
export const ROUTES: Routes = [
 {
   path: '',
   pathMatch: 'full',
   redirectTo: '/home'
 },
 {
   path: 'home',
   pathMatch: 'full',
   component: HomeComponent
 },
 {
   path: 'sprint',
   pathMatch: 'full',
   component: SprintComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

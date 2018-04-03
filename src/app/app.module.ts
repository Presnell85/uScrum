import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
/*import angular packages */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule, MatCardModule,
  MatGridListModule } from '@angular/material';

/*Import packages */
import { DragDropDirectiveModule} from 'angular4-drag-drop';
import { DragulaModule } from 'ng2-dragula';

/*Components */
import { HomeComponent } from '../components/home/home.component';
import { SprintComponent } from '../components/sprint/sprint.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SprintComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule, MatCardModule, MatGridListModule,
    DragulaModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'sprint', component: SprintComponent},
      {path: 'home', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }

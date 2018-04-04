// IMPORT MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragulaModule } from 'ng2-dragula';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';

// IMPORT MATERIAL DESIGN MODULES
import { MatDesignModule } from '../material-design/material-design.module';

// IMPORT APP COMPONENT
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { SprintComponent } from '../components/sprint/sprint.component';

// IMPORT APP ROUTING MODULE
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SprintComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // ANGULAR MATERIAL MODULES
    BrowserAnimationsModule,
    MatDesignModule,
    // DRAGULE
    DragulaModule,
    // ROUTING
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

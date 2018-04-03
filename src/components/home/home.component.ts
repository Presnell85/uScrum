import { Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import { AppComponent } from '../../app/app.component';
import { MatCard } from '@angular/material';
import { SprintComponent } from '../sprint/sprint.component';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  /*This is the animation that rotates the image*/
  animations: [
    trigger('flipState',  [
      state('active', style({
        /*the axis (y) can define which direction the image will rotate*/
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})


export class HomeComponent implements OnInit {
  flip: any = 'inactive';

  constructor() { }

  toggleFlip() {
    this.flip = (this.flip === 'inactive') ? 'active' : 'inactive';
  }
  ngOnInit() {
  }

}

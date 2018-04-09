import { Component, OnInit } from '@angular/core';
import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {

  constructor(private dragulaService: DragulaService ) {

    dragulaService.setOptions('sprint-task1', {
      removeOnSpill: true
    });
    dragulaService.setOptions('sprint-task2', {
      revertOnSpill: true
    });
    dragulaService.setOptions('sprint-task3', {
      copy: true
    });
  }

  ngOnInit() {
  }

}

import { Component, Input, OnInit,  Output, EventEmitter } from '@angular/core';
import { Student } from '../students';

@Component({
  selector: 'app-student-alerts',
  templateUrl: './student-alerts.component.html',
  styleUrls: ['./student-alerts.component.css']
})
export class StudentAlertsComponent implements OnInit {

  @Input() student: Student | undefined;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
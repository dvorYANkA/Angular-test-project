import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Student, students } from '../students';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: Student | undefined;
  constructor(private route: ActivatedRoute) {}
 
  ngOnInit(){
  const routeParams = this.route.snapshot.paramMap;
  const studentIdFromRoute = Number(routeParams.get('studentId'));

  // Find the product that correspond with the id provided in route.
  this.student = students.find(student => student.id === studentIdFromRoute);
  }
}

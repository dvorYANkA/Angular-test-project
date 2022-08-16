import { Component } from '@angular/core';

import { students } from '../students';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students = [...students];

  informStudent() {
    const infoForStudent = prompt('Message to student');
    window.alert('User informed');
  }

  onNotify() {
    window.alert('You will be notified when the student send you home tasks');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
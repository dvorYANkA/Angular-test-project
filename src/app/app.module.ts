import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAlertsComponent } from './student-alerts/student-alerts.component';
import { EducationLiteratureComponent } from './education-literature/education-literature.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LiteratureDetailsComponent } from './literature-details/literature-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      //эта строчка показывает , что на странице по "" адресу должен лежать лист студентов
      { path: 'students', component: StudentListComponent },
      { path: 'literature', component: EducationLiteratureComponent},
      { path: 'students/:studentId', component: StudentDetailsComponent},
      { path: 'literature/:literatureId', component: LiteratureDetailsComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    StudentListComponent,
    StudentAlertsComponent,
    EducationLiteratureComponent,
    StudentDetailsComponent,
    LiteratureDetailsComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
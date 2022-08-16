import { Component, OnInit } from '@angular/core';
import { literatures } from '../literatures';


@Component({
  selector: 'app-education-literature',
  templateUrl: './education-literature.component.html',
  styleUrls: ['./education-literature.component.css']
})
export class EducationLiteratureComponent implements OnInit {
  literature = [...literatures];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Literature, literatures } from '../literatures';

@Component({
  selector: 'app-literature-details',
  templateUrl: './literature-details.component.html',
  styleUrls: ['./literature-details.component.css']
})
export class LiteratureDetailsComponent implements OnInit {
  literature: Literature | undefined
  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
  const routeParams = this.route.snapshot.paramMap;
  const literatureIdFromRoute = Number(routeParams.get('literatureId'));

  // Find the product that correspond with the id provided in route.
  this.literature = literatures.find(literature => literature.id === literatureIdFromRoute);
  }
}
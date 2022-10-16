import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // this is the most used type of selector
  //selector: '[app-servers]', // this is selecting by attribute (custom)
  //selector: '.app-servers', // this is selecting by class
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  edit() {
    this.updateEditDetails.emit(this.add)
  }
  delete() {
    this.updateDeleteDetails.emit(this.add)
  }

  @Input() add: any
  @Output() updateEditDetails = new EventEmitter<any>();
  @Output() updateDeleteDetails = new EventEmitter<any>();

}




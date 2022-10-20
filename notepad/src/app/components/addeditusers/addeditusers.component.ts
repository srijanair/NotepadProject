import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addeditusers',
  templateUrl: './addeditusers.component.html',
  styleUrls: ['./addeditusers.component.scss']
})
export class AddeditusersComponent implements OnInit {
  visible:boolean = false

  OpenModal() {
    this.visible = !this.visible;
  }


  constructor() { }

  ngOnInit(): void {
  }

}

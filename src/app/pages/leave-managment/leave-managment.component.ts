import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-leave-managment',
  templateUrl: './leave-managment.component.html',
  styleUrls: ['./leave-managment.component.css']
})
export class LeaveManagmentComponent implements OnInit {

  @Output() updateTitleChild = new EventEmitter<string>();

  updateTitle(value: string) {

    this.updateTitleChild.emit(value)

  }

  title = '';

  updateTitlehandler(response : any) {

    debugger;

    console.log(response.target.value);

    this.title = response.target.value;

  }



  @Output() UpdateTypehandler = new EventEmitter<string>();

  updateType(value: string) {

    this.UpdateTypehandler.emit(value)

  }

  constructor() { }

  ngOnInit(): void {
  }

  

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() arr
  @Output() dellone=new EventEmitter()
  @Output() editone=new EventEmitter()
  mySorrt
  myinfo
  constructor() {
    
   }

  ngOnInit(): void {
    this.mySorrt=this.arr.cat
    this.myinfo=this.arr.info
  }
  delOne(id){
    this.dellone.emit(id)
  }
  edit(){
    let obj={
      id:this.arr._id,
      info:this.myinfo,
      cat:this.mySorrt
    }
    this.editone.emit(obj)
  }

}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-ttask-input',
  templateUrl: './ttask-input.component.html',
  styleUrls: ['./ttask-input.component.css']
})
export class TtaskInputComponent implements OnInit {
  myName="";
  myCat="";
  mySort=""
  @Output() addToArr=new EventEmitter()
  @Output() sortBy=new EventEmitter()
  constructor() { }

  ngOnInit(): void {

   
  }
  add(){
    if(this.myName==""||this.myCat==""){
      alert("try again please");
    }
    else{
    var obj={
      info:this.myName,
      cat:this.myCat    }
    this.addToArr.emit(obj)
    }
    this.myName="";
    this.myCat="";
  }
  sort(){
   this.sortBy.emit(this.mySort)
  
  }
}

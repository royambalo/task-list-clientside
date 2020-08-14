import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() arr=new EventEmitter()
  @Output() edittask=new EventEmitter()
  @Output() delOne=new EventEmitter()
  @Output() delAll=new EventEmitter()
  @Output() addToArr=new EventEmitter()
  @Output() sortBy_val=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    
  }

  editone(obj){
    this.edittask.emit(obj)
  }
  add(obj){
    this.addToArr.emit(obj)
  }
  del(id){
    this.delOne.emit(id);
  }
  sortby(valSort){
    this.sortBy_val.emit(valSort)
  }
}

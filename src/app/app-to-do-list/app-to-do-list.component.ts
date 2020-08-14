import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import {doApi} from '../apiService/doApi'

@Component({
  selector: 'app-app-to-do-list',
  templateUrl: './app-to-do-list.component.html',
  styleUrls: ['./app-to-do-list.component.css']
})
export class AppToDoListComponent implements OnInit {
  arr:Task[] ;
  id_info:string;
  id_cat:string;
  id_task:string
  // myUrl:string="http://localhost:3000/tasks"השרת הלוקלי
  myUrl:string="https://task-list-tiba.herokuapp.com/tasks"

  constructor(private _doApi:doApi) { }

  ngOnInit(): void {
    this.renderApp()
  }
  renderApp(){//func that doApi req for the list
    this._doApi.getListTask(this.myUrl)
    .subscribe(data =>
    {            
       this.arr=data;
    })
  }
  cancel(){//the cancek butten in the datk windows
    document.getElementById('id_dark').className="d-none"
  }
  editOne(obj){//func that get the params from the conps below
    document.getElementById('id_dark').className="dark container-fluid center"
    this.id_info=obj.info
    this.id_cat=obj.cat
    this.id_task=obj.id
  }
  editFinal(info,cat){//edit the item we need and render the app with the right data
    let task_obj={
      id:this.id_task,
      info:info.value,
      cat:cat.value
    }
    this._doApi.postTask(this.myUrl+"/edit",task_obj)
    .subscribe(data=>{
      this.arr=data
    })
    this.cancel()
  }
  delOne(id){//delete one with id
    this._doApi.postTask(this.myUrl+"/del",{_id:id})
    .subscribe(data=>{
      this.arr=data
    })
  }
  delAll(){//dell al,no ID needed
    this._doApi.postTask(this.myUrl+"/delAll",{})
    .subscribe()
    {
      this.arr=[]
    }
  }
    
  addToArr(obj){//add to arr
    this._doApi.postTask(this.myUrl+"/add",obj)
    .subscribe(data=>{
      console.log(data);
      this.arr=data;

    })   
  }
  sortBy_val(valSort){//sort the lilst-the sort will e done in NodeJs
    this._doApi.postTask(this.myUrl+"/sort",{sort:valSort})
    .subscribe(data=>{
      this.arr=data;
      console.log(data);
      
    })
  }
}



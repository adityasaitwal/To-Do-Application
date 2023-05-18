import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { FormControl, FormGroup } from '@angular/forms';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  item:any;
  taskform:any;

  constructor(private crud: CrudService) {

   }

  ngOnInit() {

    this.getAll();

    this.taskform = new FormGroup({

    taskname: new FormControl('')
    })
  }

  getAll(){

    this.crud.getalltask().subscribe(data=>{
      console.log(data);
      this.item=data;
    })
  }

  posttask()
  {
    console.log(this.taskform.value);
    this.crud.posttask(this.taskform.value).subscribe(data=>{
      console.log(data);
      this.getAll();
    })
  }

  deleteall(task: any) {

    if (confirm("Do you really want to delete?")) {

      this.crud.deletetask(task).subscribe(data => {
        console.log(data);
        alert("One Task Deleted");
        this.getAll();
      })
    }


  }
}

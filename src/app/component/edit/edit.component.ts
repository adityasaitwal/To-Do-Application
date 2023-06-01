import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  taskform: any;
  isEditMode: boolean = false;
  item:any;

  constructor(private crud: CrudService, private router: Router, private active: ActivatedRoute) {

    const taskpatch = this.active.snapshot.params['id']

    if (taskpatch) {

      this.isEditMode = true;
      this.crud.getById(taskpatch).subscribe(response => {
        console.log(response);
        this.taskform.patchValue(response);
      })
    }
  }

  ngOnInit(): void {

    this.taskform = new FormGroup({

      id: new FormControl(''),
      taskname: new FormControl('')
    })



  }

  getAll() {

    this.crud.getalltask().subscribe(data => {
      console.log(data);
      this.item = data;
    })
  }

  Updatetask() {

    this.isEditMode = false;

    this.crud.updatetask(this.taskform.controls.id.value, this.taskform.value).subscribe(data => {

      console.log(data);
      alert("Updated Successfully");
      this.getAll();
    
    })


  }

}

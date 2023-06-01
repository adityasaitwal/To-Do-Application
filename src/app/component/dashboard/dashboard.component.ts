import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DownloadFileService } from 'src/app/service/download-file.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  item: any = {};
  taskform: any;
  isEditMode: boolean = false;
  modaledit = false;

  constructor(private crud: CrudService, private router: Router, private active: ActivatedRoute, private download: DownloadFileService) {

  }

  ngOnInit() {

    this.getAll();

    this.taskform = new FormGroup({

      id:new FormControl(''),
      taskname: new FormControl('')
    })
  }

  public downloadFile(): void {

    this.download.downloadfile().subscribe(response =>
       {

      console.log(response);
      let fileName = response.headers.get('content-disposition')?.split(';')[1].split('=')[1];
      let blob:Blob=response.body as Blob;
      let a = document.createElement('a');
      a.download=fileName;
      a.href = window.URL.createObjectURL(blob);
      a.click();


    })


  }

  getAll() {

    this.crud.getalltask().subscribe(data => {
      console.log(data);
      this.item = data;
    })
  }

  posttask() {
    console.log(this.taskform.value);
    this.crud.posttask(this.taskform.value).subscribe(data => {
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





import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serviceurl = "http://localhost:3000/tasks";

  constructor(private http:HttpClient) {

   }

   getalltask() {

    return this.http.get(this.serviceurl);
   }

   posttask(data:any) {

    return this.http.post(this.serviceurl, data);
    
   }

   deletetask(id:any) {

    return this.http.delete(`${this.serviceurl}/${id}`);

   }

   getById(id: number) {

    return this.http.get(`${this.serviceurl}/${id}`)
  }

  updatetask(id:number, data:any ){

    return this.http.put(`${this.serviceurl}/${id}`, data)
  }


}

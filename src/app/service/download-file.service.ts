import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor(private http:HttpClient) { 

  }

  public downloadfile()
  {
    return this.http.get("http://localhost:3000/tasks", {observe:'response', responseType:'blob'})
  }
}

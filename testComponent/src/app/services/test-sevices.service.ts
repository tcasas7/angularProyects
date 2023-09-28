import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpResponse, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestSevicesService {

  private url = 'https:// c930-181-231-122-56.ngrok-free.app/student'

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.url + '/getAll')
  } 

  save(student: any): Observable<any> {
    return this.http.post(this.url,student)
  }

  update(id: number, student: any): Observable<any>{
    return this.http.post(this.url + '/' + id + '/update',student)
  }
  delete(id: number, student: any): Observable<any>{
    return this.http.post(this.url + '/' + id + '/delete',null)
}
}
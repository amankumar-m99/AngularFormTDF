import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistrationService {
  _url = "";
  constructor(private _httpClient:HttpClient) { }

  registerEmployee(employee:Employee):Observable<Employee>{
    return this._httpClient.post<Employee>(this._url, employee);
  }
}

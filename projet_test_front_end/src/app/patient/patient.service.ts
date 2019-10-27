import { Injectable } from '@angular/core';
import { IPatient } from './model';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  public resourceUrl = 'http://localhost:8080/api/patients/save';

  constructor(
    protected http: HttpClient
  ) { }

  save(patient: IPatient): Observable<any> {
    debugger
    return this.http.post<IPatient>(this.resourceUrl, patient);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Patient {
  pId: number;
  pName: string;
  pAddress: string;
  pAge: number;
  DId: number;
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'https://localhost:7116/api/Patient';
  constructor(private http: HttpClient) { }
  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseUrl);
  }
}

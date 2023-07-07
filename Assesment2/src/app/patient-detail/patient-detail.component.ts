import { Component, OnInit } from '@angular/core';
import { PatientService, Patient } from '../patient.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit{
  patients: Patient[] = [];
  currentPatient: Patient = { pId: 0, pName: '', pAddress: '', pAge: 0, DId: 0};

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.loadPatients();
  }
  
  loadPatients():void{
    this.patientService.getAllPatients().subscribe(patients => {
      this.patients = patients;
    });
  }
}

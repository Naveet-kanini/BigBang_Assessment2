import { Component, OnInit } from '@angular/core';
import { DoctorService, Doctor } from '../doctor.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit{
  activeDoctors: Doctor[] = [];
  ImagePath2: string = "";
  constructor(private doctorService: DoctorService) { 
    this.ImagePath2 = 'assets/img/doc1.webp';
  }

  ngOnInit(): void {
    this.fetchActiveDoctors();
  }

  fetchActiveDoctors(): void {
    this.doctorService.getAllActiveDoctors().subscribe(
      (doctors: Doctor[]) => {
        this.activeDoctors = doctors;
      },
      (error: any) => {
        console.error('Failed to fetch active doctors:', error);
      }
    );
  }
  }



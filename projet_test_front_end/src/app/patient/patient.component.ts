import { Component, OnInit } from '@angular/core';
import { IPatient } from './model';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient: IPatient = {
    id: null,
    nom: null,
    prenom: null,
    dateNaissance: null,
    sexe: null,
    groupeSanguin: null,
    poids: null,
    taille: null,
    observation: null
  };

  constructor(
    private patientService: PatientService
  ) { }

  ngOnInit() {
  }

  savePatient() {
    debugger
    this.patientService.save(this.patient).subscribe(res => {
      let r =res;
      debugger
    });
  }

}

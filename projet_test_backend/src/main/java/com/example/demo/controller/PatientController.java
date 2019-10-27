package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Patient;
import com.example.demo.repository.PatientRepository;
import com.example.demo.service.PatientService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200") // Autoriser ce client à interagir avec notre service BackEnd
public class PatientController {
	
	@Autowired
	PatientService patientService;

	//Enregistrer le patient
	@PostMapping(value = "/patients/save")
	public Patient savePatient(@RequestBody Patient patient) {

		Patient p = patientService.savePatient(patient);
		return p;
	}
}

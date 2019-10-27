package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Patient;
import com.example.demo.repository.PatientRepository;

@Service
public class PatientService {
	@Autowired
	PatientRepository patientRepository;

	public PatientService(PatientRepository patientRepository) {
		this.patientRepository = patientRepository;
	}
	
	public Patient savePatient(Patient patient) {
		return this.patientRepository.save(patient);
	}
	
	public Optional<Patient> getPatient(int id) {
		return this.patientRepository.findById(id);
	}
	
	public List<Patient> findAllPatients() {
		return this.patientRepository.findAll();
	}
	
	public void deletePatient(Patient patient) {
		this.patientRepository.delete(patient);
	}
}

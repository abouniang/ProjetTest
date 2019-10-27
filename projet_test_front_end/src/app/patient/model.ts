export interface IPatient {
  id?: number;
  nom?: string;
  prenom?: string;
  dateNaissance?: Date;
  groupeSanguin?: string;
  sexe?: string;
  poids?: number;
  taille?: number;
  observation?: string;
}

export class Patient implements IPatient {
  constructor(
    public id?: number,
    public nom?: string,
    public prenom?: string,
    public dateNaissance?: Date,
    public groupeSanguin?: string,
    public sexe?: string,
    public poids?: number,
    public taille?: number,
    public observation?: string
  ) {
  }
}

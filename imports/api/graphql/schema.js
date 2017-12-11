import { buildSchema } from 'graphql';

export const typeDefs = `
  type Assuetudes {
    Consommation_tabagique: Int
  }
  type Parametres {
    PSS: Int
  }
  type ConstBiologique {
    HbA1c: Float
    Cholesterol_total: Int
    Cholesterol_HDL: Int
  }
  type Biometrie {
    poids: Int
    taille: Int
  }
  type Admin {
    prenom: String
    nom: String
    date_de_naissance: String
    Genre: String
  }
  type PatientDatas {
    id: Int
    admin: Admin
    biometrie: Biometrie
    const_biologique: ConstBiologique
    parametres: Parametres
    assuetudes: Assuetudes
  }
  type PatientIdentity {
    name: String
    id: Int
  }
  type Query {
    patientsDatas(targetedPatientsIds: [Int]): [PatientDatas]
    patientsToTarget: [PatientIdentity]
  }
  type Schema {
    query: Query
  }
`;

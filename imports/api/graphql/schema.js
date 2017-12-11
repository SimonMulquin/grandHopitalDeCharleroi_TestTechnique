import { buildSchema } from 'graphql';

export const typeDefs = `
  type Assuetudes {
    consommationTabagique: Int
  }
  type Parametres {
    PSS: Int
  }
  type ConstBiologique {
    HbA1c: Float
    cholesterolTotal: Int
    cholesterolHDL: Int
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
    constBiologique: ConstBiologique
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

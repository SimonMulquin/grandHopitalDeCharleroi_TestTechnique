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
    dateDeNaissance: String
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
  type Query {
    patientsDatas(targetedPatientsIds: [Int]): [PatientDatas]
  }
  type Schema {
    query: Query
  }
`;

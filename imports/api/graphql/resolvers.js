//Nécéssaire pour calculler l'age
import age from '/imports/ui/DataVisualization/utils/age.js';
//calcul du BMI/IMC
import imc from '/imports/ui/DataVisualization/utils/imc.js';

const resolvers = {
  Query: {
    /*renvoie uniquement les données des patients ciblés. Les arguments de la query sont le deuxième argument de la fonction dans le resolver, o n'étant pas utilisé ici.*/
    patientsDatas: (o, {targetedPatientsIds})=>{
      /*filter parcoure le tableau donné en premier argument (ici le contenu du fichier json, plus tard la réponse d'une api sécurisée),
      le deuxième argument est une fonction qui recoit l'objet intitulé patient correspondant au patient individuel trouvé dans le tableau du premier argument,
      si la fonction return, elle push un nouveau tableau avec le patient qui a passé le test de correspondance avec les id ciblés*/
      return _.filter(HTTP.get(Meteor.absoluteUrl("/MOCK_DATA.JSON")).data, (patient)=>{
        /*si un des id dans targetedPatientsIds correspond à l'id du patient*/
        if (_.some(targetedPatientsIds, (id)=>(id === patient.id))){
          /*ajoute ce patient au tableau renvoyé au client*/
          return patient;
        }
      });
    },
    /*Renvoie uniquement les noms et id des patients pour permettre de les cibler*/
    patientsToTarget: ()=>{
      return HTTP.get(Meteor.absoluteUrl("/MOCK_DATA.JSON")).data.map((patient, index)=>(
        {
          name: `${patient.admin.prenom} ${patient.admin.nom}`,
          id: patient.id,
          age: age(patient.admin.date_de_naissance),
          sex: patient.admin.Genre,
          imc: imc(patient.biometrie.poids, patient.biometrie.taille),
          HbA1c: patient.const_biologique.HbA1c,
          totalCholesterol: patient.const_biologique.Cholesterol_total,
          HDLCholesterol: patient.const_biologique.Cholesterol_HDL,
          PSS: patient.parametres.PSS,
          tabac: patient.assuetudes.Consommation_tabagique
        }
      ))
    }
  }
};

export default resolvers;

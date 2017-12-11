var require = meteorInstall({"imports":{"api":{"redux":{"reducers":{"index.js":["babel-runtime/helpers/extends","meteor/ssrwpo:ssr","redux-form",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/api/redux/reducers/index.js                                                                        //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var _extends2 = require("babel-runtime/helpers/extends");                                                     //
                                                                                                              //
var _extends3 = _interopRequireDefault(_extends2);                                                            //
                                                                                                              //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }             //
                                                                                                              //
module.export({                                                                                               // 1
  serverReducers: function () {                                                                               // 1
    return serverReducers;                                                                                    // 1
  },                                                                                                          // 1
  clientReducers: function () {                                                                               // 1
    return clientReducers;                                                                                    // 1
  }                                                                                                           // 1
});                                                                                                           // 1
var createValueReducer = void 0;                                                                              // 1
module.import("meteor/ssrwpo:ssr", {                                                                          // 1
  "createValueReducer": function (v) {                                                                        // 1
    createValueReducer = v;                                                                                   // 1
  }                                                                                                           // 1
}, 0);                                                                                                        // 1
var formReducer = void 0;                                                                                     // 1
module.import("redux-form", {                                                                                 // 1
  "reducer": function (v) {                                                                                   // 1
    formReducer = v;                                                                                          // 1
  }                                                                                                           // 1
}, 1);                                                                                                        // 1
var isMenuOpen = createValueReducer('isMenuOpen', false);                                                     // 5
var targetedPatientsIds = createValueReducer('targetedPatientsIds', [3, 16, 112, 7]); //reducers côté serveur
                                                                                                              //
var serverReducers = {                                                                                        // 9
  form: formReducer,                                                                                          // 10
  isMenuOpen: isMenuOpen,                                                                                     // 11
  targetedPatientsIds: targetedPatientsIds                                                                    // 12
};                                                                                                            // 9
var clientReducers = {};                                                                                      // 16
module.export("default", exports.default = (0, _extends3.default)({}, serverReducers, clientReducers));       // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},"ui":{"DataVisualization":{"Graph":{"Graph.jsx":["react","./styled.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/DataVisualization/Graph/Graph.jsx                                                               //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var React = void 0;                                                                                           // 1
module.import("react", {                                                                                      // 1
  "default": function (v) {                                                                                   // 1
    React = v;                                                                                                // 1
  }                                                                                                           // 1
}, 0);                                                                                                        // 1
var components = void 0;                                                                                      // 1
module.import("./styled.js", {                                                                                // 1
  "default": function (v) {                                                                                   // 1
    components = v;                                                                                           // 1
  }                                                                                                           // 1
}, 1);                                                                                                        // 1
var _components = components,                                                                                 //
    Container = _components.Container,                                                                        //
    Background = _components.Background,                                                                      //
    Title = _components.Title; //affiche le tableau avec toutes les infos dans la forme correcte. Number indique au composant un numéro (0,1,2 ou 3) utilisé pour choisir la couleur du tableau.
                                                                                                              //
var Graph = function (_ref) {                                                                                 // 8
  var title = _ref.toEval.title,                                                                              // 8
      patientsValues = _ref.patientsValues;                                                                   // 8
  return React.createElement(                                                                                 // 8
    Container,                                                                                                // 9
    null,                                                                                                     // 9
    React.createElement(                                                                                      // 10
      Background,                                                                                             // 10
      null,                                                                                                   // 10
      React.createElement(                                                                                    // 11
        Title,                                                                                                // 11
        null,                                                                                                 // 11
        title                                                                                                 // 11
      )                                                                                                       // 11
    )                                                                                                         // 10
  );                                                                                                          // 9
};                                                                                                            // 8
                                                                                                              //
module.export("default", exports.default = Graph);                                                            // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"styled.js":["babel-runtime/helpers/taggedTemplateLiteralLoose","react","styled-components",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/DataVisualization/Graph/styled.js                                                               //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var _taggedTemplateLiteralLoose2 = require("babel-runtime/helpers/taggedTemplateLiteralLoose");               //
                                                                                                              //
var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);                      //
                                                                                                              //
var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(["\n    display: inline-block;\n    position: relative;\n    width: 50%;\n    height: auto;\n    padding: 16px;\n    margin: 0;\n    text-align: center;\n  "], ["\n    display: inline-block;\n    position: relative;\n    width: 50%;\n    height: auto;\n    padding: 16px;\n    margin: 0;\n    text-align: center;\n  "]),
    _templateObject2 = (0, _taggedTemplateLiteralLoose3.default)(["\n    dislay: inline-block;\n    position: relative;\n    width: 350px;\n    height: 350px;\n    padding: 0;\n    margin: 0 auto;\n    background-color: rgba(0,0,0,.2);\n  "], ["\n    dislay: inline-block;\n    position: relative;\n    width: 350px;\n    height: 350px;\n    padding: 0;\n    margin: 0 auto;\n    background-color: rgba(0,0,0,.2);\n  "]),
    _templateObject3 = (0, _taggedTemplateLiteralLoose3.default)(["\n    display: block;\n    position: relative;\n    width: 100%;\n    height: auto;\n    padding: 0;\n    margin: 0;\n    text-decoration: underline;\n    line-height: 1.7em;\n  "], ["\n    display: block;\n    position: relative;\n    width: 100%;\n    height: auto;\n    padding: 0;\n    margin: 0;\n    text-decoration: underline;\n    line-height: 1.7em;\n  "]);
                                                                                                              //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }             //
                                                                                                              //
var React = void 0;                                                                                           // 1
module.import("react", {                                                                                      // 1
  "default": function (v) {                                                                                   // 1
    React = v;                                                                                                // 1
  }                                                                                                           // 1
}, 0);                                                                                                        // 1
var styled = void 0;                                                                                          // 1
module.import("styled-components", {                                                                          // 1
  "default": function (v) {                                                                                   // 1
    styled = v;                                                                                               // 1
  }                                                                                                           // 1
}, 1);                                                                                                        // 1
var components = {                                                                                            // 5
  Container: styled.li(_templateObject),                                                                      // 6
  Background: styled.div(_templateObject2),                                                                   // 15
  Title: styled.h4(_templateObject3)                                                                          // 24
};                                                                                                            // 5
module.export("default", exports.default = components);                                                       // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"PatientDataTable":{"PatientDataTable.jsx":["react","./styled.js","moment",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/DataVisualization/PatientDataTable/PatientDataTable.jsx                                         //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var React = void 0;                                                                                           // 1
module.import("react", {                                                                                      // 1
  "default": function (v) {                                                                                   // 1
    React = v;                                                                                                // 1
  }                                                                                                           // 1
}, 0);                                                                                                        // 1
var components = void 0;                                                                                      // 1
module.import("./styled.js", {                                                                                // 1
  "default": function (v) {                                                                                   // 1
    components = v;                                                                                           // 1
  }                                                                                                           // 1
}, 1);                                                                                                        // 1
var moment = void 0;                                                                                          // 1
module.import("moment", {                                                                                     // 1
  "default": function (v) {                                                                                   // 1
    moment = v;                                                                                               // 1
  }                                                                                                           // 1
}, 2);                                                                                                        // 1
var _components = components,                                                                                 //
    Listed = _components.Listed,                                                                              //
    Row = _components.Row,                                                                                    //
    Name = _components.Name,                                                                                  //
    Cat = _components.Cat,                                                                                    //
    Cell = _components.Cell; //affiche le tableau avec toutes les infos dans la forme correcte. Number indique au composant un numéro (0,1,2 ou 3) utilisé pour choisir la couleur du tableau.
                                                                                                              //
var PatientDataTable = function (_ref) {                                                                      // 10
  var number = _ref.number,                                                                                   // 10
      patient = _ref.patient;                                                                                 // 10
  return React.createElement(                                                                                 // 10
    Listed,                                                                                                   // 11
    {                                                                                                         // 11
      number: number                                                                                          // 11
    },                                                                                                        // 11
    React.createElement(                                                                                      // 12
      Name,                                                                                                   // 12
      null,                                                                                                   // 12
      patient.admin.prenom + " " + patient.admin.nom                                                          // 12
    ),                                                                                                        // 12
    React.createElement(                                                                                      // 13
      Row,                                                                                                    // 13
      null,                                                                                                   // 13
      React.createElement(                                                                                    // 13
        Cell,                                                                                                 // 13
        null,                                                                                                 // 13
        "Date de naissance:"                                                                                  // 13
      ),                                                                                                      // 13
      React.createElement(                                                                                    // 13
        Cell,                                                                                                 // 13
        null,                                                                                                 // 13
        moment(patient.admin.date_de_naissance).format('DD-MM-YYYY')                                          // 13
      )                                                                                                       // 13
    ),                                                                                                        // 13
    React.createElement(                                                                                      // 14
      Row,                                                                                                    // 14
      null,                                                                                                   // 14
      React.createElement(                                                                                    // 14
        Cell,                                                                                                 // 14
        null,                                                                                                 // 14
        "Genre:"                                                                                              // 14
      ),                                                                                                      // 14
      React.createElement(                                                                                    // 14
        Cell,                                                                                                 // 14
        null,                                                                                                 // 14
        patient.admin.Genre                                                                                   // 14
      )                                                                                                       // 14
    ),                                                                                                        // 14
    React.createElement(                                                                                      // 15
      Row,                                                                                                    // 15
      null,                                                                                                   // 15
      React.createElement(                                                                                    // 15
        Cell,                                                                                                 // 15
        null,                                                                                                 // 15
        "ID:"                                                                                                 // 15
      ),                                                                                                      // 15
      React.createElement(                                                                                    // 15
        Cell,                                                                                                 // 15
        null,                                                                                                 // 15
        patient.id                                                                                            // 15
      )                                                                                                       // 15
    ),                                                                                                        // 15
    React.createElement(                                                                                      // 16
      Cat,                                                                                                    // 16
      null,                                                                                                   // 16
      "Biom\xE9trie"                                                                                          // 16
    ),                                                                                                        // 16
    React.createElement(                                                                                      // 17
      Row,                                                                                                    // 17
      null,                                                                                                   // 17
      React.createElement(                                                                                    // 17
        Cell,                                                                                                 // 17
        null,                                                                                                 // 17
        "Poids:"                                                                                              // 17
      ),                                                                                                      // 17
      React.createElement(                                                                                    // 17
        Cell,                                                                                                 // 17
        null,                                                                                                 // 17
        patient.biometrie.poids,                                                                              // 17
        "Kg"                                                                                                  // 17
      )                                                                                                       // 17
    ),                                                                                                        // 17
    React.createElement(                                                                                      // 18
      Row,                                                                                                    // 18
      null,                                                                                                   // 18
      React.createElement(                                                                                    // 18
        Cell,                                                                                                 // 18
        null,                                                                                                 // 18
        "Taille:"                                                                                             // 18
      ),                                                                                                      // 18
      React.createElement(                                                                                    // 18
        Cell,                                                                                                 // 18
        null,                                                                                                 // 18
        patient.biometrie.taille,                                                                             // 18
        "cm"                                                                                                  // 18
      )                                                                                                       // 18
    ),                                                                                                        // 18
    React.createElement(                                                                                      // 19
      Cat,                                                                                                    // 19
      null,                                                                                                   // 19
      "Constantes biologiques"                                                                                // 19
    ),                                                                                                        // 19
    React.createElement(                                                                                      // 20
      Row,                                                                                                    // 20
      null,                                                                                                   // 20
      React.createElement(                                                                                    // 20
        Cell,                                                                                                 // 20
        null,                                                                                                 // 20
        "HbA1c:"                                                                                              // 20
      ),                                                                                                      // 20
      React.createElement(                                                                                    // 20
        Cell,                                                                                                 // 20
        null,                                                                                                 // 20
        patient.const_biologique.HbA1c                                                                        // 20
      )                                                                                                       // 20
    ),                                                                                                        // 20
    React.createElement(                                                                                      // 21
      Row,                                                                                                    // 21
      null,                                                                                                   // 21
      React.createElement(                                                                                    // 21
        Cell,                                                                                                 // 21
        null,                                                                                                 // 21
        "Cholesterol total:"                                                                                  // 21
      ),                                                                                                      // 21
      React.createElement(                                                                                    // 21
        Cell,                                                                                                 // 21
        null,                                                                                                 // 21
        patient.const_biologique.Cholesterol_total,                                                           // 21
        "mg/dl"                                                                                               // 21
      )                                                                                                       // 21
    ),                                                                                                        // 21
    React.createElement(                                                                                      // 22
      Row,                                                                                                    // 22
      null,                                                                                                   // 22
      React.createElement(                                                                                    // 22
        Cell,                                                                                                 // 22
        null,                                                                                                 // 22
        "Cholesterol HDL:"                                                                                    // 22
      ),                                                                                                      // 22
      React.createElement(                                                                                    // 22
        Cell,                                                                                                 // 22
        null,                                                                                                 // 22
        patient.const_biologique.Cholesterol_HDL,                                                             // 22
        "mg/dl"                                                                                               // 22
      )                                                                                                       // 22
    ),                                                                                                        // 22
    React.createElement(                                                                                      // 23
      Cat,                                                                                                    // 23
      null,                                                                                                   // 23
      "Param\xE8tres"                                                                                         // 23
    ),                                                                                                        // 23
    React.createElement(                                                                                      // 24
      Row,                                                                                                    // 24
      null,                                                                                                   // 24
      React.createElement(                                                                                    // 24
        Cell,                                                                                                 // 24
        null,                                                                                                 // 24
        "PSS:"                                                                                                // 24
      ),                                                                                                      // 24
      React.createElement(                                                                                    // 24
        Cell,                                                                                                 // 24
        null,                                                                                                 // 24
        patient.parametres.PSS,                                                                               // 24
        "mmHg"                                                                                                // 24
      )                                                                                                       // 24
    ),                                                                                                        // 24
    React.createElement(                                                                                      // 25
      Cat,                                                                                                    // 25
      null,                                                                                                   // 25
      "Assu\xE9tudes"                                                                                         // 25
    ),                                                                                                        // 25
    React.createElement(                                                                                      // 26
      Row,                                                                                                    // 26
      null,                                                                                                   // 26
      React.createElement(                                                                                    // 26
        Cell,                                                                                                 // 26
        null,                                                                                                 // 26
        "Conso. tabagique:"                                                                                   // 26
      ),                                                                                                      // 26
      React.createElement(                                                                                    // 26
        Cell,                                                                                                 // 26
        null,                                                                                                 // 26
        patient.assuetudes.Consommation_tabagique                                                             // 26
      )                                                                                                       // 26
    )                                                                                                         // 26
  );                                                                                                          // 11
};                                                                                                            // 10
                                                                                                              //
module.export("default", exports.default = PatientDataTable);                                                 // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"styled.js":["babel-runtime/helpers/taggedTemplateLiteralLoose","react","styled-components",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/DataVisualization/PatientDataTable/styled.js                                                    //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var _taggedTemplateLiteralLoose2 = require("babel-runtime/helpers/taggedTemplateLiteralLoose");               //
                                                                                                              //
var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);                      //
                                                                                                              //
var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(["\n    display: inline-block;\n    position: relative;\n    width: 23%;\n    height: auto;\n    padding: 0;\n    margin: 1%;\n    border-radius: 10px;\n    box-shadow: 0 1px 2px 1px rgba(0,0,0, .6);\n    background-color: ", ";\n    @media all and (max-width: 1280px) {\n      width: 48%;\n    }\n    @media all and (max-width: 700px) {\n      width: 98%;\n    }\n  "], ["\n    display: inline-block;\n    position: relative;\n    width: 23%;\n    height: auto;\n    padding: 0;\n    margin: 1%;\n    border-radius: 10px;\n    box-shadow: 0 1px 2px 1px rgba(0,0,0, .6);\n    background-color: ", ";\n    @media all and (max-width: 1280px) {\n      width: 48%;\n    }\n    @media all and (max-width: 700px) {\n      width: 98%;\n    }\n  "]),
    _templateObject2 = (0, _taggedTemplateLiteralLoose3.default)(["\n    display: block;\n    position: relative;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    border-top: 1px solid black;\n    background: rgba(255,255,255,.3);\n  "], ["\n    display: block;\n    position: relative;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    border-top: 1px solid black;\n    background: rgba(255,255,255,.3);\n  "]),
    _templateObject3 = (0, _taggedTemplateLiteralLoose3.default)(["\n    display: block;\n    position: relative;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    text-align: center;\n    line-height: 1.6em;\n  "], ["\n    display: block;\n    position: relative;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    text-align: center;\n    line-height: 1.6em;\n  "]),
    _templateObject4 = (0, _taggedTemplateLiteralLoose3.default)(["\n    display: block;\n    position: relative;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    border-top: 1px solid black;\n    text-align: center;\n    line-height: 1.6em;\n  "], ["\n    display: block;\n    position: relative;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    border-top: 1px solid black;\n    text-align: center;\n    line-height: 1.6em;\n  "]),
    _templateObject5 = (0, _taggedTemplateLiteralLoose3.default)(["\n    display: inline-block;\n    position: relative;\n    width: 50%;\n    height: auto;\n    padding: 0 8px;\n    line-height: 1.6em;\n    &:nth-child(2){\n      border-left: 1px solid black;\n    }\n  "], ["\n    display: inline-block;\n    position: relative;\n    width: 50%;\n    height: auto;\n    padding: 0 8px;\n    line-height: 1.6em;\n    &:nth-child(2){\n      border-left: 1px solid black;\n    }\n  "]);
                                                                                                              //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }             //
                                                                                                              //
var React = void 0;                                                                                           // 1
module.import("react", {                                                                                      // 1
  "default": function (v) {                                                                                   // 1
    React = v;                                                                                                // 1
  }                                                                                                           // 1
}, 0);                                                                                                        // 1
var styled = void 0;                                                                                          // 1
module.import("styled-components", {                                                                          // 1
  "default": function (v) {                                                                                   // 1
    styled = v;                                                                                               // 1
  }                                                                                                           // 1
}, 1);                                                                                                        // 1
var components = {                                                                                            // 5
  Listed: styled.li(_templateObject, function (props) {                                                       // 6
    switch (props.number) {                                                                                   // 15
      case 0:                                                                                                 // 16
        return '#2867a7';                                                                                     // 17
        break;                                                                                                // 17
                                                                                                              //
      case 1:                                                                                                 // 18
        return '#4eaeba';                                                                                     // 19
        break;                                                                                                // 19
                                                                                                              //
      case 2:                                                                                                 // 20
        return '#ff70ab';                                                                                     // 21
        break;                                                                                                // 21
                                                                                                              //
      case 3:                                                                                                 // 22
        return '#f90a6e';                                                                                     // 23
        break;                                                                                                // 23
                                                                                                              //
      default:                                                                                                // 24
        return 'black';                                                                                       // 25
    }                                                                                                         // 15
  }),                                                                                                         // 26
  Row: styled.div(_templateObject2),                                                                          // 34
  Name: styled.h3(_templateObject3),                                                                          // 43
  Cat: styled.h4(_templateObject4),                                                                           // 52
  Cell: styled.span(_templateObject5)                                                                         // 62
};                                                                                                            // 5
module.export("default", exports.default = components);                                                       // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"Pages":{"Home":{"Home.jsx":["babel-runtime/helpers/taggedTemplateLiteralLoose","react","react-apollo","graphql-tag","react-redux","./styled.js","/imports/ui/DataVisualization/PatientDataTable/PatientDataTable.jsx","/imports/ui/DataVisualization/Graph/Graph.jsx",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/Pages/Home/Home.jsx                                                                             //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var _taggedTemplateLiteralLoose2 = require("babel-runtime/helpers/taggedTemplateLiteralLoose");               //
                                                                                                              //
var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);                      //
                                                                                                              //
var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(["\n  query patientsDatasQuery($targetedPatientsIds: [Int!]) {\n    patientsDatas(targetedPatientsIds: $targetedPatientsIds) {\n      id\n      admin {\n        prenom\n        nom\n        date_de_naissance\n        Genre\n      }\n      biometrie {\n        poids\n        taille\n      }\n      const_biologique {\n        HbA1c\n        Cholesterol_total\n        Cholesterol_HDL\n      }\n      parametres {\n        PSS\n      }\n      assuetudes {\n        Consommation_tabagique\n      }\n    }\n  }\n"], ["\n  query patientsDatasQuery($targetedPatientsIds: [Int!]) {\n    patientsDatas(targetedPatientsIds: $targetedPatientsIds) {\n      id\n      admin {\n        prenom\n        nom\n        date_de_naissance\n        Genre\n      }\n      biometrie {\n        poids\n        taille\n      }\n      const_biologique {\n        HbA1c\n        Cholesterol_total\n        Cholesterol_HDL\n      }\n      parametres {\n        PSS\n      }\n      assuetudes {\n        Consommation_tabagique\n      }\n    }\n  }\n"]);
                                                                                                              //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }             //
                                                                                                              //
var React = void 0;                                                                                           // 1
module.import("react", {                                                                                      // 1
  "default": function (v) {                                                                                   // 1
    React = v;                                                                                                // 1
  }                                                                                                           // 1
}, 0);                                                                                                        // 1
var graphql = void 0;                                                                                         // 1
module.import("react-apollo", {                                                                               // 1
  "graphql": function (v) {                                                                                   // 1
    graphql = v;                                                                                              // 1
  }                                                                                                           // 1
}, 1);                                                                                                        // 1
var gql = void 0;                                                                                             // 1
module.import("graphql-tag", {                                                                                // 1
  "default": function (v) {                                                                                   // 1
    gql = v;                                                                                                  // 1
  }                                                                                                           // 1
}, 2);                                                                                                        // 1
var connect = void 0;                                                                                         // 1
module.import("react-redux", {                                                                                // 1
  "connect": function (v) {                                                                                   // 1
    connect = v;                                                                                              // 1
  }                                                                                                           // 1
}, 3);                                                                                                        // 1
var homeComponents = void 0;                                                                                  // 1
module.import("./styled.js", {                                                                                // 1
  "default": function (v) {                                                                                   // 1
    homeComponents = v;                                                                                       // 1
  }                                                                                                           // 1
}, 4);                                                                                                        // 1
var PatientDataTable = void 0;                                                                                // 1
module.import("/imports/ui/DataVisualization/PatientDataTable/PatientDataTable.jsx", {                        // 1
  "default": function (v) {                                                                                   // 1
    PatientDataTable = v;                                                                                     // 1
  }                                                                                                           // 1
}, 5);                                                                                                        // 1
var Graph = void 0;                                                                                           // 1
module.import("/imports/ui/DataVisualization/Graph/Graph.jsx", {                                              // 1
  "default": function (v) {                                                                                   // 1
    Graph = v;                                                                                                // 1
  }                                                                                                           // 1
}, 6);                                                                                                        // 1
var _homeComponents = homeComponents,                                                                         //
    Page = _homeComponents.Page,                                                                              //
    Container = _homeComponents.Container,                                                                    //
    List = _homeComponents.List;                                                                              //
                                                                                                              //
var Home = function (props) {                                                                                 // 17
  return React.createElement(                                                                                 // 17
    Page,                                                                                                     // 18
    null,                                                                                                     // 18
    props.data.loading || props.data.error ? React.createElement(                                             // 19
      "span",                                                                                                 // 19
      null,                                                                                                   // 19
      "Chargement ..."                                                                                        // 19
    ) : React.createElement(                                                                                  // 19
      Container,                                                                                              // 20
      null,                                                                                                   // 20
      React.createElement(                                                                                    // 21
        List,                                                                                                 // 21
        null,                                                                                                 // 21
        props.data.patientsDatas.map(function (patient, index) {                                              // 22
          return React.createElement(PatientDataTable, {                                                      // 22
            patient: patient,                                                                                 // 23
            number: index,                                                                                    // 23
            key: index                                                                                        // 23
          });                                                                                                 // 23
        })                                                                                                    // 22
      ),                                                                                                      // 21
      React.createElement(                                                                                    // 26
        List,                                                                                                 // 26
        null,                                                                                                 // 26
        React.createElement(Graph, {                                                                          // 27
          toEval: {                                                                                           // 27
            title: 'Cholesterol total'                                                                        // 27
          }                                                                                                   // 27
        }),                                                                                                   // 27
        React.createElement(Graph, {                                                                          // 28
          toEval: {                                                                                           // 28
            title: 'Cholesterol HDL'                                                                          // 28
          }                                                                                                   // 28
        })                                                                                                    // 28
      )                                                                                                       // 26
    )                                                                                                         // 20
  );                                                                                                          // 18
}; //Requête graphql => Séléctionne les données à envoyer dans data, prend un argument devant être un array contenant strictement des valeurs de type int.
                                                                                                              //
                                                                                                              //
var queryPatientsDatas = gql(_templateObject); /*Construit le composant Home en lui envoyant data en props.   // 36
                                               Data contient des propriétés error et loading afin de gérer le  cas d'une réponse non conforme ou trop lente.
                                               ownProps contient les props recues du connect et variables contient les paramètres de la requête*/
var HomeWithData = graphql(queryPatientsDatas, {                                                              // 68
  options: function (ownProps) {                                                                              // 69
    return {                                                                                                  // 69
      variables: {                                                                                            // 70
        targetedPatientsIds: ownProps.targetedPatientsIds                                                     // 71
      }                                                                                                       // 70
    };                                                                                                        // 69
  }                                                                                                           // 74
})(Home); //Donne accès au store redux et aux actions à HomeWithData                                          // 68
                                                                                                              //
var mapStateToProps = function (store) {                                                                      // 77
  return {                                                                                                    // 77
    targetedPatientsIds: store.targetedPatientsIds                                                            // 78
  };                                                                                                          // 77
};                                                                                                            // 77
                                                                                                              //
var mapDispatchToProps = function (dispatch) {                                                                // 81
  return {};                                                                                                  // 81
};                                                                                                            // 81
                                                                                                              //
module.export("default", exports.default = connect(mapStateToProps, mapDispatchToProps)(HomeWithData));       // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"styled.js":["babel-runtime/helpers/taggedTemplateLiteralLoose","react","styled-components",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/Pages/Home/styled.js                                                                            //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var _taggedTemplateLiteralLoose2 = require("babel-runtime/helpers/taggedTemplateLiteralLoose");               //
                                                                                                              //
var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);                      //
                                                                                                              //
var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(["\n    display: block;\n    position: relative;\n    width: 100vw;\n    height: auto;\n  "], ["\n    display: block;\n    position: relative;\n    width: 100vw;\n    height: auto;\n  "]),
    _templateObject2 = (0, _taggedTemplateLiteralLoose3.default)(["\n    display: block;\n    position: relative;\n    width: 100%;\n    height: auto;\n    padding: 0;\n    margin: 0;\n  "], ["\n    display: block;\n    position: relative;\n    width: 100%;\n    height: auto;\n    padding: 0;\n    margin: 0;\n  "]),
    _templateObject3 = (0, _taggedTemplateLiteralLoose3.default)(["\n    display: block;\n    position: relative;\n    width: 100%;\n    height: auto;\n    padding: 0 8px;\n    margin: 0;\n    list-style-type: none;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  "], ["\n    display: block;\n    position: relative;\n    width: 100%;\n    height: auto;\n    padding: 0 8px;\n    margin: 0;\n    list-style-type: none;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  "]);
                                                                                                              //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }             //
                                                                                                              //
var React = void 0;                                                                                           // 1
module.import("react", {                                                                                      // 1
  "default": function (v) {                                                                                   // 1
    React = v;                                                                                                // 1
  }                                                                                                           // 1
}, 0);                                                                                                        // 1
var styled = void 0;                                                                                          // 1
module.import("styled-components", {                                                                          // 1
  "default": function (v) {                                                                                   // 1
    styled = v;                                                                                               // 1
  }                                                                                                           // 1
}, 1);                                                                                                        // 1
var homeComponents = {                                                                                        // 5
  Page: styled.main(_templateObject),                                                                         // 6
  Container: styled.div(_templateObject2),                                                                    // 12
  List: styled.ul(_templateObject3)                                                                           // 20
};                                                                                                            // 5
module.export("default", exports.default = homeComponents);                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"Layout":{"Head.jsx":["react","react-helmet",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/Layout/Head.jsx                                                                                 //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var React = void 0;                                                                                           // 1
module.import("react", {                                                                                      // 1
  "default": function (v) {                                                                                   // 1
    React = v;                                                                                                // 1
  }                                                                                                           // 1
}, 0);                                                                                                        // 1
var Helmet = void 0;                                                                                          // 1
module.import("react-helmet", {                                                                               // 1
  "default": function (v) {                                                                                   // 1
    Helmet = v;                                                                                               // 1
  }                                                                                                           // 1
}, 1);                                                                                                        // 1
                                                                                                              //
//head                                                                                                        // 4
var Head = function () {                                                                                      // 5
  return React.createElement(                                                                                 // 5
    Helmet,                                                                                                   // 6
    {                                                                                                         // 6
      meta: [{                                                                                                // 7
        property: 'og:type',                                                                                  // 8
        content: "website"                                                                                    // 8
      }, {                                                                                                    // 8
        property: 'og:site_name',                                                                             // 9
        content: "Simon Mulquin - Test technique"                                                             // 9
      }, {                                                                                                    // 9
        name: 'viewport',                                                                                     // 10
        content: 'width=device-width, maximum-scale=1'                                                        // 10
      }]                                                                                                      // 10
    },                                                                                                        // 6
    React.createElement(                                                                                      // 12
      "title",                                                                                                // 12
      null,                                                                                                   // 12
      "Simon Mulquin - Test technique"                                                                        // 12
    ),                                                                                                        // 12
    React.createElement("link", {                                                                             // 13
      href: "https://fonts.googleapis.com/css?family=Lato:300|Roboto+Slab|Source+Sans+Pro:400,700",           // 13
      rel: "stylesheet"                                                                                       // 13
    })                                                                                                        // 13
  );                                                                                                          // 6
};                                                                                                            // 5
                                                                                                              //
module.export("default", exports.default = Head);                                                             // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Header.jsx":["babel-runtime/helpers/taggedTemplateLiteralLoose","react","react-apollo","graphql-tag","react-redux","meteor/ssrwpo:ssr","./styled.jsx",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/Layout/Header.jsx                                                                               //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var _taggedTemplateLiteralLoose2 = require("babel-runtime/helpers/taggedTemplateLiteralLoose");               //
                                                                                                              //
var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);                      //
                                                                                                              //
var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(["\n  query patientsToTargetQuery {\n    patientsToTarget {\n      name\n      id\n    }\n  }\n"], ["\n  query patientsToTargetQuery {\n    patientsToTarget {\n      name\n      id\n    }\n  }\n"]);
                                                                                                              //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }             //
                                                                                                              //
var React = void 0;                                                                                           // 1
module.import("react", {                                                                                      // 1
  "default": function (v) {                                                                                   // 1
    React = v;                                                                                                // 1
  }                                                                                                           // 1
}, 0);                                                                                                        // 1
var graphql = void 0;                                                                                         // 1
module.import("react-apollo", {                                                                               // 1
  "graphql": function (v) {                                                                                   // 1
    graphql = v;                                                                                              // 1
  }                                                                                                           // 1
}, 1);                                                                                                        // 1
var gql = void 0;                                                                                             // 1
module.import("graphql-tag", {                                                                                // 1
  "default": function (v) {                                                                                   // 1
    gql = v;                                                                                                  // 1
  }                                                                                                           // 1
}, 2);                                                                                                        // 1
var connect = void 0;                                                                                         // 1
module.import("react-redux", {                                                                                // 1
  "connect": function (v) {                                                                                   // 1
    connect = v;                                                                                              // 1
  }                                                                                                           // 1
}, 3);                                                                                                        // 1
var valueSet = void 0;                                                                                        // 1
module.import("meteor/ssrwpo:ssr", {                                                                          // 1
  "valueSet": function (v) {                                                                                  // 1
    valueSet = v;                                                                                             // 1
  }                                                                                                           // 1
}, 4);                                                                                                        // 1
var StyledHeader = void 0,                                                                                    // 1
    MainTitle = void 0,                                                                                       // 1
    Menu = void 0,                                                                                            // 1
    Target = void 0,                                                                                          // 1
    MenuButton = void 0,                                                                                      // 1
    Icon = void 0;                                                                                            // 1
module.import("./styled.jsx", {                                                                               // 1
  "StyledHeader": function (v) {                                                                              // 1
    StyledHeader = v;                                                                                         // 1
  },                                                                                                          // 1
  "MainTitle": function (v) {                                                                                 // 1
    MainTitle = v;                                                                                            // 1
  },                                                                                                          // 1
  "Menu": function (v) {                                                                                      // 1
    Menu = v;                                                                                                 // 1
  },                                                                                                          // 1
  "Target": function (v) {                                                                                    // 1
    Target = v;                                                                                               // 1
  },                                                                                                          // 1
  "MenuButton": function (v) {                                                                                // 1
    MenuButton = v;                                                                                           // 1
  },                                                                                                          // 1
  "Icon": function (v) {                                                                                      // 1
    Icon = v;                                                                                                 // 1
  }                                                                                                           // 1
}, 5);                                                                                                        // 1
                                                                                                              //
/*                                                                                                            // 19
déconstruit les props pour extraire toggleMenu et isMenuOpen, nécéssaires pour la version mobile du header.   //
isMenuOpen: booleen, true: le menu est ouvert, false: le menu est fermé                                       //
toggleMenu: prend ce booleen en argument pour inverser sa valeur                                              //
*/var Header = function (_ref) {                                                                              //
  var toggleMenu = _ref.toggleMenu,                                                                           // 24
      isMenuOpen = _ref.isMenuOpen,                                                                           // 24
      targetedPatients = _ref.targetedPatients;                                                               // 24
  return React.createElement(                                                                                 // 24
    StyledHeader,                                                                                             // 25
    {                                                                                                         // 25
      isMenuOpen: isMenuOpen                                                                                  // 25
    },                                                                                                        // 25
    React.createElement(                                                                                      // 26
      Menu,                                                                                                   // 26
      null,                                                                                                   // 26
      React.createElement(MainTitle, {                                                                        // 27
        to: "/"                                                                                               // 27
      }),                                                                                                     // 27
      targetedPatients().map(function (patient, index) {                                                      // 28
        return React.createElement(                                                                           // 28
          Target,                                                                                             // 29
          {                                                                                                   // 29
            to: "/",                                                                                          // 29
            number: index,                                                                                    // 29
            key: index                                                                                        // 29
          },                                                                                                  // 29
          patient.name                                                                                        // 29
        );                                                                                                    // 29
      })                                                                                                      // 28
    ),                                                                                                        // 26
    React.createElement(                                                                                      // 32
      MenuButton,                                                                                             // 32
      {                                                                                                       // 32
        onClick: function () {                                                                                // 32
          return toggleMenu(isMenuOpen);                                                                      // 32
        }                                                                                                     // 32
      },                                                                                                      // 32
      React.createElement(Icon, {                                                                             // 33
        isMenuOpen: isMenuOpen                                                                                // 33
      })                                                                                                      // 33
    )                                                                                                         // 32
  );                                                                                                          // 25
}; //Donne accès au store redux et aux actions à Header                                                       // 24
//la prop isMenuOpen = la valeur de isMenuOpen dans le store redux                                            // 39
//targetedPatients = patients ciblés dans la liste recue de la requête graphql selon le store redux.          // 40
//patientsList = cette liste.                                                                                 // 41
                                                                                                              //
                                                                                                              //
var mapStateToProps = function (store, ownProps) {                                                            // 42
  return {                                                                                                    // 42
    isMenuOpen: store.isMenuOpen,                                                                             // 43
    targetedPatients: function () {                                                                           // 44
      if (!ownProps.data.loading && !ownProps.data.error) {                                                   // 45
        return _.filter(ownProps.data.patientsToTarget, function (patient) {                                  // 46
          /*si un des id dans targetedPatientsIds correspond à l'id du patient*/if (_.some(store.targetedPatientsIds, function (id) {
            return id === patient.id;                                                                         // 48
          })) {                                                                                               // 48
            /*ajoute ce patient au tableau renvoyé en props*/return patient;                                  // 49
          }                                                                                                   // 51
        });                                                                                                   // 52
      } else {                                                                                                // 53
        return [];                                                                                            // 54
      }                                                                                                       // 55
    },                                                                                                        // 56
    patientsList: ownProps.data.loading || ownProps.data.error ? [] : ownProps.data.patientsToTarget          // 57
  };                                                                                                          // 42
}; //toggleMenu dispatche une action qui va changer la valeur de isMenuOpen dans le store redux en l'inverse de menuState, passé en argument.
                                                                                                              //
                                                                                                              //
var mapDispatchToProps = function (dispatch) {                                                                // 61
  return {                                                                                                    // 61
    toggleMenu: function (menuState) {                                                                        // 62
      dispatch(valueSet('isMenuOpen', !menuState));                                                           // 63
    }                                                                                                         // 64
  };                                                                                                          // 61
};                                                                                                            // 61
                                                                                                              //
var ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header); //Requête graphql => Séléctionne les données à envoyer dans data.
                                                                                                              //
var queryPatientsToTarget = gql(_templateObject); /*Construit et exporte le composant ConnectedHeader en lui envoyant data en props.
                                                  Data contient des propriétés error et loading afin de gérer le  cas d'une réponse non conforme ou trop lente.*/
module.export("default", exports.default = graphql(queryPatientsToTarget)(ConnectedHeader));                  // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Layout.jsx":["react","react-router-dom","react-redux","./Header.jsx","./styled.jsx","./Head.jsx","/imports/ui/Pages/Home/Home.jsx",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/Layout/Layout.jsx                                                                               //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var React = void 0;                                                                                           // 1
module.import("react", {                                                                                      // 1
  "default": function (v) {                                                                                   // 1
    React = v;                                                                                                // 1
  }                                                                                                           // 1
}, 0);                                                                                                        // 1
var Switch = void 0,                                                                                          // 1
    Route = void 0,                                                                                           // 1
    withRouter = void 0;                                                                                      // 1
module.import("react-router-dom", {                                                                           // 1
  "Switch": function (v) {                                                                                    // 1
    Switch = v;                                                                                               // 1
  },                                                                                                          // 1
  "Route": function (v) {                                                                                     // 1
    Route = v;                                                                                                // 1
  },                                                                                                          // 1
  "withRouter": function (v) {                                                                                // 1
    withRouter = v;                                                                                           // 1
  }                                                                                                           // 1
}, 1);                                                                                                        // 1
var connect = void 0;                                                                                         // 1
module.import("react-redux", {                                                                                // 1
  "connect": function (v) {                                                                                   // 1
    connect = v;                                                                                              // 1
  }                                                                                                           // 1
}, 2);                                                                                                        // 1
var Header = void 0;                                                                                          // 1
module.import("./Header.jsx", {                                                                               // 1
  "default": function (v) {                                                                                   // 1
    Header = v;                                                                                               // 1
  }                                                                                                           // 1
}, 3);                                                                                                        // 1
var NotFound = void 0,                                                                                        // 1
    Page = void 0;                                                                                            // 1
module.import("./styled.jsx", {                                                                               // 1
  "NotFound": function (v) {                                                                                  // 1
    NotFound = v;                                                                                             // 1
  },                                                                                                          // 1
  "Page": function (v) {                                                                                      // 1
    Page = v;                                                                                                 // 1
  }                                                                                                           // 1
}, 4);                                                                                                        // 1
var Head = void 0;                                                                                            // 1
module.import("./Head.jsx", {                                                                                 // 1
  "default": function (v) {                                                                                   // 1
    Head = v;                                                                                                 // 1
  }                                                                                                           // 1
}, 5);                                                                                                        // 1
var Home = void 0;                                                                                            // 1
module.import("/imports/ui/Pages/Home/Home.jsx", {                                                            // 1
  "default": function (v) {                                                                                   // 1
    Home = v;                                                                                                 // 1
  }                                                                                                           // 1
}, 6);                                                                                                        // 1
                                                                                                              //
//Par défaut, renvoie le composant NotFound, similaire à une erreur 404.                                      // 16
var Root = function (props) {                                                                                 // 17
  return React.createElement(                                                                                 // 17
    "div",                                                                                                    // 18
    {                                                                                                         // 18
      id: "base"                                                                                              // 18
    },                                                                                                        // 18
    React.createElement(Head, null),                                                                          // 19
    React.createElement(                                                                                      // 20
      Page,                                                                                                   // 20
      null,                                                                                                   // 20
      React.createElement(Header, null),                                                                      // 21
      React.createElement(                                                                                    // 22
        Switch,                                                                                               // 22
        null,                                                                                                 // 22
        React.createElement(Route, {                                                                          // 23
          exact: true,                                                                                        // 23
          path: "/",                                                                                          // 23
          component: Home                                                                                     // 23
        }),                                                                                                   // 23
        React.createElement(Route, {                                                                          // 24
          "default": true,                                                                                    // 24
          render: function () {                                                                               // 24
            return React.createElement(                                                                       // 24
              NotFound,                                                                                       // 24
              null,                                                                                           // 24
              "Aucune donn\xE9e connue pour cette url."                                                       // 24
            );                                                                                                // 24
          }                                                                                                   // 24
        })                                                                                                    // 24
      )                                                                                                       // 22
    )                                                                                                         // 20
  );                                                                                                          // 18
}; //Donne accès au store redux et aux actions à Root                                                         // 17
                                                                                                              //
                                                                                                              //
var mapStateToProps = function (store) {                                                                      // 31
  return {};                                                                                                  // 31
};                                                                                                            // 31
                                                                                                              //
var mapDispatchToProps = function (dispatch) {                                                                // 35
  return {};                                                                                                  // 35
};                                                                                                            // 35
                                                                                                              //
module.export("default", exports.default = withRouter(connect(mapStateToProps, mapDispatchToProps)(Root)));   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"styled.jsx":["babel-runtime/helpers/taggedTemplateLiteralLoose","react","styled-components","react-router-dom",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/Layout/styled.jsx                                                                               //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var _taggedTemplateLiteralLoose2 = require("babel-runtime/helpers/taggedTemplateLiteralLoose");               //
                                                                                                              //
var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);                      //
                                                                                                              //
var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(["\n  display: block;\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 60px);\n  padding: 35vh 0 0 0;\n  margin: 0;\n  text-align: center;\n  color: #f90a6e;\n  font-size: 32px;\n  font-weight: 700;\n"], ["\n  display: block;\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 60px);\n  padding: 35vh 0 0 0;\n  margin: 0;\n  text-align: center;\n  color: #f90a6e;\n  font-size: 32px;\n  font-weight: 700;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteralLoose3.default)(["\n  display: block;\n  position: fixed;\n  top: 0;\n  height: 60px;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  background: white;\n  box-shadow: 0 1px 2px 1px rgba(0,0,0,.8);\n  z-index: 999;\n  overflow-x: hidden;\n  overflow-y: ", ";\n  @media all and (max-width: 1280px) {\n    height: ", ";\n  }\n"], ["\n  display: block;\n  position: fixed;\n  top: 0;\n  height: 60px;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  background: white;\n  box-shadow: 0 1px 2px 1px rgba(0,0,0,.8);\n  z-index: 999;\n  overflow-x: hidden;\n  overflow-y: ", ";\n  @media all and (max-width: 1280px) {\n    height: ", ";\n  }\n"]),
    _templateObject3 = (0, _taggedTemplateLiteralLoose3.default)(["\n  display: inline-block;\n  position: absolute;\n  left: 20px;\n  top: 0;\n  height: 60px;\n  width: 120px;\n  padding: 8px 12px;\n  margin: 0;\n  color: black;\n  background: url('/logo.jpg') no-repeat center;\n  background-size: contain;\n"], ["\n  display: inline-block;\n  position: absolute;\n  left: 20px;\n  top: 0;\n  height: 60px;\n  width: 120px;\n  padding: 8px 12px;\n  margin: 0;\n  color: black;\n  background: url('/logo.jpg') no-repeat center;\n  background-size: contain;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteralLoose3.default)(["\n  display: flex;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0 100px 0 140px;\n  justify-content: flex-end;\n  box-shadow: 0 1px 2px 1px rgba(0,0,0,.8);\n  @media all and (max-width: 1280px) {\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 60px 0 0 0;\n    height: auto;\n    text-align: center;\n  }\n"], ["\n  display: flex;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0 100px 0 140px;\n  justify-content: flex-end;\n  box-shadow: 0 1px 2px 1px rgba(0,0,0,.8);\n  @media all and (max-width: 1280px) {\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 60px 0 0 0;\n    height: auto;\n    text-align: center;\n  }\n"]),
    _templateObject5 = (0, _taggedTemplateLiteralLoose3.default)(["\n  display: inline-block;\n  position: relative;\n  width: auto;\n  height: 60px;\n  line-height: 60px;\n  padding: 0 18px;\n  margin: 0 30px;\n  text-decoration: none;\n  color: ", ";\n  font-weight: 200;\n  font-size: 18px;\n  @media all and (max-width: 1280px) {\n    border-top: black solid 1px;\n    margin: 0;\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  width: auto;\n  height: 60px;\n  line-height: 60px;\n  padding: 0 18px;\n  margin: 0 30px;\n  text-decoration: none;\n  color: ", ";\n  font-weight: 200;\n  font-size: 18px;\n  @media all and (max-width: 1280px) {\n    border-top: black solid 1px;\n    margin: 0;\n  }\n"]),
    _templateObject6 = (0, _taggedTemplateLiteralLoose3.default)(["\n  display: none;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  height: 60px;\n  width: 60px;\n  padding: 12px;\n  margin: 0;\n  border: 0;\n  background: white;\n  @media all and (max-width: 1280px) {\n    display: block;\n  }\n"], ["\n  display: none;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  height: 60px;\n  width: 60px;\n  padding: 12px;\n  margin: 0;\n  border: 0;\n  background: white;\n  @media all and (max-width: 1280px) {\n    display: block;\n  }\n"]),
    _templateObject7 = (0, _taggedTemplateLiteralLoose3.default)(["\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 5px;\n  background-color: ", ";\n  outline: none;\n  transition: .3s;\n  &:before {\n    content: ' ';\n    display: block;\n    position: absolute;\n    bottom: -10px;\n    width: 100%;\n    height: 5px;\n    background-color: #f90a6e;\n    ", "\n    transition: .3s;\n  }\n  &:after {\n    content: ' ';\n    display: block;\n    position: absolute;\n    top: -10px;\n    width: 100%;\n    height: 5px;\n    background-color: #f90a6e;\n    ", "\n    transition: .3s;\n  }\n"], ["\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 5px;\n  background-color: ", ";\n  outline: none;\n  transition: .3s;\n  &:before {\n    content: ' ';\n    display: block;\n    position: absolute;\n    bottom: -10px;\n    width: 100%;\n    height: 5px;\n    background-color: #f90a6e;\n    ", "\n    transition: .3s;\n  }\n  &:after {\n    content: ' ';\n    display: block;\n    position: absolute;\n    top: -10px;\n    width: 100%;\n    height: 5px;\n    background-color: #f90a6e;\n    ", "\n    transition: .3s;\n  }\n"]),
    _templateObject8 = (0, _taggedTemplateLiteralLoose3.default)(["\n  display: block;\n  position: relative;\n  height: auto;\n  width: 100%;\n  margin: 0;\n  padding: 60px 0 0 0;\n"], ["\n  display: block;\n  position: relative;\n  height: auto;\n  width: 100%;\n  margin: 0;\n  padding: 60px 0 0 0;\n"]);
                                                                                                              //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }             //
                                                                                                              //
module.export({                                                                                               // 1
  NotFound: function () {                                                                                     // 1
    return NotFound;                                                                                          // 1
  },                                                                                                          // 1
  StyledHeader: function () {                                                                                 // 1
    return StyledHeader;                                                                                      // 1
  },                                                                                                          // 1
  MainTitle: function () {                                                                                    // 1
    return MainTitle;                                                                                         // 1
  },                                                                                                          // 1
  Menu: function () {                                                                                         // 1
    return Menu;                                                                                              // 1
  },                                                                                                          // 1
  Target: function () {                                                                                       // 1
    return Target;                                                                                            // 1
  },                                                                                                          // 1
  MenuButton: function () {                                                                                   // 1
    return MenuButton;                                                                                        // 1
  },                                                                                                          // 1
  Icon: function () {                                                                                         // 1
    return Icon;                                                                                              // 1
  },                                                                                                          // 1
  Page: function () {                                                                                         // 1
    return Page;                                                                                              // 1
  }                                                                                                           // 1
});                                                                                                           // 1
var React = void 0;                                                                                           // 1
module.import("react", {                                                                                      // 1
  "default": function (v) {                                                                                   // 1
    React = v;                                                                                                // 1
  }                                                                                                           // 1
}, 0);                                                                                                        // 1
var styled = void 0;                                                                                          // 1
module.import("styled-components", {                                                                          // 1
  "default": function (v) {                                                                                   // 1
    styled = v;                                                                                               // 1
  }                                                                                                           // 1
}, 1);                                                                                                        // 1
var Link = void 0;                                                                                            // 1
module.import("react-router-dom", {                                                                           // 1
  "Link": function (v) {                                                                                      // 1
    Link = v;                                                                                                 // 1
  }                                                                                                           // 1
}, 2);                                                                                                        // 1
//404                                                                                                         // 7
var NotFound = styled.main(_templateObject); //Header                                                         // 9
                                                                                                              //
var StyledHeader = styled.header(_templateObject2, function (props) {                                         // 24
  return props.isMenuOpen ? 'scroll' : 'hidden';                                                              // 36
}, function (props) {                                                                                         // 36
  return props.isMenuOpen ? '100vh' : '60px';                                                                 // 38
});                                                                                                           // 38
var MainTitle = styled(Link)(_templateObject3);                                                               // 42
var Menu = styled.nav(_templateObject4);                                                                      // 56
var Target = styled(Link)(_templateObject5, function (props) {                                                // 74
  switch (props.number) {                                                                                     // 83
    case 0:                                                                                                   // 84
      return '#2867a7';                                                                                       // 85
      break;                                                                                                  // 85
                                                                                                              //
    case 1:                                                                                                   // 86
      return '#4eaeba';                                                                                       // 87
      break;                                                                                                  // 87
                                                                                                              //
    case 2:                                                                                                   // 88
      return '#ff70ab';                                                                                       // 89
      break;                                                                                                  // 89
                                                                                                              //
    case 3:                                                                                                   // 90
      return '#f90a6e';                                                                                       // 91
      break;                                                                                                  // 91
                                                                                                              //
    default:                                                                                                  // 92
      return 'black';                                                                                         // 93
  }                                                                                                           // 83
});                                                                                                           // 94
var MenuButton = styled.button(_templateObject6);                                                             // 103
var Icon = styled.div(_templateObject7, function (props) {                                                    // 119
  return props.isMenuOpen ? 'transparent' : '#f90a6e';                                                        // 124
}, function (props) {                                                                                         // 124
  return props.isMenuOpen ? "\n      transform: translate3d(0, -12px, 0) rotate(45deg) ;\n    " : null;       // 135
}, function (props) {                                                                                         // 135
  return props.isMenuOpen ? "\n      transform: translate3d(0, 8px, 0) rotate(-45deg) ;\n    " : null;        // 148
}); //Page                                                                                                    // 148
                                                                                                              //
var Page = styled.div(_templateObject8);                                                                      // 157
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"ApolloClient.js":["apollo-client","meteor/apollo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ApolloClient.js                                                                                    //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var ApolloClient = void 0;                                                                                    // 1
module.import("apollo-client", {                                                                              // 1
  "default": function (v) {                                                                                   // 1
    ApolloClient = v;                                                                                         // 1
  }                                                                                                           // 1
}, 0);                                                                                                        // 1
var createMeteorNetworkInterface = void 0,                                                                    // 1
    meteorClientConfig = void 0;                                                                              // 1
module.import("meteor/apollo", {                                                                              // 1
  "createMeteorNetworkInterface": function (v) {                                                              // 1
    createMeteorNetworkInterface = v;                                                                         // 1
  },                                                                                                          // 1
  "meteorClientConfig": function (v) {                                                                        // 1
    meteorClientConfig = v;                                                                                   // 1
  }                                                                                                           // 1
}, 1);                                                                                                        // 1
var networkInterface = createMeteorNetworkInterface({                                                         // 4
  // use a batched network interface instead of a classic network interface                                   // 5
  batchingInterface: true                                                                                     // 6
});                                                                                                           // 4
var client = new ApolloClient(meteorClientConfig({                                                            // 9
  networkInterface: networkInterface                                                                          // 9
}));                                                                                                          // 9
module.export("default", exports.default = client);                                                           // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MainApp.jsx":["react","meteor/ssrwpo:ssr","react-apollo","./ApolloClient","/imports/ui/Layout/Layout.jsx","react-redux",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/MainApp.jsx                                                                                        //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var React = void 0;                                                                                           // 1
module.import("react", {                                                                                      // 1
  "default": function (v) {                                                                                   // 1
    React = v;                                                                                                // 1
  }                                                                                                           // 1
}, 0);                                                                                                        // 1
var getStore = void 0,                                                                                        // 1
    asymetricSsr = void 0;                                                                                    // 1
module.import("meteor/ssrwpo:ssr", {                                                                          // 1
  "getStore": function (v) {                                                                                  // 1
    getStore = v;                                                                                             // 1
  },                                                                                                          // 1
  "asymetricSsr": function (v) {                                                                              // 1
    asymetricSsr = v;                                                                                         // 1
  }                                                                                                           // 1
}, 1);                                                                                                        // 1
var ApolloProvider = void 0,                                                                                  // 1
    graphql = void 0;                                                                                         // 1
module.import("react-apollo", {                                                                               // 1
  "ApolloProvider": function (v) {                                                                            // 1
    ApolloProvider = v;                                                                                       // 1
  },                                                                                                          // 1
  "graphql": function (v) {                                                                                   // 1
    graphql = v;                                                                                              // 1
  }                                                                                                           // 1
}, 2);                                                                                                        // 1
var client = void 0;                                                                                          // 1
module.import("./ApolloClient", {                                                                             // 1
  "default": function (v) {                                                                                   // 1
    client = v;                                                                                               // 1
  }                                                                                                           // 1
}, 3);                                                                                                        // 1
var Root = void 0;                                                                                            // 1
module.import("/imports/ui/Layout/Layout.jsx", {                                                              // 1
  "default": function (v) {                                                                                   // 1
    Root = v;                                                                                                 // 1
  }                                                                                                           // 1
}, 4);                                                                                                        // 1
var connect = void 0;                                                                                         // 1
module.import("react-redux", {                                                                                // 1
  "connect": function (v) {                                                                                   // 1
    connect = v;                                                                                              // 1
  }                                                                                                           // 1
}, 5);                                                                                                        // 1
                                                                                                              //
//ouvre un client Apollo ( nécéssaire pour accéder aux données des requêtes graphql ) et lui passe notre propre store redux
var ClientSetup = function (props) {                                                                          // 16
  return React.createElement(                                                                                 // 16
    ApolloProvider,                                                                                           // 17
    {                                                                                                         // 17
      store: getStore(),                                                                                      // 17
      client: client                                                                                          // 17
    },                                                                                                        // 17
    React.createElement(Root, null)                                                                           // 18
  );                                                                                                          // 17
}; //Server side rendering => Contenu initialement chargé par le navigateur, non sensible à la désactivation du javascript
                                                                                                              //
                                                                                                              //
var ServerSim = function (props) {                                                                            // 23
  return React.createElement(                                                                                 // 23
    "div",                                                                                                    // 24
    {                                                                                                         // 24
      className: "noJs"                                                                                       // 24
    },                                                                                                        // 24
    React.createElement(                                                                                      // 25
      "div",                                                                                                  // 25
      {                                                                                                       // 25
        className: "noJs_loader"                                                                              // 25
      },                                                                                                      // 25
      React.createElement("div", {                                                                            // 26
        className: "noJs_box"                                                                                 // 26
      }),                                                                                                     // 26
      React.createElement("div", {                                                                            // 27
        className: "noJs_hill"                                                                                // 27
      })                                                                                                      // 27
    ),                                                                                                        // 25
    React.createElement(                                                                                      // 29
      "span",                                                                                                 // 29
      {                                                                                                       // 29
        className: "noJs_text"                                                                                // 29
      },                                                                                                      // 29
      "Chargement de l'application. Veillez \xE0 autoriser le javascript dans votre navigateur."              // 29
    )                                                                                                         // 29
  );                                                                                                          // 24
}; //Donne accès au store redux et aux actions à ClientSetup                                                  // 23
                                                                                                              //
                                                                                                              //
var mapStateToProps = function (state) {                                                                      // 34
  return {};                                                                                                  // 34
};                                                                                                            // 34
                                                                                                              //
var mapDispatchToProps = function () {                                                                        // 37
  return {};                                                                                                  // 37
};                                                                                                            // 37
                                                                                                              //
var MainApp = connect(mapStateToProps, mapDispatchToProps)(ClientSetup);                                      // 39
module.export("default", exports.default = asymetricSsr(MainApp, ServerSim));                                 // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"client":{"main.js":["meteor/ssrwpo:ssr","redux-thunk","redux-promise","/imports/api/redux/reducers","/imports/MainApp.jsx",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/main.js                                                                                             //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var createRouter = void 0,                                                                                    // 1
    logger = void 0;                                                                                          // 1
module.import("meteor/ssrwpo:ssr", {                                                                          // 1
  "createRouter": function (v) {                                                                              // 1
    createRouter = v;                                                                                         // 1
  },                                                                                                          // 1
  "logger": function (v) {                                                                                    // 1
    logger = v;                                                                                               // 1
  }                                                                                                           // 1
}, 0);                                                                                                        // 1
var thunk = void 0;                                                                                           // 1
module.import("redux-thunk", {                                                                                // 1
  "default": function (v) {                                                                                   // 1
    thunk = v;                                                                                                // 1
  }                                                                                                           // 1
}, 1);                                                                                                        // 1
var promise = void 0;                                                                                         // 1
module.import("redux-promise", {                                                                              // 1
  "default": function (v) {                                                                                   // 1
    promise = v;                                                                                              // 1
  }                                                                                                           // 1
}, 2);                                                                                                        // 1
var appReducers = void 0;                                                                                     // 1
module.import("/imports/api/redux/reducers", {                                                                // 1
  "default": function (v) {                                                                                   // 1
    appReducers = v;                                                                                          // 1
  }                                                                                                           // 1
}, 3);                                                                                                        // 1
var MainApp = void 0;                                                                                         // 1
module.import("/imports/MainApp.jsx", {                                                                       // 1
  "default": function (v) {                                                                                   // 1
    MainApp = v;                                                                                              // 1
  }                                                                                                           // 1
}, 4);                                                                                                        // 1
// const appMiddlewares = [                                                                                   // 8
//   thunk,                                                                                                   // 9
//   promise                                                                                                  // 10
// ];                                                                                                         // 11
createRouter({                                                                                                // 13
  // Your MainApp as the top component that will get rendered in <div id='react' />                           // 14
  MainApp: MainApp,                                                                                           // 15
  // Optional: Store subscription                                                                             // 16
  //storeSubscription,                                                                                        // 17
  // Optional: An object containing your application reducers                                                 // 18
  appReducers: appReducers                                                                                    // 19
}).then(function () {                                                                                         // 13
  return logger.info('Router started');                                                                       // 27
});                                                                                                           // 27
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".jsx",".css"]});
require("./client/main.js");
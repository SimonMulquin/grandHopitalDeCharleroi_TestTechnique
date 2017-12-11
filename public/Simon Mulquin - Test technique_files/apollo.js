//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Accounts = Package['accounts-base'].Accounts;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"apollo":{"src":{"main-client.js":["babel-runtime/helpers/extends","apollo-client","meteor/meteor","meteor/accounts-base",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/apollo/src/main-client.js                                                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _extends2 = require("babel-runtime/helpers/extends");                                                    //
                                                                                                             //
var _extends3 = _interopRequireDefault(_extends2);                                                           //
                                                                                                             //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }            //
                                                                                                             //
module.export({                                                                                              // 1
  createMeteorNetworkInterface: function () {                                                                // 1
    return createMeteorNetworkInterface;                                                                     // 1
  },                                                                                                         // 1
  meteorClientConfig: function () {                                                                          // 1
    return meteorClientConfig;                                                                               // 1
  },                                                                                                         // 1
  getMeteorLoginToken: function () {                                                                         // 1
    return getMeteorLoginToken;                                                                              // 1
  }                                                                                                          // 1
});                                                                                                          // 1
var createNetworkInterface = void 0,                                                                         // 1
    createBatchingNetworkInterface = void 0;                                                                 // 1
module.import("apollo-client", {                                                                             // 1
  "createNetworkInterface": function (v) {                                                                   // 1
    createNetworkInterface = v;                                                                              // 1
  },                                                                                                         // 1
  "createBatchingNetworkInterface": function (v) {                                                           // 1
    createBatchingNetworkInterface = v;                                                                      // 1
  }                                                                                                          // 1
}, 0);                                                                                                       // 1
var Meteor = void 0;                                                                                         // 1
module.import("meteor/meteor", {                                                                             // 1
  "Meteor": function (v) {                                                                                   // 1
    Meteor = v;                                                                                              // 1
  }                                                                                                          // 1
}, 1);                                                                                                       // 1
var Accounts = void 0;                                                                                       // 1
module.import("meteor/accounts-base", {                                                                      // 1
  "Accounts": function (v) {                                                                                 // 1
    Accounts = v;                                                                                            // 1
  }                                                                                                          // 1
}, 2);                                                                                                       // 1
// default network interface configuration object                                                            // 6
var defaultNetworkInterfaceConfig = {                                                                        // 7
  // default graphql server endpoint: ROOT_URL/graphql                                                       // 8
  // ex: http://locahost:3000/graphql, or https://www.my-app.com/graphql                                     // 9
  uri: Meteor.absoluteUrl('graphql'),                                                                        // 10
  // additional fetch options like `credentials` or `headers`                                                // 11
  opts: {},                                                                                                  // 12
  // enable the Meteor User Accounts middleware to identify the user with                                    // 13
  // every request thanks to their login token                                                               // 14
  useMeteorAccounts: true,                                                                                   // 15
  // use a BatchingNetworkInterface by default instead of a NetworkInterface                                 // 16
  batchingInterface: true,                                                                                   // 17
  // default batch interval                                                                                  // 18
  batchInterval: 10                                                                                          // 19
}; // create a pre-configured network interface                                                              // 7
                                                                                                             //
var createMeteorNetworkInterface = function () {                                                             // 23
  var customNetworkInterfaceConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // create a new config object based on the default network interface config                                // 24
  // defined above and the custom network interface config passed to this function                           // 25
  var config = (0, _extends3.default)({}, defaultNetworkInterfaceConfig, customNetworkInterfaceConfig); // this will be true true if a BatchingNetworkInterface is meant to be used
  // with a correct poll interval                                                                            // 32
                                                                                                             //
  var useBatchingInterface = config.batchingInterface && typeof config.batchInterval === 'number'; // allow the use of a batching network interface
                                                                                                             //
  var interfaceToUse = useBatchingInterface ? createBatchingNetworkInterface : createNetworkInterface; // http://dev.apollodata.com/core/apollo-client-api.html#NetworkInterfaceOptions
                                                                                                             //
  var interfaceArgument = {                                                                                  // 41
    uri: config.uri,                                                                                         // 42
    opts: config.opts                                                                                        // 43
  }; // http://dev.apollodata.com/core/network.html#BatchingExample                                          // 41
                                                                                                             //
  if (useBatchingInterface) {                                                                                // 47
    interfaceArgument.batchInterval = config.batchInterval;                                                  // 48
  } // configure the (batching?) network interface with the config defined above                             // 49
                                                                                                             //
                                                                                                             //
  var networkInterface = interfaceToUse(interfaceArgument); // handle the creation of a Meteor User Accounts middleware
                                                                                                             //
  if (config.useMeteorAccounts) {                                                                            // 55
    try {                                                                                                    // 56
      var _ref;                                                                                              // 56
                                                                                                             //
      // throw an error if someone tries to specify the login token                                          // 57
      // manually from the client                                                                            // 58
      if (Meteor.isClient && config.loginToken) {                                                            // 59
        throw Error('[Meteor Apollo Integration] The current user is not handled with your GraphQL operations: you are trying to pass a login token to an Apollo Client instance defined client-side. This is only allowed during server-side rendering, please check your implementation.');
      } // dynamic middleware function name depending on the interface used                                  // 63
                                                                                                             //
                                                                                                             //
      var applyMiddlewareFn = useBatchingInterface ? 'applyBatchMiddleware' : 'applyMiddleware'; // add a middleware handling the current user to the network interface
                                                                                                             //
      networkInterface.use([(_ref = {}, _ref[applyMiddlewareFn] = function (request, next) {                 // 69
        // get the login token on a per-request basis                                                        // 72
        var meteorLoginToken = getMeteorLoginToken(config); // no token, meaning no user connected, just go to next possible middleware
                                                                                                             //
        if (!meteorLoginToken) {                                                                             // 76
          next();                                                                                            // 77
        } // create the header object if needed.                                                             // 78
                                                                                                             //
                                                                                                             //
        if (!request.options.headers) {                                                                      // 81
          request.options.headers = {};                                                                      // 82
        } // add the login token to the request headers                                                      // 83
                                                                                                             //
                                                                                                             //
        request.options.headers['meteor-login-token'] = meteorLoginToken; // go to next middleware           // 86
                                                                                                             //
        next();                                                                                              // 89
      }, _ref)]);                                                                                            // 90
    } catch (error) {                                                                                        // 93
      // catch the potential error sent by if a login token is manually set client-side                      // 94
      console.error(error);                                                                                  // 95
    }                                                                                                        // 96
  }                                                                                                          // 97
                                                                                                             //
  return networkInterface;                                                                                   // 99
};                                                                                                           // 100
                                                                                                             //
// default Apollo Client configuration object                                                                // 102
var defaultClientConfig = {                                                                                  // 103
  // setup ssr mode if the client is configured server-side (ex: for SSR)                                    // 104
  ssrMode: Meteor.isServer                                                                                   // 105
}; // create a new client config object based on the default Apollo Client config                            // 103
// defined above and the client config passed to this function                                               // 109
                                                                                                             //
var meteorClientConfig = function () {                                                                       // 110
  var customClientConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};           // 110
  return (0, _extends3.default)({                                                                            // 110
    // default network interface preconfigured, the network interface key is set                             // 111
    // there to so that `createMeteorNetworkInterface` is executed only when                                 // 112
    // `meteorClientConfig` is called.                                                                       // 113
    networkInterface: createMeteorNetworkInterface()                                                         // 114
  }, defaultClientConfig, customClientConfig);                                                               // 110
};                                                                                                           // 110
                                                                                                             //
var getMeteorLoginToken = function () {                                                                      // 120
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};                       // 120
  // possible cookie login token created by meteorhacks:fast-render                                          // 121
  // and passed to the Apollo Client during server-side rendering                                            // 122
  var _config$loginToken = config.loginToken,                                                                // 120
      loginToken = _config$loginToken === undefined ? null : _config$loginToken; // Meteor accounts-base login token stored in local storage,
  // only exists client-side as of Meteor 1.4, will exist with Meteor 1.5                                    // 126
                                                                                                             //
  var localStorageLoginToken = Meteor.isClient && Accounts._storedLoginToken(); // return a meteor login token if existing
  // ex: grabbed from local storage or passed during server-side rendering                                   // 130
                                                                                                             //
                                                                                                             //
  return localStorageLoginToken || loginToken;                                                               // 131
};                                                                                                           // 132
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}}}},{"extensions":[".js",".json"]});
var exports = require("./node_modules/meteor/apollo/src/main-client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.apollo = exports;

})();

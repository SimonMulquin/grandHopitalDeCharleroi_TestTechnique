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
var EJSON = Package.ejson.EJSON;
var WebApp = Package.webapp.WebApp;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"ssrwpo:ssr":{"shared":{"utils":{"peerDependencies.js":["meteor/meteor","meteor/tmeasday:check-npm-versions",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/shared/utils/peerDependencies.js                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var Meteor = void 0;                                                                                                 // 1
module.import("meteor/meteor", {                                                                                     // 1
  "Meteor": function (v) {                                                                                           // 1
    Meteor = v;                                                                                                      // 1
  }                                                                                                                  // 1
}, 0);                                                                                                               // 1
var checkNpmVersions = void 0;                                                                                       // 1
module.import("meteor/tmeasday:check-npm-versions", {                                                                // 1
  "checkNpmVersions": function (v) {                                                                                 // 1
    checkNpmVersions = v;                                                                                            // 1
  }                                                                                                                  // 1
}, 1);                                                                                                               // 1
var sharedPkjs = {                                                                                                   // 4
  'is-retina': '1.x',                                                                                                // 5
  lodash: '4.x',                                                                                                     // 6
  moment: '2.x',                                                                                                     // 7
  react: '15.x',                                                                                                     // 8
  'react-dom': '15.x',                                                                                               // 9
  'react-helmet': '5.x',                                                                                             // 10
  'react-i18next': '2.x',                                                                                            // 11
  'react-redux': '5.x',                                                                                              // 12
  'react-router-dom': '4.x',                                                                                         // 13
  redux: '3.x'                                                                                                       // 14
};                                                                                                                   // 4
                                                                                                                     //
if (Meteor.isClient) {                                                                                               // 17
  checkNpmVersions(sharedPkjs, 'ssrwpo:ssr');                                                                        // 18
}                                                                                                                    // 19
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 20
  checkNpmVersions(Object.assign({}, sharedPkjs, {                                                                   // 21
    actual: '0.x',                                                                                                   // 22
    express: '4.x',                                                                                                  // 23
    helmet: '3.x',                                                                                                   // 24
    i18next: '7.x',                                                                                                  // 25
    'i18next-express-middleware': '1.x',                                                                             // 26
    'i18next-node-remote-backend': '0.x',                                                                            // 27
    'i18next-xhr-backend': '1.x',                                                                                    // 28
    receptacle: '1.x',                                                                                               // 29
    'serialize-javascript': '1.x',                                                                                   // 30
    useragent: '2.x'                                                                                                 // 31
  }), 'ssrwpo:ssr');                                                                                                 // 21
}                                                                                                                    // 33
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"logger.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/shared/utils/logger.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var logger = {                                                                                                       // 1
  debug: function () {},                                                                                             // 1
  info: function () {},                                                                                              // 1
  warn: function () {},                                                                                              // 1
  error: function () {}                                                                                              // 1
};                                                                                                                   // 1
var loggerFct = Object.keys(logger);                                                                                 // 2
                                                                                                                     //
logger.set = function (customLogger) {                                                                               // 3
  return loggerFct.forEach(function (key) {                                                                          // 3
    return logger[key] = customLogger[key].bind(customLogger);                                                       // 4
  });                                                                                                                // 4
};                                                                                                                   // 3
                                                                                                                     //
module.export("default", exports.default = logger);                                                                  // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"actions":{"utils.js":["babel-runtime/helpers/extends",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/shared/actions/utils.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _extends2 = require("babel-runtime/helpers/extends");                                                            //
                                                                                                                     //
var _extends3 = _interopRequireDefault(_extends2);                                                                   //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
module.export({                                                                                                      // 1
  collectionAdd: function () {                                                                                       // 1
    return collectionAdd;                                                                                            // 1
  },                                                                                                                 // 1
  collectionChange: function () {                                                                                    // 1
    return collectionChange;                                                                                         // 1
  },                                                                                                                 // 1
  collectionRemove: function () {                                                                                    // 1
    return collectionRemove;                                                                                         // 1
  },                                                                                                                 // 1
  valueSet: function () {                                                                                            // 1
    return valueSet;                                                                                                 // 1
  },                                                                                                                 // 1
  valueReset: function () {                                                                                          // 1
    return valueReset;                                                                                               // 1
  }                                                                                                                  // 1
});                                                                                                                  // 1
                                                                                                                     //
// Actions on collection stores                                                                                      // 1
var collectionAdd = function (collectionName, id, fields) {                                                          // 2
  return {                                                                                                           // 2
    type: collectionName + ".ADD",                                                                                   // 3
    value: (0, _extends3.default)({                                                                                  // 3
      id: id                                                                                                         // 3
    }, fields)                                                                                                       // 3
  };                                                                                                                 // 3
};                                                                                                                   // 2
                                                                                                                     //
var collectionChange = function (collectionName, id, fields) {                                                       // 4
  return {                                                                                                           // 4
    type: collectionName + ".CHANGE",                                                                                // 5
    value: {                                                                                                         // 5
      id: id,                                                                                                        // 5
      fields: fields                                                                                                 // 5
    }                                                                                                                // 5
  };                                                                                                                 // 5
};                                                                                                                   // 4
                                                                                                                     //
var collectionRemove = function (collectionName, id) {                                                               // 6
  return {                                                                                                           // 6
    type: collectionName + ".REMOVE",                                                                                // 7
    value: {                                                                                                         // 7
      id: id                                                                                                         // 7
    }                                                                                                                // 7
  };                                                                                                                 // 7
}; // Actions on value stores                                                                                        // 6
                                                                                                                     //
                                                                                                                     //
var valueSet = function (storeName, value) {                                                                         // 10
  return {                                                                                                           // 10
    type: storeName + ".SET",                                                                                        // 10
    value: value                                                                                                     // 10
  };                                                                                                                 // 10
};                                                                                                                   // 10
                                                                                                                     //
var valueReset = function (storeName, value) {                                                                       // 11
  return {                                                                                                           // 11
    type: storeName + ".RESET",                                                                                      // 11
    value: value                                                                                                     // 11
  };                                                                                                                 // 11
};                                                                                                                   // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"components":{"BrowserStats.jsx":["babel-runtime/helpers/extends","babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-redux","actual","lodash/debounce","is-retina","../actions/utils",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/shared/components/BrowserStats.jsx                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _extends2 = require("babel-runtime/helpers/extends");                                                            //
                                                                                                                     //
var _extends3 = _interopRequireDefault(_extends2);                                                                   //
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                        //
                                                                                                                     //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                               //
                                                                                                                     //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                          //
                                                                                                                     //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                 //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
var React = void 0,                                                                                                  // 1
    pt = void 0;                                                                                                     // 1
module.import("react", {                                                                                             // 1
  "default": function (v) {                                                                                          // 1
    React = v;                                                                                                       // 1
  },                                                                                                                 // 1
  "PropTypes": function (v) {                                                                                        // 1
    pt = v;                                                                                                          // 1
  }                                                                                                                  // 1
}, 0);                                                                                                               // 1
var connect = void 0;                                                                                                // 1
module.import("react-redux", {                                                                                       // 1
  "connect": function (v) {                                                                                          // 1
    connect = v;                                                                                                     // 1
  }                                                                                                                  // 1
}, 1);                                                                                                               // 1
var actual = void 0;                                                                                                 // 1
module.import("actual", {                                                                                            // 1
  "default": function (v) {                                                                                          // 1
    actual = v;                                                                                                      // 1
  }                                                                                                                  // 1
}, 2);                                                                                                               // 1
var debounce = void 0;                                                                                               // 1
module.import("lodash/debounce", {                                                                                   // 1
  "default": function (v) {                                                                                          // 1
    debounce = v;                                                                                                    // 1
  }                                                                                                                  // 1
}, 3);                                                                                                               // 1
var isRetina = void 0;                                                                                               // 1
module.import("is-retina", {                                                                                         // 1
  "default": function (v) {                                                                                          // 1
    isRetina = v;                                                                                                    // 1
  }                                                                                                                  // 1
}, 4);                                                                                                               // 1
var valueSet = void 0;                                                                                               // 1
module.import("../actions/utils", {                                                                                  // 1
  "valueSet": function (v) {                                                                                         // 1
    valueSet = v;                                                                                                    // 1
  }                                                                                                                  // 1
}, 5);                                                                                                               // 1
                                                                                                                     //
var BrowserStats = function (_React$PureComponent) {                                                                 //
  (0, _inherits3.default)(BrowserStats, _React$PureComponent);                                                       //
                                                                                                                     //
  function BrowserStats(props) {                                                                                     // 11
    (0, _classCallCheck3.default)(this, BrowserStats);                                                               // 11
                                                                                                                     //
    var _this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call(this, props));              // 11
                                                                                                                     //
    _this.debounce = null;                                                                                           // 13
    _this.handleResizeEvent = _this.handleResizeEvent.bind(_this);                                                   // 14
    return _this;                                                                                                    // 11
  }                                                                                                                  // 15
                                                                                                                     //
  BrowserStats.prototype.componentDidMount = function () {                                                           //
    function componentDidMount() {                                                                                   //
      var _props = this.props,                                                                                       // 16
          platform = _props.platform,                                                                                // 16
          fixInitialValue = _props.fixInitialValue,                                                                  // 16
          retinaMinDpi = _props.retinaMinDpi,                                                                        // 16
          mobileBreakpoint = _props.mobileBreakpoint,                                                                // 16
          debounceTimer = _props.debounceTimer;                                                                      // 16
      fixInitialValue(platform, retinaMinDpi, mobileBreakpoint);                                                     // 20
      this.debounce = debounce(this.handleResizeEvent, debounceTimer);                                               // 21
      window.addEventListener('resize', this.handleResizeEvent);                                                     // 22
    }                                                                                                                // 23
                                                                                                                     //
    return componentDidMount;                                                                                        //
  }();                                                                                                               //
                                                                                                                     //
  BrowserStats.prototype.componentWillUnmount = function () {                                                        //
    function componentWillUnmount() {                                                                                //
      this.debounce.cancel();                                                                                        // 25
      window.removeEventListener('resize', this.debounce);                                                           // 26
    }                                                                                                                // 27
                                                                                                                     //
    return componentWillUnmount;                                                                                     //
  }();                                                                                                               //
                                                                                                                     //
  BrowserStats.prototype.handleResizeEvent = function () {                                                           //
    function handleResizeEvent() {                                                                                   //
      var _props2 = this.props,                                                                                      // 28
          handleResizeEvent = _props2.handleResizeEvent,                                                             // 28
          mobileBreakpoint = _props2.mobileBreakpoint;                                                               // 28
      requestAnimationFrame(function () {                                                                            // 30
        return handleResizeEvent(mobileBreakpoint);                                                                  // 30
      });                                                                                                            // 30
    }                                                                                                                // 31
                                                                                                                     //
    return handleResizeEvent;                                                                                        //
  }();                                                                                                               //
                                                                                                                     //
  BrowserStats.prototype.render = function () {                                                                      //
    function render() {                                                                                              //
      return null;                                                                                                   // 33
    }                                                                                                                // 34
                                                                                                                     //
    return render;                                                                                                   //
  }();                                                                                                               //
                                                                                                                     //
  return BrowserStats;                                                                                               //
}(React.PureComponent);                                                                                              //
                                                                                                                     //
BrowserStats.propTypes = {                                                                                           // 36
  platform: pt.string.isRequired,                                                                                    // 37
  fixInitialValue: pt.func.isRequired,                                                                               // 38
  handleResizeEvent: pt.func.isRequired,                                                                             // 39
  retinaMinDpi: pt.number,                                                                                           // 40
  mobileBreakpoint: pt.number,                                                                                       // 41
  debounceTimer: pt.number                                                                                           // 42
};                                                                                                                   // 36
BrowserStats.defaultProps = {                                                                                        // 44
  retinaMinDpi: 144,                                                                                                 // 45
  mobileBreakpoint: 992,                                                                                             // 46
  debounceTimer: 16 * 4                                                                                              // 47
}; // Analysis shared while initilizing the component and resizing window                                            // 44
                                                                                                                     //
var sharedAnalysis = function (mobileBreakpoint) {                                                                   // 51
  var viewportWidth = actual('width', 'px');                                                                         // 52
  return {                                                                                                           // 53
    mobile: viewportWidth <= mobileBreakpoint,                                                                       // 54
    viewportWidth: viewportWidth,                                                                                    // 55
    viewportHeight: actual('height', 'px')                                                                           // 56
  };                                                                                                                 // 53
};                                                                                                                   // 58
                                                                                                                     //
module.export("default", exports.default = connect(function (state) {                                                // 1
  return {                                                                                                           // 61
    platform: state.platform                                                                                         // 61
  };                                                                                                                 // 61
}, function (dispatch) {                                                                                             // 61
  return {                                                                                                           // 62
    fixInitialValue: function (platform, retinaMinDpi, mobileBreakpoint) {                                           // 63
      var conf = (0, _extends3.default)({}, sharedAnalysis(mobileBreakpoint), {                                      // 64
        retina: platform === 'iphone' || platform === 'ipad' || platform === 'safari' ? isRetina() : actual('resolution', 'dpi') >= retinaMinDpi
      });                                                                                                            // 64
      Object.keys(conf).forEach(function (key) {                                                                     // 70
        return dispatch(valueSet(key, conf[key]));                                                                   // 70
      });                                                                                                            // 70
    },                                                                                                               // 71
    handleResizeEvent: function (mobileBreakpoint) {                                                                 // 72
      var conf = sharedAnalysis(mobileBreakpoint);                                                                   // 73
      Object.keys(conf).forEach(function (key) {                                                                     // 74
        return dispatch(valueSet(key, conf[key]));                                                                   // 74
      });                                                                                                            // 74
    }                                                                                                                // 75
  };                                                                                                                 // 62
})(BrowserStats));                                                                                                   // 62
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"index.js":["./BrowserStats",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/shared/components/index.js                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({                                                                                                      // 1
  BrowserStats: function () {                                                                                        // 1
    return BrowserStats;                                                                                             // 1
  }                                                                                                                  // 1
});                                                                                                                  // 1
var BrowserStats = void 0;                                                                                           // 1
module.import("./BrowserStats", {                                                                                    // 1
  "default": function (v) {                                                                                          // 1
    BrowserStats = v;                                                                                                // 1
  }                                                                                                                  // 1
}, 0);                                                                                                               // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"constants":{"index.js":["./url",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/shared/constants/index.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({                                                                                                      // 1
  URL: function () {                                                                                                 // 1
    return URL;                                                                                                      // 1
  },                                                                                                                 // 1
  NOT_FOUND_URL: function () {                                                                                       // 1
    return NOT_FOUND_URL;                                                                                            // 1
  }                                                                                                                  // 1
});                                                                                                                  // 1
var URL = void 0;                                                                                                    // 1
module.import("./url", {                                                                                             // 1
  "default": function (v) {                                                                                          // 1
    URL = v;                                                                                                         // 1
  }                                                                                                                  // 1
}, 0);                                                                                                               // 1
var NOT_FOUND_URL = '/not-found';                                                                                    // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"url.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/shared/constants/url.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var URL = {};                                                                                                        // 1
URL.SET = 'SET_URL';                                                                                                 // 3
module.export("default", exports.default = URL);                                                                     // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"hoc":{"asymetricSsr.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","meteor/meteor","react",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/shared/hoc/asymetricSsr.jsx                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                        //
                                                                                                                     //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                               //
                                                                                                                     //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                          //
                                                                                                                     //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                 //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
var Meteor = void 0;                                                                                                 // 1
module.import("meteor/meteor", {                                                                                     // 1
  "Meteor": function (v) {                                                                                           // 1
    Meteor = v;                                                                                                      // 1
  }                                                                                                                  // 1
}, 0);                                                                                                               // 1
var React = void 0,                                                                                                  // 1
    PureComponent = void 0;                                                                                          // 1
module.import("react", {                                                                                             // 1
  "default": function (v) {                                                                                          // 1
    React = v;                                                                                                       // 1
  },                                                                                                                 // 1
  "PureComponent": function (v) {                                                                                    // 1
    PureComponent = v;                                                                                               // 1
  }                                                                                                                  // 1
}, 1);                                                                                                               // 1
                                                                                                                     //
/* eslint-enable */var NoDisplay = function () {                                                                     // 4
  return null;                                                                                                       // 6
}; // eslint-disable-next-line import/no-mutable-exports                                                             // 6
                                                                                                                     //
                                                                                                                     //
var asymetricSsr = function (Component) {                                                                            // 9
  var ServerComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NoDisplay;               // 9
  return (// eslint-disable-next-line react/prefer-stateless-function                                                // 9
    function (_PureComponent) {                                                                                      // 9
      (0, _inherits3.default)(_class, _PureComponent);                                                               // 9
                                                                                                                     //
      function _class(props) {                                                                                       // 12
        (0, _classCallCheck3.default)(this, _class);                                                                 // 12
                                                                                                                     //
        var _this = (0, _possibleConstructorReturn3.default)(this, _PureComponent.call(this, props));                // 12
                                                                                                                     //
        _this.state = {                                                                                              // 14
          mounted: false                                                                                             // 14
        };                                                                                                           // 14
        return _this;                                                                                                // 12
      }                                                                                                              // 15
                                                                                                                     //
      _class.prototype.componentDidMount = function () {                                                             // 9
        function componentDidMount() {                                                                               // 9
          var _this2 = this;                                                                                         // 16
                                                                                                                     //
          requestAnimationFrame(function () {                                                                        // 17
            return _this2.setState({                                                                                 // 17
              mounted: true                                                                                          // 18
            });                                                                                                      // 18
          });                                                                                                        // 17
        }                                                                                                            // 20
                                                                                                                     //
        return componentDidMount;                                                                                    // 9
      }();                                                                                                           // 9
                                                                                                                     //
      _class.prototype.render = function () {                                                                        // 9
        function render() {                                                                                          // 9
          var mounted = this.state.mounted;                                                                          // 21
          if (mounted) return React.createElement(Component, this.props);                                            // 23
          return React.createElement(ServerComponent, this.props);                                                   // 24
        }                                                                                                            // 25
                                                                                                                     //
        return render;                                                                                               // 9
      }();                                                                                                           // 9
                                                                                                                     //
      return _class;                                                                                                 // 9
    }(PureComponent)                                                                                                 // 9
  );                                                                                                                 // 9
};                                                                                                                   // 9
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 28
  asymetricSsr = function (Component) {                                                                              // 29
    var ServerComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NoDisplay;             // 29
    return ServerComponent;                                                                                          // 29
  };                                                                                                                 // 29
}                                                                                                                    // 30
                                                                                                                     //
module.export("default", exports.default = asymetricSsr);                                                            // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"pure.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","meteor/meteor","react",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/shared/hoc/pure.jsx                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                        //
                                                                                                                     //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                               //
                                                                                                                     //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                          //
                                                                                                                     //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                 //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
var Meteor = void 0;                                                                                                 // 1
module.import("meteor/meteor", {                                                                                     // 1
  "Meteor": function (v) {                                                                                           // 1
    Meteor = v;                                                                                                      // 1
  }                                                                                                                  // 1
}, 0);                                                                                                               // 1
var React = void 0,                                                                                                  // 1
    PureComponent = void 0;                                                                                          // 1
module.import("react", {                                                                                             // 1
  "default": function (v) {                                                                                          // 1
    React = v;                                                                                                       // 1
  },                                                                                                                 // 1
  "PureComponent": function (v) {                                                                                    // 1
    PureComponent = v;                                                                                               // 1
  }                                                                                                                  // 1
}, 1);                                                                                                               // 1
                                                                                                                     //
/* eslint-enable */ // eslint-disable-next-line import/no-mutable-exports                                            // 4
var pure = function (Component) {                                                                                    // 7
  return (// eslint-disable-next-line react/prefer-stateless-function                                                // 7
    function (_PureComponent) {                                                                                      // 7
      (0, _inherits3.default)(_class, _PureComponent);                                                               // 7
                                                                                                                     //
      function _class() {                                                                                            // 7
        (0, _classCallCheck3.default)(this, _class);                                                                 // 7
        return (0, _possibleConstructorReturn3.default)(this, _PureComponent.apply(this, arguments));                // 7
      }                                                                                                              // 7
                                                                                                                     //
      _class.prototype.render = function () {                                                                        // 7
        function render() {                                                                                          // 7
          return React.createElement(Component, this.props);                                                         // 11
        }                                                                                                            // 12
                                                                                                                     //
        return render;                                                                                               // 7
      }();                                                                                                           // 7
                                                                                                                     //
      return _class;                                                                                                 // 7
    }(PureComponent)                                                                                                 // 7
  );                                                                                                                 // 7
};                                                                                                                   // 7
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 15
  pure = function (Component) {                                                                                      // 16
    return Component;                                                                                                // 16
  };                                                                                                                 // 16
}                                                                                                                    // 17
                                                                                                                     //
module.export("default", exports.default = pure);                                                                    // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"reducers":{"index.js":["./utils","./url",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/shared/reducers/index.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({                                                                                                      // 1
  platform: function () {                                                                                            // 1
    return platform;                                                                                                 // 1
  },                                                                                                                 // 1
  buildDate: function () {                                                                                           // 1
    return buildDate;                                                                                                // 1
  },                                                                                                                 // 1
  url: function () {                                                                                                 // 1
    return url;                                                                                                      // 1
  }                                                                                                                  // 1
});                                                                                                                  // 1
var createValueReducer = void 0;                                                                                     // 1
module.import("./utils", {                                                                                           // 1
  "createValueReducer": function (v) {                                                                               // 1
    createValueReducer = v;                                                                                          // 1
  }                                                                                                                  // 1
}, 0);                                                                                                               // 1
var url = void 0;                                                                                                    // 1
module.import("./url", {                                                                                             // 1
  "default": function (v) {                                                                                          // 1
    url = v;                                                                                                         // 1
  }                                                                                                                  // 1
}, 1);                                                                                                               // 1
var platform = createValueReducer('platform', 'default');                                                            // 4
var buildDate = createValueReducer('buildDate', 0);                                                                  // 5
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"optionals.js":["../../shared/reducers/utils",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/shared/reducers/optionals.js                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({                                                                                                      // 1
  retina: function () {                                                                                              // 1
    return retina;                                                                                                   // 1
  },                                                                                                                 // 1
  mobile: function () {                                                                                              // 1
    return mobile;                                                                                                   // 1
  },                                                                                                                 // 1
  viewportWidth: function () {                                                                                       // 1
    return viewportWidth;                                                                                            // 1
  },                                                                                                                 // 1
  viewportHeight: function () {                                                                                      // 1
    return viewportHeight;                                                                                           // 1
  }                                                                                                                  // 1
});                                                                                                                  // 1
var createValueReducer = void 0;                                                                                     // 1
module.import("../../shared/reducers/utils", {                                                                       // 1
  "createValueReducer": function (v) {                                                                               // 1
    createValueReducer = v;                                                                                          // 1
  }                                                                                                                  // 1
}, 0);                                                                                                               // 1
var retina = createValueReducer('retina', false);                                                                    // 3
var mobile = createValueReducer('mobile', false);                                                                    // 4
var viewportWidth = createValueReducer('viewportWidth', 0);                                                          // 5
var viewportHeight = createValueReducer('viewportHeight', 0);                                                        // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"url.js":["../constants",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/shared/reducers/url.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({                                                                                                      // 1
  "default": function () {                                                                                           // 1
    return url;                                                                                                      // 1
  }                                                                                                                  // 1
});                                                                                                                  // 1
var URL = void 0;                                                                                                    // 1
module.import("../constants", {                                                                                      // 1
  "URL": function (v) {                                                                                              // 1
    URL = v;                                                                                                         // 1
  }                                                                                                                  // 1
}, 0);                                                                                                               // 1
var DEFAULT_URL = null;                                                                                              // 3
                                                                                                                     //
function url() {                                                                                                     // 5
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_URL;                       // 5
  var action = arguments[1];                                                                                         // 5
  return action.type === URL.SET ? action.value : state;                                                             // 6
}                                                                                                                    // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"utils.js":["babel-runtime/helpers/toConsumableArray","babel-runtime/helpers/extends",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/shared/reducers/utils.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");                                        //
                                                                                                                     //
var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);                                               //
                                                                                                                     //
var _extends3 = require("babel-runtime/helpers/extends");                                                            //
                                                                                                                     //
var _extends4 = _interopRequireDefault(_extends3);                                                                   //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
module.export({                                                                                                      // 1
  createCollectionReducers: function () {                                                                            // 1
    return createCollectionReducers;                                                                                 // 1
  },                                                                                                                 // 1
  createValueReducer: function () {                                                                                  // 1
    return createValueReducer;                                                                                       // 1
  }                                                                                                                  // 1
});                                                                                                                  // 1
                                                                                                                     //
var createCollectionReducers = function (cursorNames) {                                                              // 2
  return cursorNames.reduce(function (acc, cursorName) {                                                             // 2
    var _extends2;                                                                                                   // 3
                                                                                                                     //
    return (0, _extends4.default)({}, acc, (_extends2 = {}, _extends2[cursorName] = function () {                    // 3
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];                            // 6
      var action = arguments[1];                                                                                     // 6
                                                                                                                     //
      switch (action.type) {                                                                                         // 7
        case cursorName + ".ADD":                                                                                    // 8
          return [].concat((0, _toConsumableArray3.default)(state), [action.value]);                                 // 9
                                                                                                                     //
        case cursorName + ".CHANGE":                                                                                 // 10
          {                                                                                                          // 10
            var idx = state.findIndex(function (item) {                                                              // 11
              return item.id === action.value.id;                                                                    // 11
            });                                                                                                      // 11
            var newItem = (0, _extends4.default)({}, state[idx], action.value.fields);                               // 12
            return [].concat((0, _toConsumableArray3.default)(state.slice(0, idx)), [newItem], (0, _toConsumableArray3.default)(state.slice(idx + 1)));
          }                                                                                                          // 18
                                                                                                                     //
        case cursorName + ".REMOVE":                                                                                 // 19
          {                                                                                                          // 19
            var _idx = state.findIndex(function (item) {                                                             // 20
              return item.id === action.value.id;                                                                    // 20
            });                                                                                                      // 20
                                                                                                                     //
            return [].concat((0, _toConsumableArray3.default)(state.slice(0, _idx)), (0, _toConsumableArray3.default)(state.slice(_idx + 1)));
          }                                                                                                          // 25
                                                                                                                     //
        default:                                                                                                     // 26
          return state;                                                                                              // 26
      }                                                                                                              // 7
    }, _extends2));                                                                                                  // 28
  }, {});                                                                                                            // 3
};                                                                                                                   // 2
                                                                                                                     //
var createValueReducer = function (storeName) {                                                                      // 33
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;                       // 33
  return function () {                                                                                               // 33
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;                    // 34
    var _ref = arguments[1];                                                                                         // 34
    var type = _ref.type,                                                                                            // 34
        value = _ref.value;                                                                                          // 34
                                                                                                                     //
    switch (type) {                                                                                                  // 35
      case storeName + ".SET":                                                                                       // 36
        return value;                                                                                                // 36
                                                                                                                     //
      case storeName + ".RESET":                                                                                     // 37
        return initialState;                                                                                         // 37
                                                                                                                     //
      default:                                                                                                       // 38
        return state;                                                                                                // 38
    }                                                                                                                // 35
  };                                                                                                                 // 40
};                                                                                                                   // 33
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"selectors":{"createHandles.js":["lodash/omit","lodash/isEqual","meteor/meteor","../actions/utils",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/shared/selectors/createHandles.js                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({                                                                                                      // 1
  createHandleSubscribe: function () {                                                                               // 1
    return createHandleSubscribe;                                                                                    // 1
  },                                                                                                                 // 1
  createHandleSyncViaMethod: function () {                                                                           // 1
    return createHandleSyncViaMethod;                                                                                // 1
  }                                                                                                                  // 1
});                                                                                                                  // 1
var omit = void 0;                                                                                                   // 1
module.import("lodash/omit", {                                                                                       // 1
  "default": function (v) {                                                                                          // 1
    omit = v;                                                                                                        // 1
  }                                                                                                                  // 1
}, 0);                                                                                                               // 1
var isEqual = void 0;                                                                                                // 1
module.import("lodash/isEqual", {                                                                                    // 1
  "default": function (v) {                                                                                          // 1
    isEqual = v;                                                                                                     // 1
  }                                                                                                                  // 1
}, 1);                                                                                                               // 1
var Meteor = void 0;                                                                                                 // 1
module.import("meteor/meteor", {                                                                                     // 1
  "Meteor": function (v) {                                                                                           // 1
    Meteor = v;                                                                                                      // 1
  }                                                                                                                  // 1
}, 2);                                                                                                               // 1
var valueSet = void 0,                                                                                               // 1
    collectionAdd = void 0,                                                                                          // 1
    collectionChange = void 0,                                                                                       // 1
    collectionRemove = void 0;                                                                                       // 1
module.import("../actions/utils", {                                                                                  // 1
  "valueSet": function (v) {                                                                                         // 1
    valueSet = v;                                                                                                    // 1
  },                                                                                                                 // 1
  "collectionAdd": function (v) {                                                                                    // 1
    collectionAdd = v;                                                                                               // 1
  },                                                                                                                 // 1
  "collectionChange": function (v) {                                                                                 // 1
    collectionChange = v;                                                                                            // 1
  },                                                                                                                 // 1
  "collectionRemove": function (v) {                                                                                 // 1
    collectionRemove = v;                                                                                            // 1
  }                                                                                                                  // 1
}, 3);                                                                                                               // 1
                                                                                                                     //
var lastModFromStore = function (buildDate, collectionStore) {                                                       // 10
  return collectionStore.reduce(function (acc, item) {                                                               // 10
    return Math.min(acc, item.lastMod);                                                                              // 11
  }, buildDate);                                                                                                     // 11
};                                                                                                                   // 10
                                                                                                                     //
var syncActionsFromStore = function (collectionStoreName, collectionStore, fromRemote) {                             // 13
  var dispatchActions = [];                                                                                          // 14
  collectionStore.forEach(function (storeItem) {                                                                     // 15
    // eslint-disable-next-line no-underscore-dangle                                                                 // 16
    var colItemIdx = fromRemote.findIndex(function (item) {                                                          // 17
      return item._id === storeItem.id;                                                                              // 17
    }); // Item in collection is present in the store, check if its content has changed                              // 17
                                                                                                                     //
    if (colItemIdx !== -1) {                                                                                         // 19
      // Check for updated items                                                                                     // 20
      var colFields = omit(fromRemote[colItemIdx], '_id');                                                           // 21
      var storeFields = omit(storeItem, 'id');                                                                       // 22
                                                                                                                     //
      if (!isEqual(colFields, storeFields)) {                                                                        // 23
        dispatchActions.push(collectionAdd(collectionStoreName, storeItem.id, colFields));                           // 24
      } // Item in the store is no longer present in the collection, remove it                                       // 25
                                                                                                                     //
    } else {                                                                                                         // 27
      // Item is not anymore in the collection and must be removed from store                                        // 28
      dispatchActions.push(collectionRemove(collectionStoreName, storeItem.id));                                     // 29
    }                                                                                                                // 30
  });                                                                                                                // 31
  return dispatchActions;                                                                                            // 32
}; /**                                                                                                               // 33
    * `createHandleSubscribe`                                                                                        //
    * Create an `handleSubscribe` function for your `mapDispatchToProps`.                                            //
    * @param dispatch Store's dispatch.                                                                              //
    * @param publicationName Your publication name which must accept an UNIX date value as `lastMod`.                //
    * @param cursor A cursor on Mongo collection with a `lastMod` set on each item.                                  //
    * @param valueStoreNameForSubscription Name of the value store identifying subscription state.                   //
    * @param collectionStoreName Name of the collection store holding replica of collection.                         //
    * @return A function allowing to subscribe and unsubscribe.                                                      //
    */                                                                                                               //
                                                                                                                     //
var createHandleSubscribe = function (dispatch, publicationName, cursor, valueStoreNameForSubscription, collectionStoreName) {
  return function (context, isSubscribed, buildDate, collectionStore) {                                              // 45
    // Set the store either as subscribe or not                                                                      // 53
    var newState = !isSubscribed;                                                                                    // 54
    dispatch(valueSet(valueStoreNameForSubscription, !isSubscribed));                                                // 55
                                                                                                                     //
    if (newState) {                                                                                                  // 56
      // Find the first appropriate date                                                                             // 57
      var lastMod = lastModFromStore(buildDate, collectionStore); // eslint-disable-next-line no-param-reassign      // 58
                                                                                                                     //
      context.query = null; // Subscribe to collection                                                               // 60
      // eslint-disable-next-line no-param-reassign                                                                  // 62
                                                                                                                     //
      context.sub = Meteor.subscribe(publicationName, {                                                              // 63
        lastMod: lastMod                                                                                             // 65
      }, // Once subscription is ready:                                                                              // 65
      // * Reconciliate data in store with the collection                                                            // 67
      // * Setup an observer on the collection to synschronise the store                                             // 68
      function () {                                                                                                  // 69
        // Reconciliate store with the collection                                                                    // 70
        var fromCollection = cursor.fetch();                                                                         // 71
        var dispatchActions = syncActionsFromStore(collectionStoreName, collectionStore, fromCollection);            // 72
        dispatchActions.forEach(function (action) {                                                                  // 77
          return dispatch(action);                                                                                   // 77
        }); // Setup the observer on the collection                                                                  // 77
        // eslint-disable-next-line no-param-reassign                                                                // 79
                                                                                                                     //
        context.query = cursor.observeChanges({                                                                      // 80
          added: function (id, fields) {                                                                             // 81
            if (fields.lastMod > buildDate) {                                                                        // 82
              var colItemIdx = collectionStore.findIndex(function (item) {                                           // 83
                return item.id === id;                                                                               // 83
              });                                                                                                    // 83
                                                                                                                     //
              if (colItemIdx === -1) {                                                                               // 84
                dispatch(collectionAdd(collectionStoreName, id, fields));                                            // 85
              }                                                                                                      // 86
            }                                                                                                        // 87
          },                                                                                                         // 88
          changed: function (id, fields) {                                                                           // 89
            dispatch(collectionChange(collectionStoreName, id, fields));                                             // 90
          },                                                                                                         // 91
          removed: function (id) {                                                                                   // 92
            dispatch(collectionRemove(collectionStoreName, id));                                                     // 93
          }                                                                                                          // 94
        });                                                                                                          // 80
      }); // Stop cursor observer and unsubscribe                                                                    // 96
    } else {                                                                                                         // 99
      if (context.query) {                                                                                           // 100
        context.query.stop();                                                                                        // 101
      }                                                                                                              // 102
                                                                                                                     //
      context.sub.stop();                                                                                            // 103
    }                                                                                                                // 104
  };                                                                                                                 // 105
}; /**                                                                                                               // 45
    * `createHandleSyncViaMethod`                                                                                    //
    * Create an `handleSyncViaMethod` function for your `mapDispatchToProps`.                                        //
    * @param dispatch Store's dispatch.                                                                              //
    * @param validatedMethod A validated method, promised based                                                      //
    *  (see didericis:callpromise-mixin) that accepts { lastMod } as its params.                                     //
    * @param collectionStoreName Name of the collection store holding replica of collection.                         //
    * @return A function allowing to subscribe and unsubscribe.                                                      //
    */                                                                                                               //
                                                                                                                     //
var createHandleSyncViaMethod = function (dispatch, validatedMethod, collectionStoreName) {                          // 116
  return function (buildDate, collectionStore) {                                                                     // 116
    var lastMod = lastModFromStore(buildDate, collectionStore);                                                      // 121
    return validatedMethod.callPromise({                                                                             // 122
      lastMod: lastMod                                                                                               // 122
    }).then(function (fromMethod) {                                                                                  // 122
      // Reconciliate deletion and update with results from method                                                   // 124
      var dispatchActions = syncActionsFromStore(collectionStoreName, collectionStore, fromMethod); // Add new items get from method
                                                                                                                     //
      fromMethod.forEach(function (methodItem) {                                                                     // 131
        if (methodItem.lastMod > buildDate) {                                                                        // 132
          // eslint-disable-next-line no-underscore-dangle                                                           // 133
          var colItemIdx = collectionStore.findIndex(function (item) {                                               // 134
            return item.id === methodItem._id;                                                                       // 134
          });                                                                                                        // 134
                                                                                                                     //
          if (colItemIdx === -1) {                                                                                   // 135
            dispatchActions.push(collectionAdd(collectionStoreName, // eslint-disable-next-line no-underscore-dangle
            methodItem._id, omit(methodItem, '_id')));                                                               // 139
          }                                                                                                          // 142
        }                                                                                                            // 143
      });                                                                                                            // 144
      dispatchActions.forEach(function (action) {                                                                    // 145
        return dispatch(action);                                                                                     // 145
      });                                                                                                            // 145
    });                                                                                                              // 146
  };                                                                                                                 // 147
};                                                                                                                   // 116
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"client":{"index.js":["../shared/utils/peerDependencies","./createRouter","../shared/utils/logger","../shared/hoc/pure","../shared/hoc/asymetricSsr","../shared/reducers/utils","../shared/actions/utils","../shared/selectors/createHandles","../shared/components",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/client/index.js                                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({                                                                                                      // 1
  createRouter: function () {                                                                                        // 1
    return createRouter;                                                                                             // 1
  },                                                                                                                 // 1
  logger: function () {                                                                                              // 1
    return logger;                                                                                                   // 1
  },                                                                                                                 // 1
  pure: function () {                                                                                                // 1
    return pure;                                                                                                     // 1
  },                                                                                                                 // 1
  asymetricSsr: function () {                                                                                        // 1
    return asymetricSsr;                                                                                             // 1
  },                                                                                                                 // 1
  createCollectionReducers: function () {                                                                            // 1
    return createCollectionReducers;                                                                                 // 1
  },                                                                                                                 // 1
  createValueReducer: function () {                                                                                  // 1
    return createValueReducer;                                                                                       // 1
  },                                                                                                                 // 1
  collectionAdd: function () {                                                                                       // 1
    return collectionAdd;                                                                                            // 1
  },                                                                                                                 // 1
  collectionChange: function () {                                                                                    // 1
    return collectionChange;                                                                                         // 1
  },                                                                                                                 // 1
  collectionRemove: function () {                                                                                    // 1
    return collectionRemove;                                                                                         // 1
  },                                                                                                                 // 1
  valueSet: function () {                                                                                            // 1
    return valueSet;                                                                                                 // 1
  },                                                                                                                 // 1
  valueReset: function () {                                                                                          // 1
    return valueReset;                                                                                               // 1
  },                                                                                                                 // 1
  createHandleSubscribe: function () {                                                                               // 1
    return createHandleSubscribe;                                                                                    // 1
  },                                                                                                                 // 1
  createHandleSyncViaMethod: function () {                                                                           // 1
    return createHandleSyncViaMethod;                                                                                // 1
  },                                                                                                                 // 1
  BrowserStats: function () {                                                                                        // 1
    return BrowserStats;                                                                                             // 1
  },                                                                                                                 // 1
  getStore: function () {                                                                                            // 1
    return getStore;                                                                                                 // 1
  }                                                                                                                  // 1
});                                                                                                                  // 1
module.import("../shared/utils/peerDependencies");                                                                   // 1
var createRouter = void 0,                                                                                           // 1
    getStore = void 0;                                                                                               // 1
module.import("./createRouter", {                                                                                    // 1
  "createRouter": function (v) {                                                                                     // 1
    createRouter = v;                                                                                                // 1
  },                                                                                                                 // 1
  "getStore": function (v) {                                                                                         // 1
    getStore = v;                                                                                                    // 1
  }                                                                                                                  // 1
}, 1);                                                                                                               // 1
var logger = void 0;                                                                                                 // 1
module.import("../shared/utils/logger", {                                                                            // 1
  "default": function (v) {                                                                                          // 1
    logger = v;                                                                                                      // 1
  }                                                                                                                  // 1
}, 2);                                                                                                               // 1
var pure = void 0;                                                                                                   // 1
module.import("../shared/hoc/pure", {                                                                                // 1
  "default": function (v) {                                                                                          // 1
    pure = v;                                                                                                        // 1
  }                                                                                                                  // 1
}, 3);                                                                                                               // 1
var asymetricSsr = void 0;                                                                                           // 1
module.import("../shared/hoc/asymetricSsr", {                                                                        // 1
  "default": function (v) {                                                                                          // 1
    asymetricSsr = v;                                                                                                // 1
  }                                                                                                                  // 1
}, 4);                                                                                                               // 1
var createCollectionReducers = void 0,                                                                               // 1
    createValueReducer = void 0;                                                                                     // 1
module.import("../shared/reducers/utils", {                                                                          // 1
  "createCollectionReducers": function (v) {                                                                         // 1
    createCollectionReducers = v;                                                                                    // 1
  },                                                                                                                 // 1
  "createValueReducer": function (v) {                                                                               // 1
    createValueReducer = v;                                                                                          // 1
  }                                                                                                                  // 1
}, 5);                                                                                                               // 1
var collectionAdd = void 0,                                                                                          // 1
    collectionChange = void 0,                                                                                       // 1
    collectionRemove = void 0,                                                                                       // 1
    valueSet = void 0,                                                                                               // 1
    valueReset = void 0;                                                                                             // 1
module.import("../shared/actions/utils", {                                                                           // 1
  "collectionAdd": function (v) {                                                                                    // 1
    collectionAdd = v;                                                                                               // 1
  },                                                                                                                 // 1
  "collectionChange": function (v) {                                                                                 // 1
    collectionChange = v;                                                                                            // 1
  },                                                                                                                 // 1
  "collectionRemove": function (v) {                                                                                 // 1
    collectionRemove = v;                                                                                            // 1
  },                                                                                                                 // 1
  "valueSet": function (v) {                                                                                         // 1
    valueSet = v;                                                                                                    // 1
  },                                                                                                                 // 1
  "valueReset": function (v) {                                                                                       // 1
    valueReset = v;                                                                                                  // 1
  }                                                                                                                  // 1
}, 6);                                                                                                               // 1
var createHandleSubscribe = void 0,                                                                                  // 1
    createHandleSyncViaMethod = void 0;                                                                              // 1
module.import("../shared/selectors/createHandles", {                                                                 // 1
  "createHandleSubscribe": function (v) {                                                                            // 1
    createHandleSubscribe = v;                                                                                       // 1
  },                                                                                                                 // 1
  "createHandleSyncViaMethod": function (v) {                                                                        // 1
    createHandleSyncViaMethod = v;                                                                                   // 1
  }                                                                                                                  // 1
}, 7);                                                                                                               // 1
var BrowserStats = void 0;                                                                                           // 1
module.import("../shared/components", {                                                                              // 1
  "BrowserStats": function (v) {                                                                                     // 1
    BrowserStats = v;                                                                                                // 1
  }                                                                                                                  // 1
}, 8);                                                                                                               // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"createRouter.jsx":["babel-runtime/helpers/toConsumableArray","babel-runtime/helpers/extends","meteor/meteor","meteor/ejson","react","react-router-dom","react-dom","react-redux","react-i18next","redux","../shared/reducers","../shared/reducers/optionals","../shared/reducers/utils",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ssrwpo_ssr/client/createRouter.jsx                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");                                        //
                                                                                                                     //
var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);                                               //
                                                                                                                     //
var _extends2 = require("babel-runtime/helpers/extends");                                                            //
                                                                                                                     //
var _extends3 = _interopRequireDefault(_extends2);                                                                   //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
module.export({                                                                                                      // 1
  createRouter: function () {                                                                                        // 1
    return createRouter;                                                                                             // 1
  },                                                                                                                 // 1
  getStore: function () {                                                                                            // 1
    return getStore;                                                                                                 // 1
  }                                                                                                                  // 1
});                                                                                                                  // 1
var Meteor = void 0;                                                                                                 // 1
module.import("meteor/meteor", {                                                                                     // 1
  "Meteor": function (v) {                                                                                           // 1
    Meteor = v;                                                                                                      // 1
  }                                                                                                                  // 1
}, 0);                                                                                                               // 1
var EJSON = void 0;                                                                                                  // 1
module.import("meteor/ejson", {                                                                                      // 1
  "EJSON": function (v) {                                                                                            // 1
    EJSON = v;                                                                                                       // 1
  }                                                                                                                  // 1
}, 1);                                                                                                               // 1
var React = void 0;                                                                                                  // 1
module.import("react", {                                                                                             // 1
  "default": function (v) {                                                                                          // 1
    React = v;                                                                                                       // 1
  }                                                                                                                  // 1
}, 2);                                                                                                               // 1
var BrowserRouter = void 0;                                                                                          // 1
module.import("react-router-dom", {                                                                                  // 1
  "BrowserRouter": function (v) {                                                                                    // 1
    BrowserRouter = v;                                                                                               // 1
  }                                                                                                                  // 1
}, 3);                                                                                                               // 1
var render = void 0;                                                                                                 // 1
module.import("react-dom", {                                                                                         // 1
  "render": function (v) {                                                                                           // 1
    render = v;                                                                                                      // 1
  }                                                                                                                  // 1
}, 4);                                                                                                               // 1
var Provider = void 0;                                                                                               // 1
module.import("react-redux", {                                                                                       // 1
  "Provider": function (v) {                                                                                         // 1
    Provider = v;                                                                                                    // 1
  }                                                                                                                  // 1
}, 5);                                                                                                               // 1
var I18nextProvider = void 0;                                                                                        // 1
module.import("react-i18next", {                                                                                     // 1
  "I18nextProvider": function (v) {                                                                                  // 1
    I18nextProvider = v;                                                                                             // 1
  }                                                                                                                  // 1
}, 6);                                                                                                               // 1
var combineReducers = void 0,                                                                                        // 1
    applyMiddleware = void 0,                                                                                        // 1
    createStore = void 0;                                                                                            // 1
module.import("redux", {                                                                                             // 1
  "combineReducers": function (v) {                                                                                  // 1
    combineReducers = v;                                                                                             // 1
  },                                                                                                                 // 1
  "applyMiddleware": function (v) {                                                                                  // 1
    applyMiddleware = v;                                                                                             // 1
  },                                                                                                                 // 1
  "createStore": function (v) {                                                                                      // 1
    createStore = v;                                                                                                 // 1
  }                                                                                                                  // 1
}, 7);                                                                                                               // 1
var packageReducers = void 0;                                                                                        // 1
module.import("../shared/reducers", {                                                                                // 1
  "*": function (v, n) {                                                                                             // 1
    this[n] = v;                                                                                                     // 1
  }.bind(packageReducers = Object.create(null))                                                                      // 1
}, 8);                                                                                                               // 1
var optionalReducers = void 0;                                                                                       // 1
module.import("../shared/reducers/optionals", {                                                                      // 1
  "*": function (v, n) {                                                                                             // 1
    this[n] = v;                                                                                                     // 1
  }.bind(optionalReducers = Object.create(null))                                                                     // 1
}, 9);                                                                                                               // 1
var createCollectionReducers = void 0;                                                                               // 1
module.import("../shared/reducers/utils", {                                                                          // 1
  "createCollectionReducers": function (v) {                                                                         // 1
    createCollectionReducers = v;                                                                                    // 1
  }                                                                                                                  // 1
}, 10);                                                                                                              // 1
// Global client side store                                                                                          // 17
var store = null;                                                                                                    // 18
                                                                                                                     //
var getStore = function () {                                                                                         // 20
  return store;                                                                                                      // 20
};                                                                                                                   // 20
                                                                                                                     //
var createRouter = function (_ref) {                                                                                 // 22
  var MainApp = _ref.MainApp,                                                                                        // 22
      storeSubscription = _ref.storeSubscription,                                                                    // 22
      _ref$appReducers = _ref.appReducers,                                                                           // 22
      appReducers = _ref$appReducers === undefined ? {} : _ref$appReducers,                                          // 22
      _ref$appMiddlewares = _ref.appMiddlewares,                                                                     // 22
      appMiddlewares = _ref$appMiddlewares === undefined ? [] : _ref$appMiddlewares,                                 // 22
      _ref$appCursorNames = _ref.appCursorNames,                                                                     // 22
      appCursorNames = _ref$appCursorNames === undefined ? [] : _ref$appCursorNames,                                 // 22
      i18n = _ref.i18n,                                                                                              // 22
      _ref$hasPlatformTrans = _ref.hasPlatformTransformer,                                                           // 22
      hasPlatformTransformer = _ref$hasPlatformTrans === undefined ? true : _ref$hasPlatformTrans;                   // 22
  return new Promise(function (resolve) {                                                                            // 22
    var cursorReducers = createCollectionReducers(appCursorNames);                                                   // 32
    var allReducers = combineReducers((0, _extends3.default)({}, appReducers, Object.assign(packageReducers, hasPlatformTransformer ? optionalReducers : null), cursorReducers));
    Meteor.startup(function () {                                                                                     // 38
      // Get initial context transmitted as a script                                                                 // 39
      // eslint-disable-next-line no-underscore-dangle                                                               // 40
      var decodedEjsonString = decodeURIComponent(window.__PRELOADED_STATE__);                                       // 41
      var initialState = !decodedEjsonString ? {} : EJSON.parse(decodedEjsonString); // Create store                 // 42
                                                                                                                     //
      store = createStore(allReducers, initialState, applyMiddleware.apply(undefined, (0, _toConsumableArray3.default)(appMiddlewares))); // Set store subscription
                                                                                                                     //
      if (storeSubscription) store.subscribe(function () {                                                           // 50
        return storeSubscription(store);                                                                             // 50
      }); // Get the React root element                                                                              // 50
                                                                                                                     //
      var div = document.getElementById('react');                                                                    // 52
      var app = React.createElement(                                                                                 // 53
        Provider,                                                                                                    // 54
        {                                                                                                            // 54
          store: store                                                                                               // 54
        },                                                                                                           // 54
        React.createElement(                                                                                         // 55
          BrowserRouter,                                                                                             // 55
          null,                                                                                                      // 55
          React.createElement(MainApp, null)                                                                         // 56
        )                                                                                                            // 55
      ); // Init I18n                                                                                                // 54
      // eslint-disable-next-line no-underscore-dangle                                                               // 61
                                                                                                                     //
      var localization = window.__i18n;                                                                              // 62
                                                                                                                     //
      if (localization) {                                                                                            // 63
        var decodedI18n = JSON.parse(localization);                                                                  // 64
        i18n.changeLanguage(decodedI18n.locale);                                                                     // 65
        decodedI18n.namespaces.forEach(function (ns) {                                                               // 66
          return i18n.addResourceBundle(decodedI18n.locale, ns, decodedI18n.resources[ns], true);                    // 66
        });                                                                                                          // 66
        app = React.createElement(                                                                                   // 73
          I18nextProvider,                                                                                           // 73
          {                                                                                                          // 73
            i18n: i18n                                                                                               // 73
          },                                                                                                         // 73
          app                                                                                                        // 73
        );                                                                                                           // 73
      } // Render and start the application                                                                          // 74
                                                                                                                     //
                                                                                                                     //
      render(app, div);                                                                                              // 76
      resolve();                                                                                                     // 77
    });                                                                                                              // 78
  });                                                                                                                // 79
};                                                                                                                   // 22
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}}}},{"extensions":[".js",".json",".jsx"]});
require("./node_modules/meteor/ssrwpo:ssr/shared/utils/peerDependencies.js");
var exports = require("./node_modules/meteor/ssrwpo:ssr/client/index.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ssrwpo:ssr'] = exports;

})();

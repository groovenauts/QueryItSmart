/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactRedux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _App = __webpack_require__(216);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _configureStore = __webpack_require__(438);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	__webpack_require__(449);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _configureStore2.default)();
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_App2.default, null)
	), document.getElementById('root'));

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(217);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-addons-css-transition-group\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _redux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactRedux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _appActions = __webpack_require__(231);
	
	var actions = _interopRequireWildcard(_appActions);
	
	var _lodash = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"lodash\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _SearchImageTop = __webpack_require__(245);
	
	var _SearchImageTop2 = _interopRequireDefault(_SearchImageTop);
	
	var _Circle = __webpack_require__(453);
	
	var _Circle2 = _interopRequireDefault(_Circle);
	
	var _Header = __webpack_require__(426);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _const = __webpack_require__(244);
	
	var _lang = __webpack_require__(425);
	
	var _lang2 = _interopRequireDefault(_lang);
	
	var _reactTapEventPlugin = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-tap-event-plugin\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	(0, _reactTapEventPlugin2.default)();
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.state = {
	      contents: _const.CHANNEL_IMAGES,
	      leave: false
	    };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'onWindowResize',
	    value: function onWindowResize(e) {
	      this.props.actions.resizeWindow(window.innerWidth, window.innerHeight);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.actions.resizeWindow(window.innerWidth, window.innerHeight);
	      window.addEventListener('resize', this.onWindowResize.bind(this));
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(index) {
	      var _this2 = this;
	
	      var contents = this.state.contents;
	      var actions = this.props.actions;
	
	      var id = contents[index].id;
	      this.setState({ leave: true });
	      // For animation of leave
	      setTimeout(function () {
	        actions.selectChannel(index);
	        _this2.setState({ leave: false });
	      }, 1000);
	    }
	  }, {
	    key: 'onMouseOver',
	    value: function onMouseOver(index) {
	      var BASE_INDEX = 100;
	      var contents = this.state.contents;
	
	      var id = contents[index].id;
	      this.setState({
	        contents: _lodash2.default.map(contents, function (content, i) {
	          content.zIndex = BASE_INDEX + i;
	          if (content.id === id) {
	            content.zIndex = BASE_INDEX + _lodash2.default.size(contents);
	          }
	          return content;
	        })
	      });
	    }
	  }, {
	    key: 'renderHeader',
	    value: function renderHeader() {
	      var leave = this.state.leave;
	
	      if (leave) {
	        return null;
	      }
	      return _react2.default.createElement(_Header2.default, {
	        title: _lang2.default.app.title,
	        subtitle: _lang2.default.app.subtitle,
	        style: { color: 'white' } });
	    }
	  }, {
	    key: 'renderContents',
	    value: function renderContents() {
	      var _this3 = this;
	
	      var _state = this.state,
	          contents = _state.contents,
	          leave = _state.leave;
	      var channel = this.props.app.channel;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'content' },
	        _lodash2.default.map(contents, function (image, i) {
	          return _react2.default.createElement(_Circle2.default, {
	            style: { zIndex: image.zIndex },
	            key: 'channel-' + i,
	            imgSrc: image.src,
	            onClick: _this3.onClick.bind(_this3, i),
	            onMouseOver: _this3.onMouseOver.bind(_this3, i),
	            outerClassName: leave ? "is-center leave" : image.className
	          });
	        })
	      );
	    }
	  }, {
	    key: 'renderFooter',
	    value: function renderFooter() {
	      var leave = this.state.leave;
	
	      if (leave) {
	        return null;
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'content-footer' },
	        _react2.default.createElement(
	          'div',
	          { className: 'flex-container', style: { height: 100, fontSize: '50px' } },
	          _react2.default.createElement('div', { className: (0, _classnames2.default)("flex-item"),
	            dangerouslySetInnerHTML: { __html: 'Image' } }),
	          _react2.default.createElement(
	            'div',
	            { className: (0, _classnames2.default)("flex-item") },
	            _react2.default.createElement(
	              'span',
	              null,
	              'Text'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: (0, _classnames2.default)("flex-item") },
	            _react2.default.createElement(
	              'span',
	              null,
	              'Demand forecast'
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var app = this.props.app;
	
	      return _react2.default.createElement(
	        'div',
	        { id: 'container' },
	        app.channel === 0 ? _react2.default.createElement(_SearchImageTop2.default, null) : _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)("container"), style: { backgroundColor: 'black' } },
	          _react2.default.createElement(
	            _reactAddonsCssTransitionGroup2.default,
	            {
	              transitionName: 'fadeinout',
	              transitionAppear: true,
	              transitionAppearTimeout: 500,
	              transitionEnterTimeout: 500,
	              transitionLeaveTimeout: 300 },
	            this.renderHeader()
	          ),
	          this.renderContents(),
	          _react2.default.createElement(
	            _reactAddonsCssTransitionGroup2.default,
	            {
	              transitionName: 'fadeinout',
	              transitionAppear: true,
	              transitionAppearTimeout: 500,
	              transitionEnterTimeout: 500,
	              transitionLeaveTimeout: 300 },
	            this.renderFooter()
	          )
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    app: state.app
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(actions, dispatch)
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.resizeWindow = exports.selectChannel = exports.restart = undefined;
	
	var _index = __webpack_require__(232);
	
	var restart = exports.restart = function restart() {
	  return { type: _index.types.RESTART };
	};
	
	var selectChannel = exports.selectChannel = function selectChannel(index) {
	  return { type: _index.types.SELECT_CHANNEL, index: index };
	};
	
	var resizeWindow = exports.resizeWindow = function resizeWindow(width, height) {
	  return {
	    type: _index.types.RESIZE_WINDOW,
	    width: width,
	    height: height
	  };
	};

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.types = exports.searchImageActions = exports.appActions = undefined;
	
	var _appActions2 = __webpack_require__(231);
	
	var _appActions3 = _interopRequireDefault(_appActions2);
	
	var _searchImageActions2 = __webpack_require__(233);
	
	var _searchImageActions3 = _interopRequireDefault(_searchImageActions2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.appActions = _appActions3.default;
	exports.searchImageActions = _searchImageActions3.default;
	var types = exports.types = {
	  // for root
	  RESIZE_WINDOW: "resize_window",
	  RESTART: "restart",
	  SELECT_CHANNEL: "select_channel",
	  // for search image
	  IMG_LOADED: "img_loaded",
	  IMG_LOAD_ERR: "img_load_err",
	  LOAD_IMAGES: "load_images",
	  SELECT_PRESENT_IMAGE: "select_present_image",
	  SIMILARED_IMAGE: "simlared_image",
	  SELECT_RESULT_IMAGE: "select_result_image",
	  CLOSE_IMAGE_SEARCH: "close_image_search"
	};

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.imgError = exports.imgLoaded = exports.close = exports.selectResultImage = exports.loadImages = exports.selectPresent = undefined;
	
	var _lodash = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"lodash\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _index = __webpack_require__(232);
	
	var _ajax = __webpack_require__(235);
	
	var _const = __webpack_require__(244);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var wrapSelectPresent = function wrapSelectPresent(imageId) {
	  return function (dispatch) {
	    var sql = _const.QUERY.similar.sql({ id: imageId });
	    return (0, _ajax.runQuery)(sql).then(function (res) {
	      dispatch({
	        type: _index.types.SIMILARED_IMAGE,
	        imageId: imageId,
	        results: res
	      });
	    }).catch(function (err) {
	      console.log("Error", err);
	    });
	  };
	};
	
	var selectPresent = exports.selectPresent = function selectPresent(imageId) {
	  return function (dispatch) {
	    dispatch({
	      type: _index.types.SELECT_PRESENT_IMAGE,
	      imageId: imageId
	    });
	    return dispatch(wrapSelectPresent(imageId));
	  };
	};
	
	var wraploadImages = function wraploadImages() {
	  return function (dispatch) {
	    return (0, _ajax.runQuery)(_const.QUERY.load.sql).then(function (res) {
	      dispatch({
	        type: _index.types.LOAD_IMAGES,
	        images: res
	      });
	    }).catch(function (err) {
	      console.log("Error", err);
	    });
	  };
	};
	
	var loadImages = exports.loadImages = function loadImages() {
	  return function (dispatch) {
	    return dispatch(wraploadImages());
	  };
	};
	
	var selectResultImage = exports.selectResultImage = function selectResultImage(imageId) {
	  return { type: _index.types.SELECT_RESULT_IMAGE, imageId: imageId };
	};
	
	var close = exports.close = function close() {
	  return { type: _index.types.CLOSE_IMAGE_SEARCH };
	};
	
	var imgLoaded = exports.imgLoaded = function imgLoaded(id) {
	  return { type: _index.types.IMG_LOADED, id: id };
	};
	
	var imgError = exports.imgError = function imgError(id) {
	  return { type: _index.types.IMG_LOAD_ERR, id: id };
	};

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runQuery = runQuery;
	
	var _superagent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"superagent\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function runQuery(sqlQuery) {
	  return new Promise(function (resolve, reject) {
	    _superagent2.default.post("/query").send({
	      options: {
	        query: sqlQuery,
	        autoPaginate: false,
	        useQueryCache: false,
	        useLegacySql: false,
	        timeoutMs: 600000
	      }
	    }).timeout(600000).end(function (err, response) {
	      if (err) {
	        reject(err);
	      } else {
	        resolve(response.body);
	      }
	    });
	  });
	}

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PRESENT_IMAGES = exports.CHANNEL_IMAGES = exports.IMG_SIZE = exports.THUMBNAIL_SIZE = exports.CONTENT_CLASSES = exports.PRESENT_NUM = exports.THUMBNAIL_PATH = exports.QUERY = undefined;
	
	var _lodash = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"lodash\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var QUERY = exports.QUERY = {
	  load: {
	    sql: "SELECT key, original_url, rand() as rand FROM `wikimedia.image_vectors` ORDER BY rand LIMIT 70"
	  },
	  similar: {
	    sql: _lodash2.default.template('#standardSQL\n            CREATE TEMPORARY FUNCTION distance(v1 ARRAY<FLOAT64>, v2 ARRAY<FLOAT64>)\n            RETURNS FLOAT64\n            LANGUAGE js AS """\n              var dist = 0.0\n              for (var i=0; i < v1.length; i++) {\n                dist += (v1[i] - v2[i])**2\n              }\n              return Math.sqrt(dist);\n            """;\n            SELECT a.key, distance(a.vector, b.vector) as dist, original_url\n            FROM\n            (SELECT key, vector, original_url FROM `wikimedia.image_vectors`) as a\n            cross join\n            (SELECT vector FROM `wikimedia.image_vectors_1` where key = "<%= id %>") as b\n            ORDER BY dist asc\n            LIMIT 50')
	  }
	};
	
	var THUMBNAIL_PATH = exports.THUMBNAIL_PATH = _lodash2.default.template('https://storage.googleapis.com/queryit_smart/wikimedia/images/${id}.jpg');
	
	var PRESENT_NUM = exports.PRESENT_NUM = 3;
	var CONTENT_CLASSES = exports.CONTENT_CLASSES = ["is-left hover-left", "is-center hover-center", "is-right hover-right"];
	
	var THUMBNAIL_SIZE = exports.THUMBNAIL_SIZE = 60,
	    IMG_SIZE = exports.IMG_SIZE = 240,
	    CHANNEL_IMAGES = exports.CHANNEL_IMAGES = [{ id: "image", name: "Image", src: './images/image.jpg', className: CONTENT_CLASSES[0] }, { id: "text", name: "Text", src: './images/text.jpg', className: CONTENT_CLASSES[1] }, { id: "map", name: "Demand forecast", src: './images/map.jpg', className: CONTENT_CLASSES[2] }],
	    PRESENT_IMAGES = exports.PRESENT_IMAGES = [{ id: "10000086", src: "./images/10000086.jpg", name: "JELLYFISH" }, { id: "00000359", src: "./images/00000359.jpg", name: "BEE" }, { id: "00000595", src: "./images/00000595.jpg", name: "F1" }, { id: "00000615", src: "./images/00000615.jpg", name: "FIREWORKS" }, { id: "00000895", src: "./images/00000895.jpg", name: "BIRD" }, { id: "00001410", src: "./images/00001410.jpg", name: "CHARACTOR" }, { id: "00001435", src: "./images/00001435.jpg", name: "ILLUSTRATION" }, { id: "00001628", src: "./images/00001628.jpg", name: "SUNSET" }, { id: "00002269", src: "./images/00002269.jpg", name: "SIGN" }, { id: "00004509", src: "./images/00004509.jpg", name: "TYPHOON" }, { id: "00005020", src: "./images/00005020.jpg", name: "FISH" }, { id: "00005318", src: "./images/00005318.jpg", name: "ISLAND" }, { id: "00005332", src: "./images/00005332.jpg", name: "SUN FLOWER" }, { id: "00005558", src: "./images/00005558.jpg", name: "LEGO BLOCK" }, { id: "00005572", src: "./images/00005572.jpg", name: "CAR" }, { id: "00005779", src: "./images/00005779.jpg", name: "ELEPHANT" }, { id: "00005867", src: "./images/00005867.jpg", name: "OWL" }, { id: "00005986", src: "./images/00005986.jpg", name: "SWAN" }, { id: "00006141", src: "./images/00006141.jpg", name: "PICTURE" }, { id: "00006205", src: "./images/00006205.jpg", name: "GRAPH" }, { id: "00006322", src: "./images/00006322.jpg", name: "BUTTERFLY" }, { id: "00006562", src: "./images/00006562.jpg", name: "BALLOON" }, { id: "00006604", src: "./images/00006604.jpg", name: "HORSE" }, { id: "00006646", src: "./images/00006646.jpg", name: "MOON" }, { id: "00006906", src: "./images/00006906.jpg", name: "DESERT" }, { id: "00006935", src: "./images/00006935.jpg", name: "CAT" }, { id: "00008742", src: "./images/00008742.jpg", name: "DRAGONFLY" }, { id: "00008782", src: "./images/00008782.jpg", name: "LUXURY LINER" }, { id: "00009400", src: "./images/00009400.jpg", name: "CLUCULATOR" }, { id: "10000086", src: "./images/10000086.jpg", name: "JELLYFISH" }];

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(217);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-addons-css-transition-group\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _MuiThemeProvider = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"material-ui/styles/MuiThemeProvider\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _Slider = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"material-ui/Slider\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _redux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _searchImageActions = __webpack_require__(233);
	
	var actions = _interopRequireWildcard(_searchImageActions);
	
	var _reactRedux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _thema = __webpack_require__(429);
	
	var _const = __webpack_require__(244);
	
	var _Header = __webpack_require__(426);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Background = __webpack_require__(394);
	
	var _Background2 = _interopRequireDefault(_Background);
	
	var _Query = __webpack_require__(428);
	
	var _Query2 = _interopRequireDefault(_Query);
	
	var _Restart = __webpack_require__(430);
	
	var _Restart2 = _interopRequireDefault(_Restart);
	
	var _Close = __webpack_require__(432);
	
	var _Close2 = _interopRequireDefault(_Close);
	
	var _lang = __webpack_require__(425);
	
	var _lang2 = _interopRequireDefault(_lang);
	
	var _Circle = __webpack_require__(453);
	
	var _Circle2 = _interopRequireDefault(_Circle);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SearchImageTop = function (_Component) {
	  _inherits(SearchImageTop, _Component);
	
	  function SearchImageTop(props) {
	    _classCallCheck(this, SearchImageTop);
	
	    var _this = _possibleConstructorReturn(this, (SearchImageTop.__proto__ || Object.getPrototypeOf(SearchImageTop)).call(this, props));
	
	    _initialiseProps.call(_this);
	
	    var contents = _.sampleSize(_const.PRESENT_IMAGES, _const.PRESENT_NUM);
	    _this.state = {
	      contents: _.map(contents, function (content, i) {
	        content.className = _const.CONTENT_CLASSES[i];
	        return content;
	      }),
	      leave: false,
	      start: null,
	      elapsed: 0,
	      justAnalyzed: false
	    };
	    return _this;
	  }
	
	  _createClass(SearchImageTop, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // Just finished analysis
	      if (this.props.searchImage.analyzing && !nextProps.searchImage.analyzing) {
	        if (this.timer) {
	          clearInterval(this.timer);
	        }
	        this.setState({ justAnalyzed: true });
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      var _this2 = this;
	
	      // Just finished analysis
	      if (!this.props.searchImage.analyzing && prevProps.searchImage.analyzing) {
	        setTimeout(function () {
	          _this2.setState({ justAnalyzed: false });
	        }, 5000);
	      }
	    }
	  }, {
	    key: 'onSelectPresent',
	    value: function onSelectPresent(imageId, e) {
	      var actions = this.props.actions;
	
	      this.setState({ start: new Date() });
	      this.timer = setInterval(this.tick.bind(this), 50);
	      actions.selectPresent(imageId);
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(index) {
	      var _this3 = this;
	
	      var contents = this.state.contents;
	      var actions = this.props.actions;
	
	      var id = contents[index].id;
	      this.setState({ leave: true });
	
	      // For animation of leave
	      setTimeout(function () {
	        actions.selectPresent(contents[index].id);
	        _this3.setState({ start: new Date() });
	        _this3.timer = setInterval(_this3.tick.bind(_this3), 50);
	      }, 1000);
	    }
	  }, {
	    key: 'onMouseOver',
	    value: function onMouseOver(index) {
	      var BASE_INDEX = 100;
	      var contents = this.state.contents;
	
	      var id = contents[index].id;
	      this.setState({
	        contents: _.map(contents, function (content, i) {
	          content.zIndex = BASE_INDEX + i;
	          if (content.id === id) {
	            content.zIndex = BASE_INDEX + _.size(contents);
	          }
	          return content;
	        })
	      });
	    }
	  }, {
	    key: 'onClickResult',
	    value: function onClickResult() {
	      this.setState({ leave: false });
	      this.props.actions.close();
	    }
	  }, {
	    key: 'onImgLoaded',
	    value: function onImgLoaded(id, e) {
	      this.props.actions.imgLoaded(id);
	    }
	  }, {
	    key: 'onImgError',
	    value: function onImgError(id, e) {
	      this.props.actions.imgError(id);
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {
	      this.setState({ elapsed: new Date() - this.state.start });
	    }
	  }, {
	    key: 'elapsed',
	    value: function elapsed() {
	      var elapsed = Math.round(this.state.elapsed / 100);
	      return (elapsed / 10).toFixed(1);
	    }
	  }, {
	    key: 'renderContent',
	    value: function renderContent(imageId, images) {
	      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
	
	      var image = _.find(images, function (image) {
	        return image.key === imageId;
	      });
	      return _react2.default.createElement(_Circle2.default, {
	        imgSrc: (0, _const.THUMBNAIL_PATH)({ id: imageId }),
	        handler: callback,
	        outerClassName: 'is-center',
	        imgClassName: 'large border-bold'
	      });
	    }
	  }, {
	    key: 'imageName',
	    value: function imageName(imageId) {
	      return _.reduce(_const.PRESENT_IMAGES, function (acc, image) {
	        if (image.id === imageId) {
	          acc = image.name;
	        }
	        return acc;
	      }, "");
	    }
	  }, {
	    key: 'renderFooter',
	    value: function renderFooter() {
	      var _props$searchImage = this.props.searchImage,
	          resultImages = _props$searchImage.resultImages,
	          resultId = _props$searchImage.resultId;
	
	      if (!resultId) {
	        return null;
	      }
	      var index = _.findIndex(resultImages, function (image) {
	        return image.key === resultId;
	      }) || 0;
	      var rate = (index + 1) / _.size(resultImages) * 100;
	      return _react2.default.createElement(
	        'div',
	        { className: 'content-footer', style: { 'height': 200 } },
	        _react2.default.createElement(
	          'div',
	          { className: 'flex-container' },
	          _react2.default.createElement(
	            'div',
	            { className: (0, _classnames2.default)("flex-item") },
	            _react2.default.createElement(
	              'span',
	              null,
	              'Near'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: (0, _classnames2.default)("flex-item") },
	            _react2.default.createElement(_Slider2.default, {
	              min: 0,
	              max: 100,
	              value: rate,
	              style: {
	                width: 500
	              } })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: (0, _classnames2.default)("flex-item") },
	            _react2.default.createElement(
	              'span',
	              null,
	              'Far'
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderHeader',
	    value: function renderHeader() {
	      var justAnalyzed = this.state.justAnalyzed;
	      var _props$searchImage2 = this.props.searchImage,
	          resultId = _props$searchImage2.resultId,
	          analyzeId = _props$searchImage2.analyzeId,
	          analyzing = _props$searchImage2.analyzing;
	
	      if (resultId) {
	        return _react2.default.createElement(_Header2.default, { title: this.imageName(analyzeId) });
	      } else if (analyzeId) {
	        if (analyzing) {
	          return _react2.default.createElement(_Header2.default, {
	            title: '' + _lang2.default.searchImage.analyzing.title,
	            subtitle: _.template(_lang2.default.searchImage.analyzing.subtitle)({ time: this.elapsed() })
	          });
	        } else if (justAnalyzed) {
	          return _react2.default.createElement(_Header2.default, {
	            title: '' + _lang2.default.searchImage.analyzed.title,
	            subtitle: _.template(_lang2.default.searchImage.analyzed.subtitle)({ time: this.elapsed() })
	          });
	        }
	      } else {
	        return _react2.default.createElement(_Header2.default, {
	          title: _lang2.default.searchImage.select.title,
	          subtitle: _lang2.default.searchImage.select.subtitle });
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          app = _props.app,
	          searchImage = _props.searchImage;
	      var resultId = searchImage.resultId,
	          analyzing = searchImage.analyzing,
	          analyzeId = searchImage.analyzeId,
	          images = searchImage.images,
	          resultImages = searchImage.resultImages;
	
	      return _react2.default.createElement(
	        _MuiThemeProvider2.default,
	        { muiTheme: _thema.darkTheme },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)("container", "center-gradation-blue") },
	          _react2.default.createElement(
	            _reactAddonsCssTransitionGroup2.default,
	            {
	              transitionName: 'fadeinout',
	              transitionAppear: true,
	              transitionAppearTimeout: 500,
	              transitionEnterTimeout: 500,
	              transitionLeaveTimeout: 300 },
	            this.renderHeader()
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'content' },
	            resultId ? this.renderContent(resultId, resultImages, this.onClickResult.bind(this)) : analyzeId ? this.renderContent(analyzeId, _const.PRESENT_IMAGES) : this.renderContents()
	          ),
	          this.renderFooter(),
	          _react2.default.createElement(_Background2.default, null),
	          resultId ? _react2.default.createElement(_Close2.default, { className: 'hover' }) : !analyzing ? _react2.default.createElement(_Restart2.default, { className: 'hover' }) : null,
	          analyzing ? _react2.default.createElement(_Query2.default, { text: _const.QUERY.similar.sql({ id: analyzeId }) }) : null
	        )
	      );
	    }
	  }]);
	
	  return SearchImageTop;
	}(_react.Component);
	
	var _initialiseProps = function _initialiseProps() {
	  var _this4 = this;
	
	  this.renderContents = function () {
	    var _state = _this4.state,
	        contents = _state.contents,
	        leave = _state.leave;
	    var _props$searchImage3 = _this4.props.searchImage,
	        resultId = _props$searchImage3.resultId,
	        loadedImageIds = _props$searchImage3.loadedImageIds;
	    // const loaded = _.size(loadedImageIds) === _.size(contents)
	    // outerClassName={ leave ? "is-center leave":`${image.className} ${loaded ? "":"bg-clear"}` }
	
	    return _.map(contents, function (image, i) {
	      return _react2.default.createElement(_Circle2.default, {
	        key: 'select-' + i,
	        imgSrc: image.src,
	        onLoad: _this4.onImgLoaded.bind(_this4, image.id),
	        onError: _this4.onImgError.bind(_this4, image.id),
	        onClick: _this4.onClick.bind(_this4, i),
	        onMouseOver: _this4.onMouseOver.bind(_this4, i),
	        outerClassName: leave ? "is-center leave" : '' + image.className
	      });
	    });
	  };
	};
	
	var stateToProps = function stateToProps(state) {
	  return {
	    searchImage: state.searchImage
	  };
	};
	
	var dispatchToProps = function dispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(actions, dispatch)
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(SearchImageTop);

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(217);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _redux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactRedux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _gsap = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"gsap\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactGsapEnhancer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-gsap-enhancer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactGsapEnhancer2 = _interopRequireDefault(_reactGsapEnhancer);
	
	var _searchImageActions = __webpack_require__(233);
	
	var actions = _interopRequireWildcard(_searchImageActions);
	
	var _const = __webpack_require__(244);
	
	var _utils = __webpack_require__(403);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Background = function (_Component) {
	  _inherits(Background, _Component);
	
	  function Background() {
	    _classCallCheck(this, Background);
	
	    return _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).apply(this, arguments));
	  }
	
	  _createClass(Background, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var actions = this.props.actions;
	
	      actions.loadImages();
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return nextProps.searchImage.resultId && !this.props.searchImage.resultId || !nextProps.searchImage.resultId && this.props.searchImage.resultId || nextProps.searchImage.analyzing !== this.props.searchImage.analyzing || nextProps.searchImage.analyzeId !== this.props.searchImage.analyzeId || _.size(nextProps.searchImage.images) !== _.size(this.props.searchImage.images) || _.size(nextProps.searchImage.resultImages) !== _.size(this.props.searchImage.resultImages);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (_.size(this.props.searchImage.images) > _.size(prevProps.searchImage.images) || _.size(this.props.searchImage.resultImages) > _.size(prevProps.searchImage.resultImages)) {
	        this.addAnimation(this.moveAnimation);
	      }
	    }
	  }, {
	    key: 'onClickImage',
	    value: function onClickImage(imageId, e) {
	      var actions = this.props.actions;
	
	      actions.selectResultImage(imageId);
	    }
	  }, {
	    key: 'moveAnimation',
	    value: function moveAnimation(_ref) {
	      var target = _ref.target;
	
	      var elements = target.findAll({ name: 'circle' });
	      this.tl = new _gsap.TimelineMax({
	        repeat: -1,
	        yoyo: true
	      });
	      var anims = _.map(elements, function (element) {
	        return _gsap.TweenLite.fromTo(element, 60, {
	          x: _.random(-70, 70),
	          y: _.random(-70, 70),
	          rotation: _.random(-30, 30),
	          yoyo: true
	        }, {
	          x: _.random(-120, 120),
	          y: _.random(-120, 180),
	          rotation: _.random(-60, 90)
	        });
	      });
	      this.tl.add(anims);
	      return this.tl;
	    }
	  }, {
	    key: 'renderRandomImages',
	    value: function renderRandomImages() {
	      var _props = this.props,
	          app = _props.app,
	          searchImage = _props.searchImage;
	      var width = app.width,
	          height = app.height;
	      var analyzeId = searchImage.analyzeId,
	          resultId = searchImage.resultId,
	          images = searchImage.images;
	
	
	      return _.map(images, function (image, i) {
	        var offset = _.random(-19, 80);
	        var size = _const.THUMBNAIL_SIZE + offset; // min: 41, max: 140
	        var rate = size - 40; // 1 - 100
	        var opacity = rate / 100 / 2.5;
	
	        var _randomCoordinate = (0, _utils.randomCoordinate)(width - size, height - size),
	            x = _randomCoordinate.x,
	            y = _randomCoordinate.y;
	
	        return _react2.default.createElement(
	          'div',
	          { name: 'circle', key: 'present' + i, className: (0, _classnames2.default)("circle", "thumbnail"),
	            style: {
	              zIndex: i,
	              position: 'absolute',
	              top: y,
	              left: x,
	              height: size,
	              width: size,
	              lineHeight: size + 'px',
	              backgroundColor: 'rgba(48, 35, 174, 0.3)',
	              cursor: 'default'
	            } },
	          _react2.default.createElement('img', {
	            src: (0, _const.THUMBNAIL_PATH)({ id: image.key }),
	            style: {
	              height: size,
	              width: size,
	              margin: 0,
	              opacity: opacity
	            } })
	        );
	      });
	    }
	  }, {
	    key: 'renderResultImages',
	    value: function renderResultImages() {
	      var _this2 = this;
	
	      var _props2 = this.props,
	          app = _props2.app,
	          searchImage = _props2.searchImage;
	      var width = app.width,
	          height = app.height;
	      var analyzing = searchImage.analyzing,
	          analyzeId = searchImage.analyzeId,
	          resultImages = searchImage.resultImages;
	
	      if (analyzing || !analyzeId) {
	        return null;
	      }
	      return _.map(resultImages, function (image, i) {
	        return _react2.default.createElement(
	          'div',
	          { name: 'circle', key: 'result' + i,
	            className: (0, _classnames2.default)("circle", "thumbnail"),
	            onClick: _this2.onClickImage.bind(_this2, image.key),
	            style: {
	              zIndex: i,
	              position: 'absolute',
	              top: image.y,
	              left: image.x,
	              height: image.size,
	              width: image.size,
	              opacity: image.opacity,
	              lineHeight: image.size + 'px'
	            } },
	          _react2.default.createElement('img', {
	            className: 'hover',
	            src: (0, _const.THUMBNAIL_PATH)({ id: image.key }),
	            style: {
	              height: image.size,
	              width: image.size,
	              margin: 0
	            } })
	        );
	      });
	    }
	  }, {
	    key: 'renderPulsate',
	    value: function renderPulsate() {
	      var style = {
	        height: _const.THUMBNAIL_SIZE,
	        width: _const.THUMBNAIL_SIZE
	      };
	      return _react2.default.createElement(
	        'div',
	        { className: 'pulse' },
	        _react2.default.createElement('div', { className: 'is-center', style: style }),
	        _react2.default.createElement('div', { className: 'is-center', style: style }),
	        _react2.default.createElement('div', { className: 'is-center', style: style })
	      );
	    }
	  }, {
	    key: 'renderLayer',
	    value: function renderLayer() {
	      return _react2.default.createElement('div', { className: 'container',
	        style: {
	          backgroundColor: 'rgba(26, 35, 126, 0.9)'
	        } });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props$searchImage = this.props.searchImage,
	          analyzing = _props$searchImage.analyzing,
	          analyzeId = _props$searchImage.analyzeId,
	          resultId = _props$searchImage.resultId;
	
	      return _react2.default.createElement(
	        'div',
	        { className: resultId ? "blur" : "" },
	        analyzing ? this.renderPulsate() : analyzeId || resultId ? this.renderResultImages() : this.renderRandomImages(),
	        resultId ? this.renderLayer() : null
	      );
	    }
	  }]);
	
	  return Background;
	}(_react.Component);
	
	var stateToProps = function stateToProps(state) {
	  return {
	    app: state.app,
	    searchImage: state.searchImage
	  };
	};
	
	var dispatchToProps = function dispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(actions, dispatch)
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)((0, _reactGsapEnhancer2.default)()(Background));

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coordinate = __webpack_require__(404);
	
	Object.keys(_coordinate).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _coordinate[key];
	    }
	  });
	});

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.coordinateDistanceAndDegree = exports.convertCoordinate = undefined;
	exports.randomCoordinate = randomCoordinate;
	
	var _lodash = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"lodash\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function randomCoordinate(maxX, maxY) {
	  return {
	    x: _lodash2.default.random(maxX),
	    y: _lodash2.default.random(maxY)
	  };
	}
	
	var convertCoordinate = exports.convertCoordinate = function convertCoordinate(distance) {
	  return distance;
	};
	
	var coordinateDistanceAndDegree = exports.coordinateDistanceAndDegree = function coordinateDistanceAndDegree(distance, degree) {
	  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	  var _window = {
	    width: window.innerWidth || document.documentElement.clientWidth || 0,
	    height: window.innerHeight || document.documentElement.clientHeight || 0
	  };
	  var centerWidth = _window.width / 2;
	  var centerHeight = _window.height / 2;
	  var radian = degreesToRadians(degree);
	  return {
	    x: centerWidth + Math.cos(radian) * (distance + offset),
	    y: centerHeight + Math.sin(radian) * (distance + offset)
	  };
	};
	
	function degreesToRadians(degrees) {
	  return degrees * Math.PI / 180;
	}

/***/ },

/***/ 425:
/***/ function(module, exports) {

	module.exports = {
		"app": {
			"title": "QueryIt Smart",
			"subtitle": "What kind of data you like to search?"
		},
		"searchImage": {
			"select": {
				"title": "Image",
				"subtitle": "There are more than a million images here.\nWhen you click on the image you like.\nAI will analyze and find a similar one from million images."
			},
			"analyzing": {
				"title": "Analyzing...",
				"subtitle": "1 million images / ${time} sec"
			},
			"analyzed": {
				"title": "Finished!",
				"subtitle": "1 million images over ${time} seconds"
			},
			"detail": {
				"title": "",
				"utit1": "Near",
				"utit2": "Far"
			}
		}
	};

/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(217);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Slider = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"material-ui/Slider\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _redux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactRedux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = function (_Component) {
	  _inherits(Header, _Component);
	
	  function Header() {
	    _classCallCheck(this, Header);
	
	    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	  }
	
	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          title = _props.title,
	          subtitle = _props.subtitle,
	          style = _props.style;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'content-header', style: style },
	        _react2.default.createElement(
	          'p',
	          { className: 'title' },
	          title
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          subtitle
	        )
	      );
	    }
	  }]);
	
	  return Header;
	}(_react.Component);
	
	exports.default = Header;

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(217);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Query = function (_Component) {
	  _inherits(Query, _Component);
	
	  function Query() {
	    _classCallCheck(this, Query);
	
	    return _possibleConstructorReturn(this, (Query.__proto__ || Object.getPrototypeOf(Query)).apply(this, arguments));
	  }
	
	  _createClass(Query, [{
	    key: 'render',
	    value: function render() {
	      var text = this.props.text;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'box-marquee' },
	        _react2.default.createElement(
	          'pre',
	          null,
	          text
	        )
	      );
	    }
	  }]);
	
	  return Query;
	}(_react.Component);
	
	exports.default = Query;

/***/ },

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.darkTheme = undefined;
	
	var _getMuiTheme = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"material-ui/styles/getMuiTheme\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _colors = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"material-ui/styles/colors\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var darkTheme = exports.darkTheme = (0, _getMuiTheme2.default)({
	  slider: {
	    trackSize: 3,
	    trackColor: _colors.white,
	    trackColorSelected: _colors.white,
	    handleSize: 30,
	    handleSizeDisabled: 30,
	    handleSizeActive: 30,
	    handleColorZero: _colors.white,
	    handleFillColor: _colors.white,
	    selectionColor: _colors.white,
	    rippleColor: 'rgba(255, 255, 255, 0.0)'
	  }
	});

/***/ },

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(217);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _redux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactRedux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _appActions = __webpack_require__(231);
	
	var actions = _interopRequireWildcard(_appActions);
	
	var _Button = __webpack_require__(431);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Restart = function (_Component) {
	  _inherits(Restart, _Component);
	
	  function Restart() {
	    _classCallCheck(this, Restart);
	
	    return _possibleConstructorReturn(this, (Restart.__proto__ || Object.getPrototypeOf(Restart)).apply(this, arguments));
	  }
	
	  _createClass(Restart, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      this.props.actions.restart();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Button2.default, {
	        label: 'Restart',
	        handler: this.onClick.bind(this)
	      });
	    }
	  }]);
	
	  return Restart;
	}(_react.Component);
	
	var stateToProps = function stateToProps(state) {
	  return {
	    app: state.app
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(actions, dispatch)
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(stateToProps, mapDispatchToProps)(Restart);

/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(217);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lodash = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"lodash\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Button = function (_Component) {
	  _inherits(Button, _Component);
	
	  function Button() {
	    _classCallCheck(this, Button);
	
	    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	  }
	
	  _createClass(Button, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          label = _props.label,
	          style = _props.style,
	          handler = _props.handler;
	
	      var defaultStyle = {
	        zIndex: 1000,
	        position: 'absolute',
	        backgroundColor: 'white',
	        height: 100,
	        width: 100,
	        bottom: 60,
	        right: 60,
	        fontSize: '26px',
	        lineHeight: '100px',
	        color: '#3023ae',
	        boxShadow: '0px 0px 0px 8px #3023ae, 0px 0px 0px 18px white',
	        transition: 'show 1.5s linear'
	      };
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)("circle", "hover-lite"),
	          style: _lodash2.default.defaults(style, defaultStyle),
	          onClick: handler },
	        label
	      );
	    }
	  }]);
	
	  return Button;
	}(_react.Component);
	
	exports.default = Button;

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(217);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _redux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactRedux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _searchImageActions = __webpack_require__(233);
	
	var actions = _interopRequireWildcard(_searchImageActions);
	
	var _Button = __webpack_require__(431);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Close = function (_Component) {
	  _inherits(Close, _Component);
	
	  function Close() {
	    _classCallCheck(this, Close);
	
	    return _possibleConstructorReturn(this, (Close.__proto__ || Object.getPrototypeOf(Close)).apply(this, arguments));
	  }
	
	  _createClass(Close, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      this.props.actions.close();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Button2.default, {
	        label: 'Close',
	        handler: this.onClick.bind(this)
	      });
	    }
	  }]);
	
	  return Close;
	}(_react.Component);
	
	var stateToProps = function stateToProps(state) {
	  return {
	    app: state.app
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(actions, dispatch)
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(stateToProps, mapDispatchToProps)(Close);

/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reduxThunk = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux-thunk\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux-logger\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reducers = __webpack_require__(446);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function configureStore() {
	  var middleware = [_reduxThunk2.default, (0, _reduxLogger2.default)()];
	  var store = void 0;
	  if (process.env.NODE_ENV === 'production') {
	    // store = createStore(rootReducer, preloadedState)
	    store = (0, _redux.createStore)(_reducers2.default, _redux.applyMiddleware.apply(undefined, middleware));
	  } else {
	    // For Redux Devtools
	    store = (0, _redux.createStore)(_reducers2.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), (0, _redux.applyMiddleware)(_reduxThunk2.default));
	    // store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middleware))
	  }
	
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('../reducers', function () {
	      var nextReducer = require('../reducers').default;
	      store.replaceReducer(nextReducer);
	    });
	  }
	  return store;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"/Users/nakamura/private/nacanori/test/queryit-smart/node_modules/process/browser.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _appReducers = __webpack_require__(447);
	
	var _appReducers2 = _interopRequireDefault(_appReducers);
	
	var _searchImageReducers = __webpack_require__(448);
	
	var _searchImageReducers2 = _interopRequireDefault(_searchImageReducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rootReducer = (0, _redux.combineReducers)({
	  app: _appReducers2.default,
	  searchImage: _searchImageReducers2.default
	});
	
	exports.default = rootReducer;

/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _lodash = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"lodash\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _index = __webpack_require__(232);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initialState = {
	  width: _lodash2.default.get(window, 'innerWidth', 0),
	  height: _lodash2.default.get(window, 'innerHeight', 0),
	  channel: -1
	};
	
	var app = function app() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _index.types.RESIZE_WINDOW:
	      var width = action.width,
	          height = action.height;
	
	      return _extends({}, state, {
	        width: width,
	        height: height
	      });
	    case _index.types.RESTART:
	      return _extends({}, state, {
	        channel: -1
	      });
	    case _index.types.SELECT_CHANNEL:
	      var index = action.index;
	
	      return _extends({}, state, {
	        channel: index
	      });
	    default:
	      return state;
	  }
	};
	
	exports.default = app;

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _lodash = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"lodash\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _index = __webpack_require__(232);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initialState = {
	  images: [],
	  resultImages: [],
	  loadedImageIds: [],
	  loadErrorImageIds: [],
	  analyzeId: null,
	  resultId: null,
	  analyzing: false,
	  error: null
	};
	
	var searchImage = function searchImage() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _index.types.LOAD_IMAGES:
	      var images = action.images,
	          error = action.error;
	
	      return _extends({}, state, {
	        images: images,
	        error: error
	      });
	    case _index.types.SELECT_PRESENT_IMAGE:
	      return _extends({}, state, {
	        analyzeId: action.imageId,
	        analyzing: true,
	        resultImages: []
	      });
	    case _index.types.SIMILARED_IMAGE:
	      {
	        var imageId = action.imageId,
	            results = action.results;
	
	        var _images = _lodash2.default.reject(results, function (image) {
	          return image.key === imageId;
	        });
	        _images = fixPosition(_images);
	        _images = _lodash2.default.reverse(_images);
	        return _extends({}, state, {
	          analyzing: false,
	          analyzeId: imageId,
	          resultImages: _images
	        });
	      }
	    case _index.types.SELECT_RESULT_IMAGE:
	      return _extends({}, state, {
	        resultId: action.imageId
	      });
	    case _index.types.CLOSE_IMAGE_SEARCH:
	      return _extends({}, state, {
	        resultId: null
	      });
	    case _index.types.RESTART:
	      return _extends({}, state, {
	        resultImages: [],
	        analyzeId: null,
	        resultId: null,
	        analyzing: false
	      });
	    case _index.types.IMG_LOADED:
	      {
	        var loadedImageIds = state.loadedImageIds,
	            loadErrorImageIds = state.loadErrorImageIds;
	        var id = action.id;
	
	        return _extends({}, state, {
	          loadedImageIds: _lodash2.default.union(loadedImageIds, [id]),
	          loadErrorImageIds: _lodash2.default.reject(loadErrorImageIds, id)
	        });
	      }
	    case _index.types.IMG_LOAD_ERR:
	      {
	        var _loadedImageIds = state.loadedImageIds,
	            _loadErrorImageIds = state.loadErrorImageIds;
	        var _id = action.id;
	
	        return _extends({}, state, {
	          loadedImageIds: _lodash2.default.reject(_loadedImageIds, _id),
	          loadErrorImageIds: _lodash2.default.union(_loadErrorImageIds, [_id])
	        });
	      }
	    default:
	      return state;
	  }
	};
	
	var fixPosition = function fixPosition(images) {
	  var MAX_SIZE = 200;
	  var MIN_SIZE = 3;
	  var AJUST_SIZE = 3;
	  return _lodash2.default.map(images, function (image, i) {
	    var size = MAX_SIZE - i * AJUST_SIZE | 0;
	    var opacity = 1 - Math.floor(i / 10) / 10;
	    image.size = size > MIN_SIZE ? size : MIN_SIZE;
	    image.opacity = opacity < 0 ? 0.1 : opacity;
	    image.x = _lodash2.default.random(0, window.innerWidth);
	    image.y = _lodash2.default.random(0, window.innerHeight);
	    return image;
	  });
	};
	
	exports.default = searchImage;

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(450);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!./../../node_modules/style-loader/addStyles.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./../../node_modules/css-loader/lib/css-base.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Jura);", ""]);
	
	// module
	exports.push([module.id, ".flex-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-content: stretch;\n  align-items: center; }\n  .flex-container.is-right {\n    justify-content: flex-end; }\n  .flex-container.is-center {\n    justify-content: center; }\n\n.flex-item {\n  transition: all 0.3s;\n  position: relative;\n  user-select: none;\n  flex: 1; }\n\n.has-text-centered {\n  text-align: center; }\n\n.has-text-left {\n  text-align: left; }\n\n.has-text-right {\n  text-align: right; }\n\n@keyframes leave {\n  from { }\n  to {\n    opacity: translateX(500px); } }\n\n.leave {\n  opacity: 0.1;\n  transition: opacity 1s ease-in; }\n\n@keyframes pulsate2 {\n  0% {\n    transform: translate(-50%, -50%); }\n  20% {\n    transform: translate(-50%, -50%);\n    box-shadow: 0px 0px 0px 17px rgba(255, 255, 255, 0.05); }\n  40% {\n    transform: translate(-50%, -50%);\n    box-shadow: 0px 0px 0px 47px rgba(255, 255, 255, 0.05); }\n  60% {\n    transform: translate(-50%, -50%);\n    box-shadow: 0px 0px 0px 77px rgba(255, 255, 255, 0.1); }\n  80% {\n    transform: translate(-50%, -50%);\n    box-shadow: 0px 0px 0px 107px white; }\n  100% {\n    opacity: 0; } }\n\n.circle {\n  height: 344px;\n  width: 344px;\n  line-height: 344px;\n  border-radius: 50%;\n  border: 1px sold white;\n  text-align: center;\n  cursor: pointer; }\n  .circle .text {\n    user-select: none;\n    background-position: center;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent; }\n    .circle .text.bg-circle {\n      background-image: radial-gradient(circle, #E8EAF6, #3F51B5 50%, #303F9F 60%, #311B92); }\n    .circle .text.bg-right {\n      background-image: linear-gradient(to right, #E8EAF6, #3F51B5); }\n    .circle .text.bg-left {\n      background-image: linear-gradient(to right, #3F51B5, #E8EAF6); }\n\n.border-bold {\n  box-sizing: border-box;\n  border: solid 10px white; }\n\n.circle-outer {\n  height: 345px;\n  width: 345px;\n  background-color: white;\n  border-radius: 50%;\n  border: 0px;\n  display: inline-block;\n  transition: all 1s;\n  transform: translate3d(-50%, -50%, 0); }\n\n.thumbnail {\n  display: inline-block; }\n  .thumbnail img {\n    transition: all 1.5s;\n    width: 344px;\n    height: 344px;\n    position: relative;\n    border-radius: 50%;\n    box-sizing: border-box;\n    border: solid 1px white;\n    transition: all 1s; }\n    .thumbnail img.large {\n      border: solid 8px white;\n      transform: scale(1.3); }\n\n.bg-clear {\n  opacity: 0; }\n  .bg-clear > img {\n    opacity: 0; }\n\n.is-center {\n  position: absolute; }\n\n.is-right {\n  position: absolute;\n  transform: translate(70%, -50%); }\n\n.is-left {\n  position: absolute;\n  transform: translate(-170%, -50%); }\n\n.hover-lite:hover {\n  animation: simple 1s;\n  animation-iteration-count: 1; }\n\n.hover:hover {\n  z-index: 100;\n  transition: all 1s;\n  transform: scale(1.8); }\n\n.hover-center:hover {\n  z-index: 100;\n  animation: pulsate2center 1s;\n  animation-iteration-count: 1; }\n\n.hover-right:hover {\n  z-index: 100;\n  animation: pulsate2right 1s;\n  animation-iteration-count: 1; }\n\n.hover-left:hover {\n  z-index: 100;\n  animation: pulsate2left 1s;\n  animation-iteration-count: 1; }\n\n.progress {\n  height: 470px;\n  width: 470px;\n  top: calc(50% - 235px);\n  left: calc(50% - 235px);\n  animation: rotator 1.8s linear infinite;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  z-index: 2000; }\n\n@keyframes rotator {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(270deg); } }\n\n.path {\n  stroke-dasharray: 187;\n  stroke-dashoffset: 0;\n  transform-origin: center;\n  animation: dash 1.8s ease-in-out infinite, white_colors 7.2s ease-in-out infinite; }\n\n@keyframes white_colors {\n  0% {\n    stroke: #FFFFFF; }\n  25% {\n    stroke: #FFFFFF; }\n  50% {\n    stroke: #FFFFFF; }\n  75% {\n    stroke: #FFFFFF; }\n  100% {\n    stroke: #FFFFFF; } }\n\n@keyframes colors {\n  0% {\n    stroke: #4285F4; }\n  25% {\n    stroke: #DE3E35; }\n  50% {\n    stroke: #F7C223; }\n  75% {\n    stroke: #1B9A59; }\n  100% {\n    stroke: #4285F4; } }\n\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 187; }\n  50% {\n    stroke-dashoffset: 46.75;\n    transform: rotate(135deg); }\n  100% {\n    stroke-dashoffset: 187;\n    transform: rotate(450deg); } }\n\n@keyframes pulse {\n  0% {\n    transform: translate(-50%, -50%) scale(0.1);\n    opacity: 0; }\n  50% {\n    transform: translate(-50%, -50%) scale(8);\n    opacity: .2; }\n  100% {\n    transform: translate(-50%, -50%) scale(15);\n    opacity: 0; } }\n\n.pulse div {\n  border-radius: 50%;\n  background-color: #53a0fd;\n  top: 50%;\n  left: 50%;\n  width: 60px;\n  height: 60px; }\n  .pulse div:nth-child(1) {\n    animation: pulse 2s infinite; }\n  .pulse div:nth-child(2) {\n    animation: pulse 2s infinite .3s; }\n  .pulse div:nth-child(3) {\n    animation: pulse 2s infinite .6s; }\n\n.center-gradation-blue {\n  z-index: 1;\n  background-image: radial-gradient(circle, #53a0fd, #3023ae 60%, #3023ae); }\n\n.blur {\n  pointer-events: none;\n  filter: blur(10px); }\n\n@keyframes sample {\n  20% {\n    transform: translate(-50%, -50%);\n    box-shadow: 0px 0px 0px 17px rgba(255, 255, 255, 0.05); }\n  40% {\n    transform: translate(-50%, -50%);\n    box-shadow: 0px 0px 0px 47px rgba(255, 255, 255, 0.05); }\n  60% {\n    transform: translate(-50%, -50%);\n    box-shadow: 0px 0px 0px 77px rgba(255, 255, 255, 0.1); }\n  80% {\n    transform: translate(-50%, -50%);\n    box-shadow: 0px 0px 0px 107px white; }\n  100% {\n    opacity: 0; } }\n\n@keyframes simple {\n  50% {\n    box-shadow: 0px 0px 0px 8px #3023ae, 0px 0px 0px 18px white, 0px 0px 0px 28px rgba(255, 255, 255, 0.1); } }\n\n@keyframes pulsate2center {\n  0% {\n    box-shadow: none; }\n  5% {\n    transform: translate(-50%, -50%);\n    box-shadow: 0px 0px 0px 17px rgba(255, 255, 255, 0.26); }\n  10% {\n    transform: translate(-50%, -50%);\n    box-shadow: 0px 0px 0px 17px rgba(255, 255, 255, 0.26), 0px 0px 0px 47px rgba(255, 255, 255, 0.1); }\n  100% {\n    box-shadow: none; } }\n\n@keyframes pulsate2right {\n  0% {\n    box-shadow: none; }\n  5% {\n    transform: translate(70%, -50%);\n    box-shadow: 0px 0px 0px 17px rgba(255, 255, 255, 0.26); }\n  10% {\n    transform: translate(70%, -50%);\n    box-shadow: 0px 0px 0px 17px rgba(255, 255, 255, 0.26), 0px 0px 0px 47px rgba(255, 255, 255, 0.1); }\n  100% {\n    box-shadow: none; } }\n\n@keyframes pulsate2left {\n  0% {\n    box-shadow: none; }\n  5% {\n    transform: translate(-170%, -50%);\n    box-shadow: 0px 0px 0px 17px rgba(255, 255, 255, 0.26); }\n  10% {\n    transform: translate(-170%, -50%);\n    box-shadow: 0px 0px 0px 17px rgba(255, 255, 255, 0.26), 0px 0px 0px 47px rgba(255, 255, 255, 0.1); }\n  100% {\n    box-shadow: none; } }\n\n@keyframes marquee {\n  0% {\n    transform: translateY(100%); }\n  100% {\n    transform: translateY(-300%); } }\n\n.box-marquee {\n  z-index: 2000;\n  position: absolute;\n  bottom: 0px;\n  right: 60px;\n  width: 50%;\n  max-width: 700px;\n  height: 340px;\n  overflow: hidden;\n  white-space: nowrap;\n  background-color: transparent; }\n  .box-marquee pre {\n    animation: marquee 12s linear infinite;\n    color: white;\n    position: absolute;\n    display: inline-block;\n    overflow: hidden; }\n\n.fadeinout-appear {\n  opacity: 0.01; }\n\n.fadeinout-appear.fadeinout-appear-active {\n  opacity: 1;\n  transition: opacity .5s ease-in; }\n\n.fadeinout-enter {\n  opacity: 0.1;\n  animation-duration: 0.4s; }\n\n.fadeinout-enter.fadeinout-enter-active {\n  opacity: 1; }\n\n.fadeinout-leave {\n  opacity: 1;\n  animation-duration: 0.4s; }\n\n.fadeinout-leave.fadeinout-leave-active {\n  opacity: 0.1;\n  transition: opacity .5s ease-in; }\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  overflow: hidden;\n  font-family: 'Jura', sans-serif;\n  color: white; }\n\nh1 {\n  font-size: 85px;\n  margin: 20px;\n  max-height: 100%; }\n\nh2 {\n  font-size: 36px;\n  margin: 20px;\n  max-height: 100%; }\n\npre {\n  font-size: 18px;\n  margin: 20px; }\n\nspan {\n  font-size: 46px;\n  max-height: 100%; }\n\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%; }\n\n.content-header {\n  z-index: 1002;\n  position: absolute;\n  max-height: 200px;\n  max-width: 1300px;\n  top: 50%;\n  left: 50%;\n  width: 70%;\n  transform: translate(-50%, calc(-50% - 320px));\n  text-align: center;\n  transition: all 1s;\n  opacity: 1; }\n\n.content {\n  z-index: 1000;\n  position: absolute;\n  top: 50%;\n  left: 50%; }\n\n.content-footer {\n  z-index: 1001;\n  width: 1240px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, calc(50% + 160px));\n  text-align: center;\n  color: white;\n  display: block;\n  justify-content: center;\n  transition: all 1s;\n  opacity: 1; }\n", ""]);
	
	// exports


/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(217);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Circle = function (_Component) {
	  _inherits(Circle, _Component);
	
	  function Circle() {
	    _classCallCheck(this, Circle);
	
	    return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
	  }
	
	  _createClass(Circle, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          imgSrc = _props.imgSrc,
	          style = _props.style,
	          _props$onClick = _props.onClick,
	          onClick = _props$onClick === undefined ? function () {} : _props$onClick,
	          _props$onMouseOver = _props.onMouseOver,
	          onMouseOver = _props$onMouseOver === undefined ? function () {} : _props$onMouseOver,
	          _props$onLoad = _props.onLoad,
	          onLoad = _props$onLoad === undefined ? function () {} : _props$onLoad,
	          _props$onError = _props.onError,
	          onError = _props$onError === undefined ? function () {} : _props$onError,
	          _props$className_ = _props.className_,
	          className_ = _props$className_ === undefined ? "" : _props$className_,
	          _props$outerClassName = _props.outerClassName,
	          outerClassName = _props$outerClassName === undefined ? "" : _props$outerClassName,
	          _props$imgClassName = _props.imgClassName,
	          imgClassName = _props$imgClassName === undefined ? "" : _props$imgClassName;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          style: style,
	          className: (0, _classnames2.default)("circle-outer", outerClassName),
	          onClick: onClick,
	          onMouseOver: onMouseOver },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)("circle", "thumbnail", className_) },
	          _react2.default.createElement('img', { src: imgSrc, className: imgClassName,
	            onError: onError,
	            onLoad: onLoad })
	        )
	      );
	    }
	  }]);
	
	  return Circle;
	}(_react.Component);
	
	exports.default = Circle;

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGQ5YWU3OGZmYTRiM2YxMmYyZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2FwcEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvc2VhcmNoSW1hZ2VBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEltYWdlL1NlYXJjaEltYWdlVG9wLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hJbWFnZS9CYWNrZ3JvdW5kLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Nvb3JkaW5hdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhbmcuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hJbWFnZS9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEltYWdlL1F1ZXJ5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1hLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Jlc3RhcnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xvc2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FwcFJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9zZWFyY2hJbWFnZVJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9mNTkxIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hJbWFnZS9DaXJjbGUuanN4Il0sIm5hbWVzIjpbInN0b3JlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFjdGlvbnMiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiY29udGVudHMiLCJsZWF2ZSIsImUiLCJyZXNpemVXaW5kb3ciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwib25XaW5kb3dSZXNpemUiLCJiaW5kIiwiaW5kZXgiLCJpZCIsInNldFN0YXRlIiwic2V0VGltZW91dCIsInNlbGVjdENoYW5uZWwiLCJCQVNFX0lOREVYIiwibWFwIiwiY29udGVudCIsImkiLCJ6SW5kZXgiLCJzaXplIiwiYXBwIiwidGl0bGUiLCJzdWJ0aXRsZSIsImNvbG9yIiwiY2hhbm5lbCIsImltYWdlIiwic3JjIiwib25DbGljayIsIm9uTW91c2VPdmVyIiwiY2xhc3NOYW1lIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJfX2h0bWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZW5kZXJIZWFkZXIiLCJyZW5kZXJDb250ZW50cyIsInJlbmRlckZvb3RlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicmVzdGFydCIsInR5cGUiLCJSRVNUQVJUIiwiU0VMRUNUX0NIQU5ORUwiLCJ3aWR0aCIsIlJFU0laRV9XSU5ET1ciLCJhcHBBY3Rpb25zIiwic2VhcmNoSW1hZ2VBY3Rpb25zIiwidHlwZXMiLCJJTUdfTE9BREVEIiwiSU1HX0xPQURfRVJSIiwiTE9BRF9JTUFHRVMiLCJTRUxFQ1RfUFJFU0VOVF9JTUFHRSIsIlNJTUlMQVJFRF9JTUFHRSIsIlNFTEVDVF9SRVNVTFRfSU1BR0UiLCJDTE9TRV9JTUFHRV9TRUFSQ0giLCJ3cmFwU2VsZWN0UHJlc2VudCIsInNxbCIsInNpbWlsYXIiLCJpbWFnZUlkIiwidGhlbiIsInJlcyIsInJlc3VsdHMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RQcmVzZW50Iiwid3JhcGxvYWRJbWFnZXMiLCJsb2FkIiwiaW1hZ2VzIiwibG9hZEltYWdlcyIsInNlbGVjdFJlc3VsdEltYWdlIiwiY2xvc2UiLCJpbWdMb2FkZWQiLCJpbWdFcnJvciIsInJ1blF1ZXJ5Iiwic3FsUXVlcnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBvc3QiLCJzZW5kIiwib3B0aW9ucyIsInF1ZXJ5IiwiYXV0b1BhZ2luYXRlIiwidXNlUXVlcnlDYWNoZSIsInVzZUxlZ2FjeVNxbCIsInRpbWVvdXRNcyIsInRpbWVvdXQiLCJlbmQiLCJyZXNwb25zZSIsImJvZHkiLCJRVUVSWSIsInRlbXBsYXRlIiwiVEhVTUJOQUlMX1BBVEgiLCJQUkVTRU5UX05VTSIsIkNPTlRFTlRfQ0xBU1NFUyIsIlRIVU1CTkFJTF9TSVpFIiwiSU1HX1NJWkUiLCJDSEFOTkVMX0lNQUdFUyIsIm5hbWUiLCJQUkVTRU5UX0lNQUdFUyIsIlNlYXJjaEltYWdlVG9wIiwiXyIsInNhbXBsZVNpemUiLCJzdGFydCIsImVsYXBzZWQiLCJqdXN0QW5hbHl6ZWQiLCJuZXh0UHJvcHMiLCJzZWFyY2hJbWFnZSIsImFuYWx5emluZyIsInRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsIkRhdGUiLCJzZXRJbnRlcnZhbCIsInRpY2siLCJNYXRoIiwicm91bmQiLCJ0b0ZpeGVkIiwiY2FsbGJhY2siLCJmaW5kIiwia2V5IiwicmVkdWNlIiwiYWNjIiwicmVzdWx0SW1hZ2VzIiwicmVzdWx0SWQiLCJmaW5kSW5kZXgiLCJyYXRlIiwiYW5hbHl6ZUlkIiwiaW1hZ2VOYW1lIiwidGltZSIsImFuYWx5emVkIiwic2VsZWN0IiwicmVuZGVyQ29udGVudCIsIm9uQ2xpY2tSZXN1bHQiLCJsb2FkZWRJbWFnZUlkcyIsIm9uSW1nTG9hZGVkIiwib25JbWdFcnJvciIsInN0YXRlVG9Qcm9wcyIsImRpc3BhdGNoVG9Qcm9wcyIsIkJhY2tncm91bmQiLCJuZXh0U3RhdGUiLCJhZGRBbmltYXRpb24iLCJtb3ZlQW5pbWF0aW9uIiwidGFyZ2V0IiwiZWxlbWVudHMiLCJmaW5kQWxsIiwidGwiLCJyZXBlYXQiLCJ5b3lvIiwiYW5pbXMiLCJmcm9tVG8iLCJlbGVtZW50IiwieCIsInJhbmRvbSIsInkiLCJyb3RhdGlvbiIsImFkZCIsIm9mZnNldCIsIm9wYWNpdHkiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJsaW5lSGVpZ2h0IiwiY3Vyc29yIiwibWFyZ2luIiwib25DbGlja0ltYWdlIiwic3R5bGUiLCJyZW5kZXJQdWxzYXRlIiwicmVuZGVyUmVzdWx0SW1hZ2VzIiwicmVuZGVyUmFuZG9tSW1hZ2VzIiwicmVuZGVyTGF5ZXIiLCJyYW5kb21Db29yZGluYXRlIiwibWF4WCIsIm1heFkiLCJjb252ZXJ0Q29vcmRpbmF0ZSIsImRpc3RhbmNlIiwiY29vcmRpbmF0ZURpc3RhbmNlQW5kRGVncmVlIiwiZGVncmVlIiwiX3dpbmRvdyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiY2VudGVyV2lkdGgiLCJjZW50ZXJIZWlnaHQiLCJyYWRpYW4iLCJkZWdyZWVzVG9SYWRpYW5zIiwiY29zIiwic2luIiwiZGVncmVlcyIsIlBJIiwiSGVhZGVyIiwiUXVlcnkiLCJ0ZXh0IiwiZGFya1RoZW1lIiwic2xpZGVyIiwidHJhY2tTaXplIiwidHJhY2tDb2xvciIsInRyYWNrQ29sb3JTZWxlY3RlZCIsImhhbmRsZVNpemUiLCJoYW5kbGVTaXplRGlzYWJsZWQiLCJoYW5kbGVTaXplQWN0aXZlIiwiaGFuZGxlQ29sb3JaZXJvIiwiaGFuZGxlRmlsbENvbG9yIiwic2VsZWN0aW9uQ29sb3IiLCJyaXBwbGVDb2xvciIsIlJlc3RhcnQiLCJCdXR0b24iLCJsYWJlbCIsImhhbmRsZXIiLCJkZWZhdWx0U3R5bGUiLCJib3R0b20iLCJyaWdodCIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJkZWZhdWx0cyIsIkNsb3NlIiwiY29uZmlndXJlU3RvcmUiLCJtaWRkbGV3YXJlIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsIm5leHRSZWR1Y2VyIiwicmVxdWlyZSIsImRlZmF1bHQiLCJyZXBsYWNlUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwiZ2V0IiwiYWN0aW9uIiwibG9hZEVycm9ySW1hZ2VJZHMiLCJlcnJvciIsImZpeFBvc2l0aW9uIiwicmV2ZXJzZSIsInVuaW9uIiwiTUFYX1NJWkUiLCJNSU5fU0laRSIsIkFKVVNUX1NJWkUiLCJmbG9vciIsIkNpcmNsZSIsImltZ1NyYyIsIm9uTG9hZCIsIm9uRXJyb3IiLCJjbGFzc05hbWVfIiwib3V0ZXJDbGFzc05hbWUiLCJpbWdDbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsS0FBTUEsUUFBUSwrQkFBZDs7QUFFQSx1QkFDRTtBQUFBO0FBQUEsS0FBVSxPQUFPQSxLQUFqQjtBQUNFO0FBREYsRUFERixF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Q0NBLE1BREQ7QUFBQSxXQUNTN0UsS0FEVCxVQUNTQSxLQURUO0FBQUEsbUNBQ2UvSSxPQURmO0FBQUEsV0FDZUEsT0FEZixrQ0FDdUIsWUFBSSxDQUFFLENBRDdCO0FBQUEsdUNBQytCQyxXQUQvQjtBQUFBLFdBQytCQSxXQUQvQixzQ0FDMkMsWUFBSSxDQUFFLENBRGpEO0FBQUEsa0NBQ21ENE4sTUFEbkQ7QUFBQSxXQUNtREEsTUFEbkQsaUNBQzBELFlBQUksQ0FBRSxDQURoRTtBQUFBLG1DQUNrRUMsT0FEbEU7QUFBQSxXQUNrRUEsT0FEbEUsa0NBQzBFLFlBQUksQ0FBRSxDQURoRjtBQUFBLHNDQUNrRkMsVUFEbEY7QUFBQSxXQUNrRkEsVUFEbEYscUNBQzZGLEVBRDdGO0FBQUEsMENBQ2lHQyxjQURqRztBQUFBLFdBQ2lHQSxjQURqRyx5Q0FDZ0gsRUFEaEg7QUFBQSx3Q0FDb0hDLFlBRHBIO0FBQUEsV0FDb0hBLFlBRHBILHVDQUNpSSxFQURqSTs7QUFFUCxjQUNFO0FBQUE7QUFBQTtBQUNFLGtCQUFPbEYsS0FEVDtBQUVFLHNCQUFZLDBCQUFXLGNBQVgsRUFBMkJpRixjQUEzQixDQUZkO0FBR0Usb0JBQVVoTyxPQUhaO0FBSUUsd0JBQWVDLFdBSmpCO0FBS0U7QUFBQTtBQUFBLGFBQUssV0FBWSwwQkFBVyxRQUFYLEVBQXFCLFdBQXJCLEVBQWtDOE4sVUFBbEMsQ0FBakI7QUFDRSxrREFBSyxLQUFNSCxNQUFYLEVBQW9CLFdBQVlLLFlBQWhDO0FBQ0Usc0JBQVVILE9BRFo7QUFFRSxxQkFBU0QsTUFGWDtBQURGO0FBTEYsUUFERjtBQWFEOzs7Ozs7bUJBR1lGLE0iLCJmaWxlIjoiLi9hc3NldHMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGQ5YWU3OGZmYTRiM2YxMmYyZmYiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnXG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKVxuXG5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxBcHAgLz5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvYXBwQWN0aW9ucydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBTZWFyY2hJbWFnZSBmcm9tICcuL1NlYXJjaEltYWdlL1NlYXJjaEltYWdlVG9wJ1xuaW1wb3J0IENpcmNsZSBmcm9tICcuL1NlYXJjaEltYWdlL0NpcmNsZSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9TZWFyY2hJbWFnZS9IZWFkZXInXG5pbXBvcnQgeyBDT05URU5UX0NMQVNTRVMsIENIQU5ORUxfSU1BR0VTIH0gZnJvbSAnLi4vY29uc3QnXG5pbXBvcnQgbGFuZyBmcm9tICcuLi9sYW5nLmpzb24nXG5cbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJ1xuaW5qZWN0VGFwRXZlbnRQbHVnaW4oKVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb250ZW50czogQ0hBTk5FTF9JTUFHRVMsXG4gICAgICBsZWF2ZTogZmFsc2UsXG4gICAgfVxuICB9XG4gIG9uV2luZG93UmVzaXplKGUpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMucmVzaXplV2luZG93KHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMucmVzaXplV2luZG93KHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKSlcbiAgfVxuXG4gIG9uQ2xpY2soaW5kZXgpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBhY3Rpb25zIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgaWQgPSBjb250ZW50c1tpbmRleF0uaWRcbiAgICB0aGlzLnNldFN0YXRlKHtsZWF2ZTogdHJ1ZX0pXG4gICAgLy8gRm9yIGFuaW1hdGlvbiBvZiBsZWF2ZVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYWN0aW9ucy5zZWxlY3RDaGFubmVsKGluZGV4KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7bGVhdmU6IGZhbHNlfSlcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgb25Nb3VzZU92ZXIoaW5kZXgpIHtcbiAgICBjb25zdCBCQVNFX0lOREVYID0gMTAwXG4gICAgY29uc3QgeyBjb250ZW50cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGlkID0gY29udGVudHNbaW5kZXhdLmlkXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZW50czogXy5tYXAoY29udGVudHMsIChjb250ZW50LCBpKSA9PiB7XG4gICAgICAgIGNvbnRlbnQuekluZGV4ID0gQkFTRV9JTkRFWCArIGlcbiAgICAgICAgaWYgKGNvbnRlbnQuaWQgPT09IGlkKSB7XG4gICAgICAgICAgY29udGVudC56SW5kZXggPSBCQVNFX0lOREVYICsgXy5zaXplKGNvbnRlbnRzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZW50XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZW5kZXJIZWFkZXIoKSB7XG4gICAgY29uc3QgeyBsZWF2ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChsZWF2ZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXJcbiAgICAgICAgdGl0bGU9eyBsYW5nLmFwcC50aXRsZSB9XG4gICAgICAgIHN1YnRpdGxlPXsgbGFuZy5hcHAuc3VidGl0bGUgfVxuICAgICAgICBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0vPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckNvbnRlbnRzKCkge1xuICAgIGNvbnN0IHsgY29udGVudHMsIGxlYXZlIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBjaGFubmVsIH0gPSB0aGlzLnByb3BzLmFwcFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgeyBfLm1hcChjb250ZW50cywgKGltYWdlLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxDaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t6SW5kZXg6IGltYWdlLnpJbmRleH19XG4gICAgICAgICAgICAgICAgICAgIGtleT17IGBjaGFubmVsLSR7aX1gIH1cbiAgICAgICAgICAgICAgICAgICAgaW1nU3JjPXsgaW1hZ2Uuc3JjIH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25DbGljay5iaW5kKHRoaXMsIGkpIH1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eyB0aGlzLm9uTW91c2VPdmVyLmJpbmQodGhpcywgaSkgfVxuICAgICAgICAgICAgICAgICAgICBvdXRlckNsYXNzTmFtZT17IGxlYXZlID8gXCJpcy1jZW50ZXIgbGVhdmVcIjppbWFnZS5jbGFzc05hbWUgfVxuICAgICAgICAgICAgICAgICAgLz59KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJGb290ZXIoKSB7XG4gICAgY29uc3QgeyBsZWF2ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChsZWF2ZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1mb290ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lclwiIHN0eWxlPXt7IGhlaWdodDogMTAwLCBmb250U2l6ZTogJzUwcHgnIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhcImZsZXgtaXRlbVwiKSB9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogJ0ltYWdlJ319IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWVzKFwiZmxleC1pdGVtXCIpIH0+XG4gICAgICAgICAgICA8c3Bhbj5UZXh0PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhcImZsZXgtaXRlbVwiKSB9PlxuICAgICAgICAgICAgPHNwYW4+RGVtYW5kIGZvcmVjYXN0PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFwcCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHsgZG8ge1xuICAgICAgICAgICAgaWYgKGFwcC5jaGFubmVsID09PSAwKSB7XG4gICAgICAgICAgICAgIDxTZWFyY2hJbWFnZSAvPlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWVzKFwiY29udGFpbmVyXCIpIH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snIH19PlxuICAgICAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJmYWRlaW5vdXRcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXJUaW1lb3V0PXs1MDB9XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXs1MDB9XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXszMDB9PlxuICAgICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckhlYWRlcigpIH1cbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJDb250ZW50cygpIH1cbiAgICAgICAgICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwiZmFkZWlub3V0XCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI9e3RydWV9XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyVGltZW91dD17NTAwfVxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17NTAwfVxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dD17MzAwfT5cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJGb290ZXIoKSB9XG4gICAgICAgICAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIGFwcDogc3RhdGUuYXBwLFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoQXBwKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQXBwLmpzeCIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyB0eXBlcyB9IGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBjb25zdCByZXN0YXJ0ID0gKCkgPT4ge1xuICByZXR1cm4geyB0eXBlOiB0eXBlcy5SRVNUQVJUIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlbGVjdENoYW5uZWwgPSBpbmRleCA9PiB7XG4gIHJldHVybiB7IHR5cGU6IHR5cGVzLlNFTEVDVF9DSEFOTkVMLCBpbmRleCB9XG59XG5cbmV4cG9ydCBjb25zdCByZXNpemVXaW5kb3cgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlJFU0laRV9XSU5ET1csXG4gICAgd2lkdGgsIFxuICAgIGhlaWdodFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWN0aW9ucy9hcHBBY3Rpb25zLmpzIiwiZXhwb3J0IGFwcEFjdGlvbnMgZnJvbSAnLi9hcHBBY3Rpb25zJ1xuZXhwb3J0IHNlYXJjaEltYWdlQWN0aW9ucyBmcm9tICcuL3NlYXJjaEltYWdlQWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IHR5cGVzID0ge1xuICAvLyBmb3Igcm9vdFxuICBSRVNJWkVfV0lORE9XOiBcInJlc2l6ZV93aW5kb3dcIixcbiAgUkVTVEFSVDogXCJyZXN0YXJ0XCIsXG4gIFNFTEVDVF9DSEFOTkVMOiBcInNlbGVjdF9jaGFubmVsXCIsXG4gIC8vIGZvciBzZWFyY2ggaW1hZ2VcbiAgSU1HX0xPQURFRDogXCJpbWdfbG9hZGVkXCIsXG4gIElNR19MT0FEX0VSUjogXCJpbWdfbG9hZF9lcnJcIixcbiAgTE9BRF9JTUFHRVM6IFwibG9hZF9pbWFnZXNcIixcbiAgU0VMRUNUX1BSRVNFTlRfSU1BR0U6IFwic2VsZWN0X3ByZXNlbnRfaW1hZ2VcIixcbiAgU0lNSUxBUkVEX0lNQUdFOiBcInNpbWxhcmVkX2ltYWdlXCIsXG4gIFNFTEVDVF9SRVNVTFRfSU1BR0U6IFwic2VsZWN0X3Jlc3VsdF9pbWFnZVwiLFxuICBDTE9TRV9JTUFHRV9TRUFSQ0g6IFwiY2xvc2VfaW1hZ2Vfc2VhcmNoXCIsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHR5cGVzIH0gZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7IHJ1blF1ZXJ5IH0gZnJvbSAnLi9hamF4J1xuaW1wb3J0IHsgUVVFUlkgfSBmcm9tICcuLi9jb25zdCdcblxuY29uc3Qgd3JhcFNlbGVjdFByZXNlbnQgPSBpbWFnZUlkID0+IGRpc3BhdGNoID0+IHtcbiAgY29uc3Qgc3FsID0gUVVFUlkuc2ltaWxhci5zcWwoe2lkOiBpbWFnZUlkfSlcbiAgcmV0dXJuIHJ1blF1ZXJ5KHNxbCkudGhlbigocmVzKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogdHlwZXMuU0lNSUxBUkVEX0lNQUdFLFxuICAgICAgaW1hZ2VJZDogaW1hZ2VJZCxcbiAgICAgIHJlc3VsdHM6IHJlc1xuICAgIH0pXG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIsIGVycilcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNlbGVjdFByZXNlbnQgPSBpbWFnZUlkID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IHR5cGVzLlNFTEVDVF9QUkVTRU5UX0lNQUdFLFxuICAgIGltYWdlSWQ6IGltYWdlSWRcbiAgfSlcbiAgcmV0dXJuIGRpc3BhdGNoKHdyYXBTZWxlY3RQcmVzZW50KGltYWdlSWQpKVxufVxuXG5jb25zdCB3cmFwbG9hZEltYWdlcyA9ICgpID0+IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHJ1blF1ZXJ5KFFVRVJZLmxvYWQuc3FsKS50aGVuKChyZXMpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiB0eXBlcy5MT0FEX0lNQUdFUyxcbiAgICAgIGltYWdlczogcmVzLFxuICAgIH0pXG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIsIGVycilcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRJbWFnZXMgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCh3cmFwbG9hZEltYWdlcygpKVxufVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0UmVzdWx0SW1hZ2UgPSBpbWFnZUlkID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogdHlwZXMuU0VMRUNUX1JFU1VMVF9JTUFHRSwgaW1hZ2VJZCB9XG59XG5cbmV4cG9ydCBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogdHlwZXMuQ0xPU0VfSU1BR0VfU0VBUkNIIH1cbn1cblxuZXhwb3J0IGNvbnN0IGltZ0xvYWRlZCA9IChpZCkgPT4ge1xuICByZXR1cm4geyB0eXBlOiB0eXBlcy5JTUdfTE9BREVELCBpZCB9XG59XG5cbmV4cG9ydCBjb25zdCBpbWdFcnJvciA9IChpZCkgPT4ge1xuICByZXR1cm4geyB0eXBlOiB0eXBlcy5JTUdfTE9BRF9FUlIsIGlkIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25zL3NlYXJjaEltYWdlQWN0aW9ucy5qcyIsImltcG9ydCBzdXBlcmFnZW50IGZyb20gJ3N1cGVyYWdlbnQnXG5cbmV4cG9ydCBmdW5jdGlvbiBydW5RdWVyeShzcWxRdWVyeSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHN1cGVyYWdlbnRcbiAgICAgIC5wb3N0KFwiL3F1ZXJ5XCIpXG4gICAgICAuc2VuZCh7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBxdWVyeTogc3FsUXVlcnksXG4gICAgICAgICAgYXV0b1BhZ2luYXRlOiBmYWxzZSxcbiAgICAgICAgICB1c2VRdWVyeUNhY2hlOiBmYWxzZSxcbiAgICAgICAgICB1c2VMZWdhY3lTcWw6IGZhbHNlLFxuICAgICAgICAgIHRpbWVvdXRNczogNjAwMDAwXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGltZW91dCg2MDAwMDApXG4gICAgICAuZW5kKChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuYm9keSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvYWpheC5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjb25zdCBRVUVSWSA9IHtcbiAgbG9hZDoge1xuICAgIHNxbDogXCJTRUxFQ1Qga2V5LCBvcmlnaW5hbF91cmwsIHJhbmQoKSBhcyByYW5kIEZST00gYHdpa2ltZWRpYS5pbWFnZV92ZWN0b3JzYCBPUkRFUiBCWSByYW5kIExJTUlUIDcwXCIsXG4gIH0sXG4gIHNpbWlsYXI6IHtcbiAgICBzcWw6IF8udGVtcGxhdGUoYCNzdGFuZGFyZFNRTFxuICAgICAgICAgICAgQ1JFQVRFIFRFTVBPUkFSWSBGVU5DVElPTiBkaXN0YW5jZSh2MSBBUlJBWTxGTE9BVDY0PiwgdjIgQVJSQVk8RkxPQVQ2ND4pXG4gICAgICAgICAgICBSRVRVUk5TIEZMT0FUNjRcbiAgICAgICAgICAgIExBTkdVQUdFIGpzIEFTIFwiXCJcIlxuICAgICAgICAgICAgICB2YXIgZGlzdCA9IDAuMFxuICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCB2MS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGRpc3QgKz0gKHYxW2ldIC0gdjJbaV0pKioyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChkaXN0KTtcbiAgICAgICAgICAgIFwiXCJcIjtcbiAgICAgICAgICAgIFNFTEVDVCBhLmtleSwgZGlzdGFuY2UoYS52ZWN0b3IsIGIudmVjdG9yKSBhcyBkaXN0LCBvcmlnaW5hbF91cmxcbiAgICAgICAgICAgIEZST01cbiAgICAgICAgICAgIChTRUxFQ1Qga2V5LCB2ZWN0b3IsIG9yaWdpbmFsX3VybCBGUk9NIFxcYHdpa2ltZWRpYS5pbWFnZV92ZWN0b3JzXFxgKSBhcyBhXG4gICAgICAgICAgICBjcm9zcyBqb2luXG4gICAgICAgICAgICAoU0VMRUNUIHZlY3RvciBGUk9NIFxcYHdpa2ltZWRpYS5pbWFnZV92ZWN0b3JzXzFcXGAgd2hlcmUga2V5ID0gXCI8JT0gaWQgJT5cIikgYXMgYlxuICAgICAgICAgICAgT1JERVIgQlkgZGlzdCBhc2NcbiAgICAgICAgICAgIExJTUlUIDUwYClcbiAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IFRIVU1CTkFJTF9QQVRIID0gXy50ZW1wbGF0ZSgnaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3F1ZXJ5aXRfc21hcnQvd2lraW1lZGlhL2ltYWdlcy8ke2lkfS5qcGcnKVxuXG5leHBvcnQgY29uc3QgUFJFU0VOVF9OVU0gPSAzXG5leHBvcnQgY29uc3QgQ09OVEVOVF9DTEFTU0VTID0gW1xuICBcImlzLWxlZnQgaG92ZXItbGVmdFwiLFxuICBcImlzLWNlbnRlciBob3Zlci1jZW50ZXJcIixcbiAgXCJpcy1yaWdodCBob3Zlci1yaWdodFwiLFxuXVxuXG5leHBvcnQgY29uc3QgVEhVTUJOQUlMX1NJWkUgPSA2MCxcbiAgSU1HX1NJWkUgPSAyNDAsXG4gIENIQU5ORUxfSU1BR0VTID0gW1xuICAgIHsgaWQ6IFwiaW1hZ2VcIiwgbmFtZTogXCJJbWFnZVwiLCBzcmM6ICcuL2ltYWdlcy9pbWFnZS5qcGcnLCBjbGFzc05hbWU6IENPTlRFTlRfQ0xBU1NFU1swXSB9LFxuICAgIHsgaWQ6IFwidGV4dFwiLCBuYW1lOiBcIlRleHRcIiwgc3JjOiAnLi9pbWFnZXMvdGV4dC5qcGcnLCBjbGFzc05hbWU6IENPTlRFTlRfQ0xBU1NFU1sxXSB9LFxuICAgIHsgaWQ6IFwibWFwXCIsIG5hbWU6IFwiRGVtYW5kIGZvcmVjYXN0XCIsIHNyYzogJy4vaW1hZ2VzL21hcC5qcGcnLCBjbGFzc05hbWU6IENPTlRFTlRfQ0xBU1NFU1syXSB9XG4gIF0sXG4gIFBSRVNFTlRfSU1BR0VTID0gW1xuICAgIHsgaWQ6IFwiMTAwMDAwODZcIiwgc3JjOiBcIi4vaW1hZ2VzLzEwMDAwMDg2LmpwZ1wiLCBuYW1lOiBcIkpFTExZRklTSFwiIH0sXG4gICAgeyBpZDogXCIwMDAwMDM1OVwiLCBzcmM6IFwiLi9pbWFnZXMvMDAwMDAzNTkuanBnXCIsIG5hbWU6IFwiQkVFXCIgfSxcbiAgICB7IGlkOiBcIjAwMDAwNTk1XCIsIHNyYzogXCIuL2ltYWdlcy8wMDAwMDU5NS5qcGdcIiwgbmFtZTogXCJGMVwiIH0sXG4gICAgeyBpZDogXCIwMDAwMDYxNVwiLCBzcmM6IFwiLi9pbWFnZXMvMDAwMDA2MTUuanBnXCIsIG5hbWU6IFwiRklSRVdPUktTXCIgfSxcbiAgICB7IGlkOiBcIjAwMDAwODk1XCIsIHNyYzogXCIuL2ltYWdlcy8wMDAwMDg5NS5qcGdcIiwgbmFtZTogXCJCSVJEXCIgfSxcbiAgICB7IGlkOiBcIjAwMDAxNDEwXCIsIHNyYzogXCIuL2ltYWdlcy8wMDAwMTQxMC5qcGdcIiwgbmFtZTogXCJDSEFSQUNUT1JcIiB9LFxuICAgIHsgaWQ6IFwiMDAwMDE0MzVcIiwgc3JjOiBcIi4vaW1hZ2VzLzAwMDAxNDM1LmpwZ1wiLCBuYW1lOiBcIklMTFVTVFJBVElPTlwiIH0sXG4gICAgeyBpZDogXCIwMDAwMTYyOFwiLCBzcmM6IFwiLi9pbWFnZXMvMDAwMDE2MjguanBnXCIsIG5hbWU6IFwiU1VOU0VUXCIgfSxcbiAgICB7IGlkOiBcIjAwMDAyMjY5XCIsIHNyYzogXCIuL2ltYWdlcy8wMDAwMjI2OS5qcGdcIiwgbmFtZTogXCJTSUdOXCIgfSxcbiAgICB7IGlkOiBcIjAwMDA0NTA5XCIsIHNyYzogXCIuL2ltYWdlcy8wMDAwNDUwOS5qcGdcIiwgbmFtZTogXCJUWVBIT09OXCIgfSxcbiAgICB7IGlkOiBcIjAwMDA1MDIwXCIsIHNyYzogXCIuL2ltYWdlcy8wMDAwNTAyMC5qcGdcIiwgbmFtZTogXCJGSVNIXCIgfSxcbiAgICB7IGlkOiBcIjAwMDA1MzE4XCIsIHNyYzogXCIuL2ltYWdlcy8wMDAwNTMxOC5qcGdcIiwgbmFtZTogXCJJU0xBTkRcIiB9LFxuICAgIHsgaWQ6IFwiMDAwMDUzMzJcIiwgc3JjOiBcIi4vaW1hZ2VzLzAwMDA1MzMyLmpwZ1wiLCBuYW1lOiBcIlNVTiBGTE9XRVJcIiB9LFxuICAgIHsgaWQ6IFwiMDAwMDU1NThcIiwgc3JjOiBcIi4vaW1hZ2VzLzAwMDA1NTU4LmpwZ1wiLCBuYW1lOiBcIkxFR08gQkxPQ0tcIiB9LFxuICAgIHsgaWQ6IFwiMDAwMDU1NzJcIiwgc3JjOiBcIi4vaW1hZ2VzLzAwMDA1NTcyLmpwZ1wiLCBuYW1lOiBcIkNBUlwiIH0sXG4gICAgeyBpZDogXCIwMDAwNTc3OVwiLCBzcmM6IFwiLi9pbWFnZXMvMDAwMDU3NzkuanBnXCIsIG5hbWU6IFwiRUxFUEhBTlRcIiB9LFxuICAgIHsgaWQ6IFwiMDAwMDU4NjdcIiwgc3JjOiBcIi4vaW1hZ2VzLzAwMDA1ODY3LmpwZ1wiLCBuYW1lOiBcIk9XTFwiIH0sXG4gICAgeyBpZDogXCIwMDAwNTk4NlwiLCBzcmM6IFwiLi9pbWFnZXMvMDAwMDU5ODYuanBnXCIsIG5hbWU6IFwiU1dBTlwiIH0sXG4gICAgeyBpZDogXCIwMDAwNjE0MVwiLCBzcmM6IFwiLi9pbWFnZXMvMDAwMDYxNDEuanBnXCIsIG5hbWU6IFwiUElDVFVSRVwiIH0sXG4gICAgeyBpZDogXCIwMDAwNjIwNVwiLCBzcmM6IFwiLi9pbWFnZXMvMDAwMDYyMDUuanBnXCIsIG5hbWU6IFwiR1JBUEhcIiB9LFxuICAgIHsgaWQ6IFwiMDAwMDYzMjJcIiwgc3JjOiBcIi4vaW1hZ2VzLzAwMDA2MzIyLmpwZ1wiLCBuYW1lOiBcIkJVVFRFUkZMWVwiIH0sXG4gICAgeyBpZDogXCIwMDAwNjU2MlwiLCBzcmM6IFwiLi9pbWFnZXMvMDAwMDY1NjIuanBnXCIsIG5hbWU6IFwiQkFMTE9PTlwiIH0sXG4gICAgeyBpZDogXCIwMDAwNjYwNFwiLCBzcmM6IFwiLi9pbWFnZXMvMDAwMDY2MDQuanBnXCIsIG5hbWU6IFwiSE9SU0VcIiB9LFxuICAgIHsgaWQ6IFwiMDAwMDY2NDZcIiwgc3JjOiBcIi4vaW1hZ2VzLzAwMDA2NjQ2LmpwZ1wiLCBuYW1lOiBcIk1PT05cIiB9LFxuICAgIHsgaWQ6IFwiMDAwMDY5MDZcIiwgc3JjOiBcIi4vaW1hZ2VzLzAwMDA2OTA2LmpwZ1wiLCBuYW1lOiBcIkRFU0VSVFwiIH0sXG4gICAgeyBpZDogXCIwMDAwNjkzNVwiLCBzcmM6IFwiLi9pbWFnZXMvMDAwMDY5MzUuanBnXCIsIG5hbWU6IFwiQ0FUXCIgfSxcbiAgICB7IGlkOiBcIjAwMDA4NzQyXCIsIHNyYzogXCIuL2ltYWdlcy8wMDAwODc0Mi5qcGdcIiwgbmFtZTogXCJEUkFHT05GTFlcIiB9LFxuICAgIHsgaWQ6IFwiMDAwMDg3ODJcIiwgc3JjOiBcIi4vaW1hZ2VzLzAwMDA4NzgyLmpwZ1wiLCBuYW1lOiBcIkxVWFVSWSBMSU5FUlwiIH0sXG4gICAgeyBpZDogXCIwMDAwOTQwMFwiLCBzcmM6IFwiLi9pbWFnZXMvMDAwMDk0MDAuanBnXCIsIG5hbWU6IFwiQ0xVQ1VMQVRPUlwiIH0sXG4gICAgeyBpZDogXCIxMDAwMDA4NlwiLCBzcmM6IFwiLi9pbWFnZXMvMTAwMDAwODYuanBnXCIsIG5hbWU6IFwiSkVMTFlGSVNIXCIgfSxcbiAgXVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnN0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInXG5pbXBvcnQgU2xpZGVyIGZyb20gJ21hdGVyaWFsLXVpL1NsaWRlcidcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL3NlYXJjaEltYWdlQWN0aW9ucydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgZGFya1RoZW1lIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1hJ1xuaW1wb3J0IHsgUVVFUlksIElNR19TSVpFLCBQUkVTRU5UX05VTSwgQ09OVEVOVF9DTEFTU0VTLCBUSFVNQk5BSUxfU0laRSwgUFJFU0VOVF9JTUFHRVMsIFRIVU1CTkFJTF9QQVRIIH0gZnJvbSAnLi4vLi4vY29uc3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9CYWNrZ3JvdW5kJ1xuaW1wb3J0IFF1ZXJ5IGZyb20gJy4vUXVlcnknXG5pbXBvcnQgUmVzdGFydCBmcm9tICcuLi9SZXN0YXJ0J1xuaW1wb3J0IENsb3NlIGZyb20gJy4uL0Nsb3NlJ1xuaW1wb3J0IGxhbmcgZnJvbSAnLi4vLi4vbGFuZy5qc29uJ1xuaW1wb3J0IENpcmNsZSBmcm9tICcuL0NpcmNsZSdcblxuY2xhc3MgU2VhcmNoSW1hZ2VUb3AgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGxldCBjb250ZW50cyA9IF8uc2FtcGxlU2l6ZShQUkVTRU5UX0lNQUdFUywgUFJFU0VOVF9OVU0pXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbnRlbnRzOiBfLm1hcChjb250ZW50cywgKGNvbnRlbnQsIGkpID0+IHtcbiAgICAgICAgY29udGVudC5jbGFzc05hbWUgPSBDT05URU5UX0NMQVNTRVNbaV1cbiAgICAgICAgcmV0dXJuIGNvbnRlbnRcbiAgICAgIH0pLFxuICAgICAgbGVhdmU6IGZhbHNlLFxuICAgICAgc3RhcnQ6IG51bGwsXG4gICAgICBlbGFwc2VkOiAwLFxuICAgICAganVzdEFuYWx5emVkOiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIC8vIEp1c3QgZmluaXNoZWQgYW5hbHlzaXNcbiAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hJbWFnZS5hbmFseXppbmcgJiYgIW5leHRQcm9wcy5zZWFyY2hJbWFnZS5hbmFseXppbmcpIHtcbiAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2p1c3RBbmFseXplZDogdHJ1ZX0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgLy8gSnVzdCBmaW5pc2hlZCBhbmFseXNpc1xuICAgIGlmICghdGhpcy5wcm9wcy5zZWFyY2hJbWFnZS5hbmFseXppbmcgJiYgcHJldlByb3BzLnNlYXJjaEltYWdlLmFuYWx5emluZykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2p1c3RBbmFseXplZDogZmFsc2V9KVxuICAgICAgfSwgNTAwMClcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdFByZXNlbnQoaW1hZ2VJZCwgZSkge1xuICAgIGNvbnN0IHsgYWN0aW9ucyB9ID0gdGhpcy5wcm9wc1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydDogbmV3IERhdGUoKSB9KVxuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnRpY2suYmluZCh0aGlzKSwgNTApXG4gICAgYWN0aW9ucy5zZWxlY3RQcmVzZW50KGltYWdlSWQpXG4gIH1cblxuICBvbkNsaWNrKGluZGV4KSB7XG4gICAgY29uc3QgeyBjb250ZW50cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgYWN0aW9ucyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGlkID0gY29udGVudHNbaW5kZXhdLmlkXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGVhdmU6IHRydWV9KVxuXG4gICAgLy8gRm9yIGFuaW1hdGlvbiBvZiBsZWF2ZVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYWN0aW9ucy5zZWxlY3RQcmVzZW50KGNvbnRlbnRzW2luZGV4XS5pZClcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXJ0OiBuZXcgRGF0ZSgpfSlcbiAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnRpY2suYmluZCh0aGlzKSwgNTApXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIG9uTW91c2VPdmVyKGluZGV4KSB7XG4gICAgY29uc3QgQkFTRV9JTkRFWCA9IDEwMFxuICAgIGNvbnN0IHsgY29udGVudHMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBpZCA9IGNvbnRlbnRzW2luZGV4XS5pZFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGVudHM6IF8ubWFwKGNvbnRlbnRzLCAoY29udGVudCwgaSkgPT4ge1xuICAgICAgICBjb250ZW50LnpJbmRleCA9IEJBU0VfSU5ERVggKyBpXG4gICAgICAgIGlmIChjb250ZW50LmlkID09PSBpZCkge1xuICAgICAgICAgIGNvbnRlbnQuekluZGV4ID0gQkFTRV9JTkRFWCArIF8uc2l6ZShjb250ZW50cylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGVudFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25DbGlja1Jlc3VsdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsZWF2ZTogZmFsc2V9KVxuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5jbG9zZSgpXG4gIH1cblxuICBvbkltZ0xvYWRlZChpZCwgZSkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5pbWdMb2FkZWQoaWQpXG4gIH1cblxuICBvbkltZ0Vycm9yKGlkLCBlKSB7XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmltZ0Vycm9yKGlkKVxuICB9XG5cbiAgdGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZWxhcHNlZDogbmV3IERhdGUoKSAtIHRoaXMuc3RhdGUuc3RhcnQgfSlcbiAgfVxuXG4gIGVsYXBzZWQoKSB7XG4gICAgY29uc3QgZWxhcHNlZCA9IE1hdGgucm91bmQodGhpcy5zdGF0ZS5lbGFwc2VkIC8gMTAwKVxuICAgIHJldHVybiAoZWxhcHNlZCAvIDEwKS50b0ZpeGVkKDEpXG4gIH1cblxuICByZW5kZXJDb250ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbnRlbnRzLCBsZWF2ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgcmVzdWx0SWQsIGxvYWRlZEltYWdlSWRzIH0gPSB0aGlzLnByb3BzLnNlYXJjaEltYWdlXG4gICAgLy8gY29uc3QgbG9hZGVkID0gXy5zaXplKGxvYWRlZEltYWdlSWRzKSA9PT0gXy5zaXplKGNvbnRlbnRzKVxuICAgICAgICAgICAgICAgIC8vIG91dGVyQ2xhc3NOYW1lPXsgbGVhdmUgPyBcImlzLWNlbnRlciBsZWF2ZVwiOmAke2ltYWdlLmNsYXNzTmFtZX0gJHtsb2FkZWQgPyBcIlwiOlwiYmctY2xlYXJcIn1gIH1cbiAgICByZXR1cm4gXy5tYXAoY29udGVudHMsIChpbWFnZSwgaSkgPT4ge1xuICAgICAgcmV0dXJuIDxDaXJjbGVcbiAgICAgICAgICAgICAgICBrZXk9eyBgc2VsZWN0LSR7aX1gIH1cbiAgICAgICAgICAgICAgICBpbWdTcmM9eyBpbWFnZS5zcmMgfVxuICAgICAgICAgICAgICAgIG9uTG9hZD17IHRoaXMub25JbWdMb2FkZWQuYmluZCh0aGlzLCBpbWFnZS5pZCkgfVxuICAgICAgICAgICAgICAgIG9uRXJyb3I9eyB0aGlzLm9uSW1nRXJyb3IuYmluZCh0aGlzLCBpbWFnZS5pZCkgfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uQ2xpY2suYmluZCh0aGlzLCBpKSB9XG4gICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eyB0aGlzLm9uTW91c2VPdmVyLmJpbmQodGhpcywgaSkgfVxuICAgICAgICAgICAgICAgIG91dGVyQ2xhc3NOYW1lPXsgbGVhdmUgPyBcImlzLWNlbnRlciBsZWF2ZVwiOmAke2ltYWdlLmNsYXNzTmFtZX1gIH1cbiAgICAgICAgICAgICAgLz5cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyQ29udGVudChpbWFnZUlkLCBpbWFnZXMsIGNhbGxiYWNrPSgpPT57fSkge1xuICAgIGNvbnN0IGltYWdlID0gXy5maW5kKGltYWdlcywgaW1hZ2UgPT4gaW1hZ2Uua2V5ID09PSBpbWFnZUlkKVxuICAgIHJldHVybiA8Q2lyY2xlXG4gICAgICAgICAgICAgIGltZ1NyYz17IFRIVU1CTkFJTF9QQVRIKHtpZDogaW1hZ2VJZH0pIH1cbiAgICAgICAgICAgICAgaGFuZGxlcj17IGNhbGxiYWNrIH1cbiAgICAgICAgICAgICAgb3V0ZXJDbGFzc05hbWU9XCJpcy1jZW50ZXJcIlxuICAgICAgICAgICAgICBpbWdDbGFzc05hbWU9XCJsYXJnZSBib3JkZXItYm9sZFwiXG4gICAgICAgICAgICAvPlxuICB9XG5cbiAgaW1hZ2VOYW1lKGltYWdlSWQpIHtcbiAgICByZXR1cm4gXy5yZWR1Y2UoUFJFU0VOVF9JTUFHRVMsIChhY2MsIGltYWdlKSA9PiB7XG4gICAgICBpZiAoaW1hZ2UuaWQgPT09IGltYWdlSWQpIHtcbiAgICAgICAgYWNjID0gaW1hZ2UubmFtZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIFwiXCIpXG4gIH1cblxuICByZW5kZXJGb290ZXIoKSB7XG4gICAgY29uc3QgeyByZXN1bHRJbWFnZXMsIHJlc3VsdElkIH0gPSB0aGlzLnByb3BzLnNlYXJjaEltYWdlXG4gICAgaWYgKCFyZXN1bHRJZCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBfLmZpbmRJbmRleChyZXN1bHRJbWFnZXMsIGltYWdlID0+IGltYWdlLmtleSA9PT0gcmVzdWx0SWQpIHx8IDBcbiAgICBjb25zdCByYXRlID0gKChpbmRleCArIDEpIC8gXy5zaXplKHJlc3VsdEltYWdlcykpICogMTAwXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1mb290ZXJcIiBzdHlsZT17eyAnaGVpZ2h0JzogMjAwIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWVzKFwiZmxleC1pdGVtXCIpIH0+XG4gICAgICAgICAgICA8c3Bhbj5OZWFyPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhcImZsZXgtaXRlbVwiKSB9PlxuICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgIG1heD17MTAwfVxuICAgICAgICAgICAgICB2YWx1ZT17cmF0ZX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWVzKFwiZmxleC1pdGVtXCIpIH0+XG4gICAgICAgICAgICA8c3Bhbj5GYXI8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVySGVhZGVyKCkge1xuICAgIGNvbnN0IHsganVzdEFuYWx5emVkIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyByZXN1bHRJZCwgYW5hbHl6ZUlkLCBhbmFseXppbmcgfSA9IHRoaXMucHJvcHMuc2VhcmNoSW1hZ2VcbiAgICBpZiAocmVzdWx0SWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxIZWFkZXIgdGl0bGU9eyB0aGlzLmltYWdlTmFtZShhbmFseXplSWQpIH0gLz5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGFuYWx5emVJZCkge1xuICAgICAgaWYgKGFuYWx5emluZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIHRpdGxlPXsgYCR7bGFuZy5zZWFyY2hJbWFnZS5hbmFseXppbmcudGl0bGV9YCB9XG4gICAgICAgICAgICBzdWJ0aXRsZT17IF8udGVtcGxhdGUobGFuZy5zZWFyY2hJbWFnZS5hbmFseXppbmcuc3VidGl0bGUpKHt0aW1lOiB0aGlzLmVsYXBzZWQoKX0pIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAoanVzdEFuYWx5emVkKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgdGl0bGU9eyBgJHtsYW5nLnNlYXJjaEltYWdlLmFuYWx5emVkLnRpdGxlfWAgfVxuICAgICAgICAgICAgc3VidGl0bGU9eyBfLnRlbXBsYXRlKGxhbmcuc2VhcmNoSW1hZ2UuYW5hbHl6ZWQuc3VidGl0bGUpKHt0aW1lOiB0aGlzLmVsYXBzZWQoKX0pIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEhlYWRlciBcbiAgICAgICAgICB0aXRsZT17IGxhbmcuc2VhcmNoSW1hZ2Uuc2VsZWN0LnRpdGxlIH1cbiAgICAgICAgICBzdWJ0aXRsZT17IGxhbmcuc2VhcmNoSW1hZ2Uuc2VsZWN0LnN1YnRpdGxlIH0gLz5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFwcCwgc2VhcmNoSW1hZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHJlc3VsdElkLCBhbmFseXppbmcsIGFuYWx5emVJZCwgaW1hZ2VzLCByZXN1bHRJbWFnZXMgfSA9IHNlYXJjaEltYWdlXG4gICAgcmV0dXJuIChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIG11aVRoZW1lPXtkYXJrVGhlbWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzTmFtZXMoXCJjb250YWluZXJcIiwgXCJjZW50ZXItZ3JhZGF0aW9uLWJsdWVcIikgfT5cbiAgICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwiZmFkZWlub3V0XCJcbiAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI9e3RydWV9XG4gICAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyVGltZW91dD17NTAwfVxuICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17NTAwfVxuICAgICAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dD17MzAwfT5cbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJIZWFkZXIoKSB9XG4gICAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICB7IGRvIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0SWQpIHtcbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJDb250ZW50KHJlc3VsdElkLCByZXN1bHRJbWFnZXMsIHRoaXMub25DbGlja1Jlc3VsdC5iaW5kKHRoaXMpKSB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhbmFseXplSWQpIHtcbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJDb250ZW50KGFuYWx5emVJZCwgUFJFU0VOVF9JTUFHRVMpIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNvbnRlbnRzKCkgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckZvb3RlcigpIH1cbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kIC8+XG4gICAgICAgICAgICB7IHJlc3VsdElkID8gPENsb3NlIGNsYXNzTmFtZT1cImhvdmVyXCIgLz4gOiAhYW5hbHl6aW5nID8gPFJlc3RhcnQgY2xhc3NOYW1lPVwiaG92ZXJcIiAvPiA6IG51bGwgfVxuICAgICAgICAgICAgeyBhbmFseXppbmcgPyA8UXVlcnkgdGV4dD17IFFVRVJZLnNpbWlsYXIuc3FsKHtpZDogYW5hbHl6ZUlkfSkgfSAvPiA6IG51bGwgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlYXJjaEltYWdlOiBzdGF0ZS5zZWFyY2hJbWFnZVxuICB9XG59XG5cbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGVUb1Byb3BzLFxuICBkaXNwYXRjaFRvUHJvcHMsXG4pKFNlYXJjaEltYWdlVG9wKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU2VhcmNoSW1hZ2UvU2VhcmNoSW1hZ2VUb3AuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgVGltZWxpbmVNYXgsIFR3ZWVuTWF4LCBUd2VlbkxpdGUgfSBmcm9tICdnc2FwJ1xuaW1wb3J0IEdTQVAgZnJvbSAncmVhY3QtZ3NhcC1lbmhhbmNlcidcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9zZWFyY2hJbWFnZUFjdGlvbnMnXG5pbXBvcnQgeyBJTUdfU0laRSwgVEhVTUJOQUlMX1NJWkUsIFBSRVNFTlRfSU1BR0VTLCBUSFVNQk5BSUxfUEFUSCB9IGZyb20gJy4uLy4uL2NvbnN0JztcbmltcG9ydCB7IHJhbmRvbUNvb3JkaW5hdGUsIGNvbnZlcnRDb29yZGluYXRlLCBjb29yZGluYXRlRGlzdGFuY2VBbmREZWdyZWUgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgYWN0aW9ucyB9ID0gdGhpcy5wcm9wc1xuICAgIGFjdGlvbnMubG9hZEltYWdlcygpXG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICByZXR1cm4gKChuZXh0UHJvcHMuc2VhcmNoSW1hZ2UucmVzdWx0SWQgJiYgIXRoaXMucHJvcHMuc2VhcmNoSW1hZ2UucmVzdWx0SWQpIHx8XG4gICAgICAoIW5leHRQcm9wcy5zZWFyY2hJbWFnZS5yZXN1bHRJZCAmJiB0aGlzLnByb3BzLnNlYXJjaEltYWdlLnJlc3VsdElkKSB8fFxuICAgICAgbmV4dFByb3BzLnNlYXJjaEltYWdlLmFuYWx5emluZyAhPT0gdGhpcy5wcm9wcy5zZWFyY2hJbWFnZS5hbmFseXppbmcgfHxcbiAgICAgIG5leHRQcm9wcy5zZWFyY2hJbWFnZS5hbmFseXplSWQgIT09IHRoaXMucHJvcHMuc2VhcmNoSW1hZ2UuYW5hbHl6ZUlkIHx8XG4gICAgICBfLnNpemUobmV4dFByb3BzLnNlYXJjaEltYWdlLmltYWdlcykgIT09IF8uc2l6ZSh0aGlzLnByb3BzLnNlYXJjaEltYWdlLmltYWdlcykgfHxcbiAgICAgIF8uc2l6ZShuZXh0UHJvcHMuc2VhcmNoSW1hZ2UucmVzdWx0SW1hZ2VzKSAhPT0gXy5zaXplKHRoaXMucHJvcHMuc2VhcmNoSW1hZ2UucmVzdWx0SW1hZ2VzKSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChfLnNpemUodGhpcy5wcm9wcy5zZWFyY2hJbWFnZS5pbWFnZXMpID4gXy5zaXplKHByZXZQcm9wcy5zZWFyY2hJbWFnZS5pbWFnZXMpIHx8XG4gICAgICBfLnNpemUodGhpcy5wcm9wcy5zZWFyY2hJbWFnZS5yZXN1bHRJbWFnZXMpID4gXy5zaXplKHByZXZQcm9wcy5zZWFyY2hJbWFnZS5yZXN1bHRJbWFnZXMpKSB7XG4gICAgICB0aGlzLmFkZEFuaW1hdGlvbih0aGlzLm1vdmVBbmltYXRpb24pXG4gICAgfVxuICB9XG5cbiAgb25DbGlja0ltYWdlKGltYWdlSWQsIGUpIHtcbiAgICBjb25zdCB7IGFjdGlvbnMgfSA9IHRoaXMucHJvcHNcbiAgICBhY3Rpb25zLnNlbGVjdFJlc3VsdEltYWdlKGltYWdlSWQpXG4gIH1cblxuICBtb3ZlQW5pbWF0aW9uKHt0YXJnZXR9KSB7XG4gICAgbGV0IGVsZW1lbnRzID0gdGFyZ2V0LmZpbmRBbGwoe25hbWU6ICdjaXJjbGUnfSlcbiAgICB0aGlzLnRsID0gbmV3IFRpbWVsaW5lTWF4KHtcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgICB5b3lvOiB0cnVlLFxuICAgIH0pXG4gICAgbGV0IGFuaW1zID0gXy5tYXAoZWxlbWVudHMsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIFR3ZWVuTGl0ZS5mcm9tVG8oZWxlbWVudCwgNjAsIFxuICAgICAgICB7XG4gICAgICAgICAgeDogXy5yYW5kb20oLTcwLCA3MCksXG4gICAgICAgICAgeTogXy5yYW5kb20oLTcwLCA3MCksXG4gICAgICAgICAgcm90YXRpb246IF8ucmFuZG9tKC0zMCwgMzApLFxuICAgICAgICAgIHlveW86IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB4OiBfLnJhbmRvbSgtMTIwLCAxMjApLFxuICAgICAgICAgIHk6IF8ucmFuZG9tKC0xMjAsIDE4MCksXG4gICAgICAgICAgcm90YXRpb246IF8ucmFuZG9tKC02MCwgOTApLFxuICAgICAgICB9LFxuICAgICAgKVxuICAgIH0pXG4gICAgdGhpcy50bC5hZGQoYW5pbXMpXG4gICAgcmV0dXJuIHRoaXMudGxcbiAgfVxuXG4gIHJlbmRlclJhbmRvbUltYWdlcygpIHtcbiAgICBjb25zdCB7IGFwcCwgc2VhcmNoSW1hZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGFwcFxuICAgIGNvbnN0IHsgYW5hbHl6ZUlkLCByZXN1bHRJZCwgaW1hZ2VzIH0gPSBzZWFyY2hJbWFnZVxuXG4gICAgcmV0dXJuIF8ubWFwKGltYWdlcywgKGltYWdlLCBpKSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBfLnJhbmRvbSgtMTksIDgwKVxuICAgICAgY29uc3Qgc2l6ZSA9IFRIVU1CTkFJTF9TSVpFICsgb2Zmc2V0IC8vIG1pbjogNDEsIG1heDogMTQwXG4gICAgICBjb25zdCByYXRlID0gKHNpemUgLSA0MCkgLy8gMSAtIDEwMFxuICAgICAgY29uc3Qgb3BhY2l0eSA9IChyYXRlIC8gMTAwKSAvIDIuNVxuICAgICAgY29uc3QgeyB4LCB5IH0gPSByYW5kb21Db29yZGluYXRlKHdpZHRoIC0gc2l6ZSwgaGVpZ2h0IC0gc2l6ZSlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgbmFtZT17YGNpcmNsZWB9IGtleT17YHByZXNlbnQke2l9YH0gY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhcImNpcmNsZVwiLCBcInRodW1ibmFpbFwiKSB9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHpJbmRleDogaSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiB5LFxuICAgICAgICAgICAgbGVmdDogeCxcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICAgICAgbGluZUhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDQ4LCAzNSwgMTc0LCAwLjMpYCxcbiAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17IFRIVU1CTkFJTF9QQVRIKHtpZDogaW1hZ2Uua2V5fSkgfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICBvcGFjaXR5OiBvcGFjaXR5LFxuICAgICAgICAgICAgfX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyUmVzdWx0SW1hZ2VzKCkge1xuICAgIGNvbnN0IHsgYXBwLCBzZWFyY2hJbWFnZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gYXBwXG4gICAgY29uc3QgeyBhbmFseXppbmcsIGFuYWx5emVJZCwgcmVzdWx0SW1hZ2VzIH0gPSBzZWFyY2hJbWFnZVxuICAgIGlmIChhbmFseXppbmcgfHwgIWFuYWx5emVJZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBfLm1hcChyZXN1bHRJbWFnZXMsIChpbWFnZSwgaSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBuYW1lPXtgY2lyY2xlYH0ga2V5PXtgcmVzdWx0JHtpfWB9IFxuICAgICAgICAgIGNsYXNzTmFtZT17IGNsYXNzTmFtZXMoXCJjaXJjbGVcIiwgXCJ0aHVtYm5haWxcIikgfVxuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uQ2xpY2tJbWFnZS5iaW5kKHRoaXMsIGltYWdlLmtleSkgfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB6SW5kZXg6IGksXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogaW1hZ2UueSxcbiAgICAgICAgICAgIGxlZnQ6IGltYWdlLngsXG4gICAgICAgICAgICBoZWlnaHQ6IGltYWdlLnNpemUsXG4gICAgICAgICAgICB3aWR0aDogaW1hZ2Uuc2l6ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IGltYWdlLm9wYWNpdHksXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBgJHtpbWFnZS5zaXplfXB4YCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlclwiXG4gICAgICAgICAgICBzcmM9eyBUSFVNQk5BSUxfUEFUSCh7aWQ6IGltYWdlLmtleX0pIH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGhlaWdodDogaW1hZ2Uuc2l6ZSxcbiAgICAgICAgICAgICAgd2lkdGg6IGltYWdlLnNpemUsXG4gICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIH19Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlclB1bHNhdGUoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IFRIVU1CTkFJTF9TSVpFLFxuICAgICAgd2lkdGg6IFRIVU1CTkFJTF9TSVpFLFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxzZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzLWNlbnRlclwiIHN0eWxlPXtzdHlsZX0vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzLWNlbnRlclwiIHN0eWxlPXtzdHlsZX0vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzLWNlbnRlclwiIHN0eWxlPXtzdHlsZX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyTGF5ZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNiwgMzUsIDEyNiwgMC45KSdcbiAgICAgICAgfX0vPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFuYWx5emluZywgYW5hbHl6ZUlkLCByZXN1bHRJZCB9ID0gdGhpcy5wcm9wcy5zZWFyY2hJbWFnZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHJlc3VsdElkID8gXCJibHVyXCI6XCJcIn0+XG4gICAgICAgIHsgZG8ge1xuICAgICAgICAgIGlmIChhbmFseXppbmcpIHtcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJQdWxzYXRlKCkgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoYW5hbHl6ZUlkIHx8IHJlc3VsdElkKSB7XG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyUmVzdWx0SW1hZ2VzKCkgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyUmFuZG9tSW1hZ2VzKCkgfVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgeyByZXN1bHRJZCA/IHRoaXMucmVuZGVyTGF5ZXIoKSA6IG51bGwgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhcHA6IHN0YXRlLmFwcCxcbiAgICBzZWFyY2hJbWFnZTogc3RhdGUuc2VhcmNoSW1hZ2VcbiAgfVxufVxuXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMsIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlVG9Qcm9wcyxcbiAgZGlzcGF0Y2hUb1Byb3BzXG4pKEdTQVAoKShCYWNrZ3JvdW5kKSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1NlYXJjaEltYWdlL0JhY2tncm91bmQuanN4IiwiZXhwb3J0ICogZnJvbSAnLi9jb29yZGluYXRlJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tQ29vcmRpbmF0ZShtYXhYLCBtYXhZKSB7XG4gIHJldHVybiB7XG4gICAgeDogXy5yYW5kb20obWF4WCksXG4gICAgeTogXy5yYW5kb20obWF4WSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29udmVydENvb3JkaW5hdGUgPSAoZGlzdGFuY2UpID0+IHtcbiAgcmV0dXJuIGRpc3RhbmNlXG59XG5cbmV4cG9ydCBjb25zdCBjb29yZGluYXRlRGlzdGFuY2VBbmREZWdyZWUgPSAoZGlzdGFuY2UsIGRlZ3JlZSwgb2Zmc2V0PTApID0+IHtcbiAgY29uc3QgX3dpbmRvdyA9IHtcbiAgICB3aWR0aDogKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCAwKSxcbiAgICBoZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCAwKSxcbiAgfVxuICBjb25zdCBjZW50ZXJXaWR0aCA9IF93aW5kb3cud2lkdGggLyAyXG4gIGNvbnN0IGNlbnRlckhlaWdodCA9IF93aW5kb3cuaGVpZ2h0IC8gMlxuXHRsZXQgcmFkaWFuID0gZGVncmVlc1RvUmFkaWFucyhkZWdyZWUpXG4gIHJldHVybiB7XG4gICAgeDogY2VudGVyV2lkdGggKyAoTWF0aC5jb3MocmFkaWFuKSAqIChkaXN0YW5jZSArIG9mZnNldCkpLFxuICAgIHk6IGNlbnRlckhlaWdodCArIChNYXRoLnNpbihyYWRpYW4pICogKGRpc3RhbmNlICsgb2Zmc2V0KSlcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWdyZWVzVG9SYWRpYW5zKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIChkZWdyZWVzICogTWF0aC5QSSkgLyAxODBcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2Nvb3JkaW5hdGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcHBcIjoge1xuXHRcdFwidGl0bGVcIjogXCJRdWVyeUl0IFNtYXJ0XCIsXG5cdFx0XCJzdWJ0aXRsZVwiOiBcIlRoZXJlIGFyZSBtb3JlIHRoYW4gYSBtaWxsaW9uIGltYWdlcyBoZXJlLlxcbldoZW4geW91IGNsaWNrIG9uIHRoZSBpbWFnZSB5b3UgbGlrZS5cXG5BSSB3aWxsIGFuYWx5emUgYW5kIGZpbmQgYSBzaW1pbGFyIG9uZSBmcm9tIG1pbGxpb24gaW1hZ2VzLlwiXG5cdH0sXG5cdFwic2VhcmNoSW1hZ2VcIjoge1xuXHRcdFwic2VsZWN0XCI6IHtcblx0XHRcdFwidGl0bGVcIjogXCJJbWFnZVwiLFxuXHRcdFx0XCJzdWJ0aXRsZVwiOiBcIlRoZXJlIGFyZSBtb3JlIHRoYW4gYSBtaWxsaW9uIGltYWdlcyBoZXJlLlxcbldoZW4geW91IGNsaWNrIG9uIHRoZSBpbWFnZSB5b3UgbGlrZS5cXG5BSSB3aWxsIGFuYWx5emUgYW5kIGZpbmQgYSBzaW1pbGFyIG9uZSBmcm9tIG1pbGxpb24gaW1hZ2VzLlwiXG5cdFx0fSxcblx0XHRcImFuYWx5emluZ1wiOiB7XG5cdFx0XHRcInRpdGxlXCI6IFwiQW5hbHl6aW5nLi4uXCIsXG5cdFx0XHRcInN1YnRpdGxlXCI6IFwiMSBtaWxsaW9uIGltYWdlcyAvICR7dGltZX0gc2VjXCJcblx0XHR9LFxuXHRcdFwiYW5hbHl6ZWRcIjoge1xuXHRcdFx0XCJ0aXRsZVwiOiBcIkZpbmlzaGVkIVwiLFxuXHRcdFx0XCJzdWJ0aXRsZVwiOiBcIjEgbWlsbGlvbiBpbWFnZXMgb3ZlciAke3RpbWV9IHNlY29uZHNcIlxuXHRcdH0sXG5cdFx0XCJkZXRhaWxcIjoge1xuXHRcdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFx0XCJ1dGl0MVwiOiBcIk5lYXJcIixcblx0XHRcdFwidXRpdDJcIjogXCJGYXJcIlxuXHRcdH1cblx0fVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9sYW5nLmpzb25cbi8vIG1vZHVsZSBpZCA9IDQyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFNsaWRlciBmcm9tICdtYXRlcmlhbC11aS9TbGlkZXInXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgc3VidGl0bGUsIHN0eWxlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1oZWFkZXJcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnsgdGl0bGUgfTwvcD5cbiAgICAgICAgPGgyPnsgc3VidGl0bGUgfTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TZWFyY2hJbWFnZS9IZWFkZXIuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuY2xhc3MgUXVlcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LW1hcnF1ZWVcIj5cbiAgICAgICAgPHByZT57IHRleHQgfTwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXJ5XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TZWFyY2hJbWFnZS9RdWVyeS5qc3giLCJpbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJ1xuaW1wb3J0IHsgd2hpdGUgfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvY29sb3JzJ1xuXG5leHBvcnQgY29uc3QgZGFya1RoZW1lID0gZ2V0TXVpVGhlbWUoe1xuICBzbGlkZXI6IHtcbiAgICB0cmFja1NpemU6IDMsXG4gICAgdHJhY2tDb2xvcjogd2hpdGUsXG4gICAgdHJhY2tDb2xvclNlbGVjdGVkOiB3aGl0ZSxcbiAgICBoYW5kbGVTaXplOiAzMCxcbiAgICBoYW5kbGVTaXplRGlzYWJsZWQ6IDMwLFxuICAgIGhhbmRsZVNpemVBY3RpdmU6IDMwLFxuICAgIGhhbmRsZUNvbG9yWmVybzogd2hpdGUsXG4gICAgaGFuZGxlRmlsbENvbG9yOiB3aGl0ZSxcbiAgICBzZWxlY3Rpb25Db2xvcjogd2hpdGUsXG4gICAgcmlwcGxlQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCknLFxuICB9LCBcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3R5bGVzL3RoZW1hLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2FwcEFjdGlvbnMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5jbGFzcyBSZXN0YXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBvbkNsaWNrKGUpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMucmVzdGFydCgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25cbiAgICAgICAgbGFiZWw9J1Jlc3RhcnQnXG4gICAgICAgIGhhbmRsZXI9eyB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhcHA6IHN0YXRlLmFwcCxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMsIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFJlc3RhcnQpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9SZXN0YXJ0LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIHN0eWxlLCBoYW5kbGVyIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgZGVmYXVsdFN0eWxlID0ge1xuICAgICAgekluZGV4OiAxMDAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICBib3R0b206IDYwLFxuICAgICAgcmlnaHQ6IDYwLFxuICAgICAgZm9udFNpemU6ICcyNnB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxMDBweCcsXG4gICAgICBjb2xvcjogJyMzMDIzYWUnLFxuICAgICAgYm94U2hhZG93OiAnMHB4IDBweCAwcHggOHB4ICMzMDIzYWUsIDBweCAwcHggMHB4IDE4cHggd2hpdGUnLFxuICAgICAgdHJhbnNpdGlvbjogJ3Nob3cgMS41cyBsaW5lYXInXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzTmFtZXMoXCJjaXJjbGVcIiwgXCJob3Zlci1saXRlXCIpIH1cbiAgICAgICAgc3R5bGU9eyBfLmRlZmF1bHRzKHN0eWxlLCBkZWZhdWx0U3R5bGUpIH1cbiAgICAgICAgb25DbGljaz17IGhhbmRsZXIgfT5cbiAgICAgICAgeyBsYWJlbCB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9CdXR0b24uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3NlYXJjaEltYWdlQWN0aW9ucydcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5cbmNsYXNzIENsb3NlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBvbkNsaWNrKGUpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuY2xvc2UoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGxhYmVsPSdDbG9zZSdcbiAgICAgICAgaGFuZGxlcj17IHRoaXMub25DbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIGFwcDogc3RhdGUuYXBwLFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoQ2xvc2UpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9DbG9zZS5qc3giLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoKSB7XG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmssIGNyZWF0ZUxvZ2dlcigpXVxuICBsZXQgc3RvcmVcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSlcbiAgICBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRm9yIFJlZHV4IERldnRvb2xzXG4gICAgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcbiAgICAvLyBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpLCBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXG4gIH1cblxuICBpZiAobW9kdWxlLmhvdCkge1xuICAgIC8vIEVuYWJsZSBXZWJwYWNrIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQgZm9yIHJlZHVjZXJzXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4uL3JlZHVjZXJzJywgKCkgPT4ge1xuICAgICAgY29uc3QgbmV4dFJlZHVjZXIgPSByZXF1aXJlKCcuLi9yZWR1Y2VycycpLmRlZmF1bHRcbiAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHN0b3JlXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHBSZWR1Y2VycydcbmltcG9ydCBzZWFyY2hJbWFnZSBmcm9tICcuL3NlYXJjaEltYWdlUmVkdWNlcnMnXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYXBwLFxuICBzZWFyY2hJbWFnZSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgd2lkdGg6IF8uZ2V0KHdpbmRvdywgJ2lubmVyV2lkdGgnLCAwKSxcbiAgaGVpZ2h0OiBfLmdldCh3aW5kb3csICdpbm5lckhlaWdodCcsIDApLFxuICBjaGFubmVsOiAtMSxcbn1cblxuY29uc3QgYXBwID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuUkVTSVpFX1dJTkRPVzpcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gYWN0aW9uXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgICAgfVxuICAgIGNhc2UgdHlwZXMuUkVTVEFSVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjaGFubmVsOiAtMSxcbiAgICAgIH1cbiAgICBjYXNlIHR5cGVzLlNFTEVDVF9DSEFOTkVMOlxuICAgICAgY29uc3QgeyBpbmRleCB9ID0gYWN0aW9uXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2hhbm5lbDogaW5kZXgsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHVjZXJzL2FwcFJlZHVjZXJzLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgdHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4J1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGltYWdlczogW10sXG4gIHJlc3VsdEltYWdlczogW10sXG4gIGxvYWRlZEltYWdlSWRzOiBbXSxcbiAgbG9hZEVycm9ySW1hZ2VJZHM6IFtdLFxuICBhbmFseXplSWQ6IG51bGwsXG4gIHJlc3VsdElkOiBudWxsLFxuICBhbmFseXppbmc6IGZhbHNlLFxuICBlcnJvcjogbnVsbCxcbn1cblxuY29uc3Qgc2VhcmNoSW1hZ2UgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5MT0FEX0lNQUdFUzpcbiAgICAgIGNvbnN0IHsgaW1hZ2VzLCBlcnJvciB9ID0gYWN0aW9uXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW1hZ2VzLFxuICAgICAgICBlcnJvcixcbiAgICAgIH1cbiAgICBjYXNlIHR5cGVzLlNFTEVDVF9QUkVTRU5UX0lNQUdFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFuYWx5emVJZDogYWN0aW9uLmltYWdlSWQsXG4gICAgICAgIGFuYWx5emluZzogdHJ1ZSxcbiAgICAgICAgcmVzdWx0SW1hZ2VzOiBbXSxcbiAgICAgIH1cbiAgICBjYXNlIHR5cGVzLlNJTUlMQVJFRF9JTUFHRToge1xuICAgICAgY29uc3QgeyBpbWFnZUlkLCByZXN1bHRzIH0gPSBhY3Rpb25cbiAgICAgIGxldCBpbWFnZXMgPSBfLnJlamVjdChyZXN1bHRzLCBpbWFnZSA9PiBpbWFnZS5rZXkgPT09IGltYWdlSWQpXG4gICAgICBpbWFnZXMgPSBmaXhQb3NpdGlvbihpbWFnZXMpXG4gICAgICBpbWFnZXMgPSBfLnJldmVyc2UoaW1hZ2VzKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFuYWx5emluZzogZmFsc2UsXG4gICAgICAgIGFuYWx5emVJZDogaW1hZ2VJZCxcbiAgICAgICAgcmVzdWx0SW1hZ2VzOiBpbWFnZXMsXG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgdHlwZXMuU0VMRUNUX1JFU1VMVF9JTUFHRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXN1bHRJZDogYWN0aW9uLmltYWdlSWRcbiAgICAgIH1cbiAgICBjYXNlIHR5cGVzLkNMT1NFX0lNQUdFX1NFQVJDSDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXN1bHRJZDogbnVsbCxcbiAgICAgIH1cbiAgICBjYXNlIHR5cGVzLlJFU1RBUlQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVzdWx0SW1hZ2VzOiBbXSxcbiAgICAgICAgYW5hbHl6ZUlkOiBudWxsLFxuICAgICAgICByZXN1bHRJZDogbnVsbCxcbiAgICAgICAgYW5hbHl6aW5nOiBmYWxzZSxcbiAgICAgIH1cbiAgICBjYXNlIHR5cGVzLklNR19MT0FERUQ6IHtcbiAgICAgIGNvbnN0IHsgbG9hZGVkSW1hZ2VJZHMsIGxvYWRFcnJvckltYWdlSWRzIH0gPSBzdGF0ZVxuICAgICAgY29uc3QgeyBpZCB9ID0gYWN0aW9uXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGVkSW1hZ2VJZHM6IF8udW5pb24obG9hZGVkSW1hZ2VJZHMsIFtpZF0pLFxuICAgICAgICBsb2FkRXJyb3JJbWFnZUlkczogXy5yZWplY3QobG9hZEVycm9ySW1hZ2VJZHMsIGlkKSxcbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSB0eXBlcy5JTUdfTE9BRF9FUlI6IHtcbiAgICAgIGNvbnN0IHsgbG9hZGVkSW1hZ2VJZHMsIGxvYWRFcnJvckltYWdlSWRzIH0gPSBzdGF0ZVxuICAgICAgY29uc3QgeyBpZCB9ID0gYWN0aW9uXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGVkSW1hZ2VJZHM6IF8ucmVqZWN0KGxvYWRlZEltYWdlSWRzLCBpZCksXG4gICAgICAgIGxvYWRFcnJvckltYWdlSWRzOiBfLnVuaW9uKGxvYWRFcnJvckltYWdlSWRzLCBbaWRdKSxcbiAgICAgIH1cbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGZpeFBvc2l0aW9uID0gKGltYWdlcykgPT4ge1xuICBjb25zdCBNQVhfU0laRSA9IDIwMFxuICBjb25zdCBNSU5fU0laRSA9IDNcbiAgY29uc3QgQUpVU1RfU0laRSA9IDNcbiAgcmV0dXJuIF8ubWFwKGltYWdlcywgKGltYWdlLCBpKSA9PiB7XG4gICAgbGV0IHNpemUgPSBNQVhfU0laRSAtIChpICogQUpVU1RfU0laRSkgfCAwXG4gICAgbGV0IG9wYWNpdHkgPSAxIC0gKChNYXRoLmZsb29yKGkgLyAxMCkpIC8gMTApXG4gICAgaW1hZ2Uuc2l6ZSA9IHNpemUgPiBNSU5fU0laRSA/IHNpemUgOiBNSU5fU0laRVxuICAgIGltYWdlLm9wYWNpdHkgPSBvcGFjaXR5IDwgMCA/IDAuMSA6IG9wYWNpdHlcbiAgICBpbWFnZS54ID0gXy5yYW5kb20oMCwgd2luZG93LmlubmVyV2lkdGgpXG4gICAgaW1hZ2UueSA9IF8ucmFuZG9tKDAsIHdpbmRvdy5pbm5lckhlaWdodClcbiAgICByZXR1cm4gaW1hZ2VcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoSW1hZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1Y2Vycy9zZWFyY2hJbWFnZVJlZHVjZXJzLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUp1cmEpO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZsZXgtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLmZsZXgtY29udGFpbmVyLmlzLXJpZ2h0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcbiAgLmZsZXgtY29udGFpbmVyLmlzLWNlbnRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmZsZXgtaXRlbSB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZmxleDogMTsgfVxcblxcbi5oYXMtdGV4dC1jZW50ZXJlZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uaGFzLXRleHQtbGVmdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLmhhcy10ZXh0LXJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuQGtleWZyYW1lcyBsZWF2ZSB7XFxuICBmcm9tIHsgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiB0cmFuc2xhdGVYKDUwMHB4KTsgfSB9XFxuXFxuLmxlYXZlIHtcXG4gIG9wYWNpdHk6IDAuMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbjsgfVxcblxcbkBrZXlmcmFtZXMgcHVsc2F0ZTIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxcbiAgMjAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDE3cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTsgfVxcbiAgNDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDQ3cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTsgfVxcbiAgNjAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDc3cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMTA3cHggd2hpdGU7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG4uY2lyY2xlIHtcXG4gIGhlaWdodDogMzQ0cHg7XFxuICB3aWR0aDogMzQ0cHg7XFxuICBsaW5lLWhlaWdodDogMzQ0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDFweCBzb2xkIHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuY2lyY2xlIC50ZXh0IHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgIC5jaXJjbGUgLnRleHQuYmctY2lyY2xlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjRThFQUY2LCAjM0Y1MUI1IDUwJSwgIzMwM0Y5RiA2MCUsICMzMTFCOTIpOyB9XFxuICAgIC5jaXJjbGUgLnRleHQuYmctcmlnaHQge1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0U4RUFGNiwgIzNGNTFCNSk7IH1cXG4gICAgLmNpcmNsZSAudGV4dC5iZy1sZWZ0IHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzRjUxQjUsICNFOEVBRjYpOyB9XFxuXFxuLmJvcmRlci1ib2xkIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IHNvbGlkIDEwcHggd2hpdGU7IH1cXG5cXG4uY2lyY2xlLW91dGVyIHtcXG4gIGhlaWdodDogMzQ1cHg7XFxuICB3aWR0aDogMzQ1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTsgfVxcblxcbi50aHVtYm5haWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAudGh1bWJuYWlsIGltZyB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbiAgICB3aWR0aDogMzQ0cHg7XFxuICAgIGhlaWdodDogMzQ0cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzOyB9XFxuICAgIC50aHVtYm5haWwgaW1nLmxhcmdlIHtcXG4gICAgICBib3JkZXI6IHNvbGlkIDhweCB3aGl0ZTtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7IH1cXG5cXG4uYmctY2xlYXIge1xcbiAgb3BhY2l0eTogMDsgfVxcbiAgLmJnLWNsZWFyID4gaW1nIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcblxcbi5pcy1jZW50ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuXFxuLmlzLXJpZ2h0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDcwJSwgLTUwJSk7IH1cXG5cXG4uaXMtbGVmdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTcwJSwgLTUwJSk7IH1cXG5cXG4uaG92ZXItbGl0ZTpob3ZlciB7XFxuICBhbmltYXRpb246IHNpbXBsZSAxcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7IH1cXG5cXG4uaG92ZXI6aG92ZXIge1xcbiAgei1pbmRleDogMTAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjgpOyB9XFxuXFxuLmhvdmVyLWNlbnRlcjpob3ZlciB7XFxuICB6LWluZGV4OiAxMDA7XFxuICBhbmltYXRpb246IHB1bHNhdGUyY2VudGVyIDFzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTsgfVxcblxcbi5ob3Zlci1yaWdodDpob3ZlciB7XFxuICB6LWluZGV4OiAxMDA7XFxuICBhbmltYXRpb246IHB1bHNhdGUycmlnaHQgMXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOyB9XFxuXFxuLmhvdmVyLWxlZnQ6aG92ZXIge1xcbiAgei1pbmRleDogMTAwO1xcbiAgYW5pbWF0aW9uOiBwdWxzYXRlMmxlZnQgMXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOyB9XFxuXFxuLnByb2dyZXNzIHtcXG4gIGhlaWdodDogNDcwcHg7XFxuICB3aWR0aDogNDcwcHg7XFxuICB0b3A6IGNhbGMoNTAlIC0gMjM1cHgpO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAyMzVweCk7XFxuICBhbmltYXRpb246IHJvdGF0b3IgMS44cyBsaW5lYXIgaW5maW5pdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDIwMDA7IH1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0b3Ige1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7IH0gfVxcblxcbi5wYXRoIHtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDE4NztcXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgYW5pbWF0aW9uOiBkYXNoIDEuOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUsIHdoaXRlX2NvbG9ycyA3LjJzIGVhc2UtaW4tb3V0IGluZmluaXRlOyB9XFxuXFxuQGtleWZyYW1lcyB3aGl0ZV9jb2xvcnMge1xcbiAgMCUge1xcbiAgICBzdHJva2U6ICNGRkZGRkY7IH1cXG4gIDI1JSB7XFxuICAgIHN0cm9rZTogI0ZGRkZGRjsgfVxcbiAgNTAlIHtcXG4gICAgc3Ryb2tlOiAjRkZGRkZGOyB9XFxuICA3NSUge1xcbiAgICBzdHJva2U6ICNGRkZGRkY7IH1cXG4gIDEwMCUge1xcbiAgICBzdHJva2U6ICNGRkZGRkY7IH0gfVxcblxcbkBrZXlmcmFtZXMgY29sb3JzIHtcXG4gIDAlIHtcXG4gICAgc3Ryb2tlOiAjNDI4NUY0OyB9XFxuICAyNSUge1xcbiAgICBzdHJva2U6ICNERTNFMzU7IH1cXG4gIDUwJSB7XFxuICAgIHN0cm9rZTogI0Y3QzIyMzsgfVxcbiAgNzUlIHtcXG4gICAgc3Ryb2tlOiAjMUI5QTU5OyB9XFxuICAxMDAlIHtcXG4gICAgc3Ryb2tlOiAjNDI4NUY0OyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGRhc2gge1xcbiAgMCUge1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTg3OyB9XFxuICA1MCUge1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNDYuNzU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTg3O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NTBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoOCk7XFxuICAgIG9wYWNpdHk6IC4yOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMTUpO1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG4ucHVsc2UgZGl2IHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1M2EwZmQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4OyB9XFxuICAucHVsc2UgZGl2Om50aC1jaGlsZCgxKSB7XFxuICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7IH1cXG4gIC5wdWxzZSBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZSAuM3M7IH1cXG4gIC5wdWxzZSBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZSAuNnM7IH1cXG5cXG4uY2VudGVyLWdyYWRhdGlvbi1ibHVlIHtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjNTNhMGZkLCAjMzAyM2FlIDYwJSwgIzMwMjNhZSk7IH1cXG5cXG4uYmx1ciB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGZpbHRlcjogYmx1cigxMHB4KTsgfVxcblxcbkBrZXlmcmFtZXMgc2FtcGxlIHtcXG4gIDIwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxN3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7IH1cXG4gIDQwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCA0N3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7IH1cXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCA3N3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgfVxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDEwN3B4IHdoaXRlOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfSB9XFxuXFxuQGtleWZyYW1lcyBzaW1wbGUge1xcbiAgNTAlIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggOHB4ICMzMDIzYWUsIDBweCAwcHggMHB4IDE4cHggd2hpdGUsIDBweCAwcHggMHB4IDI4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNhdGUyY2VudGVyIHtcXG4gIDAlIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTsgfVxcbiAgNSUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMTdweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpOyB9XFxuICAxMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMTdweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpLCAwcHggMHB4IDBweCA0N3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgfVxcbiAgMTAwJSB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7IH0gfVxcblxcbkBrZXlmcmFtZXMgcHVsc2F0ZTJyaWdodCB7XFxuICAwJSB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cXG4gIDUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzAlLCAtNTAlKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMTdweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpOyB9XFxuICAxMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MCUsIC01MCUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxN3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNiksIDBweCAwcHggMHB4IDQ3cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XFxuICAxMDAlIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTsgfSB9XFxuXFxuQGtleWZyYW1lcyBwdWxzYXRlMmxlZnQge1xcbiAgMCUge1xcbiAgICBib3gtc2hhZG93OiBub25lOyB9XFxuICA1JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNzAlLCAtNTAlKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMTdweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpOyB9XFxuICAxMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTcwJSwgLTUwJSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDE3cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KSwgMHB4IDBweCAwcHggNDdweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiBub25lOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIG1hcnF1ZWUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwMCUpOyB9IH1cXG5cXG4uYm94LW1hcnF1ZWUge1xcbiAgei1pbmRleDogMjAwMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMHB4O1xcbiAgcmlnaHQ6IDYwcHg7XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIGhlaWdodDogMzQwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAuYm94LW1hcnF1ZWUgcHJlIHtcXG4gICAgYW5pbWF0aW9uOiBtYXJxdWVlIDEycyBsaW5lYXIgaW5maW5pdGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4uZmFkZWlub3V0LWFwcGVhciB7XFxuICBvcGFjaXR5OiAwLjAxOyB9XFxuXFxuLmZhZGVpbm91dC1hcHBlYXIuZmFkZWlub3V0LWFwcGVhci1hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW47IH1cXG5cXG4uZmFkZWlub3V0LWVudGVyIHtcXG4gIG9wYWNpdHk6IDAuMTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40czsgfVxcblxcbi5mYWRlaW5vdXQtZW50ZXIuZmFkZWlub3V0LWVudGVyLWFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLmZhZGVpbm91dC1sZWF2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzOyB9XFxuXFxuLmZhZGVpbm91dC1sZWF2ZS5mYWRlaW5vdXQtbGVhdmUtYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDAuMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW47IH1cXG5cXG5odG1sLCBib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6ICdKdXJhJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogODVweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7IH1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBtYXgtaGVpZ2h0OiAxMDAlOyB9XFxuXFxucHJlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbjogMjBweDsgfVxcblxcbnNwYW4ge1xcbiAgZm9udC1zaXplOiA0NnB4O1xcbiAgbWF4LWhlaWdodDogMTAwJTsgfVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uY29udGVudC1oZWFkZXIge1xcbiAgei1pbmRleDogMTAwMjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiA3MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCBjYWxjKC01MCUgLSAzMjBweCkpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5jb250ZW50IHtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTsgfVxcblxcbi5jb250ZW50LWZvb3RlciB7XFxuICB6LWluZGV4OiAxMDAxO1xcbiAgd2lkdGg6IDEyNDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgY2FsYyg1MCUgKyAxNjBweCkpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG4gIG9wYWNpdHk6IDE7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9zdHlsZXMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmNsYXNzIENpcmNsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW1nU3JjLCBzdHlsZSxvbkNsaWNrPSgpPT57fSwgb25Nb3VzZU92ZXI9KCk9Pnt9LCBvbkxvYWQ9KCk9Pnt9LCBvbkVycm9yPSgpPT57fSwgY2xhc3NOYW1lXz1cIlwiLCBvdXRlckNsYXNzTmFtZT1cIlwiLCBpbWdDbGFzc05hbWU9XCJcIiB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhcImNpcmNsZS1vdXRlclwiLCBvdXRlckNsYXNzTmFtZSkgfVxuICAgICAgICBvbkNsaWNrPXsgb25DbGljayB9XG4gICAgICAgIG9uTW91c2VPdmVyPSB7IG9uTW91c2VPdmVyIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhcImNpcmNsZVwiLCBcInRodW1ibmFpbFwiLCBjbGFzc05hbWVfKSB9PlxuICAgICAgICAgIDxpbWcgc3JjPXsgaW1nU3JjIH0gY2xhc3NOYW1lPXsgaW1nQ2xhc3NOYW1lIH0gXG4gICAgICAgICAgICBvbkVycm9yPXsgb25FcnJvciB9XG4gICAgICAgICAgICBvbkxvYWQ9eyBvbkxvYWQgfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU2VhcmNoSW1hZ2UvQ2lyY2xlLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=

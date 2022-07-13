(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-notifications-component"] = factory(require("react"));
	else
		root["react-notifications-component"] = factory(root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Container.tsx":
/*!**************************************!*\
  !*** ./src/components/Container.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification */ "./src/components/Notification.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.ts");
/* harmony import */ var _scss_notification_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/notification.scss */ "./src/scss/notification.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var Container = /*#__PURE__*/function (_React$Component) {
  _inherits(Container, _React$Component);

  var _super = _createSuper(Container);

  function Container(props) {
    var _this;

    _classCallCheck(this, Container);

    _this = _super.call(this, props);

    _this.handleResize = function () {
      _this.setState({
        windowWidth: window.innerWidth
      });
    };

    _this.add = function (notification) {
      _this.setState(function (_ref) {
        var notifications = _ref.notifications;

        var nextNotifications = _toConsumableArray(notifications);

        var i = nextNotifications.findIndex(function (_ref2) {
          var id = _ref2.id;
          return id === notification.id;
        });

        if (i > -1) {
          nextNotifications[i] = notification;
          return {
            notifications: nextNotifications
          };
        }

        return {
          notifications: notification.insert === 'top' ? [notification].concat(_toConsumableArray(nextNotifications)) : [].concat(_toConsumableArray(nextNotifications), [notification])
        };
      });

      return notification.id;
    };

    _this.remove = function (id) {
      _this.setState(function (_ref3) {
        var notifications = _ref3.notifications;
        return {
          notifications: notifications.map(function (notification) {
            if (notification.id === id) {
              notification.hasBeenRemoved = true;
            }

            return notification;
          })
        };
      });
    };

    _this.removeAllNotifications = function () {
      _this.setState({
        notifications: _this.state.notifications.map(function (notification) {
          return Object.assign(Object.assign({}, notification), {
            hasBeenRemoved: true
          });
        })
      });
    };

    _this.toggleRemoval = function (id, callback) {
      _this.setState(function (_ref4) {
        var notifications = _ref4.notifications;
        return {
          notifications: notifications.filter(function (_ref5) {
            var nId = _ref5.id;
            return nId !== id;
          })
        };
      }, callback);
    };

    _this.state = {
      isMobile: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(props.isMobile) ? _utils_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_CONTAINER_VALUES.isMobile : props.isMobile,
      breakpoint: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(props.breakpoint) ? _utils_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_CONTAINER_VALUES.breakpoint : props.breakpoint,
      notifications: [],
      windowWidth: undefined
    };
    return _this;
  }

  _createClass(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          types = _this$props.types,
          defaultNotificationWidth = _this$props.defaultNotificationWidth;
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].register({
        addNotification: this.add,
        removeNotification: this.remove,
        removeAllNotifications: this.removeAllNotifications,
        defaultNotificationWidth: defaultNotificationWidth || _utils_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_CONTAINER_VALUES.defaultNotificationWidth,
        types: types
      });
      this.setState({
        windowWidth: window.innerWidth
      });
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "renderNotifications",
    value: function renderNotifications(notifications, isMobile) {
      var _this2 = this;

      return notifications.map(function (notification) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Notification__WEBPACK_IMPORTED_MODULE_1__.Notification, {
          id: notification.id,
          key: notification.id,
          isMobile: isMobile,
          defaultNotificationWidth: _this2.props.defaultNotificationWidth,
          notification: notification,
          toggleRemoval: _this2.toggleRemoval,
          notificationsCount: notifications.length,
          hasBeenRemoved: notification.hasBeenRemoved
        });
      });
    }
  }, {
    key: "renderMobileNotifications",
    value: function renderMobileNotifications(props) {
      var className = props.className,
          id = props.id;
      var notifications = this.state.notifications;
      var mobileNotifications = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.getNotificationsForMobileView)(notifications);
      var top = this.renderNotifications(mobileNotifications.top, true);
      var bottom = this.renderNotifications(mobileNotifications.bottom, true);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: id,
        key: "mobile",
        className: "rnc__base ".concat(className || '')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-container--mobile-top"
      }, top), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-container--mobile-bottom"
      }, bottom));
    }
  }, {
    key: "renderScreenNotifications",
    value: function renderScreenNotifications(props) {
      var className = props.className,
          id = props.id;
      var notifications = this.state.notifications;
      var items = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.getNotificationsForEachContainer)(notifications);
      var topFull = this.renderNotifications(items.topFull, false);
      var bottomFull = this.renderNotifications(items.bottomFull, false);
      var topLeft = this.renderNotifications(items.topLeft, false);
      var topRight = this.renderNotifications(items.topRight, false);
      var topCenter = this.renderNotifications(items.topCenter, false);
      var bottomLeft = this.renderNotifications(items.bottomLeft, false);
      var bottomRight = this.renderNotifications(items.bottomRight, false);
      var bottomCenter = this.renderNotifications(items.bottomCenter, false);
      var center = this.renderNotifications(items.center, false);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: id,
        key: "screen",
        className: "rnc__base ".concat(className || '')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-container--top-full"
      }, topFull), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-container--bottom-full"
      }, bottomFull), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-container--top-left"
      }, topLeft), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-container--top-right"
      }, topRight), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-container--bottom-left"
      }, bottomLeft), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-container--bottom-right"
      }, bottomRight), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-container--top-center"
      }, topCenter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-container--center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__util--flex-center"
      }, center)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-container--bottom-center"
      }, bottomCenter));
    }
  }, {
    key: "render",
    value: function render() {
      var isMobile = this.props.isMobile;
      var _this$state = this.state,
          windowWidth = _this$state.windowWidth,
          breakpoint = _this$state.breakpoint;

      if (isMobile && windowWidth <= breakpoint) {
        return this.renderMobileNotifications(this.props);
      }

      return this.renderScreenNotifications(this.props);
    }
  }]);

  return Container;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

/***/ }),

/***/ "./src/components/Notification.tsx":
/*!*****************************************!*\
  !*** ./src/components/Notification.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Notification": () => (/* binding */ Notification)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.ts");
/* harmony import */ var _utils_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/timer */ "./src/utils/timer.ts");
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/enums */ "./src/utils/enums.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Notification = /*#__PURE__*/function (_React$Component) {
  _inherits(Notification, _React$Component);

  var _super = _createSuper(Notification);

  function Notification(props) {
    var _this;

    _classCallCheck(this, Notification);

    _this = _super.call(this, props);

    _this.onClick = function () {
      var dismiss = _this.props.notification.dismiss;

      if (dismiss.click || dismiss.showIcon) {
        _this.removeNotification(_utils_enums__WEBPACK_IMPORTED_MODULE_3__.NOTIFICATION_REMOVAL_SOURCE.CLICK);
      }
    };

    _this.onTouchStart = function (event) {
      var pageX = event.touches[0].pageX;

      _this.setState(function (_ref) {
        var parentStyle = _ref.parentStyle;
        return {
          startX: pageX,
          currentX: pageX,
          parentStyle: Object.assign(Object.assign({}, parentStyle), {
            position: 'relative'
          })
        };
      });
    };

    _this.onTouchMove = function (event) {
      var pageX = event.touches[0].pageX;
      var startX = _this.state.startX;
      var _this$props = _this.props,
          toggleRemoval = _this$props.toggleRemoval,
          _this$props$notificat = _this$props.notification,
          id = _this$props$notificat.id,
          onRemoval = _this$props$notificat.onRemoval,
          slidingExit = _this$props$notificat.slidingExit,
          _this$props$notificat2 = _this$props$notificat.touchSlidingExit,
          swipe = _this$props$notificat2.swipe,
          fade = _this$props$notificat2.fade;
      var distance = pageX - startX;
      var width = _this.rootElementRef.current.offsetWidth;
      var swipeTo = window.innerWidth + width;
      var left = "".concat(pageX - startX >= 0 ? swipeTo : -swipeTo, "px");

      if ((0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.hasFullySwiped)(distance, width)) {
        var t1 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getTransition)(swipe, 'left');
        var t2 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getTransition)(fade, 'opacity');

        var _onTransitionEnd = function onTransitionEnd() {
          toggleRemoval(id, function () {
            return onRemoval(id, _utils_enums__WEBPACK_IMPORTED_MODULE_3__.NOTIFICATION_REMOVAL_SOURCE.TOUCH);
          });
        };

        return _this.setState(function (_ref2) {
          var parentStyle = _ref2.parentStyle;
          return {
            touchEnabled: false,
            parentStyle: Object.assign(Object.assign({}, parentStyle), {
              left: left,
              opacity: 0,
              transition: "".concat(t1, ", ").concat(t2)
            }),
            onTransitionEnd: function onTransitionEnd() {
              _this.setState(function (_ref3) {
                var parentStyle = _ref3.parentStyle;
                return {
                  parentStyle: Object.assign(Object.assign({}, parentStyle), {
                    height: "0px",
                    overflow: 'hidden',
                    transition: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getTransition)(slidingExit, 'height')
                  }),
                  onTransitionEnd: _onTransitionEnd
                };
              });
            }
          };
        });
      }

      return _this.setState(function (_ref4) {
        var parentStyle = _ref4.parentStyle;
        return {
          currentX: pageX,
          parentStyle: Object.assign(Object.assign({}, parentStyle), {
            left: "".concat(0 + distance, "px")
          })
        };
      });
    };

    _this.onTouchEnd = function () {
      var touchRevert = _this.props.notification.touchRevert;

      _this.setState(function (_ref5) {
        var parentStyle = _ref5.parentStyle;
        return {
          parentStyle: Object.assign(Object.assign({}, parentStyle), {
            left: 0,
            transition: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getTransition)(touchRevert, 'left')
          })
        };
      });
    };

    _this.onMouseEnter = function () {
      if (_this.timer) {
        _this.timer.pause();
      } else {
        _this.setState({
          animationPlayState: 'paused'
        });
      }
    };

    _this.onMouseLeave = function () {
      if (_this.timer) {
        _this.timer.resume();
      } else {
        _this.setState({
          animationPlayState: 'running'
        });
      }
    };

    _this.rootElementRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    var defaultNotificationWidth = props.defaultNotificationWidth,
        notification = props.notification,
        isMobile = props.isMobile;
    var width = notification.width;
    console.log("[".concat(_this.props.id, "] constructor"));
    _this.state = {
      parentStyle: {
        height: "0px",

        /*overflow: 'hidden',*/
        transform: "translate3d(0px,0px,0px)",
        width: "".concat(width ? width : defaultNotificationWidth, "px")
      },
      htmlClassList: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getHtmlClassesForType)(notification),
      animationPlayState: 'running',
      touchEnabled: true,
      markedToFadeOut: false
    };

    if (isMobile) {
      _this.state.parentStyle.width = '100%';
    }

    return _this;
  }

  _createClass(Notification, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timer) {
        this.timer.clear();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props2 = this.props,
          notification = _this$props2.notification,
          notificationsCount = _this$props2.notificationsCount;
      var _notification$dismiss = notification.dismiss,
          duration = _notification$dismiss.duration,
          onScreen = _notification$dismiss.onScreen;
      var willSlide = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.shouldNotificationHaveSliding)(notification, notificationsCount);
      var scrollHeight = this.rootElementRef.current.scrollHeight;

      var onTransitionEnd = function onTransitionEnd() {
        if (!duration || onScreen || _this2.timer) return;

        var callback = function callback() {
          console.log("[".concat(_this2.props.id, "] timer elapsed "));

          _this2.removeNotification(_utils_enums__WEBPACK_IMPORTED_MODULE_3__.NOTIFICATION_REMOVAL_SOURCE.TIMEOUT);
        };

        _this2.timer = new _utils_timer__WEBPACK_IMPORTED_MODULE_2__["default"](callback, duration);
        console.log("[".concat(_this2.props.id, "] timer started "));
      };

      var callback = function callback() {
        requestAnimationFrame(function () {
          _this2.setState(function (prevState) {
            return {
              htmlClassList: [].concat(_toConsumableArray(notification.animationIn), _toConsumableArray(prevState.htmlClassList)),
              parentStyle: Object.assign(Object.assign({}, prevState.parentStyle), {
                transform: "translate3d(0px, 0px, 0px)",
                transition: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getTransition)(notification.slidingEnter, 'height') + ", " + (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getTransition)(notification.slidingEnter, 'transform')
              })
              /*TODO*/

            };
          });
        });
      };

      this.setState(function (_ref6) {
        var width = _ref6.parentStyle.width;
        return {
          parentStyle: {
            width: width,
            height: "".concat(scrollHeight, "px"),
            transform: "translate3d(0px, -".concat(scrollHeight, "px, 0px)"),
            transition: willSlide ? (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getTransition)(notification.slidingEnter, 'height') : '10ms height'
          },
          onTransitionEnd: onTransitionEnd
        };
      }, callback);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.log("[".concat(this.props.id, "] ").concat(this.state.parentStyle.height, " ").concat(this.props.hasBeenRemoved, " ").concat(prevProps.hasBeenRemoved, " "));

      if (this.props.hasBeenRemoved && !prevProps.hasBeenRemoved) {
        this.removeNotification(_utils_enums__WEBPACK_IMPORTED_MODULE_3__.NOTIFICATION_REMOVAL_SOURCE.MANUAL);
      }

      if (prevProps !== this.props && !this.props.hasBeenRemoved) {
        var container = this.props.notification.container;
        var scrollHeight = this.rootElementRef.current.children[0].scrollHeight;
        console.log(prevProps);
        console.log(this.props);
        console.log("[".concat(this.props.id, "] updated height to ") + "".concat(scrollHeight + (container.endsWith('full') ? 0 : 0), "px"));
        this.setState(function (state) {
          return {
            parentStyle: Object.assign(Object.assign({}, state.parentStyle), {
              height: state.markedToFadeOut ? '0px' : "".concat(scrollHeight + (container.endsWith('full') ? 0 : 0), "px")
            })
          };
        });
      }
    }
  }, {
    key: "removeNotification",
    value: function removeNotification(removalFlag) {
      var _this3 = this;

      var _this$props3 = this.props,
          notification = _this$props3.notification,
          toggleRemoval = _this$props3.toggleRemoval;
      var id = notification.id,
          onRemoval = notification.onRemoval,
          waitForAnimation = notification.dismiss.waitForAnimation;
      var htmlClassList = [].concat(_toConsumableArray(notification.animationOut), _toConsumableArray((0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getHtmlClassesForType)(notification)));

      var onTransitionEnd = function onTransitionEnd() {
        console.log(id + " toggleRemoval");
        toggleRemoval(id, function () {
          return onRemoval(id, removalFlag);
        });
      };

      var parentStyle = {
        height: "0px",
        overflow: 'hidden',
        transition: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getTransition)(notification.slidingExit, 'height')
      };

      if (waitForAnimation) {
        return this.setState(function (_ref7) {
          var width = _ref7.parentStyle.width;
          return {
            htmlClassList: htmlClassList,
            onAnimationEnd: function onAnimationEnd() {
              _this3.setState({
                parentStyle: Object.assign({
                  width: width
                }, parentStyle),
                onTransitionEnd: onTransitionEnd,
                markedToFadeOut: true
              });
            }
          };
        });
      }

      return this.setState(function (_ref8) {
        var width = _ref8.parentStyle.width;
        return {
          parentStyle: Object.assign({
            width: width
          }, parentStyle),
          onTransitionEnd: onTransitionEnd,
          htmlClassList: htmlClassList,
          markedToFadeOut: true
        };
      });
    }
  }, {
    key: "renderTimer",
    value: function renderTimer() {
      var _this4 = this;

      var dismiss = this.props.notification.dismiss;
      var duration = dismiss.duration,
          onScreen = dismiss.onScreen;
      var animationPlayState = this.state.animationPlayState;

      if (!duration || !onScreen) {
        return;
      }

      var style = {
        animationName: 'timer',
        animationDuration: "".concat(duration, "ms"),
        animationTimingFunction: 'linear',
        animationFillMode: 'forwards',
        animationDelay: "0",
        animationPlayState: animationPlayState
      };

      var onAnimationEnd = function onAnimationEnd() {
        return _this4.removeNotification(_utils_enums__WEBPACK_IMPORTED_MODULE_3__.NOTIFICATION_REMOVAL_SOURCE.TIMEOUT);
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-timer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-timer-filler",
        onAnimationEnd: onAnimationEnd,
        style: style
      }));
    }
  }, {
    key: "renderCustomContent",
    value: function renderCustomContent() {
      var htmlClassList = this.state.htmlClassList;
      var _this$props$notificat3 = this.props.notification,
          id = _this$props$notificat3.id,
          CustomContent = _this$props$notificat3.content,
          _this$props$notificat4 = _this$props$notificat3.dismiss,
          duration = _this$props$notificat4.duration,
          pauseOnHover = _this$props$notificat4.pauseOnHover;
      var hasMouseEvents = duration > 0 && pauseOnHover;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "".concat(_toConsumableArray(htmlClassList).join(' ')),
        onMouseEnter: hasMouseEvents ? this.onMouseEnter : null,
        onMouseLeave: hasMouseEvents ? this.onMouseLeave : null
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(CustomContent) ? CustomContent : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomContent, Object.assign({}, {
        id: id,
        notificationConfig: Object.assign({}, this.props.notification)
      })));
    }
  }, {
    key: "renderNotification",
    value: function renderNotification() {
      var _this$props$notificat5 = this.props.notification,
          title = _this$props$notificat5.title,
          message = _this$props$notificat5.message,
          _this$props$notificat6 = _this$props$notificat5.dismiss,
          showIcon = _this$props$notificat6.showIcon,
          duration = _this$props$notificat6.duration,
          pauseOnHover = _this$props$notificat6.pauseOnHover;
      var htmlClassList = this.state.htmlClassList;
      var hasMouseEvents = duration > 0 && pauseOnHover;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "".concat(_toConsumableArray(htmlClassList).join(' ')),
        onMouseEnter: hasMouseEvents ? this.onMouseEnter : null,
        onMouseLeave: hasMouseEvents ? this.onMouseLeave : null
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-content"
      }, showIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-close-mark",
        onClick: this.onClick
      }), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-title"
      }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "rnc__notification-message"
      }, message), this.renderTimer()));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$notificat7 = this.props.notification,
          content = _this$props$notificat7.content,
          click = _this$props$notificat7.dismiss.click;
      var _this$state = this.state,
          parentStyle = _this$state.parentStyle,
          onAnimationEnd = _this$state.onAnimationEnd,
          onTransitionEnd = _this$state.onTransitionEnd,
          touchEnabled = _this$state.touchEnabled;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        ref: this.rootElementRef,
        onClick: click ? this.onClick : null,
        style: parentStyle,
        className: "rnc__notification",
        onAnimationEnd: onAnimationEnd,
        onTransitionEnd: onTransitionEnd,
        onTouchStart: touchEnabled ? this.onTouchStart : null,
        onTouchMove: touchEnabled ? this.onTouchMove : null,
        onTouchEnd: touchEnabled ? this.onTouchEnd : null
      }, content ? this.renderCustomContent() : this.renderNotification());
    }
  }]);

  return Notification;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.ts");
/* harmony import */ var _utils_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/validators */ "./src/utils/validators.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var Store = /*#__PURE__*/function () {
  function Store() {
    var _this = this;

    _classCallCheck(this, Store);

    this.incrementCounter = function () {
      return _this.counter += 1;
    };

    this.getCounter = function () {
      return _this.counter;
    };

    this.counter = 0;
    this.add = null;
  }

  _createClass(Store, [{
    key: "addNotification",
    value: function addNotification(notification) {
      var _this2 = this;

      if (true) {
        var transitions = ['slidingEnter', 'slidingExit', 'touchRevert', 'touchSlidingExit'];
        transitions.forEach(function (transition) {
          return (0,_utils_validators__WEBPACK_IMPORTED_MODULE_1__.validateTransition)(notification, transition);
        });
        _utils_validators__WEBPACK_IMPORTED_MODULE_1__.validators.forEach(function (validator) {
          return validator(notification, _this2.types);
        });
      }

      this.incrementCounter();
      var parsedNotification = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__.parseNotification)(notification, this.types, this.defaultNotificationWidth);
      return this.add(parsedNotification);
    }
  }, {
    key: "register",
    value: function register(parameters) {
      var addNotification = parameters.addNotification,
          removeNotification = parameters.removeNotification,
          removeAllNotifications = parameters.removeAllNotifications,
          types = parameters.types,
          defaultNotificationWidth = parameters.defaultNotificationWidth;
      this.add = addNotification;
      this.removeNotification = removeNotification;
      this.removeAllNotifications = removeAllNotifications;
      this.defaultNotificationWidth = defaultNotificationWidth;
      this.types = types;
    }
  }]);

  return Store;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Store());

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CONTAINER_VALUES": () => (/* binding */ DEFAULT_CONTAINER_VALUES),
/* harmony export */   "ERROR": () => (/* binding */ ERROR),
/* harmony export */   "NOTIFICATION_BASE_CLASS": () => (/* binding */ NOTIFICATION_BASE_CLASS)
/* harmony export */ });
var DEFAULT_CONTAINER_VALUES = {
  isMobile: true,
  breakpoint: 768,
  defaultNotificationWidth: 325
};
var NOTIFICATION_BASE_CLASS = 'rnc__notification-item';
var ERROR = {
  ANIMATION_IN: 'Validation error. `animationIn` option must be an array',
  ANIMATION_OUT: 'Validation error. `animationOut` option must be an array',
  DISMISS_REQUIRED: 'Validation error. `duration` property of `dismiss` option is required',
  DISMISS_NUMBER: 'Validation error. `duration` property of `dismiss` option must be a Number',
  DISMISS_POSITIVE: 'Validation error. `duration` property of `dismiss` option must be a positive Number',
  DISMISS_CLICK_BOOL: 'Validation error. `click` property of `dismiss` option must be a Boolean',
  DISMISS_TOUCH_BOOL: 'Validation error. `touch` property of `dismiss` option must be a Boolean',
  DISMISS_WAIT: 'Validation error. `waitForAnimation` property of `dismiss` option must be a Boolean',
  DISMISS_PAUSE_BOOL: 'Validation error. `pauseOnHover` property of `dismiss` option must be a Boolean',
  DISMISS_ONSCREEN_BOOL: 'Validation error. `onScreen` property of `dismiss` option must be a Boolean',
  DISMISS_ICON: 'Validation error. `showIcon` property of `dismiss` option must be a Boolean',
  TITLE_STRING: 'Validation error. `title` option must be a String',
  TITLE_ELEMENT: 'Validation error. `title` option must be a valid React element/function',
  MESSAGE_REQUIRED: 'Validation error. `message` option is required',
  MESSAGE_STRING: 'Validation error. `message` option must be a String',
  MESSAGE_ELEMENT: 'Validation error. `message` option must be a valid React element/function',
  TYPE_REQUIRED: 'Validation error. `type` option is required',
  TYPE_STRING: 'Validation error. `type` option must be a String',
  TYPE_NOT_EXISTENT: 'Validation error. `type` option not found',
  CONTAINER_REQUIRED: 'Validation error. `container` option is required',
  CONTAINER_STRING: 'Validation error. `container` option must be a String',
  CONTENT_INVALID: 'Validation error. `content` option must be a valid React component/function/element',
  WIDTH_NUMBER: 'Validation error. `width` option must be a Number',
  INSERT_STRING: 'Validation error. `insert` option must be a String',
  TRANSITION_DURATION_NUMBER: 'Validation error. `duration` property of `transition` option must be a Number',
  TRANSITION_TIMING_FUNCTION: 'Validation error. `timingFunction` property of `transition` option must be a String',
  TRANSITION_DELAY_NUMBER: 'Validation error. `delay` property of `transition` option must be a Number',
  TYPE_NOT_FOUND: 'Validation error. Custom type not found',
  REMOVAL_FUNC: 'Validation error. `onRemoval` must be a function'
};

/***/ }),

/***/ "./src/utils/enums.ts":
/*!****************************!*\
  !*** ./src/utils/enums.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NOTIFICATION_CONTAINER": () => (/* binding */ NOTIFICATION_CONTAINER),
/* harmony export */   "NOTIFICATION_INSERTION": () => (/* binding */ NOTIFICATION_INSERTION),
/* harmony export */   "NOTIFICATION_REMOVAL_SOURCE": () => (/* binding */ NOTIFICATION_REMOVAL_SOURCE),
/* harmony export */   "NOTIFICATION_TYPE": () => (/* binding */ NOTIFICATION_TYPE)
/* harmony export */ });

var NOTIFICATION_CONTAINER;

(function (NOTIFICATION_CONTAINER) {
  NOTIFICATION_CONTAINER["BOTTOM_LEFT"] = "bottom-left";
  NOTIFICATION_CONTAINER["BOTTOM_RIGHT"] = "bottom-right";
  NOTIFICATION_CONTAINER["BOTTOM_CENTER"] = "bottom-center";
  NOTIFICATION_CONTAINER["TOP_LEFT"] = "top-left";
  NOTIFICATION_CONTAINER["TOP_RIGHT"] = "top-right";
  NOTIFICATION_CONTAINER["TOP_CENTER"] = "top-center";
  NOTIFICATION_CONTAINER["CENTER"] = "center";
  NOTIFICATION_CONTAINER["TOP_FULL"] = "top-full";
  NOTIFICATION_CONTAINER["BOTTOM_FULL"] = "bottom-full";
})(NOTIFICATION_CONTAINER || (NOTIFICATION_CONTAINER = {}));

var NOTIFICATION_INSERTION;

(function (NOTIFICATION_INSERTION) {
  NOTIFICATION_INSERTION["TOP"] = "top";
  NOTIFICATION_INSERTION["BOTTOM"] = "bottom";
})(NOTIFICATION_INSERTION || (NOTIFICATION_INSERTION = {}));

var NOTIFICATION_TYPE;

(function (NOTIFICATION_TYPE) {
  NOTIFICATION_TYPE["SUCCESS"] = "success";
  NOTIFICATION_TYPE["DANGER"] = "danger";
  NOTIFICATION_TYPE["INFO"] = "info";
  NOTIFICATION_TYPE["DEFAULT"] = "default";
  NOTIFICATION_TYPE["WARNING"] = "warning";
})(NOTIFICATION_TYPE || (NOTIFICATION_TYPE = {}));

var NOTIFICATION_REMOVAL_SOURCE;

(function (NOTIFICATION_REMOVAL_SOURCE) {
  NOTIFICATION_REMOVAL_SOURCE["TIMEOUT"] = "timeout";
  NOTIFICATION_REMOVAL_SOURCE["CLICK"] = "click";
  NOTIFICATION_REMOVAL_SOURCE["TOUCH"] = "touch";
  NOTIFICATION_REMOVAL_SOURCE["MANUAL"] = "manual";
})(NOTIFICATION_REMOVAL_SOURCE || (NOTIFICATION_REMOVAL_SOURCE = {}));

/***/ }),

/***/ "./src/utils/helpers.ts":
/*!******************************!*\
  !*** ./src/utils/helpers.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHtmlClassesForType": () => (/* binding */ getHtmlClassesForType),
/* harmony export */   "getNotificationsForEachContainer": () => (/* binding */ getNotificationsForEachContainer),
/* harmony export */   "getNotificationsForMobileView": () => (/* binding */ getNotificationsForMobileView),
/* harmony export */   "getTransition": () => (/* binding */ getTransition),
/* harmony export */   "getUid": () => (/* binding */ getUid),
/* harmony export */   "hasFullySwiped": () => (/* binding */ hasFullySwiped),
/* harmony export */   "htmlClassesForExistingType": () => (/* binding */ htmlClassesForExistingType),
/* harmony export */   "isBottomContainer": () => (/* binding */ isBottomContainer),
/* harmony export */   "isNullOrUndefined": () => (/* binding */ isNullOrUndefined),
/* harmony export */   "isTopContainer": () => (/* binding */ isTopContainer),
/* harmony export */   "parseNotification": () => (/* binding */ parseNotification),
/* harmony export */   "shouldNotificationHaveSliding": () => (/* binding */ shouldNotificationHaveSliding)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/utils/constants.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/utils/enums.ts");


var isNullOrUndefined = function isNullOrUndefined(object) {
  return object === null || object === undefined;
};
function isBottomContainer(container) {
  return container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.BOTTOM_FULL || container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.BOTTOM_LEFT || container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.BOTTOM_RIGHT || container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.BOTTOM_CENTER;
}
function isTopContainer(container) {
  return container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.TOP_FULL || container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.TOP_LEFT || container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.TOP_RIGHT || container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.TOP_CENTER;
}
function hasFullySwiped(diffX, width) {
  var swipeLength = Math.abs(diffX);
  var requiredSwipeLength = 40 / 100 * width;
  return swipeLength >= requiredSwipeLength;
}
function shouldNotificationHaveSliding(notification, count) {
  /*if (count <= 1) {
    return false
  }*/
  return (//count > 1 &&
    notification.insert === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_INSERTION.TOP && isTopContainer(notification.container) || notification.insert === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_INSERTION.BOTTOM && isBottomContainer(notification.container) || notification.container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.CENTER
  );
}
function htmlClassesForExistingType(type) {
  switch (type) {
    case _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_TYPE.DEFAULT:
      return [_constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_BASE_CLASS, 'rnc__notification-item--default'];

    case _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_TYPE.SUCCESS:
      return [_constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_BASE_CLASS, 'rnc__notification-item--success'];

    case _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_TYPE.DANGER:
      return [_constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_BASE_CLASS, 'rnc__notification-item--danger'];

    case _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_TYPE.WARNING:
      return [_constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_BASE_CLASS, 'rnc__notification-item--warning'];

    case _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_TYPE.INFO:
      return [_constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_BASE_CLASS, 'rnc__notification-item--info'];

    default:
      return [_constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_BASE_CLASS];
  }
}
function getHtmlClassesForType(notification) {
  var type = notification.type,
      content = notification.content,
      userDefinedTypes = notification.userDefinedTypes;
  var base = [_constants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_BASE_CLASS];

  if (content) {
    return base;
  }

  if (isNullOrUndefined(userDefinedTypes)) {
    return htmlClassesForExistingType(type);
  }

  var foundType = userDefinedTypes.find(function (q) {
    return q.name === type;
  });
  return base.concat(foundType.htmlClasses);
}
function getNotificationsForMobileView(notifications) {
  var top = [];
  var bottom = [];
  notifications.forEach(function (notification) {
    var container = notification.container;
    var CENTER = _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.CENTER;

    if (isTopContainer(container) || container === CENTER) {
      top.push(notification);
    } else if (isBottomContainer(container)) {
      bottom.push(notification);
    }
  });
  return {
    top: top,
    bottom: bottom
  };
}
function getNotificationsForEachContainer(notifications) {
  var topLeft = [];
  var topRight = [];
  var topCenter = [];
  var bottomLeft = [];
  var bottomRight = [];
  var bottomCenter = [];
  var center = [];
  var topFull = [];
  var bottomFull = [];
  notifications.forEach(function (notification) {
    var container = notification.container;

    if (container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.TOP_FULL) {
      topFull.push(notification);
    } else if (container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.BOTTOM_FULL) {
      bottomFull.push(notification);
    } else if (container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.TOP_LEFT) {
      topLeft.push(notification);
    } else if (container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.TOP_RIGHT) {
      topRight.push(notification);
    } else if (container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.TOP_CENTER) {
      topCenter.push(notification);
    } else if (container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.BOTTOM_LEFT) {
      bottomLeft.push(notification);
    } else if (container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.BOTTOM_RIGHT) {
      bottomRight.push(notification);
    } else if (container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.BOTTOM_CENTER) {
      bottomCenter.push(notification);
    } else if (container === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_CONTAINER.CENTER) {
      center.push(notification);
    }
  });
  return {
    topFull: topFull,
    bottomFull: bottomFull,
    topLeft: topLeft,
    topRight: topRight,
    topCenter: topCenter,
    bottomLeft: bottomLeft,
    bottomRight: bottomRight,
    bottomCenter: bottomCenter,
    center: center
  };
}
function getTransition(_ref, property) {
  var duration = _ref.duration,
      timingFunction = _ref.timingFunction,
      delay = _ref.delay;
  return "".concat(duration, "ms ").concat(property, " ").concat(timingFunction, " ").concat(delay, "ms");
}
function getUid(a) {
  return a ? (0 | Math.random() * 16).toString(16) : ('' + 1e11 + 1e11).replace(/1|0/g, getUid);
}

function defaultTransition(transition, _ref2) {
  var duration = _ref2.duration,
      timingFunction = _ref2.timingFunction,
      delay = _ref2.delay;
  var transitionOptions = transition || {};

  if (isNullOrUndefined(transitionOptions.duration)) {
    transitionOptions.duration = duration;
  }

  if (isNullOrUndefined(transitionOptions.timingFunction)) {
    transitionOptions.timingFunction = timingFunction;
  }

  if (isNullOrUndefined(transitionOptions.delay)) {
    transitionOptions.delay = delay;
  }

  return transitionOptions;
}

function defaultDismiss(dismiss) {
  var option = dismiss;
  var defaults = {
    duration: 0,
    click: true,
    touch: true,
    onScreen: false,
    pauseOnHover: false,
    waitForAnimation: false,
    showIcon: false
  };

  if (!option) {
    return defaults;
  }

  Object.keys(defaults).forEach(function (prop) {
    if (isNullOrUndefined(option[prop])) {
      option[prop] = defaults[prop];
    }
  });
  return option;
}

function defaultUserDefinedTypes(notification, definedTypes) {
  var content = notification.content,
      type = notification.type;

  if (content) {
    return undefined;
  }

  if (type === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_TYPE.SUCCESS || type === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_TYPE.DANGER || type === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_TYPE.INFO || type === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_TYPE.DEFAULT || type === _enums__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_TYPE.WARNING || !definedTypes) {
    return undefined;
  }

  return definedTypes;
}

function parseNotification(options, userDefinedTypes, defaultNotificationWidth) {
  var notification = options;
  var id = notification.id,
      type = notification.type,
      insert = notification.insert,
      content = notification.content,
      container = notification.container,
      animationIn = notification.animationIn,
      animationOut = notification.animationOut,
      slidingEnter = notification.slidingEnter,
      slidingExit = notification.slidingExit,
      touchRevert = notification.touchRevert,
      touchSlidingExit = notification.touchSlidingExit,
      dismiss = notification.dismiss,
      width = notification.width,
      onRemoval = notification.onRemoval;
  notification.id = id || getUid();
  notification.type = content ? null : type.toLowerCase();

  if (userDefinedTypes && !content) {
    notification.userDefinedTypes = defaultUserDefinedTypes(notification, userDefinedTypes);
  }

  notification.width = isNullOrUndefined(width) ? defaultNotificationWidth : width;
  notification.container = container.toLowerCase();
  notification.insert = (insert || 'top').toLowerCase();
  notification.dismiss = defaultDismiss(dismiss);
  notification.animationIn = animationIn || [];
  notification.animationOut = animationOut || []; // eslint-disable-next-line

  notification.onRemoval = onRemoval || function () {};

  var t = function t(duration, timingFunction, delay) {
    return {
      duration: duration,
      timingFunction: timingFunction,
      delay: delay
    };
  };

  notification.slidingEnter = defaultTransition(slidingEnter, t(600, 'linear', 0));
  notification.slidingExit = defaultTransition(slidingExit, t(600, 'linear', 0));
  notification.touchRevert = defaultTransition(touchRevert, t(600, 'linear', 0));
  var touchExit = touchSlidingExit || {};
  var swipe = touchExit.swipe || {};
  var fade = touchExit.fade || {};
  notification.touchSlidingExit = touchExit;
  notification.touchSlidingExit.swipe = defaultTransition(swipe, t(600, 'linear', 0));
  notification.touchSlidingExit.fade = defaultTransition(fade, t(300, 'linear', 0));
  return notification;
}

/***/ }),

/***/ "./src/utils/timer.ts":
/*!****************************!*\
  !*** ./src/utils/timer.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timer)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Timer = /*#__PURE__*/function () {
  function Timer(callback, delay) {
    _classCallCheck(this, Timer);

    this.callback = callback;
    this.remaining = delay;
    this.resume();
  }

  _createClass(Timer, [{
    key: "pause",
    value: function pause() {
      clearTimeout(this.timerId);
      this.remaining -= Date.now() - this.start;
    }
  }, {
    key: "resume",
    value: function resume() {
      this.start = Date.now();
      clearTimeout(this.timerId);
      this.timerId = setTimeout(this.callback, this.remaining);
    }
  }, {
    key: "clear",
    value: function clear() {
      clearTimeout(this.timerId);
    }
  }]);

  return Timer;
}();



/***/ }),

/***/ "./src/utils/validators.ts":
/*!*********************************!*\
  !*** ./src/utils/validators.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateTransition": () => (/* binding */ validateTransition),
/* harmony export */   "validators": () => (/* binding */ validators)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/utils/constants.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ "./src/utils/enums.ts");




var isNullOrUndefined = function isNullOrUndefined(object) {
  return object === null || object === undefined;
};

var isString = function isString(object) {
  return typeof object === 'string';
};

var isNumber = function isNumber(object) {
  return typeof object === 'number';
};

var isBoolean = function isBoolean(object) {
  return typeof object === 'boolean';
};

var isFunction = function isFunction(object) {
  return !!(object && object.constructor && object.call && object.apply);
};

var isArray = function isArray(object) {
  return !isNullOrUndefined(object) && object.constructor === Array;
};

function isClassComponent(component) {
  return typeof component === 'function' && component.prototype && !!component.prototype.render;
}

function isFunctionComponent(component) {
  return typeof component === 'function';
}

var isReactElement = function isReactElement(value) {
  return isFunctionComponent(value) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(value);
};

function validateTransition(notification, transition) {
  var TRANSITION_DURATION_NUMBER = _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.TRANSITION_DURATION_NUMBER,
      TRANSITION_TIMING_FUNCTION = _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.TRANSITION_TIMING_FUNCTION,
      TRANSITION_DELAY_NUMBER = _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.TRANSITION_DELAY_NUMBER;

  var _ref = notification[transition] || {},
      duration = _ref.duration,
      timingFunction = _ref.timingFunction,
      delay = _ref.delay;

  if (!isNullOrUndefined(duration) && !isNumber(duration)) {
    throw new Error(TRANSITION_DURATION_NUMBER.replace('transition', transition));
  }

  if (!isNullOrUndefined(timingFunction) && !isString(timingFunction)) {
    throw new Error(TRANSITION_TIMING_FUNCTION.replace('transition', transition));
  }

  if (!isNullOrUndefined(delay) && !isNumber(delay)) {
    throw new Error(TRANSITION_DELAY_NUMBER.replace('transition', transition));
  }
}
var validators = [function title(_ref2) {
  var content = _ref2.content,
      _title = _ref2.title;
  if (content) return;
  if (isNullOrUndefined(_title)) return;
  var isReactEl = isReactElement(_title);
  if (isReactEl || typeof _title === 'string') return;

  if (!isReactEl) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.TITLE_ELEMENT);
  }

  if (typeof _title !== 'string') {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.TITLE_STRING);
  }
}, function message(_ref3) {
  var content = _ref3.content,
      _message = _ref3.message;
  if (content) return;

  if (!_message) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.MESSAGE_REQUIRED);
  }

  var isReactEl = isReactElement(_message);

  if (isString(_message) || isReactEl) {
    return;
  }

  if (!isString(_message)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.MESSAGE_STRING);
  }

  if (!isReactEl) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.MESSAGE_ELEMENT);
  }
}, function type(_ref4, userDefinedTypes) {
  var content = _ref4.content,
      _type = _ref4.type;
  if (content) return;

  if (!_type) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.TYPE_REQUIRED);
  }

  if (!isString(_type)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.TYPE_STRING);
  }

  if (!userDefinedTypes && _type !== _enums__WEBPACK_IMPORTED_MODULE_2__.NOTIFICATION_TYPE.SUCCESS && _type !== _enums__WEBPACK_IMPORTED_MODULE_2__.NOTIFICATION_TYPE.DANGER && _type !== _enums__WEBPACK_IMPORTED_MODULE_2__.NOTIFICATION_TYPE.INFO && _type !== _enums__WEBPACK_IMPORTED_MODULE_2__.NOTIFICATION_TYPE.DEFAULT && _type !== _enums__WEBPACK_IMPORTED_MODULE_2__.NOTIFICATION_TYPE.WARNING) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.TYPE_NOT_EXISTENT);
  }
}, function container(_ref5) {
  var _container = _ref5.container;

  if (isNullOrUndefined(_container)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.CONTAINER_REQUIRED);
  }

  if (!isString(_container)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.CONTAINER_STRING);
  }
}, function insert(_ref6) {
  var _insert = _ref6.insert;
  if (isNullOrUndefined(_insert)) return;

  if (!isString(_insert)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.INSERT_STRING);
  }
}, function width(_ref7) {
  var _width = _ref7.width;
  if (isNullOrUndefined(_width)) return;

  if (!isNumber(_width)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.WIDTH_NUMBER);
  }
}, function userDefinedTypes(_ref8, _userDefinedTypes) {
  var type = _ref8.type,
      content = _ref8.content;
  if (content) return;

  if (type === _enums__WEBPACK_IMPORTED_MODULE_2__.NOTIFICATION_TYPE.SUCCESS || type === _enums__WEBPACK_IMPORTED_MODULE_2__.NOTIFICATION_TYPE.DANGER || type === _enums__WEBPACK_IMPORTED_MODULE_2__.NOTIFICATION_TYPE.INFO || type === _enums__WEBPACK_IMPORTED_MODULE_2__.NOTIFICATION_TYPE.DEFAULT || type === _enums__WEBPACK_IMPORTED_MODULE_2__.NOTIFICATION_TYPE.WARNING || !_userDefinedTypes) {
    return;
  }

  if (!_userDefinedTypes.find(function (p) {
    return p.name === type;
  })) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.TYPE_NOT_FOUND);
  }
}, function content(_ref9) {
  var _content = _ref9.content;
  if (!_content) return;
  var isClass = isClassComponent(_content);
  var isFunction = isFunctionComponent(_content);
  var isElem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(_content);

  if (!isClass && !isFunction && !isElem) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.CONTENT_INVALID);
  }
}, function animationIn(_ref10) {
  var _animationIn = _ref10.animationIn;
  if (isNullOrUndefined(_animationIn)) return;

  if (!isArray(_animationIn)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.ANIMATION_IN);
  }
}, function animationOut(_ref11) {
  var _animationOut = _ref11.animationOut;
  if (isNullOrUndefined(_animationOut)) return;

  if (!isArray(_animationOut)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.ANIMATION_OUT);
  }
}, function onRemoval(_ref12) {
  var _onRemoval = _ref12.onRemoval;
  if (!_onRemoval) return;

  if (!isFunction(_onRemoval)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.REMOVAL_FUNC);
  }
}, function dismiss(_ref13) {
  var _dismiss = _ref13.dismiss;
  if (!_dismiss) return;
  var duration = _dismiss.duration,
      onScreen = _dismiss.onScreen,
      showIcon = _dismiss.showIcon,
      pauseOnHover = _dismiss.pauseOnHover,
      wait = _dismiss.waitForAnimation,
      click = _dismiss.click,
      touch = _dismiss.touch;

  if (isNullOrUndefined(duration)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.DISMISS_REQUIRED);
  }

  if (!isNumber(duration)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.DISMISS_NUMBER);
  }

  if (duration < 0) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.DISMISS_POSITIVE);
  }

  if (!isNullOrUndefined(onScreen) && !isBoolean(onScreen)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.DISMISS_ONSCREEN_BOOL);
  }

  if (!isNullOrUndefined(pauseOnHover) && !isBoolean(pauseOnHover)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.DISMISS_PAUSE_BOOL);
  }

  if (!isNullOrUndefined(click) && !isBoolean(click)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.DISMISS_CLICK_BOOL);
  }

  if (!isNullOrUndefined(touch) && !isBoolean(touch)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.DISMISS_TOUCH_BOOL);
  }

  if (!isNullOrUndefined(showIcon) && !isBoolean(showIcon)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.DISMISS_ICON);
  }

  if (!isNullOrUndefined(wait) && !isBoolean(wait)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR.DISMISS_WAIT);
  }
}];

/***/ }),

/***/ "./src/scss/notification.scss":
/*!************************************!*\
  !*** ./src/scss/notification.scss ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".rnc__notification-container--top-center,\n.rnc__notification-container--top-left,\n.rnc__notification-container--top-right,\n.rnc__notification-container--bottom-center,\n.rnc__notification-container--bottom-left,\n.rnc__notification-container--bottom-right,\n.rnc__notification-container--center,\n.rnc__notification-container--top-full,\n.rnc__notification-container--bottom-full {\n  min-width: 325px;\n  position: absolute;\n  pointer-events: all; }\n\n.rnc__notification-container--center,\n.rnc__notification-container--top-center,\n.rnc__notification-container--bottom-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  left: calc(50% - 175px); }\n\n.rnc__notification-container--center,\n.rnc__notification-container--top-center,\n.rnc__notification-container--bottom-center {\n  max-width: 350px; }\n\n.rnc__notification-container--center {\n  top: 20px;\n  height: 100%;\n  pointer-events: none; }\n\n.rnc__notification-container--top-full,\n.rnc__notification-container--bottom-full {\n  width: 100%;\n  min-width: 100%; }\n\n.rnc__notification-container--bottom-full {\n  bottom: 0; }\n\n.rnc__util--flex-center {\n  min-width: 325px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  pointer-events: all; }\n\n.rnc__notification-container--top-center {\n  top: 20px; }\n\n.rnc__notification-container--bottom-center {\n  bottom: 20px; }\n\n.rnc__notification-container--top-left {\n  left: 20px;\n  top: 20px; }\n\n.rnc__notification-container--top-right {\n  right: 20px;\n  top: 20px; }\n\n.rnc__notification-container--bottom-left {\n  left: 20px;\n  bottom: 20px; }\n\n.rnc__notification-container--bottom-right {\n  bottom: 20px;\n  right: 20px; }\n\n.rnc__notification-container--mobile-top,\n.rnc__notification-container--mobile-bottom {\n  pointer-events: all;\n  position: absolute; }\n\n.rnc__notification-container--mobile-top {\n  right: 20px;\n  left: 20px;\n  top: 20px; }\n\n.rnc__notification-container--mobile-bottom {\n  right: 20px;\n  left: 20px;\n  bottom: 20px;\n  margin-bottom: -15px; }\n\n.rnc__notification-item--default {\n  background-color: #007bff;\n  border-left: 8px solid #0562c7; }\n  .rnc__notification-item--default .rnc__notification-timer {\n    background-color: #007bff; }\n  .rnc__notification-item--default .rnc__notification-timer-filler {\n    background-color: #fff; }\n  .rnc__notification-item--default .rnc__notification-close-mark {\n    background-color: #007bff; }\n\n.rnc__notification-item--success {\n  background-color: #28a745;\n  border-left: 8px solid #1f8838; }\n  .rnc__notification-item--success .rnc__notification-timer {\n    background-color: #28a745; }\n  .rnc__notification-item--success .rnc__notification-timer-filler {\n    background-color: #fff; }\n  .rnc__notification-item--success .rnc__notification-close-mark {\n    background-color: #28a745; }\n\n.rnc__notification-item--danger {\n  background-color: #dc3545;\n  border-left: 8px solid #bd1120; }\n  .rnc__notification-item--danger .rnc__notification-timer {\n    background-color: #dc3545; }\n  .rnc__notification-item--danger .rnc__notification-timer-filler {\n    background-color: #fff; }\n  .rnc__notification-item--danger .rnc__notification-close-mark {\n    background-color: #dc3545; }\n\n.rnc__notification-item--info {\n  background-color: #17a2b8;\n  border-left: 8px solid #138b9e; }\n  .rnc__notification-item--info .rnc__notification-timer {\n    background-color: #17a2b8; }\n  .rnc__notification-item--info .rnc__notification-timer-filler {\n    background-color: #fff; }\n  .rnc__notification-item--info .rnc__notification-close-mark {\n    background-color: #17a2b8; }\n\n.rnc__notification-item--warning {\n  background-color: #eab000;\n  border-left: 8px solid #ce9c09; }\n  .rnc__notification-item--warning .rnc__notification-timer {\n    background-color: #eab000; }\n  .rnc__notification-item--warning .rnc__notification-timer-filler {\n    background-color: #fff; }\n  .rnc__notification-item--warning .rnc__notification-close-mark {\n    background-color: #eab000; }\n\n.rnc__notification-item--awesome {\n  background-color: #685dc3;\n  border-left: 8px solid #4c3fb1; }\n  .rnc__notification-item--awesome .rnc__notification-timer {\n    background-color: #685dc3; }\n  .rnc__notification-item--awesome .rnc__notification-timer-filler {\n    background-color: #fff; }\n  .rnc__notification-item--awesome .rnc__notification-close-mark {\n    background-color: #685dc3; }\n\n@keyframes timer {\n  0% {\n    width: 100%; }\n  100% {\n    width: 0%; } }\n\n.rnc__base {\n  position: fixed;\n  z-index: 9000;\n  pointer-events: none;\n  width: 100%;\n  height: 100%; }\n\n.rnc__notification-item {\n  display: flex;\n  position: relative;\n  border-radius: 3px;\n  margin-bottom: 15px;\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);\n  cursor: pointer; }\n\n.rnc__notification-container--top-full .rnc__notification-item,\n.rnc__notification-container--bottom-full .rnc__notification-item {\n  margin-bottom: 0;\n  border-radius: 0; }\n\n.rnc__notification-container--top-full .rnc__notification,\n.rnc__notification-container--bottom-full .rnc__notification {\n  width: 100% !important; }\n\n.rnc__notification-timer {\n  width: 100%;\n  height: 3px;\n  margin-top: 10px;\n  border-radius: 5px; }\n\n.rnc__notification-timer-filler {\n  height: 3px;\n  border-radius: 5px; }\n\n.rnc__notification-title {\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n  margin-top: 5px;\n  margin-bottom: 5px; }\n\n.rnc__notification-message {\n  color: #fff;\n  max-width: calc(100% - 15px);\n  font-size: 14px;\n  line-height: 150%;\n  word-wrap: break-word;\n  margin-bottom: 0;\n  margin-top: 0; }\n\n.rnc__notification-content {\n  padding: 8px 15px;\n  display: inline-block;\n  width: 100%; }\n\n.rnc__notification-close-mark {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  right: 10px;\n  top: 10px; }\n  .rnc__notification-close-mark::after {\n    content: '\\D7';\n    position: absolute;\n    transform: translate(-50%, -50%);\n    color: #fff;\n    font-size: 12px;\n    left: 50%;\n    top: 50%; }\n\n.rnc__notification-container--mobile-top .rnc__notification-item,\n.rnc__notification-container--mobile-bottom .rnc__notification-item,\n.rnc__notification-container--mobile-top .notification,\n.rnc__notification-container--mobile-bottom .notification {\n  max-width: 100%;\n  width: 100%; }\n\n.rnc__notification-container--top-right .notification,\n.rnc__notification-container--bottom-right .notification {\n  margin-left: auto; }\n\n.rnc__notification-container--top-left .notification,\n.rnc__notification-container--bottom-left .notification {\n  margin-right: auto; }\n\n.rnc__notification-container--mobile-top .notification,\n.rnc__notification-container--mobile-bottom .notification {\n  margin-left: auto;\n  margin-right: auto; }\n", "",{"version":3,"sources":["webpack://./src/scss/_containers.scss","webpack://./src/scss/_types.scss","webpack://./src/scss/_variables.scss","webpack://./src/scss/notification.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB,EAAA;;AAGrB;;;EAGE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB,EAAA;;AAGzB;;;EAGE,gBAAgB,EAAA;;AAGlB;EACE,SAAS;EACT,YAAY;EACZ,oBAAoB,EAAA;;AAGtB;;EAEE,WAAW;EACX,eAAe,EAAA;;AAGjB;EACE,SAAS,EAAA;;AAGX;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB,EAAA;;AAGrB;EACE,SAAS,EAAA;;AAEX;EACE,YAAY,EAAA;;AAGd;EACE,UAAU;EACV,SAAS,EAAA;;AAGX;EACE,WAAW;EACX,SAAS,EAAA;;AAGX;EACE,UAAU;EACV,YAAY,EAAA;;AAGd;EACE,YAAY;EACZ,WAAW,EAAA;;AAGb;;EAEE,mBAAmB;EACnB,kBAAkB,EAAA;;AAGpB;EACE,WAAW;EACX,UAAU;EACV,SAAS,EAAA;;AAGX;EACE,WAAW;EACX,UAAU;EACV,YAAY;EACZ,oBAAoB,EAAA;;AChGtB;EACE,yBCHe;EDIf,8BCHoB,EAAA;EDCtB;IAKI,yBCWmB,EAAA;EDhBvB;IAQI,sBCSuB,EAAA;EDjB3B;IAWI,yBCba,EAAA;;ADiBjB;EACE,yBCfe;EDgBf,8BCfoB,EAAA;EDatB;IAKI,yBCDmB,EAAA;EDJvB;IAQI,sBCHuB,EAAA;EDL3B;IAWI,yBCzBa,EAAA;;AD6BjB;EACE,yBC3Bc;ED4Bd,8BC3BmB,EAAA;EDyBrB;IAKI,yBCbkB,EAAA;EDQtB;IAQI,sBCfsB,EAAA;EDO1B;IAWI,yBCrCY,EAAA;;ADyChB;EACE,yBCvCY;EDwCZ,8BCvCiB,EAAA;EDqCnB;IAKI,yBCzBgB,EAAA;EDoBpB;IAQI,sBC3BoB,EAAA;EDmBxB;IAWI,yBCjDU,EAAA;;ADqDd;EACE,yBCnDe;EDoDf,8BCnDoB,EAAA;EDiDtB;IAKI,yBCrCmB,EAAA;EDgCvB;IAQI,sBCvCuB,EAAA;ED+B3B;IAWI,yBC7Da,EAAA;;ADiEjB;EACE,yBC/De;EDgEf,8BC/DoB,EAAA;ED6DtB;IAKI,yBCjDmB,EAAA;ED4CvB;IAQI,sBCnDuB,EAAA;ED2C3B;IAWI,yBCzEa,EAAA;;ACZjB;EACE;IAAK,WAAW,EAAA;EAChB;IAAO,SAAS,EAAA,EAAA;;AAGlB;EACE,eAAe;EACf,aAAa;EACb,oBAAoB;EACpB,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,0CAA0C;EAC1C,eAAe,EAAA;;AAGjB;;EAEE,gBAAgB;EAChB,gBAAgB,EAAA;;AAGlB;;EAEE,sBAAsB,EAAA;;AAGxB;EACE,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,kBAAkB,EAAA;;AAEpB;EACE,WAAW;EACX,kBAAkB,EAAA;;AAEpB;EACE,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,kBAAkB,EAAA;;AAEpB;EACE,WAAW;EACX,4BAA4B;EAC5B,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,gBAAgB;EAChB,aAAa,EAAA;;AAEf;EACE,iBAAiB;EACjB,qBAAqB;EACrB,WAAW,EAAA;;AAEb;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,SAAS,EAAA;EAPX;IAUI,cAAc;IACd,kBAAkB;IAClB,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,SAAS;IACT,QAAQ,EAAA;;AAIZ;;;;EAIE,eAAe;EACf,WAAW,EAAA;;AAGb;;EAEE,iBAAiB,EAAA;;AAGnB;;EAEE,kBAAkB,EAAA;;AAGpB;;EAEE,iBAAiB;EACjB,kBAAkB,EAAA","sourcesContent":[".rnc__notification-container--top-center,\r\n.rnc__notification-container--top-left,\r\n.rnc__notification-container--top-right,\r\n.rnc__notification-container--bottom-center,\r\n.rnc__notification-container--bottom-left,\r\n.rnc__notification-container--bottom-right,\r\n.rnc__notification-container--center,\r\n.rnc__notification-container--top-full,\r\n.rnc__notification-container--bottom-full {\r\n  min-width: 325px;\r\n  position: absolute;\r\n  pointer-events: all;\r\n}\r\n\r\n.rnc__notification-container--center,\r\n.rnc__notification-container--top-center,\r\n.rnc__notification-container--bottom-center {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  left: calc(50% - 175px);\r\n}\r\n\r\n.rnc__notification-container--center,\r\n.rnc__notification-container--top-center,\r\n.rnc__notification-container--bottom-center {\r\n  max-width: 350px;\r\n}\r\n\r\n.rnc__notification-container--center {\r\n  top: 20px;\r\n  height: 100%;\r\n  pointer-events: none;\r\n}\r\n\r\n.rnc__notification-container--top-full,\r\n.rnc__notification-container--bottom-full {\r\n  width: 100%;\r\n  min-width: 100%;\r\n}\r\n\r\n.rnc__notification-container--bottom-full {\r\n  bottom: 0;\r\n}\r\n\r\n.rnc__util--flex-center {\r\n  min-width: 325px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  pointer-events: all;\r\n}\r\n\r\n.rnc__notification-container--top-center {\r\n  top: 20px;\r\n}\r\n.rnc__notification-container--bottom-center {\r\n  bottom: 20px;\r\n}\r\n\r\n.rnc__notification-container--top-left {\r\n  left: 20px;\r\n  top: 20px;\r\n}\r\n\r\n.rnc__notification-container--top-right {\r\n  right: 20px;\r\n  top: 20px;\r\n}\r\n\r\n.rnc__notification-container--bottom-left {\r\n  left: 20px;\r\n  bottom: 20px;\r\n}\r\n\r\n.rnc__notification-container--bottom-right {\r\n  bottom: 20px;\r\n  right: 20px;\r\n}\r\n\r\n.rnc__notification-container--mobile-top,\r\n.rnc__notification-container--mobile-bottom {\r\n  pointer-events: all;\r\n  position: absolute;\r\n}\r\n\r\n.rnc__notification-container--mobile-top {\r\n  right: 20px;\r\n  left: 20px;\r\n  top: 20px;\r\n}\r\n\r\n.rnc__notification-container--mobile-bottom {\r\n  right: 20px;\r\n  left: 20px;\r\n  bottom: 20px;\r\n  margin-bottom: -15px;\r\n}\r\n","@import \"_variables.scss\";\r\n\r\n.rnc__notification-item--default {\r\n  background-color: $default;\r\n  border-left: 8px solid $default_dark;\r\n\r\n  .rnc__notification-timer {\r\n    background-color: $default_timer;\r\n  }\r\n  .rnc__notification-timer-filler {\r\n    background-color: $default_timer_filler;\r\n  }\r\n  .rnc__notification-close-mark {\r\n    background-color: $default;\r\n  }\r\n}\r\n\r\n.rnc__notification-item--success {\r\n  background-color: $success;\r\n  border-left: 8px solid $success_dark;\r\n\r\n  .rnc__notification-timer {\r\n    background-color: $success_timer;\r\n  }\r\n  .rnc__notification-timer-filler {\r\n    background-color: $success_timer_filler;\r\n  }\r\n  .rnc__notification-close-mark {\r\n    background-color: $success;\r\n  }\r\n}\r\n\r\n.rnc__notification-item--danger {\r\n  background-color: $danger;\r\n  border-left: 8px solid $danger_dark;\r\n\r\n  .rnc__notification-timer {\r\n    background-color: $danger_timer;\r\n  }\r\n  .rnc__notification-timer-filler {\r\n    background-color: $danger_timer_filler;\r\n  }\r\n  .rnc__notification-close-mark {\r\n    background-color: $danger;\r\n  }\r\n}\r\n\r\n.rnc__notification-item--info {\r\n  background-color: $info;\r\n  border-left: 8px solid $info_dark;\r\n\r\n  .rnc__notification-timer {\r\n    background-color: $info_timer;\r\n  }\r\n  .rnc__notification-timer-filler {\r\n    background-color: $info_timer_filler;\r\n  }\r\n  .rnc__notification-close-mark {\r\n    background-color: $info;\r\n  }\r\n}\r\n\r\n.rnc__notification-item--warning {\r\n  background-color: $warning;\r\n  border-left: 8px solid $warning_dark;\r\n\r\n  .rnc__notification-timer {\r\n    background-color: $warning_timer;\r\n  }\r\n  .rnc__notification-timer-filler {\r\n    background-color: $warning_timer_filler;\r\n  }\r\n  .rnc__notification-close-mark {\r\n    background-color: $warning;\r\n  }\r\n}\r\n\r\n.rnc__notification-item--awesome {\r\n  background-color: $awesome;\r\n  border-left: 8px solid $awesome_dark;\r\n\r\n  .rnc__notification-timer {\r\n    background-color: $awesome_timer;\r\n  }\r\n  .rnc__notification-timer-filler {\r\n    background-color: $awesome_timer_filler;\r\n  }\r\n  .rnc__notification-close-mark {\r\n    background-color: $awesome;\r\n  }\r\n}","$default: #007bff !default;\r\n$default_dark: #0562c7 !default;\r\n\r\n$success: #28a745 !default;\r\n$success_dark: #1f8838 !default;\r\n\r\n$danger: #dc3545 !default;\r\n$danger_dark: #bd1120 !default;\r\n\r\n$info: #17a2b8 !default;\r\n$info_dark: #138b9e !default;\r\n\r\n$warning: #eab000 !default;\r\n$warning_dark: #ce9c09 !default;\r\n\r\n$awesome: #685dc3 !default;\r\n$awesome_dark: #4c3fb1 !default;\r\n\r\n$default_timer: #007bff !default;\r\n$default_timer_filler: #fff !default;\r\n\r\n$success_timer: #28a745 !default;\r\n$success_timer_filler: #fff !default;\r\n\r\n$danger_timer: #dc3545 !default;\r\n$danger_timer_filler: #fff !default;\r\n\r\n$info_timer: #17a2b8 !default;\r\n$info_timer_filler: #fff !default;\r\n\r\n$warning_timer: #eab000 !default;\r\n$warning_timer_filler: #fff !default;\r\n\r\n$awesome_timer: #685dc3 !default;\r\n$awesome_timer_filler: #fff !default;\r\n","@import \"./_containers.scss\";\r\n@import \"./_types.scss\";\r\n\r\n@keyframes timer {\r\n  0% { width: 100%; }\r\n  100% { width: 0%; }\r\n}\r\n\r\n.rnc__base {\r\n  position: fixed;\r\n  z-index: 9000;\r\n  pointer-events: none;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.rnc__notification-item {\r\n  display: flex;\r\n  position: relative;\r\n  border-radius: 3px;\r\n  margin-bottom: 15px;\r\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n.rnc__notification-container--top-full .rnc__notification-item,\r\n.rnc__notification-container--bottom-full .rnc__notification-item {\r\n  margin-bottom: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n.rnc__notification-container--top-full .rnc__notification,\r\n.rnc__notification-container--bottom-full .rnc__notification {\r\n  width: 100% !important;\r\n}\r\n\r\n.rnc__notification-timer {\r\n  width: 100%;\r\n  height: 3px;\r\n  margin-top: 10px;\r\n  border-radius: 5px;\r\n}\r\n.rnc__notification-timer-filler {\r\n  height: 3px;\r\n  border-radius: 5px;\r\n}\r\n.rnc__notification-title {\r\n  color: #fff;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.rnc__notification-message {\r\n  color: #fff;\r\n  max-width: calc(100% - 15px);\r\n  font-size: 14px;\r\n  line-height: 150%;\r\n  word-wrap: break-word;\r\n  margin-bottom: 0;\r\n  margin-top: 0;\r\n}\r\n.rnc__notification-content {\r\n  padding: 8px 15px;\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n.rnc__notification-close-mark {\r\n  width: 18px;\r\n  height: 18px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 10px;\r\n\r\n  &::after {\r\n    content: '\\D7';\r\n    position: absolute;\r\n    transform: translate(-50%, -50%);\r\n    color: #fff;\r\n    font-size: 12px;\r\n    left: 50%;\r\n    top: 50%;\r\n  }\r\n}\r\n\r\n.rnc__notification-container--mobile-top .rnc__notification-item,\r\n.rnc__notification-container--mobile-bottom .rnc__notification-item,\r\n.rnc__notification-container--mobile-top .notification,\r\n.rnc__notification-container--mobile-bottom .notification {\r\n  max-width: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.rnc__notification-container--top-right .notification,\r\n.rnc__notification-container--bottom-right .notification {\r\n  margin-left: auto;\r\n}\r\n\r\n.rnc__notification-container--top-left .notification,\r\n.rnc__notification-container--bottom-left .notification {\r\n  margin-right: auto;\r\n}\r\n\r\n.rnc__notification-container--mobile-top .notification,\r\n.rnc__notification-container--mobile-bottom .notification {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactNotifications": () => (/* reexport safe */ _components_Container__WEBPACK_IMPORTED_MODULE_0__.Container),
/* harmony export */   "Store": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Container */ "./src/components/Container.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/store/index.ts");



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map
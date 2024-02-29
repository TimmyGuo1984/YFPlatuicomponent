import { notification, Menu, Dropdown, Avatar, message, Layout, Tabs, Carousel, Spin, Result, Button, ConfigProvider, Modal, Space, Input, Select, TreeSelect, Cascader, Tree, Form, Upload, Card, PageHeader, List, Tag, Row, Col, Image } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import axios from 'axios';
import { makeObservable, observable, action, computed, transaction, configure } from 'mobx';
import React, { useContext, useState, useEffect, useRef } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Icon from '@ant-design/icons';
import { UserOutlined, LogoutOutlined, BellOutlined, BugFilled, ExclamationCircleOutlined, PlusOutlined, DownOutlined, SearchOutlined, ReloadOutlined, DownloadOutlined, InboxOutlined, RedoOutlined, ImportOutlined, FileExcelFilled } from '@ant-design/icons';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { useObserver, observer } from 'mobx-react-lite';
import { DropTarget, DragSource, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ProCard from '@ant-design/pro-card';
import ProTable from '@ant-design/pro-table';
import Draggable from 'react-draggable';
import * as Icons from '@ant-design/icons/lib/icons';
import QRCode from 'qrcode.react';
import ReactToPrint from 'react-to-print';
import { Base64 } from 'js-base64';
import Avatar$1 from 'antd/lib/avatar/avatar';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

//! moment.js locale configuration
(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment);
}(undefined, (function (moment) {
    //! moment.js locale configuration

    var zhCn = moment.defineLocale('zh-cn', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
            '_'
        ),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
            '_'
        ),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日Ah点mm分',
            LLLL: 'YYYY年M月D日ddddAh点mm分',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm',
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
                return hour;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            } else {
                // '中午'
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            } else if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek: function (now) {
                if (now.week() !== this.week()) {
                    return '[下]dddLT';
                } else {
                    return '[本]dddLT';
                }
            },
            lastDay: '[昨天]LT',
            lastWeek: function (now) {
                if (this.week() !== now.week()) {
                    return '[上]dddLT';
                } else {
                    return '[本]dddLT';
                }
            },
            sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '日';
                case 'M':
                    return number + '月';
                case 'w':
                case 'W':
                    return number + '周';
                default:
                    return number;
            }
        },
        relativeTime: {
            future: '%s后',
            past: '%s前',
            s: '几秒',
            ss: '%d 秒',
            m: '1 分钟',
            mm: '%d 分钟',
            h: '1 小时',
            hh: '%d 小时',
            d: '1 天',
            dd: '%d 天',
            w: '1 周',
            ww: '%d 周',
            M: '1 个月',
            MM: '%d 个月',
            y: '1 年',
            yy: '%d 年',
        },
        week: {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow: 1, // Monday is the first day of the week.
            doy: 4, // The week that contains Jan 4th is the first week of the year.
        },
    });

    return zhCn;

})));

var resdata = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
    var success, data, message;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            success = res.success, data = res.data, message = res.message;

            if (!(success === true)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", data);

          case 5:
            if (!(success === false)) {
              _context.next = 10;
              break;
            }

            notification.error({
              message: message
            });
            return _context.abrupt("return", Promise.reject());

          case 10:
            return _context.abrupt("return", res);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function resdata(_x) {
    return _ref.apply(this, arguments);
  };
}();

var httpMethod = {
  get: function () {
    var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(API, params) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get(API, {
                params: params
              });

            case 2:
              res = _context2.sent;
              return _context2.abrupt("return", resdata(res.data));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function get(_x2, _x3) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),
  post: function () {
    var _post = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(API, params, config) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios.post(API, params, config);

            case 2:
              res = _context3.sent;
              return _context3.abrupt("return", resdata(res.data));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function post(_x4, _x5, _x6) {
      return _post.apply(this, arguments);
    }

    return post;
  }(),
  put: function () {
    var _put = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(API, params, config) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios.put(API, params, config);

            case 2:
              res = _context4.sent;
              return _context4.abrupt("return", resdata(res.data));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function put(_x7, _x8, _x9) {
      return _put.apply(this, arguments);
    }

    return put;
  }(),
  patch: function () {
    var _patch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(API, params, config) {
      var res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios.patch(API, params, config);

            case 2:
              res = _context5.sent;
              return _context5.abrupt("return", resdata(res.data));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function patch(_x10, _x11, _x12) {
      return _patch.apply(this, arguments);
    }

    return patch;
  }(),
  delete: function () {
    var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(API, params) {
      var res;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios.delete(API, {
                data: params
              });

            case 2:
              res = _context6.sent;
              return _context6.abrupt("return", resdata(res.data));

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function _delete(_x13, _x14) {
      return _delete2.apply(this, arguments);
    }

    return _delete;
  }()
};

var setting = {};
var AppContext = /*#__PURE__*/React.createContext(setting);

var Contexts = {
  AppContext: AppContext
};

var UserStore = /*#__PURE__*/function () {
  function UserStore() {
    _classCallCheck(this, UserStore);

    this.currentUser = {};
    this.isLogined = false;
    this.isLogined = false;
    this.currentUser = {};
    makeObservable(this, {
      currentUser: observable,
      isLogined: observable,
      setCurrentUser: action.bound,
      setLogined: action.bound
    });
  }

  _createClass(UserStore, [{
    key: "setCurrentUser",
    value: function setCurrentUser(value) {
      this.currentUser = value;
    }
  }, {
    key: "setLogined",
    value: function setLogined(value) {
      this.isLogined = value;
    }
  }]);

  return UserStore;
}();
var userStore = new UserStore();

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".HeaderWrapper {\n  height: 64px;\n}\n.HeaderWrapper .ant-layout-header {\n  padding: 0 !important;\n  background: #1f202b !important;\n  height: 64px !important;\n}\n.HeaderWrapper .ant-page-header-ghost {\n  background-color: #fff !important;\n}\n.HeaderWrapper .HeaderLeft span {\n  color: #fff;\n  height: 64px;\n  line-height: 64px;\n  display: inline-block;\n  margin-top: -40px;\n}\n.HeaderWrapper .HeaderLeft span:hover,\n.HeaderWrapper .HeaderLeft .NameDropdown:hover {\n  background-color: rgba(36, 32, 32, 0.05);\n}\n.HeaderWrapper .HeaderLeft .Title {\n  color: #fff;\n  position: absolute;\n  left: 142px;\n  margin-top: 0px;\n  font-size: 20px;\n}\n.HeaderWrapper .Logo {\n  width: 200px;\n  padding-left: 0;\n  text-align: center;\n}\n.HeaderWrapper .Logo img {\n  height: 54px;\n}\n";
styleInject(css_248z);

var AppContext$1 = Contexts.AppContext;

var headerRight = function headerRight() {
  var currentUser = userStore.currentUser;

  var _useContext = useContext(AppContext$1),
      userManager = _useContext.userManager,
      apiBaseUrl = _useContext.apiBaseUrl;

  var logout = function logout() {
    window.localStorage.clear();
    userManager === null || userManager === void 0 ? void 0 : userManager.signoutRedirect();
  };

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      passChgModelVisible = _useState2[0],
      setPassChgModelVisible = _useState2[1];

  var personDropdown = /*#__PURE__*/React.createElement(Menu, {
    selectedKeys: [],
    onClick: function () {
      var _onClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e.key === 'logout') {
                  logout();
                } else if (e.key === 'chgpwd') {
                  setPassChgModelVisible(true);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onClick(_x) {
        return _onClick.apply(this, arguments);
      }

      return onClick;
    }()
  }, /*#__PURE__*/React.createElement(Menu.Item, {
    key: "chgpwd"
  }, /*#__PURE__*/React.createElement(UserOutlined, null), "\u4FEE\u6539\u5BC6\u7801"), /*#__PURE__*/React.createElement(Menu.Divider, null), /*#__PURE__*/React.createElement(Menu.Item, {
    key: "logout"
  }, /*#__PURE__*/React.createElement(LogoutOutlined, null), "\u9000\u51FA\u767B\u5F55"));
  return /*#__PURE__*/React.createElement("p", {
    style: {
      float: 'right',
      marginRight: '24px'
    }
  }, /*#__PURE__*/React.createElement(BellOutlined, {
    style: {
      color: '#fff',
      padding: '0'
    }
  }), /*#__PURE__*/React.createElement(Dropdown, {
    overlay: personDropdown
  }, /*#__PURE__*/React.createElement("span", {
    className: "NameDropdown",
    style: {
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: "small",
    alt: "avatar",
    style: {
      marginRight: '12px'
    }
  }), useObserver(function () {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        display: 'inline-block'
      }
    }, currentUser.name);
  }))), useObserver(function () {
    return passChgModelVisible && /*#__PURE__*/React.createElement(ModalForm, {
      width: 640,
      style: {
        padding: '32px 40px 48px'
      },
      title: "\u7528\u6237\u5BC6\u7801\u4FEE\u6539",
      visible: passChgModelVisible,
      modalProps: {
        onCancel: function onCancel() {
          setPassChgModelVisible(false);
        }
      },
      onFinish: function () {
        var _onFinish = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(values) {
          var oldPass, newPass, newPassConfirm, pars, ret;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  oldPass = values.oldPass, newPass = values.newPass, newPassConfirm = values.newPassConfirm;

                  if (!(newPass != newPassConfirm)) {
                    _context2.next = 4;
                    break;
                  }

                  message.error('新密码不一致！');
                  return _context2.abrupt("return", false);

                case 4:
                  pars = {
                    userId: currentUser.sub,
                    oldPass: oldPass,
                    newPass: newPass
                  };
                  _context2.prev = 5;
                  _context2.next = 8;
                  return httpMethod.post("".concat(apiBaseUrl, "/user/change-pass"), pars);

                case 8:
                  ret = _context2.sent;
                  message.success('修改成功');
                  setPassChgModelVisible(false);
                  return _context2.abrupt("return", true);

                case 14:
                  _context2.prev = 14;
                  _context2.t0 = _context2["catch"](5);
                  message.error('修改失败请重试！');
                  return _context2.abrupt("return", false);

                case 18:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[5, 14]]);
        }));

        function onFinish(_x2) {
          return _onFinish.apply(this, arguments);
        }

        return onFinish;
      }()
    }, /*#__PURE__*/React.createElement(ProFormText.Password, {
      label: "\u65E7\u5BC6\u7801",
      name: "oldPass",
      rules: [{
        required: true
      }]
    }), /*#__PURE__*/React.createElement(ProFormText.Password, {
      label: "\u65B0\u5BC6\u7801",
      name: "newPass",
      rules: [{
        required: true,
        message: '请输入新密码！!'
      }, {
        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,30}$/,
        message: '密码长度8到30位必须包含大小写字母，数字，特殊字符'
      }]
    }), /*#__PURE__*/React.createElement(ProFormText.Password, {
      label: "\u786E\u8BA4\u5BC6\u7801",
      name: "newPassConfirm",
      rules: [{
        required: true,
        message: '请输入确认密码！'
      }, function (_ref) {
        var getFieldValue = _ref.getFieldValue;
        return {
          validator: function validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }

            return Promise.reject(new Error('确认密码与初始密码不一致'));
          }
        };
      }]
    }));
  }));
};

var HeaderRight = /*#__PURE__*/React.memo(headerRight);

var Header = Layout.Header;

var mainHeader = function mainHeader() {
  var _useContext = useContext(AppContext),
      logoUrl = _useContext.logoUrl;

  return /*#__PURE__*/React.createElement("div", {
    className: "HeaderWrapper"
  }, /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement("p", {
    className: "HeaderLeft",
    style: {
      float: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "Logo"
  }, /*#__PURE__*/React.createElement("img", {
    alt: "logo",
    src: logoUrl
  })), /*#__PURE__*/React.createElement("span", {
    className: "Title"
  }, document.title)), /*#__PURE__*/React.createElement(HeaderRight, null)));
};

var TABS = 'tabMenus';
var ACTIVE_TAB_KEY = 'activeTabKey'; // 内部菜单

var INTERNAL_MENU = 1; // 外部菜单

var EXTERNAL_MENU = 2; // 打开新页面

var OPEN_WINDOW_MENU = 3;
var MenuStore = /*#__PURE__*/function () {
  // @observable
  // @observable
  // @observable
  function MenuStore() {
    _classCallCheck(this, MenuStore);

    this.allMenu = [];
    this.tabs = [];
    this.activeTabKey = '';
    makeObservable(this, {
      allMenu: observable,
      tabs: observable,
      activeTabKey: observable,
      emptyTab: computed,
      currentTab: computed,
      setMenus: action.bound,
      changeTab: action.bound,
      addTab: action.bound,
      closeTab: action.bound,
      closeOtherTabs: action.bound,
      closeRightTabs: action.bound,
      onMoveTab: action.bound,
      closeAllTabMenu: action.bound
    });
    this.allMenu = [];
    this.tabs = [];
    this.activeTabKey = '';
  }
  /** 设置当前菜单 */


  _createClass(MenuStore, [{
    key: "setMenus",
    value: function setMenus(menus) {
      var _this = this;

      var storageTab = localStorage.getItem("".concat(process.env.PUBLIC_URL).concat(TABS));
      var storageTabKey = localStorage.getItem("".concat(process.env.PUBLIC_URL).concat(ACTIVE_TAB_KEY));
      var storageTabs = [];

      try {
        if (storageTab) {
          storageTabs = JSON.parse(storageTab);
        }
      } catch (error) {
        storageTabs = [];
        console.error('parse tab err', error);
      }

      transaction(function () {
        if (storageTab) {
          _this.tabs = storageTabs;
        }

        if (storageTabKey) {
          _this.activeTabKey = storageTabKey;
        }

        _this.allMenu = menus;
      });
    }
  }, {
    key: "emptyTab",
    get: function get() {
      return this.tabs.length === 0;
    }
  }, {
    key: "currentTab",
    get: function get() {
      if (this.tabs.length === 0) {
        return {};
      }

      for (var index = 0; index < this.tabs.length; index++) {
        var tab = this.tabs[index];

        if (tab.id === this.activeTabKey) {
          return tab;
        }
      }

      return {};
    }
  }, {
    key: "changeTab",
    value: function changeTab(id) {
      this.activeTabKey = id;
      localStorage.setItem("".concat(process.env.PUBLIC_URL).concat(ACTIVE_TAB_KEY), id);
    }
  }, {
    key: "addTab",
    value: function addTab(tab) {
      var _this2 = this;

      if (tab.urlType === OPEN_WINDOW_MENU) {
        window.open(tab.url);
        return;
      }

      var cur_index = this.tabs.findIndex(function (m) {
        return m.id === tab.id;
      });
      transaction(function () {
        if (cur_index === -1) {
          _this2.tabs.push(tab);
        } else {
          _this2.tabs[cur_index] = tab;
        }

        _this2.activeTabKey = tab.id;
      });
      localStorage.setItem("".concat(process.env.PUBLIC_URL).concat(TABS), JSON.stringify(this.tabs));
      localStorage.setItem("".concat(process.env.PUBLIC_URL).concat(ACTIVE_TAB_KEY), tab.id);
    }
  }, {
    key: "closeTab",
    value: function closeTab(id) {
      var _this3 = this;

      var cur_tabs = [];
      var cur_index = -1;

      for (var index = 0; index < this.tabs.length; index++) {
        var cur_menu = this.tabs[index];

        if (cur_menu.id !== id) {
          cur_tabs.push(cur_menu);
        } else {
          cur_index = index;
        }
      }

      if (cur_index === -1) {
        return;
      }

      if (cur_tabs.length === 0) {
        localStorage.removeItem("".concat(process.env.PUBLIC_URL).concat(TABS));
        localStorage.removeItem("".concat(process.env.PUBLIC_URL).concat(ACTIVE_TAB_KEY));
        this.tabs = cur_tabs;
        return;
      }

      transaction(function () {
        var focus_index = Math.min(cur_tabs.length - 1, cur_index);
        _this3.activeTabKey = cur_tabs[focus_index].id;
        _this3.tabs = cur_tabs;
        localStorage.setItem("".concat(process.env.PUBLIC_URL).concat(TABS), JSON.stringify(cur_tabs));
        localStorage.setItem("".concat(process.env.PUBLIC_URL).concat(ACTIVE_TAB_KEY), cur_tabs[focus_index].id);
      });
    }
  }, {
    key: "closeOtherTabs",
    value: function closeOtherTabs(id) {
      var _this4 = this;

      var cur_tabs = [];

      for (var index = 0; index < this.tabs.length; index++) {
        var cur_menu = this.tabs[index];

        if (cur_menu.id === id) {
          cur_tabs.push(cur_menu);
        }
      }

      transaction(function () {
        _this4.activeTabKey = id;
        _this4.tabs = cur_tabs;
        localStorage.setItem("".concat(process.env.PUBLIC_URL).concat(TABS), JSON.stringify(cur_tabs));
        localStorage.setItem("".concat(process.env.PUBLIC_URL).concat(ACTIVE_TAB_KEY), id);
      });
    } // @action.bound

  }, {
    key: "closeRightTabs",
    value: function closeRightTabs(id) {
      var _this5 = this;

      var currentIndex = this.tabs.findIndex(function (tab) {
        return tab.id === id;
      });
      var cur_tabs = this.tabs.slice(0, currentIndex + 1);
      transaction(function () {
        _this5.activeTabKey = id;
        _this5.tabs = cur_tabs;
        localStorage.setItem("".concat(process.env.PUBLIC_URL).concat(TABS), JSON.stringify(cur_tabs));
        localStorage.setItem("".concat(process.env.PUBLIC_URL).concat(ACTIVE_TAB_KEY), id);
      });
    }
  }, {
    key: "onMoveTab",
    value: function onMoveTab(dstKey, srcKey) {
      var _this6 = this;

      transaction(function () {
        var srcIndex = -1;
        var dstIndex = -1;
        var newTabs = [];

        for (var index = 0; index < _this6.tabs.length; index++) {
          var cur_tab = _this6.tabs[index];

          if (cur_tab.id === srcKey) {
            srcIndex = index;
          }

          if (cur_tab.id === dstKey) {
            dstIndex = index;
            continue;
          }

          newTabs.push(cur_tab);
        }

        if (dstIndex === -1) return;
        var dstTab = _this6.tabs[dstIndex];
        _this6.activeTabKey = dstTab.id;
        if (srcIndex === -1) return;

        if (srcIndex === _this6.tabs.length - 1) {
          _this6.tabs = [].concat(newTabs, [dstTab]);
        } else {
          newTabs.splice(srcIndex, 0, dstTab);
          _this6.tabs = newTabs;
        }

        localStorage.setItem("".concat(process.env.PUBLIC_URL).concat(TABS), JSON.stringify(_this6.tabs));
        localStorage.setItem("".concat(process.env.PUBLIC_URL).concat(ACTIVE_TAB_KEY), dstTab.id);
      });
    }
  }, {
    key: "closeAllTabMenu",
    value: function closeAllTabMenu() {
      localStorage.removeItem("".concat(process.env.PUBLIC_URL).concat(TABS));
      localStorage.removeItem("".concat(process.env.PUBLIC_URL).concat(ACTIVE_TAB_KEY));
      this.tabs = [];
    }
  }]);

  return MenuStore;
}();
var menuStore = new MenuStore();

var Stores = {
  menuStore: menuStore,
  userStore: userStore
};

var useInit = function useInit() {
  var _React$useContext = React.useContext(AppContext),
      apiBaseUrl = _React$useContext.apiBaseUrl,
      userManager = _React$useContext.userManager,
      skipOAuth = _React$useContext.skipOAuth;

  var menuStore = Stores.menuStore,
      userStore = Stores.userStore;
  var setMenus = menuStore.setMenus;
  var setCurrentUser = userStore.setCurrentUser;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var menuMapper = function menuMapper(srcMenus) {
    var dstMenus = [];

    for (var index = 0; index < srcMenus.length; index++) {
      var _srcMenus$index = srcMenus[index],
          id = _srcMenus$index.id,
          name = _srcMenus$index.name,
          url = _srcMenus$index.url,
          urlType = _srcMenus$index.urlType,
          icon = _srcMenus$index.icon,
          params = _srcMenus$index.params,
          treeChildren = _srcMenus$index.treeChildren;
      var children = [];

      if (Array.isArray(treeChildren) && treeChildren.length > 0) {
        children = menuMapper(treeChildren);
      }

      dstMenus.push({
        id: id,
        name: name,
        url: url,
        urlType: urlType,
        icon: icon,
        params: params,
        children: children
      });
    }

    return dstMenus;
  };

  useEffect(function () {
    var req = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var user, url, ret, dstMenus;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoading(true);

                if (skipOAuth) {
                  _context.next = 11;
                  break;
                }

                if (!userManager) {
                  _context.next = 11;
                  break;
                }

                _context.next = 5;
                return userManager.getUser();

              case 5:
                user = _context.sent;
                console.log('user:', user);

                if (user) {
                  _context.next = 10;
                  break;
                }

                userManager.signinRedirect();
                return _context.abrupt("return");

              case 10:
                setCurrentUser(user.profile);

              case 11:
                url = skipOAuth ? "".concat(apiBaseUrl, "/menu/tree-all") : "".concat(apiBaseUrl, "/menu/user-menus");
                _context.next = 14;
                return httpMethod.get(url);

              case 14:
                ret = _context.sent;

                if (Array.isArray(ret)) {
                  dstMenus = menuMapper(ret);
                  setMenus(dstMenus);
                }

                setLoading(false);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function req() {
        return _ref.apply(this, arguments);
      };
    }();

    req();
  }, [userManager, apiBaseUrl, skipOAuth]);
  return [loading];
};

var css_248z$1 = ".ant-menu-inline,\n.ant-menu-vertical,\n.ant-menu-vertical-left {\n  border-right: 0;\n}\n.ant-menu-item .anticon,\n.ant-menu-submenu-title .anticon {\n  font-size: 16px !important;\n}\n.ant-tabs-content-holder {\n  position: relative;\n  top: -16px;\n}\n.ant-layout.ant-layout-has-sider > .ant-layout,\n.ant-layout.ant-layout-has-sider > .ant-layout-content {\n  overflow: hidden;\n}\n.SiteLayouBackground {\n  background-color: #262f3d !important;\n  border-top: 1px solid #101117;\n  overflow-y: auto;\n  height: 100%;\n}\n.ant-layout-sider-trigger {\n  background: #1f202b !important;\n}\n.ant-menu-inline-collapsed > .ant-menu-item,\n.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item,\n.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title,\n.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {\n  padding: 0 22px !important;\n}\n.ant-menu-inline-collapsed {\n  width: 60px !important;\n}\n.ant-menu-inline,\n.ant-menu-vertical,\n.ant-menu-vertical-left {\n  border-right: 0 none !important;\n}\n.ant-tabs-tabpane {\n  background-color: #f8fbfd;\n}\n.ant-pro-table-search {\n  margin-bottom: 0 !important;\n}\n.SiteLayoutContent {\n  bottom: 0;\n  left: 200px;\n  right: 0;\n  margin: 0;\n  min-height: 280px;\n  background-color: #f5f5f5;\n}\ndiv.TabContentFrame,\niframe.TabContentFrame {\n  height: calc(calc(100vh - 64px - 30px) - 0px - 40px);\n  overflow: auto;\n}\ndiv.TabContentFrame .tabledetail_wrap,\niframe.TabContentFrame .tabledetail_wrap {\n  background-color: #fff;\n  padding-bottom: 10px;\n}\ndiv.TabContentFrame .tabledetail_wrap td.ant-table-cell,\niframe.TabContentFrame .tabledetail_wrap td.ant-table-cell {\n  padding: 2px 8px !important;\n}\ndiv.TabContentFrame .tabledetail_view_wrap,\niframe.TabContentFrame .tabledetail_view_wrap {\n  background-color: #fff;\n  padding-bottom: 10px;\n}\ndiv.TabContentFrame .small_table .ant-table.ant-table-small .ant-table-title,\niframe.TabContentFrame .small_table .ant-table.ant-table-small .ant-table-title,\ndiv.TabContentFrame .small_table .ant-table.ant-table-small .ant-table-footer,\niframe.TabContentFrame .small_table .ant-table.ant-table-small .ant-table-footer,\ndiv.TabContentFrame .small_table .ant-table.ant-table-small .ant-table-thead > tr > th,\niframe.TabContentFrame .small_table .ant-table.ant-table-small .ant-table-thead > tr > th,\ndiv.TabContentFrame .small_table .ant-table.ant-table-small .ant-table-tbody > tr > td,\niframe.TabContentFrame .small_table .ant-table.ant-table-small .ant-table-tbody > tr > td,\ndiv.TabContentFrame .small_table .ant-table.ant-table-small tfoot > tr > th,\niframe.TabContentFrame .small_table .ant-table.ant-table-small tfoot > tr > th,\ndiv.TabContentFrame .small_table .ant-table.ant-table-small tfoot > tr > td,\niframe.TabContentFrame .small_table .ant-table.ant-table-small tfoot > tr > td {\n  padding: 4px 4px;\n}\ndiv.TabContentFrame .small_table .ant-pro-table-search,\niframe.TabContentFrame .small_table .ant-pro-table-search {\n  padding: 10px;\n}\ndiv.TabContentFrame .small_headcompact_table .ant-card,\niframe.TabContentFrame .small_headcompact_table .ant-card {\n  margin-top: -30px;\n}\n#MainFrameFooter {\n  text-align: center;\n  padding: 4px 0px 4px 0px;\n}\n.ant-menu {\n  background-color: #262f3d !important;\n}\n.ant-menu-item,\n.ant-menu-submenu {\n  color: #ccc !important;\n  font-size: 14px !important;\n}\n.ant-menu-item:hover {\n  color: #fff !important;\n}\n.ant-menu-submenu-arrow:before {\n  background-image: linear-gradient(to right, #ccc, #ccc) !important;\n}\n.ant-menu-submenu-arrow:after {\n  background-image: linear-gradient(to right, #ccc, #ccc) !important;\n}\n.ant-menu-submenu-title:hover {\n  color: #fff !important;\n}\n.ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before {\n  background-image: linear-gradient(to right, #fff, #fff) !important;\n}\n.ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after {\n  background-image: linear-gradient(to right, #fff, #fff) !important;\n}\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.ant-row {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n.editable-cell {\n  position: relative;\n}\n.editable-cell-value-wrap {\n  padding: 5px 0;\n  cursor: pointer;\n}\n.editable-row:hover .editable-cell-value-wrap {\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  padding: 4px 11px;\n}\n.editable-row:hover .editable-cell-value-wrap {\n  border: 1px solid #434343;\n}\n.ant-pro-table .ant-card {\n  padding: 0 10px 0 10px;\n}\n.ant-pro-table .ant-table-content tr:first-child > th:first-child {\n  padding-left: 8px !important;\n}\n.ant-pro-table .ant-table-row .ant-table-cell:first-child {\n  padding-left: 8px !important;\n}\n";
styleInject(css_248z$1);

var SubMenu = Menu.SubMenu;
var SubMenuList = observer(function () {
  // const { menuStore } = React.useContext<Record<string, MenuStore>>(MobXProviderContext);
  var iconDic = Icon;
  var allMenu = menuStore.allMenu,
      addTab = menuStore.addTab;

  var handleSubMEnu = function handleSubMEnu(menus) {
    return menus.map(function (item) {
      var id = item.id,
          name = item.name,
          icon = item.icon,
          children = item.children;
      var cur_children = children || [];
      var CurIcon = iconDic[icon];
      var iconElm = /*#__PURE__*/React.createElement("div", null);

      if (CurIcon) {
        iconElm = /*#__PURE__*/React.createElement(CurIcon, null);
      }

      if (cur_children.length > 0) {
        return /*#__PURE__*/React.createElement(SubMenu, {
          key: id,
          icon: iconElm,
          title: name,
          className: "layout_sidemenu"
        }, handleSubMEnu(cur_children));
      }

      var handleMenuClick = function handleMenuClick() {
        addTab(item);
      };

      return /*#__PURE__*/React.createElement(Menu.Item, {
        key: id,
        icon: iconElm,
        onClick: handleMenuClick
      }, name);
    });
  };

  return /*#__PURE__*/React.createElement(Menu, {
    mode: "vertical",
    selectable: false
  }, handleSubMEnu(allMenu));
});
var SubMenuList$1 = /*#__PURE__*/React.memo(SubMenuList);

var _excluded = ["children", "onMoveTab", "tabMenus", "onCloseOtherTabs", "onCloseRightTabs", "onCloseAllTabMenu"];

var TabNode = function TabNode(props) {
  var connectDragSource = props.connectDragSource,
      connectDropTarget = props.connectDropTarget,
      children = props.children;
  return connectDragSource(connectDropTarget(children));
};

var cardTarget = {
  drop: function drop(props, monitor) {
    var moveTabNode = props.moveTabNode;
    var dragKey = monitor.getItem().index;
    var hoverKey = props.index;

    if (dragKey === hoverKey) {
      return;
    }

    if (moveTabNode) {
      moveTabNode(dragKey, hoverKey);
    }

    monitor.getItem().index = hoverKey;
  }
};
var cardSource = {
  beginDrag: function beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};
var WrapTabNode = DropTarget('DND_NODE', cardTarget, function (connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
})(DragSource('DND_NODE', cardSource, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
})(TabNode));

var DraggableTabs = function DraggableTabs(props) {
  var children = props.children,
      onMoveTab = props.onMoveTab,
      tabMenus = props.tabMenus,
      onCloseOtherTabs = props.onCloseOtherTabs,
      onCloseRightTabs = props.onCloseRightTabs,
      onCloseAllTabMenu = props.onCloseAllTabMenu,
      otherProps = _objectWithoutProperties(props, _excluded);

  var moveTabNode = function moveTabNode(dragKey, hoverKey) {
    if (onMoveTab) {
      onMoveTab(dragKey, hoverKey);
    }
  }; // 关闭其他-是否禁用


  var closeOtherDisable = function closeOtherDisable() {
    if (tabMenus && tabMenus.length >= 2) {
      return false;
    } else {
      return true;
    }
  }; // 关闭右侧-是否禁用


  var closeRightDisable = function closeRightDisable(key) {
    var currentIndex = tabMenus.findIndex(function (tab) {
      return tab.id === key;
    });

    if (currentIndex === tabMenus.length - 1) {
      return true;
    } else {
      return false;
    }
  };

  var renderTabBar = function renderTabBar(props, DefaultTabBar) {
    return /*#__PURE__*/React.createElement(DefaultTabBar, _objectSpread2({}, props), function (node) {
      return /*#__PURE__*/React.createElement(WrapTabNode, {
        key: node.key,
        index: node.key,
        moveTabNode: moveTabNode
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
        overlay: /*#__PURE__*/React.createElement(Menu, null, /*#__PURE__*/React.createElement(Menu.Item, {
          disabled: closeRightDisable(node.key),
          onClick: function onClick() {
            onCloseRightTabs(node.key);
          }
        }, /*#__PURE__*/React.createElement("span", null, "\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875")), /*#__PURE__*/React.createElement(Menu.Item, {
          disabled: closeOtherDisable(),
          onClick: function onClick() {
            onCloseOtherTabs(node.key);
          }
        }, /*#__PURE__*/React.createElement("span", null, "\u5173\u95ED\u5176\u4ED6\u6807\u7B7E\u9875")), /*#__PURE__*/React.createElement(Menu.Item, {
          onClick: function onClick() {
            onCloseAllTabMenu(node.key);
          }
        }, /*#__PURE__*/React.createElement("span", null, "\u5173\u95ED\u5168\u90E8\u6807\u7B7E\u9875"))),
        trigger: ['contextMenu']
      }, node)));
    });
  };

  return /*#__PURE__*/React.createElement(DndProvider, {
    backend: HTML5Backend
  }, /*#__PURE__*/React.createElement(Tabs, _objectSpread2({
    renderTabBar: renderTabBar
  }, otherProps), children));
};

var DraggableTabs$1 = /*#__PURE__*/React.memo(DraggableTabs);

var TabPane = Tabs.TabPane;
var AppContext$2 = Contexts.AppContext;
var tab_style = {
  height: '100%',
  position: 'relative'
};
var tabList = observer(function () {
  var _React$useContext = React.useContext(AppContext$2),
      pages = _React$useContext.pages,
      IndexPage = _React$useContext.IndexPage;

  var _React$useContext2 = React.useContext(AppContext$2),
      apiBaseUrl = _React$useContext2.apiBaseUrl;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      systemObj = _useState2[0],
      setSystemObj = _useState2[1];

  var tabs = menuStore.tabs,
      activeTabKey = menuStore.activeTabKey,
      changeTab = menuStore.changeTab,
      closeTab = menuStore.closeTab,
      onMoveTab = menuStore.onMoveTab,
      closeRightTabs = menuStore.closeRightTabs,
      closeOtherTabs = menuStore.closeOtherTabs,
      closeAllTabMenu = menuStore.closeAllTabMenu;

  var req = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var obj;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return httpMethod.get("".concat(apiBaseUrl, "/system-info/system-info"));

            case 2:
              obj = _context.sent;
              setSystemObj(obj);
              console.log(obj);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function req() {
      return _ref.apply(this, arguments);
    };
  }();

  useEffect(function () {
    req();
  }, []);

  var renderBanner = function renderBanner() {
    var banner = systemObj.banner;
    var ret = [];

    if (Array.isArray(banner)) {
      for (var index = 0; index < banner.length; index++) {
        var dstUrl = banner[index];
        ret.push( /*#__PURE__*/React.createElement("img", {
          src: banner[index]
        }));
      }
    }

    return ret;
  };

  if (!Array.isArray(tabs) || tabs.length === 0) {
    if (IndexPage) {
      return IndexPage;
    }

    return /*#__PURE__*/React.createElement(Carousel, {
      effect: "fade",
      autoplay: true
    }, renderBanner());
  }

  var tabOnEdit = function tabOnEdit(targetKey, action) {
    if (action === 'remove') {
      closeTab(targetKey);
    }
  };

  return /*#__PURE__*/React.createElement(DraggableTabs$1, {
    type: "editable-card",
    onChange: changeTab,
    activeKey: activeTabKey,
    hideAdd: true,
    onEdit: tabOnEdit,
    style: tab_style,
    onMoveTab: onMoveTab,
    tabMenus: tabs,
    onCloseRightTabs: closeRightTabs,
    onCloseOtherTabs: closeOtherTabs,
    onCloseAllTabMenu: closeAllTabMenu
  }, tabs.map(function (tab) {
    var id = tab.id,
        name = tab.name,
        url = tab.url,
        urlType = tab.urlType,
        params = tab.params,
        props = tab.props;
    var pars = {};

    try {
      pars = JSON.parse(params);
    } catch (_unused) {}

    var elm = /*#__PURE__*/React.createElement(Result, {
      icon: /*#__PURE__*/React.createElement(BugFilled, null),
      title: "\u627E\u4E0D\u5230\u8BE5\u9875\u9762",
      subTitle: "urltype:".concat(urlType, " url:").concat(url, " \u5BF9\u5E94\u7684\u9875\u9762\u4E0D\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u4EBA\u5458"),
      extra: /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        onClick: function onClick() {
          closeTab(id);
        }
      }, "\u5173\u95ED")
    });

    if (url && urlType) {
      switch (urlType) {
        case INTERNAL_MENU:
          //原生界面
          if (!pages) {
            console.warn('未配置pages！！！');
            break;
          }

          var Com = pages[url];

          if (Com) {
            elm = /*#__PURE__*/React.createElement(React.Suspense, {
              fallback: /*#__PURE__*/React.createElement(Spin, {
                size: "large",
                tip: "\u6B63\u5728\u52A0\u8F7D\u4E2D..."
              })
            }, /*#__PURE__*/React.createElement("div", {
              className: "TabContentFrame"
            }, /*#__PURE__*/React.createElement(Com, _objectSpread2(_objectSpread2(_objectSpread2({}, props || {}), pars || {}), {}, {
              isActive: id === activeTabKey
            }))));
          }

          break;

        case EXTERNAL_MENU:
          //外部界面
          elm = /*#__PURE__*/React.createElement("iframe", {
            title: id,
            className: "TabContentFrame",
            src: url,
            width: "100%",
            frameBorder: "0",
            scrolling: "auto",
            allowTransparency: true,
            allowFullScreen: true
          });
          break;

        default:
          console.warn("\u672A\u5B9A\u4E49\u7684 urltype:".concat(urlType));
          break;
      }
    }

    return /*#__PURE__*/React.createElement(TabPane, {
      tab: name,
      key: id,
      closable: true
    }, elm);
  }));
});

var Content = Layout.Content,
    Footer = Layout.Footer,
    Sider = Layout.Sider;

var MainFrame = function MainFrame() {
  return /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(Sider, {
    width: 200,
    collapsible: true,
    collapsedWidth: 60,
    className: "SiteLayouBackground"
  }, /*#__PURE__*/React.createElement(SubMenuList$1, null)), useObserver(function () {
    var _process$env$REACT_AP;

    var emptyTab = menuStore.emptyTab;
    return /*#__PURE__*/React.createElement(Layout, {
      style: {
        padding: emptyTab ? '0px' : '6px 0px 0px 6px'
      }
    }, /*#__PURE__*/React.createElement(Content, {
      className: "SiteLayoutContent"
    }, /*#__PURE__*/React.createElement(tabList, null)), /*#__PURE__*/React.createElement(Footer, {
      id: "MainFrameFooter"
    }, (_process$env$REACT_AP = process.env.REACT_APP_COPY_RIGHT) !== null && _process$env$REACT_AP !== void 0 ? _process$env$REACT_AP : '谊智云 ©2019-2021 上海华谊信息技术有限公司出品'));
  }));
};

var MainFrame$1 = /*#__PURE__*/React.memo(MainFrame);

var basicLayout = function basicLayout() {
  var _useInit = useInit(),
      _useInit2 = _slicedToArray(_useInit, 1),
      loading = _useInit2[0];

  if (loading) {
    return /*#__PURE__*/React.createElement(Spin, {
      size: "large"
    });
  }

  return /*#__PURE__*/React.createElement(Layout, {
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement(mainHeader, null), /*#__PURE__*/React.createElement(MainFrame$1, null));
};

var Frame = /*#__PURE__*/React.memo(basicLayout);

var css_248z$2 = ".logo {\n  width: 200px;\n  display: inline-block;\n  text-align: center;\n}\n.menuIcon {\n  cursor: pointer;\n}\n.menuView {\n  padding: 12px;\n  position: relative;\n  top: -6px;\n  width: 400px;\n}\n.site-layout-background {\n  background-color: #fff;\n}\n.ant-menu-inline,\n.ant-menu-vertical,\n.ant-menu-vertical-left {\n  border-right: 0;\n}\n.site-layout-content {\n  bottom: 0;\n  left: 200px;\n  right: 0;\n  margin: 0;\n  min-height: 280px;\n  background-color: #fff;\n}\n.header-left span {\n  height: 64px;\n  line-height: 64px;\n  display: inline-block;\n  padding: 0 24px;\n}\n.header-left span:hover,\n.nameDropdown:hover {\n  background-color: rgba(36, 32, 32, 0.05);\n}\n.header-left {\n  float: left;\n}\n.header-right {\n  float: right;\n  margin-right: 24px;\n}\n.header .header-right span {\n  color: #fff;\n  display: inline-block;\n}\n.nameDropdown {\n  padding: 0 24px;\n}\n.avatar {\n  margin-right: 12px;\n}\n.ant-menu-item .anticon,\n.ant-menu-submenu-title .anticon {\n  font-size: 16px;\n}\n.ant-tabs-content-holder {\n  position: relative;\n  top: -16px;\n}\n";
styleInject(css_248z$2);

configure({
  enforceActions: 'never'
});
var _process$env$PUBLIC_U = process.env.PUBLIC_URL,
    PUBLIC_URL = _process$env$PUBLIC_U === void 0 ? '' : _process$env$PUBLIC_U;
var RouterMapper = {
  Home: "".concat(PUBLIC_URL, "/"),
  SignIn: "".concat(PUBLIC_URL, "/signincallback"),
  Silent: "".concat(PUBLIC_URL, "/silentcallback")
};

var App = function App(props) {
  var appSetting = props.appSetting,
      extraRouter = props.extraRouter,
      _props$useRouter = props.useRouter,
      useRouter = _props$useRouter === void 0 ? true : _props$useRouter;
  var userManager = appSetting.userManager,
      skipOAuth = appSetting.skipOAuth,
      access_token = appSetting.access_token,
      prefixDic = appSetting.prefixDic;
  useEffect(function () {
    var _process$env$REACT_AP;

    var prefix = process.env.PUBLIC_URL;
    var title = (_process$env$REACT_AP = process.env.REACT_APP_TITLE) !== null && _process$env$REACT_AP !== void 0 ? _process$env$REACT_AP : 'yiplat';

    if (prefixDic && prefix) {
      var curTitle = prefixDic[prefix];

      if (curTitle) {
        title = curTitle;
      }
    }

    document.title = title;

    if (skipOAuth || !userManager) {
      axios.interceptors.request.use( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(config) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (access_token) {
                    console.log('access_token...', access_token);
                    config.headers.Authorization = "bearer ".concat(access_token);
                  }

                  return _context.abrupt("return", config);

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), function (err) {
        console.log(err);
        return Promise.reject(err);
      });
    } else {
      axios.defaults.timeout = 60000;
      axios.interceptors.request.use( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(config) {
          var user;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return userManager.getUser();

                case 2:
                  user = _context2.sent;

                  if (user && user.access_token) {
                    config.headers.Authorization = "bearer ".concat(user.access_token);
                  }

                  return _context2.abrupt("return", config);

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }(), function (err) {
        console.log(err);
        return Promise.reject(err);
      }); // http response 拦截器

      axios.interceptors.response.use(function (response) {
        return response;
      }, function (error) {
        var resp = error.response;

        if (resp) {
          var status = resp.status;
          console.error(status);

          switch (status) {
            case 401:
              userManager.signinRedirect();
              break;

            default:
              notification.error({
                message: "\u6570\u636E\u8BF7\u6C42\u5F02\u5E38:".concat(status),
                description: error.message || ''
              });
              break;
          }
        }

        Promise.reject(error);
      });
    }
  }, []);
  var curRouters = [];

  if (extraRouter) {
    for (var key in extraRouter) {
      curRouters.push({
        path: key,
        component: extraRouter[key]
      });
    }
  }

  var Content = /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: RouterMapper.Home,
    component: Frame
  }), curRouters.map(function (r) {
    return /*#__PURE__*/React.createElement(Route, {
      key: r.path,
      exact: true,
      path: r.path,
      component: r.component
    });
  })));

  if (!useRouter) {
    Content = /*#__PURE__*/React.createElement(Frame, null);
  }

  return /*#__PURE__*/React.createElement(AppContext.Provider, {
    value: appSetting
  }, /*#__PURE__*/React.createElement(ConfigProvider, {
    locale: zhCN
  }, Content));
};

var YiPlatLayout = /*#__PURE__*/React.memo(App);

//     [key: string]: Number
// } = {
//     'Equals': 0,
//     'NotEquals': 1,
//     'GreaterThen': 2,
//     'GreaterThenOrEquals': 3,
//     'LessThen': 4,
//     'LessThenOrEquals': 5,
//     'Contains': 6,
//     'StartsWith': 7,
//     'EndsWith': 8
// }

var dic = {
  Equals: 'EQ',
  NotEquals: 'NE',
  GreaterThen: 'GT',
  GreaterThenOrEquals: 'GE',
  LessThen: 'LT',
  LessThenOrEquals: 'LE',
  Contains: 'CT',
  StartsWith: 'SW',
  EndsWith: 'EW'
};

var pagingRequest = function pagingRequest(url, data) {
  var _data$Predicates;

  var pageSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
  var pageNumber = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  var dstData = _objectSpread2(_objectSpread2({}, data), {}, {
    Predicates: (_data$Predicates = data.Predicates) === null || _data$Predicates === void 0 ? void 0 : _data$Predicates.map(function (p) {
      var _dic$p$Comparison;

      return {
        Property: p.Property,
        CompareString: (_dic$p$Comparison = dic[p.Comparison]) !== null && _dic$p$Comparison !== void 0 ? _dic$p$Comparison : 'EQ',
        Value: p.Value
      };
    })
  });

  return httpMethod.post(url, dstData, {
    params: {
      pageSize: pageSize,
      pageNumber: pageNumber
    }
  });
};

var _excluded$1 = ["style", "splitMode", "splitSpan", "subTitle", "subPage", "mainVisible", "mainTitle", "mainPage", "defaultPage"];
var TabPane$1 = Tabs.TabPane;

var SplitPage = function SplitPage(props) {
  var style = props.style,
      _props$splitMode = props.splitMode,
      splitMode = _props$splitMode === void 0 ? 'vertical' : _props$splitMode,
      _props$splitSpan = props.splitSpan,
      splitSpan = _props$splitSpan === void 0 ? '300px' : _props$splitSpan,
      subTitle = props.subTitle,
      subPage = props.subPage,
      _props$mainVisible = props.mainVisible,
      mainVisible = _props$mainVisible === void 0 ? true : _props$mainVisible,
      mainTitle = props.mainTitle,
      mainPage = props.mainPage,
      defaultPage = props.defaultPage,
      otherProps = _objectWithoutProperties(props, _excluded$1);

  return /*#__PURE__*/React.createElement(ProCard, _objectSpread2({
    split: splitMode,
    style: style
  }, otherProps), /*#__PURE__*/React.createElement(ProCard, {
    colSpan: splitSpan,
    ghost: true
  }, subPage), mainPage && mainVisible && /*#__PURE__*/React.createElement(ProCard, {
    title: mainTitle
  }, !Array.isArray(mainPage) ? mainPage : /*#__PURE__*/React.createElement(Tabs, {
    defaultActiveKey: defaultPage
  }, mainPage.map(function (page) {
    return /*#__PURE__*/React.createElement(TabPane$1, {
      tab: page.tab,
      key: page.key
    }, page.page);
  }))));
};

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SplitPage: SplitPage
});

var _excluded$2 = ["columns", "reqQuery", "defaultSort"],
    _excluded2 = ["current", "pageSize"];
var GetQueryExpression = function GetQueryExpression(propName, comparison, value) {
  return {
    Property: propName,
    Comparison: comparison,
    Value: value
  };
}; // 默认tools配置

var option = {
  fullScreen: false,
  reload: true,
  setting: false,
  density: false
}; // 默认分页配置

var PaginationSetting = {
  showQuickJumper: true,
  showSizeChanger: true,
  // responsive: true,
  defaultCurrent: 1,
  defaultPageSize: 10,
  pageSizeOptions: ['5', '10', '20', '50', '100']
};
/**
 * wrapper for hyit backend api
 * @param props
 */

var MetaTable = function MetaTable(props) {
  var columns = props.columns,
      reqQuery = props.reqQuery,
      _props$defaultSort = props.defaultSort,
      defaultSort = _props$defaultSort === void 0 ? {} : _props$defaultSort,
      otherProps = _objectWithoutProperties(props, _excluded$2);

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      queryDic = _useState2[0],
      setqueryDic = _useState2[1];

  useEffect(function () {
    if (Array.isArray(columns)) {
      var dic = {};

      for (var index = 0; index < columns.length; index++) {
        var col = columns[index];

        if (col && typeof col.dataIndex === 'string') {
          var _col$comparison;

          dic[col.dataIndex] = (_col$comparison = col.comparison) !== null && _col$comparison !== void 0 ? _col$comparison : 'Equals';
        }
      }

      setqueryDic(dic);
    }
  }, [columns]);

  var handleReq = function handleReq(params, sort, filter) {
    var current = params.current,
        pageSize = params.pageSize,
        others = _objectWithoutProperties(params, _excluded2);

    var queries = [];
    Object.keys(others).forEach(function (prop) {
      var value = others[prop];
      var comparison = queryDic[prop];

      if (typeof comparison === 'function') {
        var result = comparison(value);

        if (Array.isArray(result)) {
          result.forEach(function (item) {
            queries.push(item);
          });
        }
      } else if (typeof comparison === 'string') {
        if (typeof value === 'string') {
          var dstVal = value.trim();

          if (dstVal !== '') {
            queries.push(GetQueryExpression(prop, comparison, dstVal));
          }
        }
      }
    });
    Object.keys(filter || {}).forEach(function (prop) {
      var value = filter[prop];

      if (!value) {
        return;
      }

      var comparison = queryDic[prop];

      if (typeof comparison === 'function') {
        var result = comparison(value);

        if (Array.isArray(result)) {
          result.forEach(function (item) {
            queries.push(item);
          });
        }
      } else if (typeof comparison === 'string') {
        if (Array.isArray(value)) {
          value.forEach(function (v) {
            queries.push(GetQueryExpression(prop, comparison, v));
          });
        }
      }
    });

    if (reqQuery) {
      var dstSort = defaultSort;

      if (Object.keys(sort || {}).length > 0) {
        dstSort = {};

        for (var key in sort) {
          dstSort[key] = sort[key] === 'ascend';
        }
      }

      var queryParam = {
        Sorts: dstSort,
        Predicates: queries,
        pageSize: pageSize,
        pageNumber: current
      };
      return reqQuery(queryParam);
    } else {
      var ret = {
        data: [],
        success: false
      };
      return Promise.resolve(ret);
    }
  };

  return /*#__PURE__*/React.createElement(ProTable, _objectSpread2({
    bordered: true,
    options: option,
    size: 'small',
    rowKey: 'id',
    request: handleReq,
    columns: columns,
    pagination: PaginationSetting,
    scroll: {
      x: 'max-content'
    }
  }, otherProps));
};

var _excluded$3 = ["actionRef", "columns", "reqDels", "handleAdd", "handleView", "handleEdit", "dropMenus", "handles", "extraToolBarButtons", "fixOption", "renderAlertDescr"];
var confirm = Modal.confirm;

var CRUDTable = function CRUDTable(props) {
  var actionRef = props.actionRef,
      columns = props.columns,
      reqDels = props.reqDels,
      handleAdd = props.handleAdd,
      handleView = props.handleView,
      handleEdit = props.handleEdit,
      dropMenus = props.dropMenus,
      handles = props.handles,
      _props$extraToolBarBu = props.extraToolBarButtons,
      extraToolBarButtons = _props$extraToolBarBu === void 0 ? [] : _props$extraToolBarBu,
      _props$fixOption = props.fixOption,
      fixOption = _props$fixOption === void 0 ? true : _props$fixOption,
      renderAlertDescr = props.renderAlertDescr,
      otherProps = _objectWithoutProperties(props, _excluded$3);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedRowKeys = _useState2[0],
      setSelectedRowKeys = _useState2[1]; // 选择的行key值数组


  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      dropMenuDic = _useState4[0],
      setDropMenuDic = _useState4[1]; // 批量处理菜单的key-function字典


  var _useState5 = useState(dropMenus),
      _useState6 = _slicedToArray(_useState5, 2),
      dropMenuArr = _useState6[0],
      setDropMenuArr = _useState6[1]; // 下拉菜单的渲染数组


  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      renderColumns = _useState8[0],
      setRenderColumns = _useState8[1];

  var _useState9 = useState({}),
      _useState10 = _slicedToArray(_useState9, 2),
      renderToolBar = _useState10[0],
      setRenderToolBar = _useState10[1];

  useEffect(function () {
    // table 扩展操作栏
    var _handles = function _handles(record) {
      var ret = [];

      if (handleView) {
        ret.push( /*#__PURE__*/React.createElement("a", {
          key: "handleView",
          onClick: function onClick() {
            return handleView(record);
          }
        }, "\u67E5\u770B"));
      }

      if (handleEdit) {
        ret.push( /*#__PURE__*/React.createElement("a", {
          key: "handleEdit",
          onClick: function onClick() {
            return handleEdit(record);
          }
        }, "\u7F16\u8F91"));
      }

      if (Array.isArray(handles) && handles.length > 0) {
        var _loop = function _loop(index) {
          var h = handles[index];
          if (!h) return "continue";
          var name = h.name,
              _onClick = h.onClick;
          if (!name || !_onClick) return "continue";
          ret.push( /*#__PURE__*/React.createElement("a", {
            key: name,
            onClick: function onClick() {
              return _onClick(record);
            }
          }, name));
        };

        for (var index = 0; index < handles.length; index++) {
          var _ret = _loop(index);

          if (_ret === "continue") continue;
        }
      }

      return ret;
    };

    var cols = _toConsumableArray(columns || []);

    if (handleView || handleEdit || Array.isArray(handles) && handles.length > 0) {
      var col = {
        title: '操作',
        valueType: 'option',
        fixed: 'right',
        hideInSearch: true,
        render: function render(text, record, index, action) {
          return _handles(record);
        }
      };

      if (fixOption) {
        col['fixed'] = 'right';
        var cnt = 0;

        if (handleView) {
          cnt += 1;
        }

        if (handleEdit) {
          cnt += 1;
        }

        if (Array.isArray(handles) && handles.length > 0) {
          cnt += handles.length;
        }

        col['width'] = cnt * 60;
      }

      cols.push(col);
    }

    setRenderColumns(cols);
  }, [columns, handleView, handleEdit, handles, fixOption]);
  useEffect(function () {
    //没传删除方法就不渲染删除按钮
    var dic = {};
    var arr = [];

    if (typeof reqDels === 'function') {
      var del_handle = {
        key: 'remove',
        name: '批量删除',
        handleClick: function handleClick(selectedRowKeys, action) {
          if (!selectedRowKeys) {
            return;
          }

          confirm({
            title: '确认删除此数据么?',
            icon: /*#__PURE__*/React.createElement(ExclamationCircleOutlined, null),
            content: '删除数据后将无法恢复',
            okType: 'danger',
            okText: '是',
            cancelText: '否',
            onOk: function () {
              var _onOk = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return reqDels(selectedRowKeys);

                      case 2:
                        message.success('删除成功，即将刷新');
                        setSelectedRowKeys([]);
                        if (action && action.current) action.current.reload();

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              function onOk() {
                return _onOk.apply(this, arguments);
              }

              return onOk;
            }()
          });
        }
      };
      arr.push(del_handle);
      dic[del_handle.key] = del_handle.handleClick;
    }

    if (Array.isArray(dropMenus)) {
      for (var index = 0; index < dropMenus.length; index++) {
        var elm = dropMenus[index];
        dic[elm.key] = elm.handleClick;
        arr.push(elm);
      }
    }

    setDropMenuDic(dic);
    setDropMenuArr(arr);
  }, [dropMenus, reqDels]);
  useEffect(function () {
    var arr = [];

    if (typeof handleAdd === 'function') {
      arr.push( /*#__PURE__*/React.createElement(Button, {
        key: "add",
        type: "primary",
        onClick: function onClick() {
          handleAdd();
        }
      }, /*#__PURE__*/React.createElement(PlusOutlined, null), " \u65B0\u5EFA"));
    }

    arr.push.apply(arr, _toConsumableArray(extraToolBarButtons));

    if (arr.length > 0) {
      setRenderToolBar({
        toolBarRender: function toolBarRender() {
          return arr;
        }
      });
    }
  }, [handleAdd]);
  var rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onChange: function onChange(selectRowKeys) {
      setSelectedRowKeys(selectRowKeys);
    }
  };

  var handleAlertRender = function handleAlertRender(props) {
    var keys = props.selectedRowKeys,
        rows = props.selectedRows,
        onCleanSelected = props.onCleanSelected;
    var descr = "\u5DF2\u9009 ".concat(keys.length, " \u9879");

    if (typeof renderAlertDescr === 'function') {
      descr += " ".concat(renderAlertDescr(rows));
    }

    return /*#__PURE__*/React.createElement(Space, {
      size: 24
    }, /*#__PURE__*/React.createElement("span", null, descr, /*#__PURE__*/React.createElement("a", {
      style: {
        marginLeft: 8
      },
      onClick: onCleanSelected
    }, "\u53D6\u6D88\u9009\u62E9")));
  };

  var renderDropMenu = function renderDropMenu() {
    if (!Array.isArray(dropMenuArr) || dropMenuArr.length === 0) return;
    return dropMenuArr.map(function (m) {
      return /*#__PURE__*/React.createElement(Menu.Item, {
        key: m.key
      }, m.name);
    });
  };

  var handleAlertOptionRender = function handleAlertOptionRender(_ref) {
    var selectedRowKeys = _ref.selectedRowKeys,
        selectedRows = _ref.selectedRows,
        onCleanSelected = _ref.onCleanSelected;
    return /*#__PURE__*/React.createElement(Dropdown, {
      overlay: /*#__PURE__*/React.createElement(Menu, {
        onClick: function () {
          var _onClick2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
            var func;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    func = dropMenuDic[e.key];

                    if (typeof func === 'function') {
                      func(selectedRowKeys, actionRef);
                    }

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function onClick(_x) {
            return _onClick2.apply(this, arguments);
          }

          return onClick;
        }(),
        selectedKeys: []
      }, renderDropMenu())
    }, /*#__PURE__*/React.createElement(Button, null, "\u6279\u91CF\u64CD\u4F5C ", /*#__PURE__*/React.createElement(DownOutlined, null)));
  };

  return /*#__PURE__*/React.createElement(MetaTable, _objectSpread2(_objectSpread2({
    actionRef: actionRef,
    tableAlertRender: handleAlertRender,
    tableAlertOptionRender: Array.isArray(dropMenuArr) && dropMenuArr.length > 0 && handleAlertOptionRender,
    columns: renderColumns,
    rowSelection: Array.isArray(dropMenuArr) && dropMenuArr.length > 0 && rowSelection
  }, renderToolBar), otherProps));
};

var _excluded$4 = ["title", "children"];

var DraggableModal = function DraggableModal(props) {
  var title = props.title,
      children = props.children,
      otherProps = _objectWithoutProperties(props, _excluded$4);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      disable = _useState2[0],
      setDisable = _useState2[1];

  var mouse_over = function mouse_over() {
    setDisable(false);
  };

  var mouse_out = function mouse_out() {
    setDisable(true);
  };

  var cur_title = /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      cursor: 'move'
    },
    onMouseOver: mouse_over,
    onMouseOut: mouse_out,
    onFocus: function onFocus() {},
    onBlur: function onBlur() {}
  }, title);
  return /*#__PURE__*/React.createElement(Modal, _objectSpread2({
    title: cur_title,
    modalRender: function modalRender(modal) {
      return /*#__PURE__*/React.createElement(Draggable, {
        disabled: disable
      }, modal);
    }
  }, otherProps), children);
};

var _excluded$5 = ["actionRef", "columns", "reqSave", "beforeSubmit"];

var SimpleCRUDTable = function SimpleCRUDTable(props) {
  var actionRef = props.actionRef,
      columns = props.columns,
      reqSave = props.reqSave,
      beforeSubmit = props.beforeSubmit,
      otherProps = _objectWithoutProperties(props, _excluded$5);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalVisible = _useState2[0],
      setModalVisible = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      modalTitle = _useState4[0],
      setModalTitle = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      curRecord = _useState6[0],
      setCurRecord = _useState6[1];

  var _useState7 = useState({}),
      _useState8 = _slicedToArray(_useState7, 2),
      emptyVals = _useState8[0],
      setEmptyVals = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      submitLoading = _useState10[0],
      setSubmitLoading = _useState10[1]; // 1 add 2 edit


  var _useState11 = useState(1),
      _useState12 = _slicedToArray(_useState11, 2),
      formState = _useState12[0],
      setFormState = _useState12[1];

  var tableRef = actionRef !== null && actionRef !== void 0 ? actionRef : useRef();
  var formRef = useRef();
  useEffect(function () {
    if (Array.isArray(columns)) {
      var vals = {};
      columns.forEach(function (col) {
        if (typeof col.dataIndex === 'string' && !col.hideInForm) {
          vals[col.dataIndex] = null;
        }
      });
      setEmptyVals(vals);
    }
  }, [columns]);

  var _handleAdd = function _handleAdd() {
    setModalTitle('新建');
    setFormState(1);
    setModalVisible(true);
    setCurRecord({});

    if (formRef.current) {
      formRef.current.setFieldsValue(emptyVals);
    }
  };

  var _handleEdit = function _handleEdit(record) {
    setModalTitle('修改');
    setFormState(2);
    setModalVisible(true);
    setCurRecord(record);

    if (formRef.current) {
      formRef.current.setFieldsValue(record);
    }
  };

  var _handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
      var newParams, reqVals, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newParams = _objectSpread2({}, params);
              setSubmitLoading(true);
              Object.keys(emptyVals).forEach(function (prop) {
                if (!newParams.hasOwnProperty(prop)) {
                  newParams[prop] = emptyVals[prop];
                }
              });
              reqVals = Object.assign(curRecord, newParams);

              if (reqVals.children) {
                delete reqVals.children;
              }

              if (!beforeSubmit) {
                _context.next = 11;
                break;
              }

              result = beforeSubmit(reqVals);

              if (result.result) {
                _context.next = 11;
                break;
              }

              message.error(result.message);
              setSubmitLoading(false);
              return _context.abrupt("return");

            case 11:
              _context.prev = 11;
              _context.next = 14;
              return reqSave(reqVals);

            case 14:
              message.success('操作成功');

              if (tableRef && tableRef.current) {
                tableRef.current.reload();
              }

              setModalVisible(false);
              setSubmitLoading(false);

              if (formRef.current) {
                formRef.current.setFieldsValue(emptyVals);
              }

              _context.next = 24;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](11);
              setSubmitLoading(false);

            case 24:
              _context.prev = 24;
              setSubmitLoading(false);
              return _context.finish(24);

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[11, 21, 24, 27]]);
    }));

    return function _handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var formProps = {
    layout: 'horizontal',
    // layout: 'vertical',
    // layout: 'inline',
    // span: 8,
    labelCol: {
      span: 4,
      offset: 0
    },
    submitter: {
      resetButtonProps: {
        style: {
          display: 'none'
        }
      },
      submitButtonProps: {
        loading: submitLoading
      }
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CRUDTable, _objectSpread2({
    actionRef: tableRef,
    columns: columns,
    handleAdd: _handleAdd,
    handleEdit: _handleEdit
  }, otherProps)), /*#__PURE__*/React.createElement(DraggableModal, {
    forceRender: true,
    maskClosable: false,
    destroyOnClose: false,
    title: modalTitle,
    visible: modalVisible,
    // width={600} // 对话框宽度
    onCancel: function onCancel() {
      setModalVisible(false);

      if (formRef.current) {
        formRef.current.setFieldsValue(emptyVals);
      }
    },
    footer: null
  }, /*#__PURE__*/React.createElement(ProTable, {
    formRef: formRef,
    onSubmit: _handleSubmit,
    columns: columns.filter(function (c) {
      var _c$hideInAdd = c.hideInAdd,
          hideInAdd = _c$hideInAdd === void 0 ? false : _c$hideInAdd,
          _c$hideInEdit = c.hideInEdit,
          hideInEdit = _c$hideInEdit === void 0 ? false : _c$hideInEdit;
      var a = hideInAdd && formState === 1 || hideInEdit && formState === 2;
      return !a;
    }),
    type: "form",
    form: formProps
  })));
};

var _excluded$6 = ["expandable", "rowKey", "reqQuery", "defaultExpand", "childrenDataIndex"];

var TreeTable = function TreeTable(props) {
  var expandable = props.expandable,
      rowKey = props.rowKey,
      reqQuery = props.reqQuery,
      _props$defaultExpand = props.defaultExpand,
      _props$childrenDataIn = props.childrenDataIndex,
      childrenDataIndex = _props$childrenDataIn === void 0 ? 'treeChildren' : _props$childrenDataIn,
      otherProps = _objectWithoutProperties(props, _excluded$6);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      expandedRowKeys = _useState2[0],
      setExpandedRowKeys = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      needExpand = _useState4[0],
      setNeedExpand = _useState4[1];

  var curRowKey = typeof rowKey === 'string' ? rowKey : 'id'; //表主键字段，默认为id

  var actionRef = useRef();

  var clearExtraChildren = function clearExtraChildren(data) {
    for (var index = 0; index < data.length; index++) {
      var node = data[index];
      var children = node[childrenDataIndex];

      if (Array.isArray(children)) {
        if (children.length === 0) {
          delete node[childrenDataIndex];
        } else {
          clearExtraChildren(children);
        }
      }
    }
  };

  var _reqQuery = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!reqQuery) {
                _context.next = 7;
                break;
              }

              _context.next = 3;
              return reqQuery(params);

            case 3:
              data = _context.sent;

              if (!Array.isArray(data)) {
                _context.next = 7;
                break;
              }

              clearExtraChildren(data);
              return _context.abrupt("return", Promise.resolve({
                data: data,
                success: true,
                total: data.length
              }));

            case 7:
              return _context.abrupt("return", Promise.resolve({
                data: [],
                success: false,
                total: 0
              }));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function _reqQuery(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleRowExpand = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(expanded, record) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (expanded) {
                setExpandedRowKeys([].concat(_toConsumableArray(expandedRowKeys), [record[curRowKey]]));
              } else {
                setExpandedRowKeys(expandedRowKeys.filter(function (item) {
                  return item !== record[curRowKey];
                }));
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleRowExpand(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var defaultexpandable = {
    childrenColumnName: childrenDataIndex,
    onExpand: handleRowExpand,
    expandedRowKeys: expandedRowKeys
  };
  return /*#__PURE__*/React.createElement(SimpleCRUDTable, _objectSpread2({
    actionRef: actionRef,
    rowKey: curRowKey,
    expandable: defaultexpandable,
    reqQuery: _reqQuery,
    pagination: false
  }, otherProps));
};

var GetColumnSearchProps = function GetColumnSearchProps(dataIndex) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      searchInput = _useState2[0],
      _ = _useState2[1];

  return {
    filterDropdown: function filterDropdown(_ref) {
      var setSelectedKeys = _ref.setSelectedKeys,
          selectedKeys = _ref.selectedKeys,
          confirm = _ref.confirm,
          clearFilters = _ref.clearFilters;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 8
        }
      }, /*#__PURE__*/React.createElement(Input, {
        ref: function ref(node) {
          searchInput[dataIndex] = node;
        },
        placeholder: "\u8FC7\u6EE4\u6761\u4EF6",
        value: selectedKeys[0],
        onChange: function onChange(e) {
          return setSelectedKeys(e.target.value ? [e.target.value] : []);
        },
        onPressEnter: function onPressEnter() {
          return handleSearch(selectedKeys, confirm);
        },
        style: {
          width: 188,
          marginBottom: 8,
          display: 'block'
        }
      }), /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        onClick: function onClick() {
          return handleSearch(selectedKeys, confirm);
        },
        icon: /*#__PURE__*/React.createElement(SearchOutlined, null),
        size: "small",
        style: {
          width: 90
        }
      }, "\u5E94\u7528"), /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick() {
          return handleReset(clearFilters);
        },
        size: "small",
        style: {
          width: 90
        }
      }, "\u91CD\u7F6E")));
    },
    filterIcon: function filterIcon(filtered) {
      return /*#__PURE__*/React.createElement(SearchOutlined, {
        style: {
          color: filtered ? '#1890ff' : undefined
        }
      });
    },
    onFilter: function onFilter(value, record) {
      return record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '';
    },
    onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
      if (visible) {
        setTimeout(function () {
          var _searchInput$dataInde;

          return (_searchInput$dataInde = searchInput[dataIndex]) === null || _searchInput$dataInde === void 0 ? void 0 : _searchInput$dataInde.select();
        }, 100);
      }
    } // render: (text : any) =>
    // searchedColumn === dataIndex ? (
    //     <Highlighter
    //         highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
    //         searchWords={[this.state.searchText]}
    //         autoEscape
    //         textToHighlight={text ? text.toString() : ''}
    //     />
    // ) : (
    //     text
    // ),

  };
};

var handleSearch = function handleSearch(selectedKeys, confirm, dataIndex) {
  confirm(); // setSearchText(selectedKeys[0]);
  // setSearchedColumn(dataIndex);
};

var handleReset = function handleReset(clearFilters) {
  clearFilters(); // setSearchText('');
};

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MetaTable: MetaTable,
  CRUDTable: CRUDTable,
  SimpleCRUDTable: SimpleCRUDTable,
  TreeCRUDTable: TreeTable,
  GetQueryExpression: GetQueryExpression,
  GetColumnSearchProps: GetColumnSearchProps
});

var css_248z$3 = "div.table_select_wrap > div.table_select_box {\n  max-width: 1000px;\n  max-height: 500px;\n  overflow: scroll !important;\n  margin: 0;\n  color: rgba(0, 0, 0, 0.65);\n  line-height: 1.5715;\n  list-style: none;\n  position: fixed;\n  z-index: 1050;\n  margin-top: 5px;\n  padding: 4px;\n  overflow: hidden;\n  font-size: 14px;\n  font-variant: initial;\n  background-color: #fff;\n  border-radius: 2px;\n  outline: none;\n  -webkit-box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n}\n";
styleInject(css_248z$3);

var _excluded$7 = ["columns", "width", "height", "reqQuery", "showValue", "onChange", "selectValue", "value", "disabled"];

var TableSelect = function TableSelect(props) {
  var columns = props.columns,
      width = props.width,
      height = props.height,
      reqQuery = props.reqQuery,
      showValue = props.showValue,
      onChange = props.onChange,
      selectValue = props.selectValue,
      value = props.value,
      disabled = props.disabled,
      otherProps = _objectWithoutProperties(props, _excluded$7);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedRowKeys = _useState2[0],
      setSelectedRowKeys = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedRows = _useState4[0],
      setSelectedRows = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      dropDownVis = _useState6[0],
      setDropDownVis = _useState6[1];

  var _useState7 = useState(value),
      _useState8 = _slicedToArray(_useState7, 2),
      inputValue = _useState8[0],
      setInputValue = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var curPK = selectValue !== null && selectValue !== void 0 ? selectValue : 'id';

  var reqInitData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var ret;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!((value || '') === '')) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              if (!dropDownVis) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              if (!loading) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              setLoading(true);
              _context.next = 9;
              return reqQuery({
                pageNumber: 1,
                pageSize: 1,
                Predicates: [GetQueryExpression(curPK, 'Equals', value !== null && value !== void 0 ? value : '')]
              });

            case 9:
              ret = _context.sent;

              if (ret && ret.data) {
                setInputValue(getDisplayValue(ret.data[0]));
              }

              setLoading(false);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function reqInitData() {
      return _ref.apply(this, arguments);
    };
  }();

  useEffect(function () {
    reqInitData();

    if (value) {
      setSelectedRowKeys([value]);
    } else {
      setInputValue('');
      setSelectedRowKeys([]);
    }
  }, [value]);

  var getDisplayValue = function getDisplayValue(item) {
    var newShowvalue = showValue.map(function (i) {
      return item[i];
    });
    return newShowvalue.join('-');
  }; //为了使Form提交的时候可以获取相应的值


  var triggerChange = function triggerChange(changedValue) {
    var finalValue = null;

    if (changedValue && changedValue.length) {
      finalValue = changedValue.map(function (item) {
        return item[curPK];
      }).join(',');
    }

    if (onChange) {
      onChange(finalValue);
    }

    setDropDownVis(false);
  }; //表格数据checkbox选择


  var handleSelectChange = function handleSelectChange(selectedRowKeys, selectedRows) {
    setSelectedRowKeys(selectedRowKeys);
    setSelectedRows(selectedRows);
    triggerChange(selectedRows);
  }; //Input点击，展开下拉框


  var handleClick = function handleClick() {
    setDropDownVis(function (pre) {
      return !pre;
    });
  }; //Input是不可输入的，只能通过下拉框选择后显示值


  var handleInputChange = function handleInputChange(e) {
    var value = e.target.value;

    if (!value) {
      setSelectedRowKeys([]);
      setSelectedRows([]);
      setInputValue(value);
      triggerChange([]);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "table_select_wrap",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u8BF7\u70B9\u51FB\u9009\u62E9",
    allowClear: true,
    onClick: handleClick,
    value: inputValue,
    onChange: handleInputChange,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("div", {
    className: "table_select_box",
    style: {
      width: width || '100%',
      height: height,
      display: dropDownVis ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement(MetaTable, {
    rowKey: curPK,
    size: "small",
    tableAlertRender: false,
    reqQuery: reqQuery,
    columns: columns || [],
    search: {
      filterType: 'light'
    },
    pagination: {
      defaultCurrent: 1,
      defaultPageSize: 5,
      showSizeChanger: false
    },
    rowSelection: {
      selectedRowKeys: selectedRowKeys,
      onChange: handleSelectChange,
      type: 'radio'
    }
  })));
};

var _excluded$8 = ["valueField", "displayField", "placeholder", "value", "onRequest", "onChange"];
var Option = Select.Option;

var ModelSelect = function ModelSelect(props) {
  var _props$valueField = props.valueField,
      valueField = _props$valueField === void 0 ? 'id' : _props$valueField,
      _props$displayField = props.displayField,
      displayField = _props$displayField === void 0 ? 'name' : _props$displayField,
      placeholder = props.placeholder,
      value = props.value,
      onRequest = props.onRequest,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, _excluded$8);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      closing = _useState2[0],
      setClosing = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = useState(true),
      _useState6 = _slicedToArray(_useState5, 2),
      fetching = _useState6[0],
      setFetching = _useState6[1];

  useEffect(function () {
    handleSearch('');
    return function () {
      setClosing(true);
    };
  }, []);

  var fetchData = function fetchData(value, callback) {
    setFetching(true);

    if (onRequest) {
      onRequest(value).then(function (data) {
        if (closing) return; // setFetching(false);

        callback(data);
      }).catch(function (err) {
        console.error(err);
      }).finally(function () {
        setFetching(false);
      });
    } else {
      throw new Error('onRequest is not a funtion');
    }
  };

  var handleSearch = function handleSearch(value) {
    fetchData(value, function (data) {
      setData(data);
    });
  };

  var handleChange = function handleChange(value, option) {
    if (onChange) {
      onChange(value, option);
    }
  };

  return /*#__PURE__*/React.createElement(Select, _objectSpread2({
    style: {
      width: '100%'
    },
    dropdownStyle: {
      maxHeight: 400,
      overflow: 'auto'
    },
    value: fetching ? '' : value || undefined,
    placeholder: placeholder || '请选择',
    allowClear: true,
    filterOption: false,
    showSearch: true,
    onSearch: handleSearch,
    onChange: handleChange,
    notFoundContent: fetching ? /*#__PURE__*/React.createElement(Spin, {
      size: "small"
    }) : null,
    loading: fetching
  }, rest), data.map(function (d) {
    return /*#__PURE__*/React.createElement(Option, {
      key: d[valueField],
      value: d[valueField]
    }, d[displayField]);
  }));
};

var _excluded$9 = ["valueField", "displayField", "childrenField", "placeholder", "value", "onRequest", "onChange"];
var TreeNode = TreeSelect.TreeNode;

var TreeModelSelect = function TreeModelSelect(props) {
  var _props$valueField = props.valueField,
      valueField = _props$valueField === void 0 ? 'id' : _props$valueField,
      _props$displayField = props.displayField,
      displayField = _props$displayField === void 0 ? 'name' : _props$displayField,
      _props$childrenField = props.childrenField,
      childrenField = _props$childrenField === void 0 ? 'treeChildren' : _props$childrenField,
      placeholder = props.placeholder,
      value = props.value,
      onRequest = props.onRequest,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, _excluded$9);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      closing = _useState2[0],
      setClosing = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = useState(true),
      _useState6 = _slicedToArray(_useState5, 2),
      fetching = _useState6[0],
      setFetching = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      searchVal = _useState8[0],
      setSearchVal = _useState8[1];

  useEffect(function () {
    return function () {
      setClosing(true);
    };
  }, []);
  useEffect(function () {
    var handler = setTimeout(function () {
      fetchData(searchVal, function (data) {
        // _self.checkTreeData(data, _self.props.disablekeys, false);
        setData(data);
      });
    }, 500);
    return function () {
      clearTimeout(handler);
    };
  }, [searchVal]);

  var getNodes = function getNodes(nodes) {
    return nodes === null || nodes === void 0 ? void 0 : nodes.map(function (node) {
      var children = node[childrenField] ? getNodes(node[childrenField]) : undefined;
      var _node$disabled = node.disabled,
          disabled = _node$disabled === void 0 ? false : _node$disabled;
      return /*#__PURE__*/React.createElement(TreeNode, {
        key: node[valueField],
        value: node[valueField],
        title: node[displayField],
        disabled: disabled
      }, children);
    });
  }; //查询


  var fetchData = function fetchData(value, callback) {
    setFetching(true);

    if (onRequest) {
      onRequest(value).then(function (data) {
        if (closing) return;
        setFetching(false);
        callback(data);
      });
    } else {
      throw new Error('onRequest is not a funtion');
    }
  };

  var handleSearch = function handleSearch(value) {
    setSearchVal(value);
  };

  var handleChange = function handleChange(value, labelList, extra) {
    if (onChange) {
      onChange(value, labelList, extra);
    } else {
      throw new Error('onChange is not a funtion');
    }
  };

  var nodes = getNodes(data);
  return /*#__PURE__*/React.createElement(TreeSelect, _objectSpread2({
    style: {
      width: '100%'
    },
    dropdownStyle: {
      maxHeight: 400,
      overflow: 'auto'
    },
    value: fetching ? '' : value || undefined,
    placeholder: placeholder || '请选择',
    allowClear: true,
    // filterOption={false}
    showSearch: true,
    onSearch: handleSearch,
    onChange: handleChange,
    notFoundContent: fetching ? /*#__PURE__*/React.createElement(Spin, {
      size: "small"
    }) : null,
    loading: fetching,
    treeDefaultExpandAll: true
  }, rest), nodes);
};

var Option$1 = Select.Option;

var IconSelect = function IconSelect(props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      opts = _useState2[0],
      setOpts = _useState2[1];

  useEffect(function () {
    var iconDic = Icons;
    var arr = [];
    var map = new Map(Object.entries(Icons));

    for (var key in iconDic) {
      var CurIcon = iconDic[key];
      arr.push( /*#__PURE__*/React.createElement(Option$1, {
        key: key,
        value: key
      }, /*#__PURE__*/React.createElement(CurIcon, null), key));
    }

    setOpts(arr);
  }, []);
  return /*#__PURE__*/React.createElement(Select, _objectSpread2({
    style: {
      width: '100%'
    },
    dropdownStyle: {
      maxHeight: 400,
      overflow: 'auto'
    },
    placeholder: "\u8BF7\u9009\u62E9",
    allowClear: true,
    showSearch: true
  }, props), opts);
};

var AppContext$3 = Contexts.AppContext;

var Ret = function Ret(props) {
  var _useContext = useContext(AppContext$3),
      apiBaseUrl = _useContext.apiBaseUrl;

  var req = function req(value) {
    return httpMethod.get("".concat(apiBaseUrl, "/folder/tree-all"));
  };

  return /*#__PURE__*/React.createElement(TreeModelSelect, _objectSpread2({
    onRequest: req
  }, props));
};

var AppContext$4 = Contexts.AppContext;

var Ret$1 = function Ret(props) {
  var _useContext = useContext(AppContext$4),
      apiBaseUrl = _useContext.apiBaseUrl;

  var req = function req(value) {
    return httpMethod.post("".concat(apiBaseUrl, "/job/all"), {});
  };

  return /*#__PURE__*/React.createElement(ModelSelect, _objectSpread2({
    mode: "multiple",
    showSearch: false,
    displayField: "name",
    allowClear: true,
    onRequest: req
  }, props));
};

var AppContext$5 = Contexts.AppContext;

var Ret$2 = function Ret(props) {
  var _useContext = useContext(AppContext$5),
      apiBaseUrl = _useContext.apiBaseUrl;

  var req = function req(value) {
    return httpMethod.get("".concat(apiBaseUrl, "/menu/tree-all"));
  };

  return /*#__PURE__*/React.createElement(TreeModelSelect, _objectSpread2({
    onRequest: req
  }, props));
};

var AppContext$6 = Contexts.AppContext;

var Ret$3 = function Ret(props) {
  var _useContext = useContext(AppContext$6),
      apiBaseUrl = _useContext.apiBaseUrl;

  var req = function req(value) {
    return httpMethod.get("".concat(apiBaseUrl, "/org/tree-all"));
  };

  return /*#__PURE__*/React.createElement(TreeModelSelect, _objectSpread2({
    onRequest: req
  }, props));
};

var AppContext$7 = Contexts.AppContext;

var Ret$4 = function Ret(props) {
  var _useContext = useContext(AppContext$7),
      apiBaseUrl = _useContext.apiBaseUrl;

  var req = function req(value) {
    return httpMethod.get("".concat(apiBaseUrl, "/org/user-orgs"));
  };

  return /*#__PURE__*/React.createElement(TreeModelSelect, _objectSpread2({
    onRequest: req
  }, props));
};

var AppContext$8 = Contexts.AppContext;

var Ret$5 = function Ret(props) {
  var _useContext = useContext(AppContext$8),
      apiBaseUrl = _useContext.apiBaseUrl;

  var req = function req(value) {
    return httpMethod.post("".concat(apiBaseUrl, "/org-type/all"), {});
  };

  return /*#__PURE__*/React.createElement(ModelSelect, _objectSpread2({
    onRequest: req
  }, props));
};

var _excluded$a = ["pageSize", "pageNumber"];

var Ret$6 = function Ret(props) {
  var _React$useContext = React.useContext(Contexts.AppContext),
      apiBaseUrl = _React$useContext.apiBaseUrl;

  return /*#__PURE__*/React.createElement(TableSelect, _objectSpread2({
    columns: [{
      title: '编号',
      dataIndex: 'code',
      comparison: 'Contains'
    }, {
      title: '名称',
      dataIndex: 'name',
      comparison: 'Contains'
    }, {
      title: '所属组织',
      dataIndex: 'orgId',
      render: function render(text, record) {
        var org = record.org;

        if (org) {
          return org.name;
        }
      },
      comparison: function comparison(val) {
        if (typeof val === 'string') {
          return [GetQueryExpression('Org.Name', 'Contains', val)];
        }

        return [];
      }
    }],
    reqQuery: function () {
      var _reqQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var pageSize, pageNumber, otherProps;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pageSize = params.pageSize, pageNumber = params.pageNumber, otherProps = _objectWithoutProperties(params, _excluded$a);
                return _context.abrupt("return", pagingRequest("".concat(apiBaseUrl, "/person/page"), otherProps, pageSize, pageNumber));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function reqQuery(_x) {
        return _reqQuery.apply(this, arguments);
      }

      return reqQuery;
    }(),
    width: "50vw",
    showValue: ['name']
  }, props));
};

var AppContext$9 = Contexts.AppContext;

var Ret$7 = function Ret(props) {
  var _useContext = useContext(AppContext$9),
      apiBaseUrl = _useContext.apiBaseUrl;

  var req = function req(value) {
    return httpMethod.post("".concat(apiBaseUrl, "/role/all"), {});
  }; // useEffect(() => {
  //     console.log('RoleSelect...props...', props);
  // }, [props]);


  return /*#__PURE__*/React.createElement(ModelSelect, _objectSpread2({
    mode: "multiple",
    showSearch: false,
    displayField: "roleName",
    allowClear: true,
    onRequest: req
  }, props));
};

var AppContext$a = Contexts.AppContext;

var Ret$8 = function Ret(props) {
  var _useContext = useContext(AppContext$a),
      apiBaseUrl = _useContext.apiBaseUrl;

  var req = function req(value) {
    return httpMethod.post("".concat(apiBaseUrl, "/role/access"), {});
  }; // useEffect(() => {
  //     console.log('RoleSelect...props...', props);
  // }, [props]);


  return /*#__PURE__*/React.createElement(ModelSelect, _objectSpread2({
    showSearch: false,
    displayField: "roleName",
    allowClear: true,
    onRequest: req
  }, props));
};

var _excluded$b = ["pageSize", "pageNumber"];

var Ret$9 = function Ret(props) {
  var _props$authAccess = props.authAccess,
      authAccess = _props$authAccess === void 0 ? true : _props$authAccess;

  var _React$useContext = React.useContext(Contexts.AppContext),
      apiBaseUrl = _React$useContext.apiBaseUrl;

  return /*#__PURE__*/React.createElement(TableSelect, _objectSpread2({
    columns: [{
      title: '角色名',
      dataIndex: 'roleName',
      comparison: 'Contains',
      sorter: true
    }, {
      title: '角色描述',
      dataIndex: 'description',
      search: false
    }, {
      title: '启用状态',
      dataIndex: 'isActive',
      search: false
    }],
    reqQuery: function () {
      var _reqQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var pageSize, pageNumber, otherProps, url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pageSize = params.pageSize, pageNumber = params.pageNumber, otherProps = _objectWithoutProperties(params, _excluded$b);
                url = authAccess ? "".concat(apiBaseUrl, "/role/access-page") : "".concat(apiBaseUrl, "/role/page");
                return _context.abrupt("return", pagingRequest(url, otherProps, pageSize, pageNumber));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function reqQuery(_x) {
        return _reqQuery.apply(this, arguments);
      }

      return reqQuery;
    }(),
    width: "50vw",
    showValue: ['roleName', 'description']
  }, props));
};

var AppContext$b = Contexts.AppContext;

var Ret$a = function Ret(props) {
  var _useContext = useContext(AppContext$b),
      apiBaseUrl = _useContext.apiBaseUrl;

  var req = function req(value) {
    return httpMethod.post("".concat(apiBaseUrl, "/tenant/access"), {});
  }; // useEffect(() => {
  //     console.log('RoleSelect...props...', props);
  // }, [props]);


  return /*#__PURE__*/React.createElement(ModelSelect, _objectSpread2({
    showSearch: false,
    displayField: "tenantName",
    allowClear: true,
    onRequest: req
  }, props));
};

var _excluded$c = ["UdcTypeCode"];
var AppContext$c = Contexts.AppContext;

var Ret$b = function Ret(_ref) {
  var UdcTypeCode = _ref.UdcTypeCode,
      props = _objectWithoutProperties(_ref, _excluded$c);

  var _useContext = useContext(AppContext$c),
      apiBaseUrl = _useContext.apiBaseUrl;

  var req = function req(value) {
    return httpMethod.post("".concat(apiBaseUrl, "/udc/all"), {
      predicates: [{
        property: 'UdcType.Code',
        compareString: 'EQ',
        value: UdcTypeCode
      }],
      sorts: {
        code: true
      }
    });
  };

  return /*#__PURE__*/React.createElement(ModelSelect, _objectSpread2({
    onRequest: req
  }, props));
};

var _excluded$d = ["udcTypeCodes", "options"];
var AppContext$d = Contexts.AppContext;

var Ret$c = function Ret(props) {
  var _useContext = useContext(AppContext$d),
      apiBaseUrl = _useContext.apiBaseUrl;

  var udcTypeCodes = props.udcTypeCodes,
      options = props.options,
      otherProps = _objectWithoutProperties(props, _excluded$d);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      opt = _useState2[0],
      setOpt = _useState2[1];

  var req = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(codes) {
      var ret;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return httpMethod.post("".concat(apiBaseUrl, "/udc-rel/udc-cascader"), codes);

            case 2:
              ret = _context.sent;
              console.log(ret);

              if (Array.isArray(ret)) {
                setOpt(ret);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function req(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  useEffect(function () {
    req(udcTypeCodes);
  }, [udcTypeCodes]);
  return /*#__PURE__*/React.createElement(Cascader, _objectSpread2({
    options: opt
  }, otherProps));
};

var AppContext$e = Contexts.AppContext;

var Ret$d = function Ret(props) {
  var _useContext = useContext(AppContext$e),
      apiBaseUrl = _useContext.apiBaseUrl;

  var req = function req(value) {
    return httpMethod.post("".concat(apiBaseUrl, "/udc-type/all"), {});
  };

  return /*#__PURE__*/React.createElement(ModelSelect, _objectSpread2({
    onRequest: req
  }, props));
};

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MenuSelect: Ret$2,
  OrgSelect: Ret$3,
  OrgAccessSelect: Ret$4,
  OrgTypeSelect: Ret$5,
  JobSelect: Ret$1,
  UdcSelect: Ret$b,
  UdcCascaderSelect: Ret$c,
  UdcTypeSelect: Ret$d,
  RoleSelect: Ret$7,
  RoleTableSelect: Ret$9,
  FolderSelect: Ret,
  PersonSelect: Ret$6,
  TenantAccessSelect: Ret$a,
  RoleAccessSelect: Ret$8
});

var index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TableSelect: TableSelect,
  ModelSelect: ModelSelect,
  TreeModelSelect: TreeModelSelect,
  IconSelect: IconSelect,
  CoreSelect: index$2
});

var _excluded$e = ["onRequest", "keyField", "titleField", "checkStrictly", "onChecked", "checkedKeys", "selectStrictly", "onSelected", "selectedKeys", "checkAlone", "checkable", "selectable", "showToolbar"];
var TreeNode$1 = Tree.TreeNode;

var MetaTree = function MetaTree(props) {
  var onRequest = props.onRequest,
      _props$keyField = props.keyField,
      keyField = _props$keyField === void 0 ? 'id' : _props$keyField,
      _props$titleField = props.titleField,
      titleField = _props$titleField === void 0 ? 'name' : _props$titleField,
      checkStrictly = props.checkStrictly,
      onChecked = props.onChecked,
      checkedKeys = props.checkedKeys,
      selectStrictly = props.selectStrictly,
      onSelected = props.onSelected,
      selectedKeys = props.selectedKeys,
      checkAlone = props.checkAlone,
      _props$checkable = props.checkable,
      checkable = _props$checkable === void 0 ? true : _props$checkable,
      _props$selectable = props.selectable,
      selectable = _props$selectable === void 0 ? false : _props$selectable,
      showToolbar = props.showToolbar,
      otherProps = _objectWithoutProperties(props, _excluded$e);

  var _ref = showToolbar ? showToolbar : {},
      _ref$refresh = _ref.refresh,
      refresh = _ref$refresh === void 0 ? true : _ref$refresh,
      _ref$all = _ref.all,
      all = _ref$all === void 0 ? true : _ref$all,
      _ref$clear = _ref.clear,
      clear = _ref$clear === void 0 ? true : _ref$clear,
      _ref$total = _ref.total,
      total = _ref$total === void 0 ? true : _ref$total;

  var _useState = useState(checkedKeys !== null && checkedKeys !== void 0 ? checkedKeys : []),
      _useState2 = _slicedToArray(_useState, 2),
      treeCheckedKeys = _useState2[0],
      setTreeCheckedKeys = _useState2[1];

  var _useState3 = useState(selectedKeys !== null && selectedKeys !== void 0 ? selectedKeys : []),
      _useState4 = _slicedToArray(_useState3, 2),
      treeSelectedKeys = _useState4[0],
      setTreeSelectedKeys = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      treeNodes = _useState6[0],
      setTreeNodes = _useState6[1];

  var _useState7 = useState(true),
      _useState8 = _slicedToArray(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = useState([]),
      _useState10 = _slicedToArray(_useState9, 2),
      allIds = _useState10[0],
      setAllIds = _useState10[1];

  useEffect(function () {
    // console.log('TreeOnCheck,', treeCheckedKeys);
    if (onChecked) onChecked(treeCheckedKeys !== null && treeCheckedKeys !== void 0 ? treeCheckedKeys : []);
  }, [treeCheckedKeys]);
  useEffect(function () {
    // console.log('TreeOnSelect,', treeCheckedKeys);
    if (onSelected) onSelected(treeSelectedKeys !== null && treeSelectedKeys !== void 0 ? treeSelectedKeys : []);
  }, [treeSelectedKeys]);

  var handleReq = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var val, ret;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!onRequest) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return onRequest();

            case 3:
              val = _context.sent;

              if (!Array.isArray(val)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", val);

            case 6:
              // non result
              ret = [];
              return _context.abrupt("return", Promise.resolve(ret));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleReq() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleRefresh = function handleRefresh() {
    setLoading(true);
    handleReq().then(function (val) {
      if (val) {
        var nodes = getTreeNodes(val);

        var _allIds = getAllIds(val);

        setAllIds(_allIds);
        if (nodes) setTreeNodes(nodes);
      } else {
        setTreeNodes([]);
        setAllIds([]);
      }
    }).finally(function () {
      setLoading(false);
    });
  };

  useEffect(function () {
    handleRefresh();
  }, []);

  var getAllIds = function getAllIds(nodes) {
    var ret = [];

    for (var index = 0; index < nodes.length; index++) {
      var elm = nodes[index];
      ret.push(elm.id);

      if (elm.treeChildren && elm.treeChildren.length > 0) {
        ret.push.apply(ret, _toConsumableArray(getAllIds(elm.treeChildren)));
      }
    }

    return ret;
  };

  var getTreeNodes = function getTreeNodes(nodes) {
    return nodes.map(function (node) {
      var children = node.treeChildren ? getTreeNodes(node.treeChildren) : [];
      return /*#__PURE__*/React.createElement(TreeNode$1, {
        key: node[keyField],
        title: node[titleField]
      }, children);
    });
  }; // 勾选后


  var handleTreeNodeChecked = function handleTreeNodeChecked(selectedKeys, info) {
    var keys = Array.isArray(selectedKeys) ? selectedKeys : [].concat(_toConsumableArray(selectedKeys.checked), _toConsumableArray(selectedKeys.halfChecked));
    setTreeCheckedKeys(keys); // if (onChecked) onChecked(keys);
  }; // 选择后


  var handleTreeNodeSelected = function handleTreeNodeSelected(selectedKeys, info) {
    var keys = Array.isArray(selectedKeys) ? selectedKeys : [].concat(_toConsumableArray(selectedKeys.checked), _toConsumableArray(selectedKeys.halfChecked));
    setTreeSelectedKeys(keys); // if (onChecked) onChecked(keys);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, showToolbar && /*#__PURE__*/React.createElement(Space, {
    size: "small"
  }, refresh && /*#__PURE__*/React.createElement(Button, {
    shape: "circle",
    size: "small",
    onClick: function onClick() {
      handleRefresh();
    },
    loading: loading,
    icon: /*#__PURE__*/React.createElement(ReloadOutlined, null)
  }), all && /*#__PURE__*/React.createElement(Button // type="link"
  , {
    // type="link"
    shape: "round",
    size: "small",
    // loading={loading}
    disabled: loading,
    onClick: function onClick() {
      setTreeCheckedKeys(allIds); // if (onChecked) onChecked(allIds);
    }
  }, "\u5168\u9009"), clear && /*#__PURE__*/React.createElement(Button // type="link"
  , {
    // type="link"
    shape: "round",
    size: "small",
    // loading={loading}
    disabled: loading,
    onClick: function onClick() {
      setTreeCheckedKeys([]); // if (onChecked) onChecked([]);
    }
  }, "\u6E05\u7A7A"), total && /*#__PURE__*/React.createElement("span", null, treeCheckedKeys && treeCheckedKeys.length > 0 ? "\u9009\u62E9\u4E86 ".concat(treeCheckedKeys.length, " \u9879") : "")), !loading && /*#__PURE__*/React.createElement(Tree, _objectSpread2({
    showLine: true,
    checkable: checkable,
    selectable: selectable,
    checkStrictly: checkAlone,
    onCheck: handleTreeNodeChecked,
    checkedKeys: checkStrictly ? checkedKeys : treeCheckedKeys,
    onSelect: handleTreeNodeSelected,
    selectedKeys: selectStrictly ? selectedKeys : treeSelectedKeys
  }, otherProps), treeNodes));
};

var index$4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MetaTree: MetaTree
});

var getFileSize = function getFileSize(fileByte) {
  if (!fileByte) return '--';
  var fileSizeByte = fileByte;
  var fileSizeMsg = '';
  if (fileSizeByte < 1048576) fileSizeMsg = (fileSizeByte / 1024).toFixed(2) + 'KB';else if (fileSizeByte == 1048576) fileSizeMsg = '1MB';else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824) fileSizeMsg = (fileSizeByte / (1024 * 1024)).toFixed(2) + 'MB';else if (fileSizeByte > 1048576 && fileSizeByte == 1073741824) fileSizeMsg = '1GB';else if (fileSizeByte > 1073741824 && fileSizeByte < 1099511627776) fileSizeMsg = (fileSizeByte / (1024 * 1024 * 1024)).toFixed(2) + 'GB';else fileSizeMsg = '大于1TB';
  return fileSizeMsg;
};

var AppContext$f = Contexts.AppContext;
var FormItem = Form.Item;
var formLayout = {
  labelCol: {
    span: 7
  },
  wrapperCol: {
    span: 13
  }
};

var DownloadForm = function DownloadForm(props) {
  var _useState = useState(props.values),
      _useState2 = _slicedToArray(_useState, 2),
      formVals = _useState2[0],
      setFormVals = _useState2[1];

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var handleClose = props.onClose,
      handleViewModalVisible = props.onCancel,
      viewModalVisible = props.viewModalVisible;

  var _useContext = useContext(AppContext$f),
      apiBaseUrl = _useContext.apiBaseUrl;

  var renderContent = function renderContent() {
    // const raw = `${apiBaseUrl}/file/download-file/${formVals.Id}`;
    // const qr_url = process.env.NODE_ENV === 'production' ? `${window.location.origin}${raw}` : raw;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormItem, {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u540D\u79F0"
    }, formVals.name), /*#__PURE__*/React.createElement(FormItem, {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u63CF\u8FF0"
    }, formVals.description), /*#__PURE__*/React.createElement(FormItem, {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u7C7B\u578B"
    }, formVals.fileType), /*#__PURE__*/React.createElement(FormItem, {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u5927\u5C0F"
    }, getFileSize(formVals.fileSize)), /*#__PURE__*/React.createElement(FormItem, {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u4E0B\u8F7D"
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        window.open("".concat(apiBaseUrl, "/file/download-file?fileId=").concat(formVals.id));
      }
    }, /*#__PURE__*/React.createElement(DownloadOutlined, null), "\u6587\u4EF6\u4E0B\u8F7D")), /*#__PURE__*/React.createElement(FormItem, {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u4E8C\u7EF4\u7801"
    }, /*#__PURE__*/React.createElement(QRCode, {
      value: "".concat(apiBaseUrl, "/file/download-file?fileId=").concat(formVals.id),
      size: 100,
      fgColor: "#000000" //二维码的颜色

    })));
  };

  var renderFooter = function renderFooter() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return handleViewModalVisible(false, formVals);
      }
    }, "\u5173\u95ED"));
  };

  return /*#__PURE__*/React.createElement(Modal, {
    width: 640,
    bodyStyle: {
      padding: '32px 40px 48px'
    },
    destroyOnClose: true,
    title: "\u6587\u4EF6\u4E0B\u8F7D",
    visible: viewModalVisible,
    footer: renderFooter(),
    onCancel: function onCancel() {
      return handleViewModalVisible(false, formVals);
    },
    afterClose: function afterClose() {
      return handleViewModalVisible();
    }
  }, /*#__PURE__*/React.createElement(Form, _objectSpread2(_objectSpread2({}, formLayout), {}, {
    form: form,
    initialValues: formVals
  }), renderContent()));
};

var FolderSelect = Ret;
var AppContext$g = Contexts.AppContext;
var FormItem$1 = Form.Item;
var TextArea = Input.TextArea;
var formLayout$1 = {
  labelCol: {
    span: 7
  },
  wrapperCol: {
    span: 13
  }
};

var UploadForm = function UploadForm(props) {
  var _useState = useState(props.values || {
    PathId: undefined
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formVals = _useState2[0],
      setFormVals = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      uploadList = _useState4[0],
      setUploadList = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      fileList = _useState6[0],
      setFileList = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      formvalid = _useState8[0],
      setFormvalid = _useState8[1];

  var _useState9 = useState(props.values || {}),
      _useState10 = _slicedToArray(_useState9, 2),
      vals = _useState10[0],
      setVals = _useState10[1];

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var handleSubmit = props.onSubmit,
      handleModalVisible = props.onCancel,
      modalVisible = props.modalVisible;

  var _useContext = useContext(AppContext$g),
      apiBaseUrl = _useContext.apiBaseUrl;

  var checkForm = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return form.validateFields().then(function (values) {
                // console.log('checkForm ok',values);
                setFormvalid(true);
                setVals(values);
                return true;
              }).catch(function (err) {
                // console.log('checkForm err',err);
                setFormvalid(false);
                return false;
              });

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkForm() {
      return _ref.apply(this, arguments);
    };
  }();

  var onChange = function onChange(_ref2) {
    var fileList = _ref2.fileList;
    // console.log('onChange', fileList);
    setFileList(fileList.map(function (f) {
      return f.originFileObj;
    }));
  };

  var beforeUpload = function beforeUpload(file, list) {
    // console.log('beforeUpload...',file,fileList);
    return false;
  }; // useEffect(()=>{
  //   console.log('fileList...',fileList);
  // },[fileList])


  var checkFile = function checkFile(file) {
    var isLtM = file.size / 1024 / 1024 < 1;

    if (!isLtM) {
      message.error('文件大小必须小于1000MB!');
    }

    return isLtM;
  };

  var onRemove = function onRemove(file) {// console.log('onRemove', file);
  };

  var uploadFile = function uploadFile(payload) {
    // console.log('add...',payload);
    return httpMethod.post("".concat(apiBaseUrl, "/file/upload-file"), payload);
  };

  var handleUpload = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file) {
      var hide, result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!file) {
                _context2.next = 21;
                break;
              }

              hide = message.loading("\u6B63\u5728\u4E0A\u4F20", 0);
              _context2.prev = 2;
              _context2.next = 5;
              return uploadFile(file);

            case 5:
              result = _context2.sent;
              hide();

              if (!result) {
                _context2.next = 12;
                break;
              }

              message.success("\u4E0A\u4F20\u6210\u529F");
              return _context2.abrupt("return", result);

            case 12:
              message.warning("\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6570\u636E\u5E76\u91CD\u8BD5\uFF01");
              return _context2.abrupt("return", false);

            case 14:
              _context2.next = 21;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](2);
              hide();
              message.error("\u4E0A\u4F20\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01");
              return _context2.abrupt("return", false);

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 16]]);
    }));

    return function handleUpload(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleOk = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var check, validFields, formData, result;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return checkForm();

            case 2:
              check = _context3.sent;

              if (check) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", false);

            case 5:
              if (!(fileList.length == 0)) {
                _context3.next = 8;
                break;
              }

              message.error('请选择上传文件');
              return _context3.abrupt("return", false);

            case 8:
              fileList.forEach(function (file) {
                if (!checkFile(file)) return false;
              });
              _context3.next = 11;
              return form.validateFields();

            case 11:
              validFields = _context3.sent;
              formData = new FormData();
              Object.keys(validFields).forEach(function (key) {
                formData.append(key, validFields[key]);
              }); // const files = fileList.map(file=>file);

              fileList.forEach(function (file) {
                formData.append('files[]', file, file.name);
              });
              _context3.next = 17;
              return handleUpload(formData);

            case 17:
              result = _context3.sent;
              console.log('handleUpload...result...', result);

              if (result) {
                if (handleSubmit) handleSubmit(result);
              }

            case 20:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleOk() {
      return _ref4.apply(this, arguments);
    };
  }();

  var renderContent = function renderContent() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormItem$1, {
      name: "folderId",
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u4FDD\u5B58\u76EE\u5F55",
      rules: [{
        required: true,
        message: "\u76EE\u5F55\u4E0D\u80FD\u4E3A\u7A7A"
      }]
    }, /*#__PURE__*/React.createElement(FolderSelect, null)), /*#__PURE__*/React.createElement(FormItem$1, {
      name: "name",
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u6863\u6848\u540D"
    }, /*#__PURE__*/React.createElement(Input, {
      maxLength: 200,
      placeholder: "\u8BF7\u8F93\u5165\u6863\u6848\u540D\u79F0"
    })), /*#__PURE__*/React.createElement(FormItem$1, {
      name: "description",
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u63CF\u8FF0"
    }, /*#__PURE__*/React.createElement(TextArea, {
      maxLength: 1000,
      placeholder: "\u8BF7\u8F93\u5165\u6587\u4EF6\u63CF\u8FF0"
    })), /*#__PURE__*/React.createElement(FormItem$1, {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u4E0A\u4F20\u6587\u4EF6"
    }, /*#__PURE__*/React.createElement(Upload, {
      multiple: true,
      name: 'files',
      action: "".concat(apiBaseUrl, "/file/upload-file"),
      // fileList={uploadList}
      onChange: onChange,
      onRemove: onRemove,
      beforeUpload: beforeUpload
    }, /*#__PURE__*/React.createElement(Button, null, /*#__PURE__*/React.createElement(InboxOutlined, null), "\u9009\u62E9\u6587\u4EF6"))));
  };

  var renderFooter = function renderFooter() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      onClick: function onClick() {
        return handleOk();
      }
    }, "\u5B8C\u6210"));
  };

  return /*#__PURE__*/React.createElement(Modal, {
    width: 640,
    bodyStyle: {
      padding: '32px 40px 48px'
    },
    destroyOnClose: true,
    title: "\u4E0A\u4F20\u6587\u4EF6\u6D41",
    visible: modalVisible,
    footer: renderFooter(),
    onCancel: function onCancel() {
      return handleModalVisible(false, formVals);
    },
    afterClose: function afterClose() {
      return handleModalVisible();
    }
  }, /*#__PURE__*/React.createElement(Form, _objectSpread2(_objectSpread2({}, formLayout$1), {}, {
    form: form,
    initialValues: formVals
  }), renderContent()));
};

var FolderSelect$1 = Ret;
var AppContext$h = Contexts.AppContext;
var FormItem$2 = Form.Item;
var TextArea$1 = Input.TextArea;
var formLayout$2 = {
  labelCol: {
    span: 7
  },
  wrapperCol: {
    span: 13
  }
};

var ModifyForm = function ModifyForm(props) {
  var _useState = useState(props.values),
      _useState2 = _slicedToArray(_useState, 2),
      formVals = _useState2[0],
      setFormVals = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      formvalid = _useState4[0],
      setFormvalid = _useState4[1];

  var _useState5 = useState(props.values || {}),
      _useState6 = _slicedToArray(_useState5, 2),
      vals = _useState6[0],
      setVals = _useState6[1];

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var handleSubmit = props.onSubmit,
      handleModalVisible = props.onCancel,
      modalVisible = props.modifyModalVisible;

  var _useContext = useContext(AppContext$h),
      apiBaseUrl = _useContext.apiBaseUrl;

  var checkForm = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return form.validateFields().then(function (values) {
                // console.log('checkForm ok',values);
                setFormvalid(true);
                setVals(values);
                return true;
              }).catch(function (err) {
                // console.log('checkForm err',err);
                setFormvalid(false);
                return false;
              });

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkForm() {
      return _ref.apply(this, arguments);
    };
  }();

  var modifyFile = function modifyFile(payload) {
    console.log('modify...', payload);
    return httpMethod.put("".concat(apiBaseUrl, "/file/merge"), payload);
  };

  var handleModify = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file) {
      var hide, result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!file) {
                _context2.next = 22;
                break;
              }

              hide = message.loading("\u6B63\u5728\u4FEE\u6539", 0);
              _context2.prev = 2;
              _context2.next = 5;
              return modifyFile(file);

            case 5:
              result = _context2.sent;
              console.log('modifyFile...result...', result);
              hide();

              if (!result) {
                _context2.next = 13;
                break;
              }

              message.success("\u4FEE\u6539\u6210\u529F");
              return _context2.abrupt("return", result);

            case 13:
              message.warning("\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6570\u636E\u5E76\u91CD\u8BD5\uFF01");
              return _context2.abrupt("return", false);

            case 15:
              _context2.next = 22;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](2);
              hide();
              message.error("\u4FEE\u6539\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01");
              return _context2.abrupt("return", false);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 17]]);
    }));

    return function handleModify(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleOk = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var check, validFields, formValues, result;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return checkForm();

            case 2:
              check = _context3.sent;

              if (check) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", false);

            case 5:
              _context3.next = 7;
              return form.validateFields();

            case 7:
              validFields = _context3.sent;
              formValues = _objectSpread2({
                id: formVals.id
              }, validFields);
              _context3.next = 11;
              return handleModify(formValues);

            case 11:
              result = _context3.sent;
              console.log('handleModify...result...', result);

              if (result) {
                if (handleSubmit) handleSubmit(result);
              }

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleOk() {
      return _ref3.apply(this, arguments);
    };
  }();

  var renderContent = function renderContent() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormItem$2, {
      name: "folderId",
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u4FDD\u5B58\u76EE\u5F55",
      rules: [{
        required: true,
        message: "\u76EE\u5F55\u4E0D\u80FD\u4E3A\u7A7A"
      }]
    }, /*#__PURE__*/React.createElement(FolderSelect$1, null)), /*#__PURE__*/React.createElement(FormItem$2, {
      name: "name",
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u6863\u6848\u540D"
    }, /*#__PURE__*/React.createElement(Input, {
      maxLength: 200,
      placeholder: "\u8BF7\u8F93\u5165\u6863\u6848\u540D\u79F0"
    })), /*#__PURE__*/React.createElement(FormItem$2, {
      name: "description",
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u63CF\u8FF0"
    }, /*#__PURE__*/React.createElement(TextArea$1, {
      maxLength: 1000,
      placeholder: "\u8BF7\u8F93\u5165\u6587\u4EF6\u63CF\u8FF0"
    })));
  };

  var renderFooter = function renderFooter() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      onClick: function onClick() {
        return handleOk();
      }
    }, "\u5B8C\u6210"));
  };

  return /*#__PURE__*/React.createElement(Modal, {
    width: 640,
    bodyStyle: {
      padding: '32px 40px 48px'
    },
    destroyOnClose: true,
    title: "\u4FEE\u6539\u6587\u4EF6",
    visible: modalVisible,
    footer: renderFooter(),
    onCancel: function onCancel() {
      return handleModalVisible(false, formVals);
    },
    afterClose: function afterClose() {
      return handleModalVisible();
    }
  }, /*#__PURE__*/React.createElement(Form, _objectSpread2(_objectSpread2({}, formLayout$2), {}, {
    form: form,
    initialValues: formVals
  }), renderContent()));
};

var _excluded$f = ["folderIds", "fileIds", "fileUrl", "onBack"];
var Meta = Card.Meta;
var AppContext$i = Contexts.AppContext;

var FileCardListPage = function FileCardListPage(props) {
  var _useContext = useContext(AppContext$i),
      apiBaseUrl = _useContext.apiBaseUrl;

  var folderIds = props.folderIds,
      fileIds = props.fileIds,
      fileUrl = props.fileUrl,
      onBack = props.onBack,
      otherProps = _objectWithoutProperties(props, _excluded$f);

  var actionRef = useRef();

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      listData = _useState2[0],
      setListData = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var handleReqData = function handleReqData() {
    var predicates = [];

    if (fileIds) {
      if (Array.isArray(fileIds)) {
        predicates.push.apply(predicates, _toConsumableArray(fileIds.map(function (id) {
          return {
            Property: 'id',
            Comparison: 'Equals',
            Value: id
          };
        })));
      } else predicates === null || predicates === void 0 ? void 0 : predicates.push([{
        Property: 'id',
        Comparison: 'Equals',
        Value: fileIds
      }]);
    } else if (folderIds) {
      if (Array.isArray(folderIds)) {
        predicates.push.apply(predicates, _toConsumableArray(folderIds.map(function (id) {
          return {
            Property: 'folderId',
            Comparison: 'Equals',
            Value: id
          };
        })));
      } else predicates === null || predicates === void 0 ? void 0 : predicates.push([{
        Property: 'folderId',
        Comparison: 'Equals',
        Value: folderIds
      }]);
    }

    return httpMethod.post("".concat(apiBaseUrl, "/file/all"), predicates ? {
      predicates: predicates
    } : {});
  };

  var loadData = function loadData() {
    setLoading(true);
    handleReqData().then(function (value) {
      setListData(value);
    }).finally(function () {
      setLoading(false);
    });
  };

  useEffect(function () {
    loadData();
  }, [folderIds]);

  var handleBack = function handleBack() {
    if (onBack) onBack();
  };

  var ref = useRef();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    ghost: false,
    onBack: function onBack() {
      return handleBack();
    },
    title: "\u4E0B\u8F7D\u4E8C\u7EF4\u7801",
    extra: [/*#__PURE__*/React.createElement(Button, {
      key: "qrcode",
      type: "primary",
      onClick: onBack
    }, "\u8FD4\u56DE\u5217\u8868"), /*#__PURE__*/React.createElement(ReactToPrint, {
      trigger: function trigger() {
        return /*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement(Button, {
          type: "primary"
        }, "\u6253\u5370\u4E8C\u7EF4\u7801"));
      },
      content: function content() {
        return ref.current;
      },
      onAfterPrint: function onAfterPrint() {
        message.info('打印成功！');
      }
    }), /*#__PURE__*/React.createElement(Button, {
      type: "text",
      shape: "circle",
      icon: /*#__PURE__*/React.createElement(RedoOutlined, null),
      onClick: loadData,
      loading: loading
    })]
  }), /*#__PURE__*/React.createElement("form", {
    ref: ref
  }, /*#__PURE__*/React.createElement(List, {
    grid: {
      gutter: 16,
      xs: 1,
      sm: 1,
      md: 1,
      lg: 2,
      xl: 3,
      xxl: 4
    },
    bordered: true,
    size: "large",
    loading: loading,
    dataSource: listData,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/React.createElement(List.Item, null, /*#__PURE__*/React.createElement(Card, {
        style: {
          width: 160
        },
        cover: /*#__PURE__*/React.createElement(QRCode, {
          value: "".concat(fileUrl, "?fileId=").concat(item.id),
          size: 160,
          fgColor: "#000000" //二维码的颜色

        })
      }, /*#__PURE__*/React.createElement(Meta, {
        title: item.name
      })));
    }
  })));
};

var _excluded$g = ["innerParams", "allowDownload", "allowModify", "previewUrl", "fileUrl"],
    _excluded2$1 = ["pageSize", "pageNumber"];
var FolderSelect$2 = Ret;
var AppContext$j = Contexts.AppContext;

var FileTablePage = function FileTablePage(props) {
  var _useContext = useContext(AppContext$j),
      apiBaseUrl = _useContext.apiBaseUrl;

  var folderIds = props.innerParams,
      _props$allowDownload = props.allowDownload,
      allowDownload = _props$allowDownload === void 0 ? true : _props$allowDownload,
      _props$allowModify = props.allowModify,
      allowModify = _props$allowModify === void 0 ? true : _props$allowModify,
      previewUrl = props.previewUrl,
      _props$fileUrl = props.fileUrl,
      fileUrl = _props$fileUrl === void 0 ? "".concat(apiBaseUrl, "/file/download-file") : _props$fileUrl,
      otherProps = _objectWithoutProperties(props, _excluded$g);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      uploadModalVisible = _useState2[0],
      handleUploadModalVisible = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      modifyModalVisible = _useState4[0],
      handleModifyModalVisible = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      modifyFormValues = _useState6[0],
      setModifyFormValues = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      viewModalVisible = _useState8[0],
      handleViewModalVisible = _useState8[1];

  var _useState9 = useState({}),
      _useState10 = _slicedToArray(_useState9, 2),
      viewFormValues = _useState10[0],
      setViewFormValues = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      viewQrCode = _useState12[0],
      setViewQrCode = _useState12[1];

  var actionRef = useRef();

  var _useState13 = useState([]),
      _useState14 = _slicedToArray(_useState13, 2),
      selectedRowKeys = _useState14[0],
      setSelectedRowKeys = _useState14[1]; // 选择的行key值数组


  useEffect(function () {
    var _actionRef$current;

    (_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 ? void 0 : _actionRef$current.reload();
  }, [folderIds]);
  var cols = [{
    title: '目录',
    dataIndex: 'folderId',
    hideInSearch: true,
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(FolderSelect$2, null);
    },
    render: function render(_, entity) {
      var _entity$folder;

      return (_entity$folder = entity.folder) === null || _entity$folder === void 0 ? void 0 : _entity$folder.name;
    }
  }, _objectSpread2({
    title: '档案名',
    dataIndex: 'name',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入档案名称！'
      }]
    },
    sorter: true,
    comparison: 'Contains'
  }, GetColumnSearchProps('name')), _objectSpread2({
    title: '描述',
    dataIndex: 'description',
    hideInSearch: true,
    hideInTable: true,
    formItemProps: {},
    comparison: 'Contains'
  }, GetColumnSearchProps('description')), _objectSpread2({
    title: '文件名',
    dataIndex: 'fileName',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入文件名称！'
      }]
    },
    sorter: true,
    comparison: 'Contains'
  }, GetColumnSearchProps('fileName')), _objectSpread2({
    title: '类型',
    dataIndex: 'fileType',
    hideInSearch: true,
    sorter: true,
    comparison: 'Contains'
  }, GetColumnSearchProps('fileType')), {
    title: '大小',
    dataIndex: 'fileSize',
    hideInSearch: true,
    sorter: true,
    render: function render(text, record, index, action) {
      return getFileSize(record.fileSize);
    }
  }, {
    title: '上传时间',
    dataIndex: 'createTime',
    search: false,
    sorter: true,
    hideInForm: true
  }, {
    title: '上传人',
    dataIndex: 'createUserName',
    search: false,
    hideInForm: true
  } // {
  //     title: '操作',
  //     valueType: 'option',
  //     dataIndex: 'id',
  //     render: (text, record, xxx, action) => [
  //         <a
  //             key={`download_${record.id}`}
  //             onClick={() => {
  //                 handleViewModalVisible(true);
  //                 setViewFormValues(record);
  //             }}
  //         >
  //             下载
  //         </a>,
  //     ],
  // },
  ];

  var openUpload = function openUpload() {
    handleUploadModalVisible(true);
  };

  var qrcode = function qrcode() {
    setViewQrCode(!viewQrCode);
  };

  var handleSelectChange = function handleSelectChange(selectedRowKeys) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  var refresh = function refresh() {
    if (actionRef.current) {
      actionRef.current.reload();
    }
  };

  var deleteFile = function deleteFile(payload) {
    console.log('delete...', payload);
    var hide = message.loading("\u6B63\u5728\u5220\u9664", 0);

    try {
      var result = httpMethod.delete("".concat(apiBaseUrl, "/file?id=") + payload.id);
      console.log('deleteFile...result...', result);
      hide();

      if (result) {
        message.success("\u5220\u9664\u6210\u529F");
        refresh();
        return result;
      } else {
        message.warning("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6570\u636E\u5E76\u91CD\u8BD5\uFF01");
        return false;
      }
    } catch (error) {
      hide();
      message.error("\u5220\u9664\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01");
      return false;
    }
  };

  var handleDelete = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (file) {
                Modal.confirm({
                  title: '确认',
                  icon: /*#__PURE__*/React.createElement(ExclamationCircleOutlined, null),
                  content: '确认删除文件' + file.name + '?',
                  okText: '确认',
                  cancelText: '取消',
                  onOk: function onOk() {
                    return deleteFile(file);
                  }
                });
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDelete(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onChange: handleSelectChange
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, viewQrCode ? /*#__PURE__*/React.createElement(FileCardListPage, {
    actionRef: actionRef,
    folderIds: folderIds,
    fileIds: selectedRowKeys,
    fileUrl: fileUrl,
    onBack: qrcode,
    toolbar: {
      actions: [/*#__PURE__*/React.createElement(Button, {
        key: "qrcode",
        type: "primary",
        onClick: qrcode
      }, "\u4E8C\u7EF4\u7801")]
    }
  }) : /*#__PURE__*/React.createElement(CRUDTable, {
    actionRef: actionRef,
    search: false,
    columns: cols,
    defaultSort: {
      createTime: false
    },
    // pagination={false}
    rowSelection: rowSelection,
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          otherProps = _objectWithoutProperties(params, _excluded2$1);

      if (folderIds) {
        var _otherProps$Predicate2;

        if (Array.isArray(folderIds)) {
          folderIds.map(function (id) {
            var _otherProps$Predicate;

            (_otherProps$Predicate = otherProps.Predicates) === null || _otherProps$Predicate === void 0 ? void 0 : _otherProps$Predicate.push({
              Property: 'folderId',
              Comparison: 'Equals',
              Value: id
            });
          });
        } else (_otherProps$Predicate2 = otherProps.Predicates) === null || _otherProps$Predicate2 === void 0 ? void 0 : _otherProps$Predicate2.push({
          Property: 'folderId',
          Comparison: 'Equals',
          Value: folderIds
        });
      }

      return pagingRequest("".concat(apiBaseUrl, "/file/page"), otherProps, pageSize, pageNumber);
    },
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/file/range"), params);
    },
    toolbar: {
      actions: [/*#__PURE__*/React.createElement(Button, {
        key: "qrcode",
        type: "primary",
        onClick: qrcode
      }, "\u4E8C\u7EF4\u7801"), /*#__PURE__*/React.createElement(Button, {
        key: "openUpload",
        type: "primary",
        onClick: openUpload
      }, "\u4E0A\u4F20\u6587\u4EF6")]
    },
    handles: [allowModify && {
      name: '修改',
      onClick: function onClick(record) {
        handleModifyModalVisible(true);
        setModifyFormValues(record);
      }
    }, allowModify && {
      name: '删除',
      onClick: function onClick(record) {
        if (record && record.id) {
          handleDelete(record);
        }
      }
    }, allowDownload && {
      name: '下载',
      onClick: function onClick(record) {
        handleViewModalVisible(true);
        setViewFormValues(record);
      }
    }, previewUrl && {
      name: '预览',
      onClick: function onClick(record) {
        var id = record.id,
            fileName = record.fileName;
        var pullUrl = "".concat(fileUrl, "?fileId=").concat(id, "&fullfilename=").concat(fileName);
        var base64Url = Base64.encode(pullUrl);
        var pre = "".concat(previewUrl, "?url=").concat(encodeURIComponent(base64Url));
        window.open(pre);
      }
    }]
  }), uploadModalVisible ? /*#__PURE__*/React.createElement(UploadForm, {
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(value) {
        var success;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('submit upload...', value); // const success = await handleUpload(value);

                success = value;

                if (success) {
                  handleUploadModalVisible(false);

                  if (actionRef.current) {
                    actionRef.current.reload();
                  }
                }

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function onSubmit(_x2) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }(),
    onCancel: function onCancel() {
      handleUploadModalVisible(false);
    },
    modalVisible: uploadModalVisible
  }) : null, modifyModalVisible && modifyFormValues && Object.keys(modifyFormValues).length ? /*#__PURE__*/React.createElement(ModifyForm, {
    onSubmit: function onSubmit() {
      handleModifyModalVisible(false);
      setModifyFormValues({});

      if (actionRef.current) {
        actionRef.current.reload();
      }
    },
    onCancel: function onCancel() {
      handleModifyModalVisible(false);
      setModifyFormValues({});
    },
    modifyModalVisible: modifyModalVisible,
    values: modifyFormValues
  }) : null, viewModalVisible && viewFormValues && Object.keys(viewFormValues).length ? /*#__PURE__*/React.createElement(DownloadForm, {
    onClose: function onClose() {
      handleViewModalVisible(false);
      setViewFormValues({});
    },
    onCancel: function onCancel() {
      handleViewModalVisible(false);
      setViewFormValues({});
    },
    viewModalVisible: viewModalVisible,
    values: viewFormValues
  }) : null);
};

var _excluded$h = ["onChange", "innerParams", "root", "auth"];
var AppContext$k = Contexts.AppContext;

var FolderTree = function FolderTree(props) {
  var onChange = props.onChange,
      folderIds = props.innerParams,
      root = props.root,
      _props$auth = props.auth,
      auth = _props$auth === void 0 ? true : _props$auth,
      otherProps = _objectWithoutProperties(props, _excluded$h);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      checkedKeys = _useState2[0],
      setCheckedKeys = _useState2[1];

  var _useContext = useContext(AppContext$k),
      apiBaseUrl = _useContext.apiBaseUrl;

  var handleReqOrg = function handleReqOrg() {
    if (auth) {
      return httpMethod.get("".concat(apiBaseUrl, "/folder/user-folders"), root ? {
        root: root
      } : {});
    }

    return httpMethod.get("".concat(apiBaseUrl, "/folder/tree-all"));
  }; // 勾选后


  var handleChecked = function handleChecked(keys) {
    setCheckedKeys(keys);
  }; // 清空选择

  useEffect(function () {
    if (onChange) {
      onChange(checkedKeys);
    }
  }, [checkedKeys]);

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];
  return /*#__PURE__*/React.createElement(ProCard, null, /*#__PURE__*/React.createElement(MetaTree, {
    keyField: "id",
    titleField: "name",
    onRequest: handleReqOrg,
    onChecked: handleChecked,
    checkStrictly: true,
    checkedKeys: checkedKeys,
    checkAlone: true,
    showToolbar: {
      total: false
    }
  }));
};

var PermissionPage = function PermissionPage(props) {
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      folderIds = _useState2[0],
      setFolderIds = _useState2[1];

  var root = props.root,
      _props$auth = props.auth,
      auth = _props$auth === void 0 ? true : _props$auth,
      _props$allowDownload = props.allowDownload,
      allowDownload = _props$allowDownload === void 0 ? true : _props$allowDownload,
      previewUrl = props.previewUrl,
      fileUrl = props.fileUrl;
  var subPage = /*#__PURE__*/React.createElement(FolderTree, {
    root: root,
    auth: auth,
    onChange: function onChange(r) {
      return setFolderIds(r);
    },
    innerParams: folderIds
  });
  var mainTitle = /*#__PURE__*/React.createElement(React.Fragment, null, folderIds && folderIds.map(function (id) {
    return /*#__PURE__*/React.createElement(Tag, null, id);
  }));
  var mainPage = /*#__PURE__*/React.createElement(FileTablePage, {
    innerParams: folderIds,
    allowDownload: allowDownload,
    previewUrl: previewUrl,
    fileUrl: fileUrl
  });
  return /*#__PURE__*/React.createElement(SplitPage, {
    style: {
      height: '100%'
    },
    subPage: subPage,
    mainVisible: folderIds && folderIds.length ? folderIds.length > 0 : false,
    mainPage: mainPage
  });
};

var _excluded$i = ["pageSize", "pageNumber"];
var FolderSelect$3 = Ret;
var AppContext$l = Contexts.AppContext;

var FolderPage = function FolderPage(props) {
  var _useContext = useContext(AppContext$l),
      apiBaseUrl = _useContext.apiBaseUrl;

  var cols = [{
    title: '上级目录',
    dataIndex: 'treeParentId',
    hideInSearch: true,
    hideInTable: true,
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(FolderSelect$3, null);
    }
  }, {
    title: '名称',
    dataIndex: 'name',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入目录名称！'
      }]
    }
  }, {
    title: '描述',
    dataIndex: 'description',
    formItemProps: {}
  }, {
    title: '顺序',
    dataIndex: 'treeIndex',
    hideInSearch: true,
    valueType: 'digit',
    align: 'center',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入顺序！'
      }]
    },
    fieldProps: {
      precision: 0
    }
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    search: false,
    hideInForm: true
  }, {
    title: '创建人',
    dataIndex: 'createUserName',
    search: false,
    hideInForm: true
  }, {
    title: '更新时间',
    dataIndex: 'updateTime',
    search: false,
    hideInForm: true
  }, {
    title: '更新人',
    dataIndex: 'updateUserName',
    search: false,
    hideInForm: true
  }];
  return /*#__PURE__*/React.createElement(TreeTable, {
    search: false,
    columns: cols,
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          otherProps = _objectWithoutProperties(params, _excluded$i);

      return httpMethod.get("".concat(apiBaseUrl, "/folder/tree-all"));
    },
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/folder/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/folder/save"), params);
    }
  });
};

var _excluded$j = ["pageSize", "pageNumber"];
var OrgSelect = Ret$3;
var AppContext$m = Contexts.AppContext;
var menuStore$1 = Stores.menuStore;

var PersonPage = function PersonPage(props) {
  var _useContext = useContext(AppContext$m),
      apiBaseUrl = _useContext.apiBaseUrl;

  var cols = [{
    title: '代码',
    dataIndex: 'code',
    // sorter: true,
    formItemProps: {
      rules: [{
        required: true
      }]
    }
  }, {
    title: '名称',
    dataIndex: 'name',
    formItemProps: {
      rules: [{
        required: true
      }]
    }
  }, {
    title: '所属组织',
    dataIndex: 'orgId',
    formItemProps: {
      rules: [{
        required: true
      }]
    },
    render: function render(text, record) {
      var org = record.org;

      if (org) {
        return org.name;
      }

      return '';
    },
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(OrgSelect, null);
    }
  }, {
    title: '描述',
    dataIndex: 'description',
    search: false
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '创建人',
    dataIndex: 'createUserName',
    search: false,
    hideInForm: true
  }, {
    title: '更新时间',
    dataIndex: 'updateTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '更新人',
    dataIndex: 'updateUserName',
    search: false,
    hideInForm: true
  }];
  return /*#__PURE__*/React.createElement(SimpleCRUDTable, {
    columns: cols,
    defaultSort: {
      'Org.TreeIndex': true,
      Code: true
    },
    reqQuery: function () {
      var _reqQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var pageSize, pageNumber, otherProps;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pageSize = params.pageSize, pageNumber = params.pageNumber, otherProps = _objectWithoutProperties(params, _excluded$j);
                return _context.abrupt("return", pagingRequest("".concat(apiBaseUrl, "/job/page"), otherProps, pageSize, pageNumber));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function reqQuery(_x) {
        return _reqQuery.apply(this, arguments);
      }

      return reqQuery;
    }(),
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/job/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/job/save"), params);
    },
    handles: [{
      name: '人员维护',
      onClick: function onClick(record) {
        var id = record.id,
            name = record.name,
            org = record.org;
        var addTab = menuStore$1.addTab;
        addTab({
          id: "job_".concat(id),
          name: "".concat(org.name, "-").concat(name, " \u4EBA\u5458"),
          url: 'Core/PersonJob',
          urlType: 1,
          props: {
            jobId: id
          },
          params: ''
        });
      }
    }]
  });
};

var _excluded$k = ["pageSize", "pageNumber"];
var AppContext$n = Contexts.AppContext;
var PersonSelect = Ret$6;

var UdcPage = function UdcPage(props) {
  var jobId = props.jobId;

  var _useContext = useContext(AppContext$n),
      apiBaseUrl = _useContext.apiBaseUrl;

  var cols = [{
    title: '人员',
    dataIndex: 'personId',
    search: false,
    hideInTable: true,
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入人员'
      }]
    },
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(PersonSelect, null);
    }
  }, {
    title: '人员所属组织',
    dataIndex: 'personOrgName',
    hideInForm: true,
    search: false,
    comparison: function comparison(val) {
      if (typeof val !== 'string') {
        return [];
      }

      return [GetQueryExpression('Person.Name', 'Contains', val)];
    }
  }, {
    title: '人员编号',
    dataIndex: 'personCode',
    hideInForm: true,
    comparison: function comparison(val) {
      if (typeof val !== 'string') {
        return [];
      }

      return [GetQueryExpression('Person.Code', 'Contains', val)];
    }
  }, {
    title: '人员编号',
    dataIndex: 'personName',
    hideInForm: true,
    comparison: function comparison(val) {
      if (typeof val !== 'string') {
        return [];
      }

      return [GetQueryExpression('Person.Name', 'Contains', val)];
    }
  }, // {
  //     title: '岗位所属组织',
  //     dataIndex: 'jobOrgName',
  //     hideInForm: true,
  //     search: false,
  //     comparison: (val) => {
  //         if (typeof val !== 'string') {
  //             return []
  //         }
  //         return [
  //             GetQueryExpression('Person.Name', 'Contains', val)
  //         ]
  //     }
  // },
  // {
  //     title: '岗位名称',
  //     dataIndex: 'jobName',
  //     hideInForm: true,
  //     search: false,
  //     comparison: (val) => {
  //         if (typeof val !== 'string') {
  //             return []
  //         }
  //         return [
  //             GetQueryExpression('Person.Name', 'Contains', val)
  //         ]
  //     }
  // },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '创建人',
    dataIndex: 'createUserName',
    search: false,
    hideInForm: true
  }, {
    title: '更新时间',
    dataIndex: 'updateTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '更新人',
    dataIndex: 'updateUserName',
    search: false,
    hideInForm: true
  }];
  return /*#__PURE__*/React.createElement(SimpleCRUDTable, {
    columns: cols,
    beforeSubmit: function beforeSubmit(params) {
      if (jobId) {
        params.jobId = jobId;
      }

      return {
        result: true
      };
    },
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          data = _objectWithoutProperties(params, _excluded$k);

      if (jobId) {
        var _data$Predicates;

        (_data$Predicates = data.Predicates) === null || _data$Predicates === void 0 ? void 0 : _data$Predicates.push(GetQueryExpression('JobId', 'Equals', jobId));
      }

      return pagingRequest("".concat(apiBaseUrl, "/person-job/page"), data, pageSize, pageNumber);
    },
    defaultSort: {
      'Person.Org.TreeIndex': true,
      'Person.Code': true
    },
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/person-job/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/person-job/save"), params);
    }
  });
};

var _excluded$l = ["pageSize", "current"];
var AppContext$o = Contexts.AppContext;

var ApiLogPage = function ApiLogPage(props) {
  var _useContext = useContext(AppContext$o),
      apiBaseUrl = _useContext.apiBaseUrl;

  var columns = [{
    title: 'TraceID',
    dataIndex: 'traceId',
    comparison: 'Contains'
  }, {
    title: '请求时间',
    dataIndex: 'createTime',
    comparison: 'Contains',
    sorter: true
  }, {
    title: '用户名',
    dataIndex: 'createUserName',
    comparison: 'Contains'
  }, {
    title: 'IP',
    dataIndex: 'ip',
    comparison: 'Contains'
  }, {
    title: '请求方式',
    dataIndex: 'method',
    comparison: 'Contains'
  }, {
    title: '请求地址',
    dataIndex: 'request',
    comparison: 'Contains'
  }, {
    title: '返回状态',
    dataIndex: 'statusCode',
    comparison: 'Contains',
    hideInSearch: true
  }];
  return /*#__PURE__*/React.createElement(MetaTable, {
    columns: columns,
    request: function request(params, sorter, filter) {
      // 表单搜索项会从 params 传入，传递给后端接口。
      console.log(params, sorter, filter);

      var pageSize = params.pageSize,
          current = params.current,
          others = _objectWithoutProperties(params, _excluded$l); // const dstVal = traceId?.trim() ?? '';


      var predicates = Object.keys(others).map(function (key) {
        return GetQueryExpression(key, 'Contains', others[key]);
      });
      var queries = {
        Predicates: predicates // [
        //     GetQueryExpression('roleName', 'Contains', dstVal),
        // ],

      };
      return pagingRequest("".concat(apiBaseUrl, "/api-log/page"), queries, pageSize !== null && pageSize !== void 0 ? pageSize : 5, current !== null && current !== void 0 ? current : 1);
    }
  });
};

var _excluded$m = ["pageSize", "pageNumber"];
var MenuSelect = Ret$2;
var AppContext$p = Contexts.AppContext;

var MenuPage = function MenuPage(props) {
  var _useContext = useContext(AppContext$p),
      apiBaseUrl = _useContext.apiBaseUrl;

  var cols = [{
    title: '父菜单',
    dataIndex: 'treeParentId',
    hideInSearch: true,
    hideInTable: true,
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(MenuSelect, null);
    }
  }, {
    title: '标题',
    dataIndex: 'name',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入菜单标题！'
      }]
    }
  }, {
    title: '地址',
    dataIndex: 'url'
  }, {
    title: '类型',
    dataIndex: 'urlType',
    hideInSearch: true,
    valueEnum: {
      1: {
        text: '原生组件'
      },
      2: {
        text: '外部页面'
      },
      3: {
        text: '新窗口'
      }
    }
  }, {
    title: '图标',
    dataIndex: 'icon',
    hideInSearch: true,
    align: 'center',
    render: function render(text) {
      var _text$toString;

      var IconDic = Icon;
      var index = (_text$toString = text === null || text === void 0 ? void 0 : text.toString()) !== null && _text$toString !== void 0 ? _text$toString : '';
      var CurIcon = IconDic[index];

      if (CurIcon) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CurIcon, null), text);
      }

      return text;
    },
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(IconSelect, null);
    }
  }, {
    title: '附加参数',
    dataIndex: 'params',
    valueType: 'jsonCode',
    hideInSearch: true
  }, {
    title: '顺序',
    dataIndex: 'treeIndex',
    hideInSearch: true,
    valueType: 'digit',
    align: 'center',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入菜单顺序！'
      }]
    },
    fieldProps: {
      precision: 0
    }
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    search: false,
    hideInForm: true
  }, {
    title: '创建人',
    dataIndex: 'createUserName',
    search: false,
    hideInForm: true
  }, {
    title: '更新时间',
    dataIndex: 'updateTime',
    search: false,
    hideInForm: true
  }, {
    title: '更新人',
    dataIndex: 'updateUserName',
    search: false,
    hideInForm: true
  }];
  return /*#__PURE__*/React.createElement(TreeTable, {
    search: false,
    columns: cols,
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          otherProps = _objectWithoutProperties(params, _excluded$m);

      return httpMethod.get("".concat(apiBaseUrl, "/menu/tree-all"));
    },
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/menu/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/menu/save"), params);
    }
  });
};

var _excluded$n = ["pageSize", "pageNumber"];
var AppContext$q = Contexts.AppContext;

var TenantClaimPage = function TenantClaimPage(props) {
  var orgId = props.orgId;

  var _useContext = useContext(AppContext$q),
      apiBaseUrl = _useContext.apiBaseUrl;

  var modelName = 'org-claim';
  var ref = useRef();
  var cols = [{
    title: '编号',
    dataIndex: 'orgTypeClaimId',
    search: false,
    hideInForm: true,
    formItemProps: {
      rules: [{
        required: true
      }]
    },
    render: function render(text, record) {
      var _ref = record || {},
          orgTypeClaim = _ref.orgTypeClaim;

      var _ref2 = orgTypeClaim || {},
          code = _ref2.code,
          name = _ref2.name;

      return "".concat(code, "-").concat(name);
    }
  }, {
    title: '值',
    dataIndex: 'value',
    comparison: 'Contains',
    formItemProps: {
      rules: [{
        required: true
      }]
    }
  } // {
  //     title: '创建时间',
  //     dataIndex: 'createTime',
  //     sorter: true,
  //     search: false,
  //     hideInForm: true,
  // },
  // {
  //     title: '创建人',
  //     dataIndex: 'createUserName',
  //     search: false,
  //     hideInForm: true,
  // },
  // {
  //     title: '更新时间',
  //     dataIndex: 'updateTime',
  //     sorter: true,
  //     search: false,
  //     hideInForm: true,
  // },
  // {
  //     title: '更新人',
  //     dataIndex: 'updateUserName',
  //     search: false,
  //     hideInForm: true,
  // },
  ];
  return /*#__PURE__*/React.createElement(SimpleCRUDTable, {
    actionRef: ref,
    columns: cols,
    beforeSubmit: function beforeSubmit(params) {
      if (orgId) {
        params.orgId = orgId;
      }

      return {
        result: true
      };
    },
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          data = _objectWithoutProperties(params, _excluded$n);

      if (orgId) {
        var _data$Predicates;

        (_data$Predicates = data.Predicates) === null || _data$Predicates === void 0 ? void 0 : _data$Predicates.push(GetQueryExpression('OrgId', 'Equals', orgId));
      }

      return pagingRequest("".concat(apiBaseUrl, "/").concat(modelName, "/page"), data, pageSize, pageNumber);
    },
    defaultSort: {
      'OrgTypeClaim.Code': true
    },
    handleAdd: undefined,
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/").concat(modelName, "/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/").concat(modelName, "/save"), params);
    },
    extraToolBarButtons: [/*#__PURE__*/React.createElement(Button, {
      onClick: function () {
        var _onClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var importret;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return httpMethod.post("".concat(apiBaseUrl, "/org/import-org-claim?orgId=").concat(orgId));

                case 2:
                  importret = _context.sent;

                  if (importret) {
                    message.success('导入成功！');

                    if (ref.current && ref.current.reload) {
                      ref.current.reload();
                    }
                  }

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function onClick() {
          return _onClick.apply(this, arguments);
        }

        return onClick;
      }()
    }, "\u5BFC\u5165\u7279\u6027")]
  });
};

var _excluded$o = ["pageSize", "pageNumber"];
var OrgSelect$1 = Ret$3,
    OrgTypeSelect = Ret$5;
var AppContext$r = Contexts.AppContext;
var menuStore$2 = Stores.menuStore;

var OrgPage = function OrgPage(props) {
  var _useContext = useContext(AppContext$r),
      apiBaseUrl = _useContext.apiBaseUrl;

  var addTab = menuStore$2.addTab;
  var cols = [{
    title: '上级组织',
    dataIndex: 'treeParentId',
    hideInSearch: true,
    hideInTable: true,
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(OrgSelect$1, null);
    }
  }, {
    title: '组织编号',
    dataIndex: 'code',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入组织编号！'
      }]
    }
  }, {
    title: '组织名称',
    dataIndex: 'name',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入组织名称！'
      }]
    }
  }, {
    title: '组织类型',
    dataIndex: 'orgTypeId',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入组织类型！'
      }]
    },
    render: function render(text, record) {
      var _record$orgType;

      return record === null || record === void 0 ? void 0 : (_record$orgType = record.orgType) === null || _record$orgType === void 0 ? void 0 : _record$orgType.name;
    },
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(OrgTypeSelect, null);
    }
  }, {
    title: '顺序',
    dataIndex: 'treeIndex',
    hideInSearch: true,
    valueType: 'digit',
    align: 'center',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入顺序！'
      }]
    },
    fieldProps: {
      precision: 0
    }
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    search: false,
    hideInForm: true
  }, {
    title: '创建人',
    dataIndex: 'createUserName',
    search: false,
    hideInForm: true
  }, {
    title: '更新时间',
    dataIndex: 'updateTime',
    search: false,
    hideInForm: true
  }, {
    title: '更新人',
    dataIndex: 'updateUserName',
    search: false,
    hideInForm: true
  }];
  return /*#__PURE__*/React.createElement(TreeTable, {
    search: false,
    columns: cols,
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          otherProps = _objectWithoutProperties(params, _excluded$o);

      return httpMethod.get("".concat(apiBaseUrl, "/org/tree-all"));
    },
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/org/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/org/save"), params);
    },
    handles: [{
      name: '扩展属性',
      onClick: function onClick(record) {
        var id = record.id,
            name = record.name;
        addTab({
          id: "org_claim_".concat(id),
          name: "".concat(name, " \u6269\u5C55\u5C5E\u6027"),
          url: 'Core/OrgClaim',
          urlType: 1,
          params: '',
          props: {
            orgId: id
          }
        });
      }
    }]
  });
};

var _excluded$p = ["pageSize", "pageNumber"];
var AppContext$s = Contexts.AppContext;
var menuStore$3 = Stores.menuStore;

var OrgTypePage = function OrgTypePage(props) {
  var _useContext = useContext(AppContext$s),
      apiBaseUrl = _useContext.apiBaseUrl;

  var addTab = menuStore$3.addTab;
  var cols = [{
    title: '组织类型编号',
    dataIndex: 'code',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入组织类型编号！'
      }]
    }
  }, {
    title: '组织类型名称',
    dataIndex: 'name',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入组织类型名称！'
      }]
    }
  }];
  return /*#__PURE__*/React.createElement(SimpleCRUDTable, {
    columns: cols,
    defaultSort: {
      code: true
    },
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          otherProps = _objectWithoutProperties(params, _excluded$p);

      return pagingRequest("".concat(apiBaseUrl, "/org-type/page"), otherProps, pageSize, pageNumber);
    },
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/org-type/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/org-type/save"), params);
    },
    handles: [{
      name: '扩展属性',
      onClick: function onClick(record) {
        var id = record.id,
            name = record.name;
        addTab({
          id: "org_type_claim_".concat(id),
          name: "".concat(name, " \u6269\u5C55\u5C5E\u6027"),
          url: 'Core/OrgTypeClaim',
          urlType: 1,
          params: '',
          props: {
            orgTypeId: id
          }
        });
      }
    }]
  });
};

var _excluded$q = ["pageSize", "pageNumber"];
var AppContext$t = Contexts.AppContext;

var TenantClaimPage$1 = function TenantClaimPage(props) {
  var orgTypeId = props.orgTypeId;

  var _useContext = useContext(AppContext$t),
      apiBaseUrl = _useContext.apiBaseUrl;

  var modelName = 'org-type-claim';
  var ref = useRef();
  var cols = [{
    title: '编号',
    dataIndex: 'code',
    search: false,
    formItemProps: {
      rules: [{
        required: true
      }]
    }
  }, {
    title: '名称',
    dataIndex: 'name',
    comparison: 'Contains',
    formItemProps: {
      rules: [{
        required: true
      }]
    }
  }, {
    title: '描述',
    dataIndex: 'description',
    search: false
  } // {
  //     title: '创建时间',
  //     dataIndex: 'createTime',
  //     sorter: true,
  //     search: false,
  //     hideInForm: true,
  // },
  // {
  //     title: '创建人',
  //     dataIndex: 'createUserName',
  //     search: false,
  //     hideInForm: true,
  // },
  // {
  //     title: '更新时间',
  //     dataIndex: 'updateTime',
  //     sorter: true,
  //     search: false,
  //     hideInForm: true,
  // },
  // {
  //     title: '更新人',
  //     dataIndex: 'updateUserName',
  //     search: false,
  //     hideInForm: true,
  // },
  ];
  return /*#__PURE__*/React.createElement(SimpleCRUDTable, {
    actionRef: ref,
    columns: cols,
    beforeSubmit: function beforeSubmit(params) {
      if (orgTypeId) {
        params.orgTypeId = orgTypeId;
      }

      return {
        result: true
      };
    },
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          data = _objectWithoutProperties(params, _excluded$q);

      if (orgTypeId) {
        var _data$Predicates;

        (_data$Predicates = data.Predicates) === null || _data$Predicates === void 0 ? void 0 : _data$Predicates.push(GetQueryExpression('OrgTypeId', 'Equals', orgTypeId));
      }

      return pagingRequest("".concat(apiBaseUrl, "/").concat(modelName, "/page"), data, pageSize, pageNumber);
    },
    defaultSort: {
      code: true
    },
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/").concat(modelName, "/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/").concat(modelName, "/save"), params);
    }
  });
};

var _excluded$r = ["value", "onChange"];
var AppContext$u = Contexts.AppContext;

var getBase64 = function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
};

var _beforeUpload = function beforeUpload(file) {
  var isJpgOrPng = file.type === 'image/jpeg';

  if (!isJpgOrPng) {
    message.error('只能上传jpg文件!');
    return false;
  }

  var KBNum = file.size / 1024;

  if (KBNum < 10) {
    message.error('照片不能低于10kb!');
    return false;
  }

  if (KBNum > 200) {
    message.error('照片不能超过200kb!');
    return false;
  }

  return true;
};

var AvatarUpload = function AvatarUpload(props) {
  var _useContext = useContext(AppContext$u),
      apiBaseUrl = _useContext.apiBaseUrl;

  var value = props.value,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, _excluded$r);

  var _useState = useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  useEffect(function () {
    if (value) {
      axios.get("".concat(apiBaseUrl, "/avatar/").concat(value, "/Base64")).then(function (base64Str) {
        if (base64Str && base64Str.data) {
          setImage(base64Str.data);
        }
      });
    } else {
      setImage(undefined);
    }
  }, [value]);
  return /*#__PURE__*/React.createElement(Upload, {
    accept: ".jpeg,.jpg",
    listType: "picture-card",
    className: "avatar-uploader",
    showUploadList: false,
    beforeUpload: function beforeUpload(file) {
      if (_beforeUpload(file)) {
        getBase64(file, function (result) {
          setImage(result);
          onChange(result);
        });
      }

      return false;
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "avatar",
    style: {
      width: '100%'
    }
  }) : /*#__PURE__*/React.createElement(PlusOutlined, null));
};

var _excluded$s = ["pageSize", "pageNumber"];
var OrgSelect$2 = Ret$3,
    JobSelect = Ret$1;
var AppContext$v = Contexts.AppContext;

var PersonPage$1 = function PersonPage(props) {
  var _props$auth = props.auth,
      auth = _props$auth === void 0 ? false : _props$auth;

  var _useContext = useContext(AppContext$v),
      apiBaseUrl = _useContext.apiBaseUrl;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      orgIds = _useState2[0],
      setOrgIds = _useState2[1];

  var cols = [{
    title: '代码',
    dataIndex: 'code',
    sorter: true,
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入人员代码！'
      }]
    }
  }, {
    title: '姓名',
    dataIndex: 'name',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入人员姓名！'
      }]
    }
  }, {
    title: '所属组织',
    dataIndex: 'orgId',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入所属组织！'
      }]
    },
    render: function render(text, record) {
      var org = record.org;

      if (org) {
        return org.name;
      }

      return '';
    },
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(OrgSelect$2, null);
    }
  }, {
    title: '岗位',
    dataIndex: 'jobIds',
    colSize: 1,
    formItemProps: {},
    render: function render(text, record) {
      var _record$jobs;

      return record === null || record === void 0 ? void 0 : (_record$jobs = record.jobs) === null || _record$jobs === void 0 ? void 0 : _record$jobs.map(function (v) {
        return /*#__PURE__*/React.createElement(Tag, null, v.name);
      });
    },
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(JobSelect, null);
    }
  }, {
    title: '性别',
    dataIndex: 'gender',
    valueEnum: {
      1: '男',
      2: '女'
    }
  }, {
    title: '身份证号',
    dataIndex: 'idNumber'
  }, {
    title: '手机号',
    dataIndex: 'phone'
  }, {
    title: '是否启用',
    dataIndex: 'isActive',
    valueType: 'switch',
    render: function render(text, record) {
      var isActive = record.isActive;
      return isActive ? /*#__PURE__*/React.createElement(Tag, {
        color: "success"
      }, "\u542F\u7528") : /*#__PURE__*/React.createElement(Tag, {
        color: "error"
      }, "\u7981\u7528");
    }
  }, {
    title: '照片',
    dataIndex: 'avatarId',
    render: function render(text, record, index) {
      var id = record.id,
          avatarId = record.avatarId;

      if (avatarId) {
        var url = "".concat(apiBaseUrl, "/avatar/").concat(avatarId);
        var img = /*#__PURE__*/React.createElement(Image, {
          src: url
        });
        return /*#__PURE__*/React.createElement(Avatar, {
          src: img
        });
      }

      return /*#__PURE__*/React.createElement(Avatar, {
        icon: /*#__PURE__*/React.createElement(UserOutlined, null)
      });
    },
    renderFormItem: function renderFormItem(schema, config, form) {
      return /*#__PURE__*/React.createElement(AvatarUpload, null);
    }
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '创建人',
    dataIndex: 'createUserName',
    search: false,
    hideInForm: true
  }, {
    title: '更新时间',
    dataIndex: 'updateTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '更新人',
    dataIndex: 'updateUserName',
    search: false,
    hideInForm: true
  }];
  return /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, /*#__PURE__*/React.createElement(MetaTree, {
    keyField: "id",
    titleField: "name",
    onRequest: function onRequest() {
      if (auth) {
        return httpMethod.get("".concat(apiBaseUrl, "/org/user-orgs"));
      }

      return httpMethod.get("".concat(apiBaseUrl, "/org/tree-all"));
    },
    onChecked: setOrgIds,
    checkStrictly: true,
    checkAlone: false,
    checkedKeys: orgIds,
    showToolbar: {
      all: true,
      clear: true,
      total: true
    }
  })), /*#__PURE__*/React.createElement(Col, {
    span: 18
  }, /*#__PURE__*/React.createElement(SimpleCRUDTable, {
    columns: cols,
    defaultSort: {
      code: true
    },
    beforeSubmit: function beforeSubmit(params) {
      var AvatarId = params.avatarId;

      if (typeof AvatarId === 'string' && AvatarId.indexOf('data:') != -1 && AvatarId.indexOf('base64') != -1) {
        params.avatarBase64 = AvatarId;
        delete params.avatarId;
      }

      return {
        result: true,
        message: 'ok'
      };
    },
    reqQuery: function () {
      var _reqQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var pageSize, pageNumber, otherProps, index, _otherProps$Predicate, id;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pageSize = params.pageSize, pageNumber = params.pageNumber, otherProps = _objectWithoutProperties(params, _excluded$s);

                if (!(orgIds.length === 0)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", {
                  success: true,
                  data: []
                });

              case 3:
                for (index = 0; index < orgIds.length; index++) {
                  id = orgIds[index];
                  (_otherProps$Predicate = otherProps.Predicates) === null || _otherProps$Predicate === void 0 ? void 0 : _otherProps$Predicate.push(GetQueryExpression('OrgId', 'Equals', id));
                }

                return _context.abrupt("return", pagingRequest("".concat(apiBaseUrl, "/person/page"), otherProps, pageSize, pageNumber));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function reqQuery(_x) {
        return _reqQuery.apply(this, arguments);
      }

      return reqQuery;
    }(),
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/person/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/person/save"), params);
    }
  })));
};

var css_248z$4 = ".split-row-select-active {\n  background-color: #e6f7ff;\n}\n";
styleInject(css_248z$4);

var _excluded$t = ["onChange", "innerParams", "authAccess"];
var AppContext$w = Contexts.AppContext;

var RoleTable = function RoleTable(props) {
  var onChange = props.onChange,
      innerParams = props.innerParams,
      _props$authAccess = props.authAccess,
      authAccess = _props$authAccess === void 0 ? false : _props$authAccess,
      otherProps = _objectWithoutProperties(props, _excluded$t);

  var _ref = innerParams !== null && innerParams !== void 0 ? innerParams : {},
      id = _ref.id,
      roleName = _ref.roleName,
      description = _ref.description;

  var _useContext = useContext(AppContext$w),
      apiBaseUrl = _useContext.apiBaseUrl;

  var columns = [{
    title: '角色名称',
    dataIndex: 'roleName'
  }];
  return /*#__PURE__*/React.createElement(MetaTable, _objectSpread2({
    columns: columns,
    request: function request(params, sorter, filter) {
      var _roleName$trim;

      var roleName = params.roleName,
          pageSize = params.pageSize,
          current = params.current;
      var dstVal = (_roleName$trim = roleName === null || roleName === void 0 ? void 0 : roleName.trim()) !== null && _roleName$trim !== void 0 ? _roleName$trim : '';
      var queries = {
        Predicates: [GetQueryExpression('roleName', 'Contains', dstVal)],
        Sorts: {
          RoleName: true
        }
      };

      if (authAccess) {
        return pagingRequest("".concat(apiBaseUrl, "/role/access-page"), queries, pageSize, current !== null && current !== void 0 ? current : 1);
      }

      return pagingRequest("".concat(apiBaseUrl, "/role/page"), queries, pageSize, current !== null && current !== void 0 ? current : 1);
    },
    pagination: {
      responsive: true,
      simple: true,
      pageSize: 10,
      position: ['bottomCenter']
    },
    rowClassName: function rowClassName(record) {
      return record.id === id ? css_248z$4['split-row-select-active'] : '';
    },
    search: false,
    options: {
      search: {
        name: 'roleName'
      },
      fullScreen: false,
      reload: true,
      setting: false,
      density: false
    },
    onRow: function onRow(record) {
      return {
        onClick: function onClick() {
          if (onChange && record) {
            onChange(record);
          }
        }
      };
    }
  }, otherProps));
};

var css_248z$5 = ".toolbar-info {\n  padding: 12px 24px;\n  display: flex;\n  flex: 1 1 0%;\n  align-items: center;\n  transition: 0.3 all;\n}\n.toolbar-info-content {\n  flex: 1;\n}\n.toolbar-info-option {\n  min-width: 48px;\n  padding-left: 16px;\n}\n.toolbar-info-option-button {\n  margin-left: 8px;\n}\n";
styleInject(css_248z$5);

var _excluded$u = ["keyField", "titleField", "grantListUrl", "grantSaveUrl", "treeQueryUrl", "innerParams", "checkAlone"];

var TreePermission = function TreePermission(props) {
  var _props$keyField = props.keyField,
      keyField = _props$keyField === void 0 ? 'id' : _props$keyField,
      _props$titleField = props.titleField,
      titleField = _props$titleField === void 0 ? 'name' : _props$titleField,
      grantListUrl = props.grantListUrl,
      grantSaveUrl = props.grantSaveUrl,
      treeQueryUrl = props.treeQueryUrl,
      innerParams = props.innerParams,
      _props$checkAlone = props.checkAlone,
      checkAlone = _props$checkAlone === void 0 ? false : _props$checkAlone,
      otherProps = _objectWithoutProperties(props, _excluded$u);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      roleId = _useState2[0],
      setRoleId = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      checkedKeys = _useState4[0],
      setCheckedKeys = _useState4[1];

  useEffect(function () {
    var _ref = innerParams !== null && innerParams !== void 0 ? innerParams : {},
        id = _ref.id,
        roleName = _ref.roleName,
        description = _ref.description;

    setRoleId(id);
  }, [innerParams]);
  useEffect(function () {
    if (roleId) {
      setLoading(true);
      httpMethod.get("".concat(grantListUrl, "?roleId=").concat(roleId)).then(function (keys) {
        setCheckedKeys(keys);
      }).finally(function () {
        setLoading(false);
      });
    }
  }, [roleId]); // const { apiBaseUrl } = useContext(AppContext);

  var handleReqMenu = function handleReqMenu() {
    return httpMethod.get(treeQueryUrl);
  }; // 勾选后


  var handleChecked = function handleChecked(keys) {
    setCheckedKeys(keys);
  }; // 清空选择


  var handleClear = function handleClear() {
    setCheckedKeys([]);
  }; // 保存


  var handleSave = function handleSave() {
    setLoading(true);
    httpMethod.post("".concat(grantSaveUrl, "?roleId=").concat(roleId), checkedKeys).then(function () {
      message.info('保存完毕');
    }).finally(function () {
      setLoading(false);
    });
  };

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var className = 'toolbar-info';
  return /*#__PURE__*/React.createElement(Spin, {
    spinning: loading
  }, /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    className: ''.concat(className, '-content')
  }, checkedKeys && checkedKeys.length > 0 ? "\u9009\u62E9\u4E86 ".concat(checkedKeys.length, " \u9879") : "\u672A\u9009\u62E9", /*#__PURE__*/React.createElement(Button, {
    type: "link",
    onClick: handleClear
  }, "\u6E05\u7A7A\u9009\u62E9")), /*#__PURE__*/React.createElement("div", {
    className: ''.concat(className, '-option')
  }, /*#__PURE__*/React.createElement(Button, {
    className: ''.concat(className, '-option-button'),
    type: "primary",
    ghost: true,
    onClick: handleSave
  }, "\u4FDD\u5B58"))), /*#__PURE__*/React.createElement(MetaTree, _objectSpread2({
    keyField: keyField,
    titleField: titleField,
    onRequest: handleReqMenu,
    onChecked: handleChecked,
    checkStrictly: true,
    checkedKeys: checkedKeys,
    checkAlone: checkAlone
  }, otherProps)));
};

var PermissionPage$1 = function PermissionPage(props) {
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      role = _useState2[0],
      setRoleParams = _useState2[1];

  var _useContext = useContext(Contexts.AppContext),
      apiBaseUrl = _useContext.apiBaseUrl,
      _useContext$extraPerm = _useContext.extraPermissionSetting,
      extraPermissionSetting = _useContext$extraPerm === void 0 ? [] : _useContext$extraPerm;

  var _props$authAccess = props.authAccess,
      authAccess = _props$authAccess === void 0 ? false : _props$authAccess;
  var subPage = /*#__PURE__*/React.createElement(RoleTable, {
    onChange: function onChange(r) {
      return setRoleParams(r);
    },
    innerParams: role,
    authAccess: authAccess
  });
  var mainPages = [{
    key: 'menu',
    tab: '菜单授权',
    page: /*#__PURE__*/React.createElement(TreePermission, {
      innerParams: role,
      treeQueryUrl: "".concat(apiBaseUrl, "/menu/tree-all"),
      grantSaveUrl: "".concat(apiBaseUrl, "/menu-permission/role-save"),
      grantListUrl: "".concat(apiBaseUrl, "/menu-permission/role-granted"),
      checkAlone: true
    })
  }, {
    key: 'org',
    tab: '组织授权',
    page: /*#__PURE__*/React.createElement(TreePermission, {
      innerParams: role,
      treeQueryUrl: "".concat(apiBaseUrl, "/org/tree-all"),
      grantSaveUrl: "".concat(apiBaseUrl, "/org-permission/role-save"),
      grantListUrl: "".concat(apiBaseUrl, "/org-permission/role-granted"),
      checkAlone: true
    })
  }, {
    key: 'folder',
    tab: '文档授权',
    page: /*#__PURE__*/React.createElement(TreePermission, {
      innerParams: role,
      treeQueryUrl: "".concat(apiBaseUrl, "/folder/tree-all"),
      grantSaveUrl: "".concat(apiBaseUrl, "/folder-permission/role-save"),
      grantListUrl: "".concat(apiBaseUrl, "/folder-permission/role-granted"),
      checkAlone: true
    })
  }];
  extraPermissionSetting && extraPermissionSetting.forEach(function (p) {
    var name = p.name,
        type = p.type,
        keyField = p.keyField,
        titleField = p.titleField,
        grantListUrl = p.grantListUrl,
        grantSaveUrl = p.grantSaveUrl,
        treeQueryUrl = p.treeQueryUrl;

    if (type === 'List') {
      console.warn('未实现');
      return;
    }

    var tabpage = {
      key: name,
      tab: name,
      page: /*#__PURE__*/React.createElement(TreePermission, {
        keyField: keyField,
        titleField: titleField,
        innerParams: role,
        grantListUrl: grantListUrl,
        grantSaveUrl: grantSaveUrl,
        treeQueryUrl: treeQueryUrl
      })
    };
    mainPages.push(tabpage);
  });
  return /*#__PURE__*/React.createElement(SplitPage, {
    style: {
      height: '100%'
    },
    subPage: subPage,
    mainVisible: role != undefined,
    mainTitle: "\u8BBE\u7F6E\u89D2\u8272\uFF1A".concat(role === null || role === void 0 ? void 0 : role.roleName, " ").concat(role === null || role === void 0 ? void 0 : role.description),
    mainPage: mainPages
  });
};

var _excluded$v = ["pageSize", "pageNumber"];
var AppContext$x = Contexts.AppContext;

var TenantClaimPage$2 = function TenantClaimPage(props) {
  var tenantId = props.tenantId,
      tenantName = props.tenantName,
      tenantDescription = props.tenantDescription;

  var _useContext = useContext(AppContext$x),
      apiBaseUrl = _useContext.apiBaseUrl;

  var modelName = 'tenant-claim';
  var cols = [{
    title: '编号',
    dataIndex: 'type',
    sorter: true,
    comparison: 'Contains',
    formItemProps: {
      rules: [{
        required: true
      }]
    }
  }, {
    title: '值',
    dataIndex: 'value',
    comparison: 'Contains',
    formItemProps: {
      rules: [{
        required: true
      }]
    }
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '创建人',
    dataIndex: 'createUserName',
    search: false,
    hideInForm: true
  }, {
    title: '更新时间',
    dataIndex: 'updateTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '更新人',
    dataIndex: 'updateUserName',
    search: false,
    hideInForm: true
  }];
  return /*#__PURE__*/React.createElement(SimpleCRUDTable, {
    columns: cols,
    beforeSubmit: function beforeSubmit(params) {
      if (tenantId) {
        params.tenantId = tenantId;
      }

      return {
        result: true
      };
    },
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          data = _objectWithoutProperties(params, _excluded$v);

      if (tenantId) {
        var _data$Predicates;

        (_data$Predicates = data.Predicates) === null || _data$Predicates === void 0 ? void 0 : _data$Predicates.push(GetQueryExpression('TenantId', 'Equals', tenantId));
      }

      return pagingRequest("".concat(apiBaseUrl, "/").concat(modelName, "/page"), data, pageSize, pageNumber);
    },
    defaultSort: {
      type: true
    },
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/").concat(modelName, "/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/").concat(modelName, "/save"), params);
    }
  });
};

var _excluded$w = ["pageSize", "pageNumber"];
var AppContext$y = Contexts.AppContext;
var menuStore$4 = Stores.menuStore;

var TenantPage = function TenantPage(props) {
  var _useContext = useContext(AppContext$y),
      apiBaseUrl = _useContext.apiBaseUrl;

  var addTab = menuStore$4.addTab;
  var cols = [{
    title: '名称',
    dataIndex: 'tenantName',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入租户名称！'
      }]
    }
  }, {
    title: '描述',
    dataIndex: 'description'
  }, {
    title: '启用状态',
    dataIndex: 'isActive',
    search: false,
    valueType: 'switch',
    formItemProps: {},
    render: function render(text, record) {
      var isActive = record.isActive;
      return isActive ? /*#__PURE__*/React.createElement(Tag, {
        color: "success"
      }, "\u542F\u7528") : /*#__PURE__*/React.createElement(Tag, {
        color: "error"
      }, "\u7981\u7528");
    }
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '创建人',
    dataIndex: 'createUserName',
    search: false,
    hideInForm: true
  }, {
    title: '更新时间',
    dataIndex: 'updateTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '更新人',
    dataIndex: 'updateUserName',
    search: false,
    hideInForm: true
  }];
  return /*#__PURE__*/React.createElement(SimpleCRUDTable, {
    columns: cols,
    defaultSort: {
      tenantName: true
    },
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          otherProps = _objectWithoutProperties(params, _excluded$w);

      return pagingRequest("".concat(apiBaseUrl, "/tenant/page"), otherProps, pageSize, pageNumber);
    },
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/tenant/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/tenant/save"), params);
    },
    handles: [{
      name: '扩展属性',
      onClick: function onClick(record) {
        var id = record.id,
            tenantName = record.tenantName,
            description = record.description;
        addTab({
          id: "tenant_claim_".concat(id),
          name: "".concat(tenantName, " \u6269\u5C55\u5C5E\u6027"),
          url: 'Core/TenantClaim',
          urlType: 1,
          params: '',
          props: {
            tenantId: id,
            tenantName: tenantName,
            tenantDescription: description
          }
        });
      }
    }, {
      name: '所属角色',
      onClick: function onClick(record) {
        var id = record.id,
            tenantName = record.tenantName,
            description = record.description;
        addTab({
          id: "tenant_role_".concat(id),
          name: "".concat(tenantName, " \u6240\u5C5E\u89D2\u8272"),
          url: 'Core/TenantRole',
          urlType: 1,
          params: '',
          props: {
            tenantId: id,
            tenantName: tenantName,
            tenantDescription: description
          }
        });
      }
    }]
  });
};

var _excluded$x = ["pageSize", "pageNumber"];
var AppContext$z = Contexts.AppContext;
var RoleTableSelect = Ret$9;

var TenantRolePage = function TenantRolePage(props) {
  var tenantId = props.tenantId,
      tenantName = props.tenantName,
      tenantDescription = props.tenantDescription;

  var _useContext = useContext(AppContext$z),
      apiBaseUrl = _useContext.apiBaseUrl;

  var modelName = 'tenant-role';
  var cols = [{
    title: '编号',
    dataIndex: 'roleId',
    search: false,
    hideInTable: true,
    formItemProps: {
      rules: [{
        required: true
      }]
    },
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(RoleTableSelect, null);
    }
  }, {
    title: '角色名称',
    dataIndex: 'roleName',
    comparison: 'Contains',
    hideInForm: true
  }, {
    title: '角色描述',
    dataIndex: 'roleDescription',
    comparison: 'Contains',
    hideInForm: true
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '创建人',
    dataIndex: 'createUserName',
    search: false,
    hideInForm: true
  }, {
    title: '更新时间',
    dataIndex: 'updateTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '更新人',
    dataIndex: 'updateUserName',
    search: false,
    hideInForm: true
  }];
  return /*#__PURE__*/React.createElement(SimpleCRUDTable, {
    columns: cols,
    beforeSubmit: function beforeSubmit(params) {
      if (tenantId) {
        params.tenantId = tenantId;
      }

      return {
        result: true
      };
    },
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          data = _objectWithoutProperties(params, _excluded$x);

      if (tenantId) {
        var _data$Predicates;

        (_data$Predicates = data.Predicates) === null || _data$Predicates === void 0 ? void 0 : _data$Predicates.push(GetQueryExpression('TenantId', 'Equals', tenantId));
      }

      return pagingRequest("".concat(apiBaseUrl, "/").concat(modelName, "/page"), data, pageSize, pageNumber);
    },
    defaultSort: {
      'Role.RoleName': true
    },
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/").concat(modelName, "/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/").concat(modelName, "/save"), params);
    }
  });
};

var _excluded$y = ["pageSize", "pageNumber"];

var Ret$e = function Ret(props) {
  var _React$useContext = React.useContext(Contexts.AppContext),
      apiBaseUrl = _React$useContext.apiBaseUrl;

  return /*#__PURE__*/React.createElement(TableSelect, _objectSpread2({
    columns: [{
      title: '自定义编码',
      dataIndex: 'code',
      comparison: 'Contains'
    }, {
      title: '自定义名称',
      dataIndex: 'name',
      comparison: 'Contains'
    }, {
      title: '类型',
      dataIndex: 'udcTypeId',
      render: function render(text, record) {
        var _record$udcType;

        return record === null || record === void 0 ? void 0 : (_record$udcType = record.udcType) === null || _record$udcType === void 0 ? void 0 : _record$udcType.name;
      },
      renderFormItem: function renderFormItem() {
        return /*#__PURE__*/React.createElement(Ret$d, null);
      }
    }],
    reqQuery: function () {
      var _reqQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var pageSize, pageNumber, otherProps;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pageSize = params.pageSize, pageNumber = params.pageNumber, otherProps = _objectWithoutProperties(params, _excluded$y);
                return _context.abrupt("return", pagingRequest("".concat(apiBaseUrl, "/udc/page"), otherProps, pageSize, pageNumber));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function reqQuery(_x) {
        return _reqQuery.apply(this, arguments);
      }

      return reqQuery;
    }(),
    defaultSort: {
      'UdcType.Code': true,
      Code: true
    },
    width: "50vw",
    showValue: ['code', 'name']
  }, props));
};

var _excluded$z = ["pageSize", "pageNumber"];
var AppContext$A = Contexts.AppContext;

var UdcPage$1 = function UdcPage(props) {
  var udcId = props.udcId;

  var _useContext = useContext(AppContext$A),
      apiBaseUrl = _useContext.apiBaseUrl;

  var cols = [{
    title: '自定义编码',
    dataIndex: 'childrenId',
    search: false,
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入自定义编码'
      }]
    },
    render: function render(text, record) {
      return record === null || record === void 0 ? void 0 : record.childrenCode;
    },
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(Ret$e, null);
    }
  }, {
    title: '自定义名称',
    dataIndex: 'childrenName',
    search: false,
    hideInForm: true
  }, {
    title: '自定义码类型',
    dataIndex: 'childrenTypeName',
    hideInForm: true
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    search: false,
    hideInForm: true
  }, {
    title: '创建人',
    dataIndex: 'createUserName',
    search: false,
    hideInForm: true
  }, {
    title: '更新时间',
    dataIndex: 'updateTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '更新人',
    dataIndex: 'updateUserName',
    search: false,
    hideInForm: true
  }];
  return /*#__PURE__*/React.createElement(SimpleCRUDTable, {
    columns: cols,
    search: false,
    beforeSubmit: function beforeSubmit(params) {
      if (udcId) {
        params.parentId = udcId;
      }

      return {
        result: true
      };
    },
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          data = _objectWithoutProperties(params, _excluded$z);

      if (udcId) {
        var _data$Predicates;

        (_data$Predicates = data.Predicates) === null || _data$Predicates === void 0 ? void 0 : _data$Predicates.push(GetQueryExpression('ParentId', 'Equals', udcId));
      }

      return pagingRequest("".concat(apiBaseUrl, "/udc-rel/page"), data, pageSize, pageNumber);
    },
    defaultSort: {
      'ChildrenUdc.UdcType.Code': true,
      'ChildrenUdc.Code': true
    },
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/udc-rel/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/udc-rel/save"), params);
    }
  });
};

var _excluded$A = ["pageSize", "pageNumber"];
var menuStore$5 = Stores.menuStore;
var AppContext$B = Contexts.AppContext;

var UdcPage$2 = function UdcPage(props) {
  var udcTypeId = props.udcTypeId;

  var _useContext = useContext(AppContext$B),
      apiBaseUrl = _useContext.apiBaseUrl;

  var actionRef = useRef();
  var addTab = menuStore$5.addTab;
  var cols = [{
    title: '自定义编码',
    dataIndex: 'code',
    sorter: true,
    comparison: 'Contains',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入自定义编码'
      }]
    }
  }, {
    title: '自定义名称',
    dataIndex: 'name',
    comparison: 'Contains',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入自定义名称'
      }]
    }
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '创建人',
    dataIndex: 'createUserName',
    search: false,
    hideInForm: true
  }, {
    title: '更新时间',
    dataIndex: 'updateTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '更新人',
    dataIndex: 'updateUserName',
    search: false,
    hideInForm: true
  }];
  var uploadProps = {
    accept: '.xls,.xlsx',
    showUploadList: false,
    name: 'file',
    action: "".concat(apiBaseUrl, "/udc/import?udcTypeId=").concat(udcTypeId),
    onChange: function onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === 'done') {
        message.success("".concat(info.file.name, " \u5BFC\u5165\u6210\u529F\uFF01"));
      } else if (info.file.status === 'error') {
        message.error("".concat(info.file.name, " \u5BFC\u5165\u5931\u8D25\uFF01"));
      }

      if (actionRef.current && actionRef.current.reload) {
        actionRef.current.reload();
      }
    }
  };
  return /*#__PURE__*/React.createElement(SimpleCRUDTable, {
    actionRef: actionRef,
    columns: cols,
    beforeSubmit: function beforeSubmit(params) {
      if (udcTypeId) {
        params.udcTypeId = udcTypeId;
      }

      return {
        result: true
      };
    },
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          data = _objectWithoutProperties(params, _excluded$A);

      if (udcTypeId) {
        var _data$Predicates;

        (_data$Predicates = data.Predicates) === null || _data$Predicates === void 0 ? void 0 : _data$Predicates.push(GetQueryExpression('UdcTypeId', 'Equals', udcTypeId));
      }

      return pagingRequest("".concat(apiBaseUrl, "/udc/page"), data, pageSize, pageNumber);
    },
    defaultSort: {
      'UdcType.Code': true,
      Code: true
    },
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/udc/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/udc/save"), params);
    },
    extraToolBarButtons: [/*#__PURE__*/React.createElement(Upload, _objectSpread2({}, uploadProps), /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(ImportOutlined, null)
    }, "\u6279\u91CF\u5BFC\u5165")), /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(FileExcelFilled, null),
      onClick: function onClick() {
        window.open("".concat(apiBaseUrl, "/udc/export?udcTypeId=").concat(udcTypeId));
      }
    }, "\u6570\u636E\u5BFC\u51FA")],
    handles: [{
      name: '所属字典',
      onClick: function onClick(record) {
        var id = record.id,
            code = record.code,
            name = record.name;
        addTab({
          id: "udc_child_".concat(id),
          name: "".concat(code, "-").concat(name, " \u6240\u5C5E\u5B57\u5178"),
          url: 'Core/Udc/Children',
          urlType: 1,
          props: {
            udcId: id
          },
          params: ''
        });
      }
    }]
  });
};

var _excluded$B = ["pageSize", "pageNumber"];
var AppContext$C = Contexts.AppContext;
var menuStore$6 = Stores.menuStore;

var UdcTypePage = function UdcTypePage(props) {
  var _useContext = useContext(AppContext$C),
      apiBaseUrl = _useContext.apiBaseUrl;

  var cols = [{
    title: '类型编码',
    dataIndex: 'code',
    sorter: true,
    comparison: 'Contains',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入自定义类型代码'
      }]
    }
  }, {
    title: '类型名称',
    dataIndex: 'name',
    comparison: 'Contains',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入自定义类型名称'
      }]
    }
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '创建人',
    dataIndex: 'createUserName',
    search: false,
    hideInForm: true
  }, {
    title: '更新时间',
    dataIndex: 'updateTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '更新人',
    dataIndex: 'updateUserName',
    search: false,
    hideInForm: true
  }];
  var uploadProps = {
    accept: '.xls,.xlsx',
    showUploadList: false,
    name: 'file',
    action: "".concat(apiBaseUrl, "/udc-rel/import-rel"),
    onChange: function onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === 'done') {
        message.success("".concat(info.file.name, " \u5BFC\u5165\u6210\u529F\uFF01"));
      } else if (info.file.status === 'error') {
        message.error("".concat(info.file.name, " \u5BFC\u5165\u5931\u8D25\uFF01"));
      }
    }
  };
  return /*#__PURE__*/React.createElement(SimpleCRUDTable, {
    columns: cols,
    defaultSort: {
      code: true
    },
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          data = _objectWithoutProperties(params, _excluded$B);

      return pagingRequest("".concat(apiBaseUrl, "/udc-type/page"), data, pageSize, pageNumber);
    },
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/udc-type/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/udc-type/save"), params);
    },
    extraToolBarButtons: [/*#__PURE__*/React.createElement(Upload, _objectSpread2({}, uploadProps), /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(ImportOutlined, null)
    }, "\u4ECE\u5C5E\u5173\u7CFB\u5BFC\u5165")), /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(DownloadOutlined, null),
      onClick: function onClick() {
        window.open("".concat(apiBaseUrl, "/udc-rel/import-rel-template"));
      }
    }, "\u4ECE\u5C5E\u5173\u7CFB\u6A21\u7248")],
    handles: [{
      name: '字典维护',
      onClick: function onClick(record) {
        var id = record.id,
            code = record.code,
            name = record.name;
        var addTab = menuStore$6.addTab;
        addTab({
          id: "udc_type_".concat(id),
          name: "".concat(code, "-").concat(name, "-\u5B57\u5178"),
          url: 'Core/Udc',
          urlType: 1,
          params: '',
          props: {
            udcTypeId: id
          }
        });
      }
    }]
  });
};

var _excluded$C = ["pageSize", "pageNumber"];
var AppContext$D = Contexts.AppContext;

var RolePage = function RolePage(props) {
  var _useContext = useContext(AppContext$D),
      apiBaseUrl = _useContext.apiBaseUrl;

  var cols = [{
    title: '角色名',
    dataIndex: 'roleName',
    comparison: 'Contains',
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入角色名！'
      }]
    }
  }, {
    title: '角色描述',
    dataIndex: 'description'
  }, {
    title: '启用状态',
    dataIndex: 'isActive',
    search: false,
    valueType: 'switch',
    formItemProps: {},
    render: function render(text, record) {
      var isActive = record.isActive;
      return isActive ? /*#__PURE__*/React.createElement(Tag, {
        color: "success"
      }, "\u542F\u7528") : /*#__PURE__*/React.createElement(Tag, {
        color: "error"
      }, "\u7981\u7528");
    }
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '创建人',
    dataIndex: 'createUserName',
    search: false,
    hideInForm: true
  }, {
    title: '更新时间',
    dataIndex: 'updateTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '更新人',
    dataIndex: 'updateUserName',
    search: false,
    hideInForm: true
  }];
  return /*#__PURE__*/React.createElement(SimpleCRUDTable, {
    columns: cols,
    defaultSort: {
      roleName: true
    },
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          otherProps = _objectWithoutProperties(params, _excluded$C);

      return pagingRequest("".concat(apiBaseUrl, "/role/page"), otherProps, pageSize, pageNumber);
    },
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/role/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/role/save"), params);
    }
  });
};

var AppContext$E = Contexts.AppContext;
var FormItem$3 = Form.Item;
var formLayout$3 = {
  labelCol: {
    span: 7
  },
  wrapperCol: {
    span: 13
  }
};

var PassresetForm = function PassresetForm(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      saving = _useState2[0],
      setSaving = _useState2[1];

  var _useState3 = useState(props.values || {}),
      _useState4 = _slicedToArray(_useState3, 2),
      formVals = _useState4[0],
      setFormVals = _useState4[1];

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var handleSubmit = props.onSubmit,
      handleModalVisible = props.onCancel,
      modalVisible = props.modalVisible,
      verifyPwd = props.verifyPwd;

  var _useContext = useContext(AppContext$E),
      apiBaseUrl = _useContext.apiBaseUrl;

  var handleOk = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var validFields, payload;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return form.validateFields();

            case 2:
              validFields = _context.sent;
              console.log('handleOk...', validFields);

              if (validFields) {
                payload = {
                  UserId: formVals.id,
                  NewPass: validFields.password
                };
                setSaving(true);
                resetPass(payload).then(function (value) {
                  if (handleSubmit) handleSubmit();
                }).finally(function () {
                  setSaving(false);
                });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleOk() {
      return _ref.apply(this, arguments);
    };
  }();

  var resetPass = function resetPass(payload) {
    return httpMethod.post("".concat(apiBaseUrl, "/user/reset-pass"), payload);
  };

  var renderContent = function renderContent() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormItem$3, {
      name: "userName",
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u767B\u5F55\u8D26\u53F7"
    }, /*#__PURE__*/React.createElement(Input, {
      readOnly: true,
      bordered: false
    })), /*#__PURE__*/React.createElement(FormItem$3, {
      name: "personName",
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u59D3\u540D"
    }, /*#__PURE__*/React.createElement(Input, {
      readOnly: true,
      bordered: false
    })), /*#__PURE__*/React.createElement(FormItem$3, {
      name: "password",
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u5BC6\u7801",
      rules: [{
        required: true,
        message: '请输入新密码！!'
      }, verifyPwd && {
        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,30}$/,
        message: '密码长度8到30位必须包含大小写字母，数字，特殊字符'
      }]
    }, /*#__PURE__*/React.createElement(Input.Password, {
      placeholder: "\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801\uFF01"
    })), /*#__PURE__*/React.createElement(FormItem$3, {
      name: "passconfirm",
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      },
      label: "\u786E\u8BA4\u5BC6\u7801",
      rules: [{
        required: true,
        message: '请输入确认密码！'
      }, function (_ref2) {
        var getFieldValue = _ref2.getFieldValue;
        return {
          validator: function validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }

            return Promise.reject(new Error('确认密码与初始密码不一致'));
          }
        };
      }]
    }, /*#__PURE__*/React.createElement(Input.Password, {
      placeholder: "\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801\uFF01"
    })));
  };

  var renderFooter = function renderFooter() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      loading: saving,
      type: "primary",
      onClick: function onClick() {
        return handleOk();
      }
    }, "\u786E\u8BA4"), /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return handleModalVisible(false);
      }
    }, "\u53D6\u6D88"));
  };

  return /*#__PURE__*/React.createElement(Modal, {
    width: 640,
    bodyStyle: {
      padding: '32px 40px 48px'
    },
    destroyOnClose: true,
    title: "\u7528\u6237\u5BC6\u7801\u91CD\u7F6E",
    visible: modalVisible,
    footer: renderFooter(),
    onCancel: function onCancel() {
      return handleModalVisible(false, formVals);
    },
    afterClose: function afterClose() {
      return handleModalVisible();
    }
  }, /*#__PURE__*/React.createElement(Form, _objectSpread2(_objectSpread2({}, formLayout$3), {}, {
    form: form,
    initialValues: formVals
  }), renderContent()));
};

var _excluded$D = ["pageSize", "pageNumber"];
var RoleAccessSelect = Ret$8,
    PersonSelect$1 = Ret$6,
    TenantAccessSelect = Ret$a;
var AppContext$F = Contexts.AppContext;

var UserPage = function UserPage(props) {
  var _props$verifyPwd = props.verifyPwd,
      verifyPwd = _props$verifyPwd === void 0 ? false : _props$verifyPwd;

  var _useContext = useContext(AppContext$F),
      apiBaseUrl = _useContext.apiBaseUrl;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      passresetVisible = _useState2[0],
      handlePassresetVisible = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      passresetForm = _useState4[0],
      setPassresetForm = _useState4[1];

  var cols = [{
    title: '登录账号',
    dataIndex: 'userName',
    comparison: 'Contains',
    sorter: true,
    colSize: 1,
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入登录账号！'
      }]
    }
  }, {
    title: '姓名',
    dataIndex: 'personName',
    comparison: 'Contains',
    colSize: 1,
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入姓名！'
      }]
    }
  }, {
    title: '密码',
    dataIndex: 'password',
    valueType: 'password',
    hideInTable: true,
    hideInSearch: true,
    hideInEdit: true,
    colSize: 1,
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入初始密码！'
      }]
    }
  }, {
    title: '确认密码',
    dataIndex: 'passconfirm',
    valueType: 'password',
    hideInTable: true,
    hideInSearch: true,
    hideInEdit: true,
    colSize: 1,
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入确认密码！'
      }, function (_ref) {
        var getFieldValue = _ref.getFieldValue;
        return {
          validator: function validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }

            return Promise.reject(new Error('确认密码与初始密码不一致'));
          }
        };
      }]
    }
  }, {
    title: '租户管理员',
    dataIndex: 'isTenantAdmin',
    valueType: 'switch',
    hideInTable: true,
    hideInSearch: true,
    colSize: 1,
    render: function render(text, record) {
      var isTenantAdmin = record.isTenantAdmin;
      return isTenantAdmin ? /*#__PURE__*/React.createElement(Tag, {
        color: "success"
      }, "\u542F\u7528") : /*#__PURE__*/React.createElement(Tag, {
        color: "error"
      }, "\u7981\u7528");
    }
  }, {
    title: '所属租户',
    dataIndex: '_TenantId',
    colSize: 1,
    formItemProps: {},
    render: function render(text, record) {
      var _record$tenant;

      return record === null || record === void 0 ? void 0 : (_record$tenant = record.tenant) === null || _record$tenant === void 0 ? void 0 : _record$tenant.tenantName;
    },
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(TenantAccessSelect, null);
    }
  }, {
    title: '授权租户',
    dataIndex: 'tenantAccessIds',
    colSize: 1,
    formItemProps: {},
    hideInSearch: true,
    hideInTable: true,
    render: function render(text, record) {
      var _record$tenantAccess;

      return record === null || record === void 0 ? void 0 : (_record$tenantAccess = record.tenantAccess) === null || _record$tenantAccess === void 0 ? void 0 : _record$tenantAccess.map(function (v) {
        return /*#__PURE__*/React.createElement(Tag, null, v.tenantName);
      });
    },
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(TenantAccessSelect, {
        mode: "multiple"
      });
    }
  }, {
    title: '邮箱',
    dataIndex: 'email',
    comparison: 'Contains',
    hideInTable: true,
    colSize: 1,
    formItemProps: {
      rules: [{
        required: true,
        message: '请输入注册邮箱！'
      }, {
        type: 'email',
        message: '邮箱地址格式错误！'
      }]
    }
  }, {
    title: '角色',
    dataIndex: 'roleIds',
    colSize: 1,
    formItemProps: {},
    search: false,
    render: function render(text, record) {
      var _record$roles;

      return record === null || record === void 0 ? void 0 : (_record$roles = record.roles) === null || _record$roles === void 0 ? void 0 : _record$roles.map(function (v) {
        return /*#__PURE__*/React.createElement(Tag, null, v.roleName);
      });
    },
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(RoleAccessSelect, {
        mode: "multiple"
      });
    }
  }, {
    title: '关联人员',
    dataIndex: 'personId',
    search: false,
    hideInTable: true,
    renderFormItem: function renderFormItem() {
      return /*#__PURE__*/React.createElement(PersonSelect$1, null);
    }
  }, {
    title: '身份证号',
    dataIndex: 'idNumber',
    comparison: 'Contains',
    hideInTable: true,
    colSize: 1,
    formItemProps: {}
  }, {
    title: '手机号码',
    dataIndex: 'phone',
    hideInTable: true,
    comparison: 'Contains',
    colSize: 1,
    formItemProps: {}
  }, {
    title: '头像',
    dataIndex: 'avatarId',
    hideInSearch: true,
    colSize: 1,
    render: function render(text, record, index) {
      var id = record.id,
          avatarId = record.avatarId;

      if (avatarId) {
        var url = "".concat(apiBaseUrl, "/avatar/").concat(avatarId);
        var img = /*#__PURE__*/React.createElement(Image, {
          src: url
        });
        return /*#__PURE__*/React.createElement(Avatar$1, {
          src: img
        });
      }

      return /*#__PURE__*/React.createElement(Avatar$1, {
        icon: /*#__PURE__*/React.createElement(UserOutlined, null)
      });
    },
    renderFormItem: function renderFormItem(schema, config, form) {
      console.log('render:', form);
      return /*#__PURE__*/React.createElement(AvatarUpload, null);
    }
  }, {
    title: '是否启用',
    dataIndex: 'isActive',
    search: false,
    valueType: 'switch',
    hideInTable: true,
    colSize: 1,
    render: function render(text, record) {
      var isActive = record.isActive;
      return isActive ? /*#__PURE__*/React.createElement(Tag, {
        color: "success"
      }, "\u542F\u7528") : /*#__PURE__*/React.createElement(Tag, {
        color: "error"
      }, "\u7981\u7528");
    }
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '创建人',
    dataIndex: 'createUserName',
    search: false,
    hideInForm: true
  }, {
    title: '更新时间',
    dataIndex: 'updateTime',
    sorter: true,
    search: false,
    hideInForm: true
  }, {
    title: '更新人',
    dataIndex: 'updateUserName',
    search: false,
    hideInForm: true
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SimpleCRUDTable, {
    columns: cols,
    defaultSort: {
      UserName: true
    },
    beforeSubmit: function beforeSubmit(params) {
      var AvatarId = params.avatarId;

      if (typeof AvatarId === 'string' && AvatarId.indexOf('data:') != -1 && AvatarId.indexOf('base64') != -1) {
        params.avatarBase64 = AvatarId;
        delete params.avatarId;
      }

      return {
        result: true,
        message: 'ok'
      };
    },
    reqQuery: function reqQuery(params) {
      var pageSize = params.pageSize,
          pageNumber = params.pageNumber,
          otherProps = _objectWithoutProperties(params, _excluded$D);

      return pagingRequest("".concat(apiBaseUrl, "/user/page"), otherProps, pageSize, pageNumber);
    },
    reqDels: function reqDels(params) {
      return httpMethod.delete("".concat(apiBaseUrl, "/user/range"), params);
    },
    reqSave: function reqSave(params) {
      return httpMethod.post("".concat(apiBaseUrl, "/user/save"), params);
    },
    handles: [{
      name: '密码重置',
      onClick: function onClick(record) {
        setPassresetForm(record);
        handlePassresetVisible(true);
      }
    }]
  }), passresetVisible ? /*#__PURE__*/React.createElement(PassresetForm, {
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                handlePassresetVisible(false);
                setPassresetForm({});

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }(),
    onCancel: function onCancel() {
      handlePassresetVisible(false);
      setPassresetForm({});
    },
    verifyPwd: verifyPwd,
    modalVisible: passresetVisible,
    values: passresetForm
  }) : null);
};

var CorePages = {
  'Core/Menu': MenuPage,
  'Core/Org': OrgPage,
  'Core/OrgClaim': TenantClaimPage,
  'Core/OrgType': OrgTypePage,
  'Core/OrgTypeClaim': TenantClaimPage$1,
  'Core/User': UserPage,
  'Core/UdcType': UdcTypePage,
  'Core/Udc': UdcPage$2,
  'Core/Udc/Children': UdcPage$1,
  'Core/Role': RolePage,
  'Core/Person': PersonPage$1,
  'Core/RolePermission': PermissionPage$1,
  'Core/ApiLog': ApiLogPage,
  'Core/Job': PersonPage,
  'Core/PersonJob': UdcPage,
  'Core/Folder': FolderPage,
  'Core/File': PermissionPage,
  'Core/Tenant': TenantPage,
  'Core/TenantClaim': TenantClaimPage$2,
  'Core/TenantRole': TenantRolePage
};

var Pages = _objectSpread2({}, CorePages);

export { Contexts, Pages, index$3 as Select, index as Split, Stores, index$1 as Table, index$4 as Tree, YiPlatLayout, httpMethod, pagingRequest };

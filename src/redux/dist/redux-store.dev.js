"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _messageReducer = _interopRequireDefault(require("./messageReducer"));

var _profileReducer = _interopRequireDefault(require("./profileReducer"));

var _usersReducer = _interopRequireDefault(require("./usersReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = (0, _redux.combineReducers)({
  profilePage: _profileReducer["default"],
  messagesPage: _messageReducer["default"],
  usersPage: _usersReducer["default"],
  auth: authReducer
});
var store = (0, _redux.createStore)(reducers);
window.store = store;
var _default = store;
exports["default"] = _default;
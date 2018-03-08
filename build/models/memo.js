'use strict';

Object.defineProperty(exports, "__esModule", {
<<<<<<< HEAD
  value: true
=======
    value: true
>>>>>>> master
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

<<<<<<< HEAD
var Schema = _mongoose2.default.Schema; // Backend 메모 작성, 수정, 삭제, 읽기 구현하기


var Memo = new Schema({
  writer: String,
  contents: String,
  starred: [String],
  date: {
    created: { type: Date, default: Date.now },
    edited: { type: Date, default: Date.now }
  },
  is_edited: { type: Boolean, default: false }
=======
var Schema = _mongoose2.default.Schema;

var Memo = new Schema({
    writer: String,
    contents: String,
    starred: [String],
    date: {
        created: { type: Date, default: Date.now },
        edited: { type: Date, default: Date.now }
    },
    is_edited: { type: Boolean, default: false }
>>>>>>> master
});

exports.default = _mongoose2.default.model('memo', Memo);
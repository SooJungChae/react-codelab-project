<<<<<<< HEAD
// Backend 메모 작성, 수정, 삭제, 읽기 구현하기
=======
>>>>>>> master
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Memo = new Schema({
<<<<<<< HEAD
  writer: String,
  contents: String,
  starred: [String],
  date: {
    created: {type: Date, default: Date.now},
    edited: {type: Date, default: Date.now}
  },
  is_edited: {type: Boolean, default: false}
=======
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

export default mongoose.model('memo', Memo);

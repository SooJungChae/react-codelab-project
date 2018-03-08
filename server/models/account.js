<<<<<<< HEAD
// backend. 계정인증 구현하기
=======
>>>>>>> master
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const Account = new Schema({
<<<<<<< HEAD
  username: String,
  password: String,
  created: { type: Date, default: Date.now }
});

Account.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, 8);
};

Account.methods.validateHash = function(password) {
  return bcrypt.compareSync(password, this.password);
}
=======
    username: String,
    password: String,
    created: { type: Date, default: Date.now }
});

// generates hash
Account.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, 8);
};

// compares the password
Account.methods.validateHash = function(password) {
    return bcrypt.compareSync(password, this.password);
};
>>>>>>> master

export default mongoose.model('account', Account);

import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },

    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: 'user',
    },
});
//require - обов'яковий чи не обов'язковий  елемент, unique-унікальність

const User = mongoose.model('User', userSchema);
export default User;

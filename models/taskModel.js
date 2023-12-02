import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    description: {
        type: String,
        require: true,
    },

    completed: {
        type: Boolean,
        default: false,
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});
//require - обов'яковий чи не обов'язковий  елемент, unique-унікальність

const User = mongoose.model('Task', taskSchema);
export default User;

import mongoose from 'mongoose';

const URI =
    'mongodb+srv://modernwebsite21:LgP5PsUJBh-H4uF@cluster0.gypx7rh.mongodb.net/?retryWrites=true&w=majority';

mongoose
    .connect(URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((e) => {
        console.error(e);
    });

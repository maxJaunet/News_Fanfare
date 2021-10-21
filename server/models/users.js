import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fName: String,
    lName: String,
    role: String,
    password: String,
    email: String,
    phoneNumber: String,
    section: {
        type: String,
        default: 'Non spécifié'
    },
    instrument: [String]
});

const User = mongoose.model('User', userSchema);

export default User;
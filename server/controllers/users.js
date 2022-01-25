import User from '../models/users.js';


// Create
export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);  
    try {
        await newUser.save();
        res.status(201).json(newUser);
        console.log('user successfully added to database');
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};

// Read All
export const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Read One
export const getUser = async (req, res) => {
    try {
        const targetedUser = await User.findById(req.params.userId)
        res.status(200).json(targetedUser);
        console.log(`userFound : ${targetedUser.fName} ${targetedUser.lName}`) 
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Update One
export const updateUser = async (req, res) => {
    const update = req.body;
    const filter = req.params.UserId;
    try {
        const targetedUser = await User.findOneAndUpdate({_id: filter}, {$set: update}, {new: true});
        res.status(200).json(targetedUser);
    } catch (error) {
        res.status(404).json({ message: String(error) });
    }
}

// Delete One
export const deleteUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const targetedUser = await User.findByIdAndDelete(userId);
        res.status(200).json(targetedUser);
        console.log('user deleted from database');
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
import User from '../models/users.js';

export const getLogInPage = (req, res) => {
    res.send({
        token: 'test 123'
    })
}

export const checkLogIn = async (req, res) => {
    const body = req.body;
    await User.find({email: body.email}, (err, docs) => {
        try {
            if(body.password === docs.password) {
                console.log('user found');
                res.status(200).json(docs);
            }
            else {
                alert('Le mot de passe spécifié est invalide.');
                    res.status(403).json({ message: err.message });
            }
        } catch (err) {
            res.status(401).json({ message: err.message })
        }
    })
};


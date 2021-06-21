const models = require('../models')

const { User} = models;
class AuthController {
    // auth/signup
    static signUp = async (req, res) => {

        const params = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            user_role: req.body.userRole
        }

        try {
            const user = await User.create(params);
            // const jane = await User.create(params);
            console.log(user)

            
        } catch (err) {
            console.log(err)
            
        }
    }
}

exports.AuthController=AuthController
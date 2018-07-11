
import Database from './Database';

class Auth {

    static async signup(email, pass) {

        try {
            await Database.firebase().auth()
                .createUserWithEmailAndPassword(email, pass);
    
        } catch (error) {
            console.log(error.toString())
        }
    
    }
}

export default Auth;
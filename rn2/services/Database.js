
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDTjClhJH6SlwEFrhySjAJ6HY11hqIhnxY",
    authDomain: "rn-sample-eefc1.firebaseapp.com",
    databaseURL: "https://rn-sample-eefc1.firebaseio.com",
    projectId: "rn-sample-eefc1",
    storageBucket: "rn-sample-eefc1.appspot.com"
};

firebase.initializeApp(firebaseConfig);

class Database {

    static firebase() {
        return firebase;
    }

    static listenPersons(callback) {

        firebase.database().ref('/persons').on('value', (snapshot) => {

            var result = [];

            snapshot.forEach((person) => {
                result.push(person.val());
            });

            callback(result)
        });
    }
}

export default Database;
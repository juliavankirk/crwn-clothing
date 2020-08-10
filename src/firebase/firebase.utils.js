import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCCPxLuksD-YrLtbCC2afZUEhPzfVPzwa8",
    authDomain: "crwn-db-36e03.firebaseapp.com",
    databaseURL: "https://crwn-db-36e03.firebaseio.com",
    projectId: "crwn-db-36e03",
    storageBucket: "crwn-db-36e03.appspot.com",
    messagingSenderId: "914453764692",
    appId: "1:914453764692:web:a150e2999ff7873c2debc1",
    measurementId: "G-PBVNC85D0J"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error catching user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config'

// Initialize Firebase
export const initializeLoginFrameWork = () => {
    if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
}

// google signIn 
export const googleSingInHandler = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res => {

        const { displayName, email} = res.user
        const googleSignIn ={
            isSignIn:true,
            name: displayName,
            email:email,
        }
        return googleSignIn
      })
      .catch(error => console.log(error.massage))
}

// facebook login
  export const handleFbLogin = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignIn: true,
                name: displayName,
                email:email,
            }
            return signedInUser;
        })
        .catch(error => console.log(error.massage))
  }


export const createUserWithEmailAndPassword = (name, email, password) => {
    console.log(name,email,password)
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserName(name);
            console.log(res)
            return newUserInfo;
        })
        .catch(error => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            console.log(error)
            return newUserInfo;
        });
}
// signIn with email and password
export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
        })
        .catch(function (error) {
            const newUserInfo = {}
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

const updateUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
         displayName: name })
        .then(() => {
            console.log('user name update successfully')
        }).catch(error => console.log(error.massage));
}

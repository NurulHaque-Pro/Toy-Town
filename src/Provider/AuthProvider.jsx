import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    // Sign Up With Email

    const registerWithEmail = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => {
                        setUser(user);
                        setLoading(false);
                        return user;
                    });
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    // Sign In with Google
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider)
    }

    // Email Sign In 

    const signInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Observe the user

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(result => {

            })
            .catch(error => {

            })
    }

    const authInfo = {
        user,
        loading,
        registerWithEmail,
        signInWithEmail,
        loginWithGoogle,
        logOut


    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
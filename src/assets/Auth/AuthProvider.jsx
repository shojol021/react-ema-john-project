import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    } 
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    } 
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    const authInfo = {
        user,
        createUser,
        loginUser,
        resetPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
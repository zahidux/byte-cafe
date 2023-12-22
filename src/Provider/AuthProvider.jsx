import React, { Children, createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //google authentication
  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //github authentication

  const githubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // twitter authentication
  const twitterSignIn = () => {
    const twitterProvider = new TwitterAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  //facebook authentication
  const facebookSignIn = () => {
    const facebookProvider = new FacebookAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // sing in with email and password
  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign up
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign out
  const logOut = () => {
    return signOut(auth);
  };

  //currently sign in user

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //update profile

  const profileUpdate = (currentUser, name, photoLink) => {
    return updateProfile(currentUser, {
      displayName: name,
      photoURL: photoLink,
    });
  };

  const authInfo = {
    user,
    loading,
    googleSignIn,
    githubSignIn,
    twitterSignIn,
    facebookSignIn,
    singIn,
    signUp,
    logOut,
    profileUpdate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

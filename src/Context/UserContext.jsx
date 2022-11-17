import React, { useEffect, useState } from "react";
import AuthContext from "./Context";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";
import app from "../Firebase/Firebase.init";

const auth = getAuth(app);
const provider  =  new GoogleAuthProvider();
const UserContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (userName) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: userName,
    })
      .then(() => {})
      .catch((error) => {});
  };
  const singoutUser = () => {
    localStorage.clear()
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const googleLogin =()=>{
    setLoading(true);
    return signInWithPopup(auth,provider)

  }
  const resetPassword  = (email)=>{
    return sendPasswordResetEmail(auth,email);
  }

  return (
    <AuthContext.Provider
      value={{ loading, user, loginUser, createUser, updateUser, singoutUser , googleLogin , resetPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;

import React, { useEffect, useState } from "react";
import AuthContext from "./Context";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";

const auth = getAuth(app);
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

  return (
    <AuthContext.Provider
      value={{ loading, user, loginUser, createUser, updateUser, singoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;

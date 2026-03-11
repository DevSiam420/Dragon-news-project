import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // Update User Info ----
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  // Create User --
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // observer / listener ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // --- Log out USER --
  const LogOut = () => {
    return signOut(auth);
  };

  // LogIn user / SingIn user

  const LogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // __   updateProfile   USER _

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // --- Context Data --
  const AuthData = {
    user,
    setUser,
    createUser,
    LogOut,
    LogIn,
    loading,
    updateUser,
  };
  return (
    <AuthContext.Provider value={AuthData}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;

import { createContext, useState, useEffect } from "react";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateEmail, 
  updatePassword,
  onAuthStateChanged,
  signOut 
} from "firebase/auth";
import { auth } from "./firebaseConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));

      return unsubscribe;
    } catch (error) {
      console.error("Error in auth state change: ", error);
    }
  }, []);

  const login = async(email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      if(!result){
        console.log("Failed Sign In");
      }

      setUser(result);
      setLoading(false);
      // await signInWithEmailAndPassword(auth, email, password)
      // .then((user) => {})
      // .catch((error) => console.error(error))
    } catch (error) {
      console.error("Error: ", error);
      setLoading(false);
    }
  };

  // const anotherLogin = async(email, password) => {
  //   await signInWithEmailAndPassword(auth, email, password)
  //   .then((data) => setUser(data))
  //   .catch((error) => console.error(error));
  // }

  const signup = async(email, password) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);

      if (!result) {
        console.log("Failed Sign Up");
      }

      setUser(result);
      setLoading(false);
    } catch (error) {
      console.error("Error: ", error);
      setLoading(false);
    }
  };

  const logout = () => {
    setIsLogOut(true);
    signOut(auth);
    setIsLogOut(false);
  };

  const update_email = async(email) => {
    const user = auth.currentUser;
    await updateEmail(user, email)
    .then(() => alert("Email updated"))
    .catch((error) => console.error(error));
  }

  const update_password = async(password) => {
    const user = auth.currentUser;
    await updatePassword(user, password)
    .then(() => alert("Password Updated"))
    .catch((error) => console.error(error));
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, isLogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

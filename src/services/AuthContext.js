import React, { createContext, useState, useEffect } from "react";
import { auth } from "../services/firebaseConfig";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { getUserById } from "../utils/functions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);

        const fetchProfile = async () => {
          //check if AsyncStorage is stored
          const res = await AsyncStorage.getItem("install");

          if (user?.uid) {
            try {
              const person = await getUserById(user.uid);

              setProfile(person);
            } catch (error) {
              console.error("Error fetching profile:", error);
            }
          } else {
            setProfile(null);
          }

          setLoading(false);
        };

        fetchProfile();
      });

      return unsubscribe;
    } catch (error) {
      console.error("Error in auth state change: ", error);
    }
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const authUser = userCredential.user;

      setUser(authUser);

      const person = await getUserById(authUser.uid);

      setProfile(person);

      console.log(authUser);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addingUser = async (name, email, school, id) => {
    // Use doc() to point to a specific ID, then setDoc to write data
    try {
      await setDoc(doc(db, "users", id), {
        fullName: name,
        email: email,
        school: school,
        createdAt: new Date(), // Good practice to track when they joined
      });
      console.log(`User document created with ID: ${id}`);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const signUp = async (name, email, password, school) => {
    try {
      // 1. Create the Auth Account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // 2. Update the Auth Profile (Display Name)
      await updateProfile(user, { displayName: name });

      // 3. Create the Firestore Document using the UID
      await addingUser(name, email, school, user.uid);

      // 4. Update local state
      setUser(user);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

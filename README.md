AgroSmart 🌱

AgroSmart is a mobile application designed to support and empower farmers in Nigeria through smart agricultural tools and real-time information. The app helps farmers make better farming decisions by providing weather updates, agricultural insights, crop-related information, and modern mobile technology solutions.

## 🚀 Features

- 🌦️ Real-time weather updates
- 📍 Location-based forecasts
- 🌱 Agricultural insights and tips
- 🔐 User authentication
- ☁️ Cloud-based data storage
- 📱 Modern and responsive mobile UI
- ⚡ Fast and lightweight performance

## 🛠️ Tech Stack

### Frontend

- React Native
- Expo
- JavaScript

### Backend & Services

- Firebase Authentication
- Cloud Firestore
- Weather API Integration

### UI & Styling

- React Native Responsive Screen
- Expo Blur
- React Native Vector Icons

---

## 📸 Screenshots

check the screenshot folder in assets

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Ghost-cyber27/agrosmart.git
```

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
};

const signUp = async (name, email, password) => {
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

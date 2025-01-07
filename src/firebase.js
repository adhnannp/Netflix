import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBWEiWHEZSNU3i2sozXNO2JeQJ7KdcDnDU",
  authDomain: "netflix-a107c.firebaseapp.com",
  projectId: "netflix-a107c",
  storageBucket: "netflix-a107c.firebasestorage.app",
  messagingSenderId: "609050540005",
  appId: "1:609050540005:web:4ed0faf91a63d3de68210c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

const signup = async (name,email,password) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await addDoc(collection(db,'user'),{
            uid: user.uid,
            name,
            authProvider:'local',
            email,
        });
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const login =async (eamil,password) =>{
    try {
        await signInWithEmailAndPassword(auth,eamil,password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const logout = ()=>{
    signOut(auth)
}

export {
    auth,
    db,
    login,
    signup,
    logout,
}
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import React, {useState, useContext} from "react";
const LoginContext = React.createContext([]);
export const useLoginContext = () => useContext(LoginContext);
export const LoginProvider = ({children}) => {

	const [userLogin, setUserLogin] = useState(undefined);
	
	const getUserProfileById = (userId) => {
		const db = getFirestore();
		return getDoc(doc(db, "profiles", userId));
	};

	const updateUserProfile = (userId, userProfileData) => {
		const db = getFirestore(); 
		return setDoc(doc(db, "profiles", userId), {...userProfileData, id: userId});
	};

	const createUser = (newUser) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, newUser.email, newUser.password).then(userCredencial => {
			updateUserProfile(userCredencial.user.uid, newUser).then(() => setUserLogin({...newUser, id: userCredencial.user.uid}));
		});
	};

	const signInUser = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password).then(userCredencial => {
			getUserProfileById(userCredencial.user.uid).then(doc => {
				setUserLogin(doc.data());
			});
		})
		.catch(() => {
			console.log("Error. Usuario o contraseña incorrectos");
		});
	};
	
	const signOutUser = () => {
		 const auth = getAuth();
		 auth.signOut().then(() => setUserLogin(undefined));
	};

	return (
		<LoginContext.Provider value={{
			userLogin,

			createUser,
			getUserProfileById,
			updateUserProfile,
			signInUser,
			signOutUser
		}}>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginProvider;
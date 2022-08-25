import React, {useState, useContext} from "react";
const LoginContext = React.createContext([]);
export const useLoginContext = () => useContext(LoginContext);
export const LoginProvider = ({children}) => {

	const [isLogin, setIsLogin] = useState(true);

	const logout = () => {
		setIsLogin(false);
	}


	return (
		<LoginContext.Provider value={{
			isLogin,
			logout
		}}>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginProvider;
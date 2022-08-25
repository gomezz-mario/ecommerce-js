import BannerServices from "../../componentes/BannerServices/BannerServices";
import ItemListContainer from "../../componentes/ItemListContainer/ItemListContainer";
import Slider from "../../componentes/Slider/Slider";

//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const dataSlider = {
	images: [
		"http://www.heymoto.net/wp-content/uploads/2019/11/CyberMonday-2019-Motorola-1-1024x316.jpg",
		"http://www.heymoto.net/wp-content/uploads/2019/11/CyberMonday-2019-Motorola-2-1024x316.jpg"
	]
};

const HomePage = ()=>{
/*
	const email = "mario@gmail.com";
	const pass = "mario1234";

	const auth = getAuth();
	createUserWithEmailAndPassword(auth, email, pass).then((userCredential) => {
    	const user = userCredential.user;
		console.log(user);
  })
  .catch((error) => {
    	const errorCode = error.code;
    	const errorMessage = error.message;
  });

  CREA UN NUEVO USUARIO!

  */





	
	//console.log(items);
	return(
		<main>
			<Slider data={dataSlider}/>
			<BannerServices/>
			<ItemListContainer/>
		</main>
	);
}
export default HomePage;
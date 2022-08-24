import BannerServices from "../../componentes/BannerServices/BannerServices";
import ItemListContainer from "../../componentes/ItemListContainer/ItemListContainer";
import Slider from "../../componentes/Slider/Slider";

const dataSlider = {
	images: [
		"http://www.heymoto.net/wp-content/uploads/2019/11/CyberMonday-2019-Motorola-1-1024x316.jpg",
		"http://www.heymoto.net/wp-content/uploads/2019/11/CyberMonday-2019-Motorola-2-1024x316.jpg"
	]
};

const HomePage = ()=>{
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
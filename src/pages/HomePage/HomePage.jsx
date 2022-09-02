import BannerServices from "../../Componentes/BannerServices/BannerServices";
import ItemListContainer from "../../Componentes/ItemListContainer/ItemListContainer";
import Slider from "../../Componentes/Slider/Slider";
import BannerPublicitario from "../../Componentes/BannerPublicitario/BannerPublicitario";

const dataSlider = {
	images: [
		"http://www.heymoto.net/wp-content/uploads/2019/11/CyberMonday-2019-Motorola-1-1024x316.jpg",
		"http://www.heymoto.net/wp-content/uploads/2019/11/CyberMonday-2019-Motorola-2-1024x316.jpg"
	]
};

const HomePage = ()=>{

	return(
		<main>
			<Slider data={dataSlider}/>
			
			<BannerServices/>
			<ItemListContainer/>
			<BannerPublicitario bannerImage="/assets/vector-banner.jpg" heightBanner={200}/>
		</main>
	);
}
export default HomePage;
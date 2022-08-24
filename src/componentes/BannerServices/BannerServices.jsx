import "./banner-services.css";
import {BiCreditCard} from "react-icons/bi"
import {ImLocation} from "react-icons/im";
import {MdLocalShipping} from "react-icons/md";
import {FaWhatsapp} from "react-icons/fa";

const BannerServices = () => {
	return(
		<div className="container-fluid banner-services-container pt-2 pb-2">
			<div className="container-md d-flex justify-content-around">
				<div className="d-flex flex-column align-items-center">
					<BiCreditCard className="service-icon"/>
					<p className="service-description">Pagá con tu tarjeta de débito, <br/> o con crédito en cuotas sin interés</p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<ImLocation className="service-icon"/>
					<p className="service-description">Retirá gratis en <br/> nuestras sucursales</p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<MdLocalShipping className="service-icon"/>
					<p className="service-description">Envío más rápido a <br/> todo el país</p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<FaWhatsapp className="service-icon"/>
					<p className="service-description">Sumanos y preguntá <br/> lo que quieras</p>
				</div>


			</div>
		</div>
	);
}

export default BannerServices;
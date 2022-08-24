import "./footer.css";
import {FiPhoneCall} from "react-icons/fi";
import {SiTwitter, SiInstagram, SiGmail} from "react-icons/si";
import {RiFacebookFill} from "react-icons/ri";

const Footer = () =>{
	return (
		<footer className="container-fluid p-0">
			<div className="container-fluid bg-gris-light p-2">
				<div className="row d-flex align-items-center p-2 ps-5 pe-5">
					<div className="col">
						<div className="d-flex">
							<input type="text" placeholder="Tu e-mail" className="form-control input-email" />
							<button className="btn btn-suscribete ms-2" type="button">Suscríbete</button>
						</div>
					</div>
					<div className="col">
						<div className="d-flex justify-content-center">
							<FiPhoneCall className="at-cliente-icon text-orange me-2 mt-2"/>
							<div className="d-flex flex-column">
								<span className="text-slim text-orange fs-18">VENTA TELEFÓNICA <strong className="text-bold">0810-444-XXXX</strong></span>
								<span className="text-slim fs-16">AT. AL CLIENTE: Lun. a Vie. de 9 a 20hs / Sáb. de 9 a 18hs</span>
								<span className="text-slim fs-16">EMAIL: atencionalcliente@megatown.net</span>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="d-flex justify-content-center">
							<div className="rrss-container me-2"><SiGmail className="rrss-icon"/></div>
							<div className="rrss-container me-2"><RiFacebookFill className="rrss-icon"/></div>
							<div className="rrss-container me-2"><SiTwitter className="rrss-icon"/></div>
							<div className="rrss-container me-2"><SiInstagram className="rrss-icon"/></div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid bg-gris p-3">
				<div className="container legal-container">
					Copyright 2022. Megatown. Todos los derechos reservados. /nombre de mi empresa/. - /direccion de mi empresa/ - /mi ciudad - /mi provincia - Argentina. Tel.: XXXXX-XXXXXX. CUIT: XX-XXXXXXXX-X. Las fotos e imágenes de los productos son meramente ilustrativas. Todos los productos gozan de la garantía de su fabricante o importador. La venta de cualquiera de los productos publicados está sujeta a verificación de stock. Los precios publicados son exclusivos para venta telefónica y a través de www.megatown.net. Los precios que se visualizan actualmente son válidos para el día de la fecha, 8/15/2022; e incluyen IVA. Ofertas para consumidor final. 
				</div>
			</div>
		</footer>
	)
}

export default Footer;
import React from "react";
import LoginForm from "../../Componentes/Forms/LoginForm";
import "./login-page.css";
import "../../Componentes/Forms/forms.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
	return(
		<div className="container-fluid d-flex justify-content-center pt-5 pb-5">
			<div className="container-md">
				<h1 className="page-title">Acceso del cliente</h1>
				<div className="container-fluid d-flex justify-content-around mt-3 p-0">
					<LoginForm/>
					
					<section className="section-form ms-5">
						<div className="form-section__title-box">
							<h3 className="title-box__title">NUEVOS CLIENTES</h3>
							<div className="title-box__title-accent"></div>
						</div>
						<p>Crear una cuenta tiene muchos beneficios: Paga más rápido, puede guardar más de una dirección, seguimiento de pedidos y mucho más.</p>
						<Link to="/registration" className="form-sumbit-btn">CREAR CUENTA</Link>
					</section>

				</div>
			</div>
		</div>
	);

}
export default LoginPage;
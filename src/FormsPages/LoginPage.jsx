import "./form-page.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
	return(
		<div className="container-fluid d-flex justify-content-center pt-5 pb-5">
			<div className="container-md">
				<h1 className="form-page-title">Acceso del cliente</h1>
				<div className="container-fluid d-flex justify-content-around mt-3 p-0">
					<form>
						<section className="form-section">
							<div className="form-section__title-box">
								<h3 className="title-box__title">Clientes registrados</h3>
								<div className="title-box__title-accent"></div>
							</div>
							<p>Si tiene una cuenta, inicie sesión con su dirección de correo electrónico.</p>
							<div className="mb-3">
  								<label htmlFor="formRegistroInputEmail" className="form-label">CORREO ELECTRÓNICO: <span className="text-danger">*</span></label>
  								<input type="email" className="form-control form-input" id="formRegistroInputEmail"/>
							</div>

							<div className="mb-3">
  								<label htmlFor="formRegistroInputPass" className="form-label">CONTRASEÑA: <span className="text-danger">*</span></label>
  								<input type="password" className="form-control form-input" id="formRegistroInputPass"/>
							</div>
							<button className="form-sumbit-btn">INICIAR SESIÓN</button>
						</section>
					</form>

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
};
export default LoginPage;
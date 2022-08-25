import React from "react";
import "./login-page.css";

const LoginPage = () => {
	return(
		<div className="container-fluid d-flex justify-content-center pt-5 pb-5">
			<div className="container-md">
				<h1 className="login-page-title">Acceso del cliente</h1>
				<div className="container-fluid d-flex justify-content-around mt-3 p-0">
				
					<section className="me-5">
						<div className="login-page__title-secction-block">
							<h3 className="login-page__title-section">CLIENTES REGISTRADOS</h3>
							<div className="login-page__title-secction--borde"> </div>
						</div>
						<p>Si tiene una cuenta, inicie sesión con su dirección de correo electrónico.</p>
						
						<form action="">
							<div class="mb-3">
  								<label for="inputEmail" class="form-label">CORREO ELECTRÓNICO: <span className="text-danger">*</span></label>
  								<input type="email" class="form-control login-form-control" id="inputEmail"/>
							</div>
							<div class="mb-3">
  								<label for="inputPassword" class="form-label">CONTRASEÑA: <span className="text-danger">*</span></label>
  								<input type="password" class="form-control login-form-control" id="inputPassword"/>
  							</div>
							<div className="d-flex justify-content-between mt-4 mb-3">
								<button className="btn login-btn">INICIAR SESIÓN</button>
								<span>¿Olvidaste tu contraseña?</span>
							</div>
							<span className="text-danger">Campos requeridos *</span>
						</form>

					</section>

					<section>
						<div className="login-page__title-secction-block">
							<h3 className="login-page__title-section">NUEVOS CLIENTES</h3>
							<div className="login-page__title-secction--borde"> </div>
						</div>
						<p>Crear una cuenta tiene muchos beneficios: Paga más rápido, puede guardar más de una dirección, seguimiento de pedidos y mucho más.</p>
						<div className="mb-3">
							<button className="btn login-btn">Crear cuenta</button>
						</div>
					</section>

				</div>
			</div>
		</div>
	);
}
export default LoginPage;
import "./forms.css";
const LoginForm = () => {
	return(
		<form action="">
			<section className="form-section">
				<div className="form-section__title-box">
					<h3 className="title-box__title">Clientes registrados</h3>
					<div className="title-box__title-accent"></div>
				</div>
				<p>Si tiene una cuenta, inicie sesión con su dirección de correo electrónico.</p>
				<div class="mb-3">
  					<label for="formRegistroInputEmail" class="form-label">CORREO ELECTRÓNICO: <span className="text-danger">*</span></label>
  					<input type="email" class="form-control form-input" id="formRegistroInputEmail"/>
				</div>

				<div class="mb-3">
  					<label for="formRegistroInputPass" class="form-label">CONTRASEÑA: <span className="text-danger">*</span></label>
  					<input type="password" class="form-control form-input" id="formRegistroInputPass"/>
				</div>
				<button className="form-sumbit-btn">INICIAR SESIÓN</button>
			</section>
		</form>
	);
};
export default LoginForm;
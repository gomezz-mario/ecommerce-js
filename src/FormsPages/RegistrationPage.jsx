import "./form-page.css";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
	return(
		<div className="container-fluid d-flex justify-content-center pt-5 pb-5">
			<div className="container-md">
				<h1 className="form-page-title">Crear nueva cuenta de cliente</h1>
				<form action="">
					<section className="form-section">
						<div className="form-section__title-box">
							<h3 className="title-box__title">Información personal</h3>
							<div className="title-box__title-accent"></div>
						</div>
						<div className="mb-3">
  							<label htmlFor="formRegistroInputName" className="form-label">NOMBRE: <span className="text-danger">*</span></label>
  							<input type="text" className="form-control form-input" id="formRegistroInputName"/>
						</div>
						<div className="mb-3">
  							<label htmlFor="formRegistroInputFirstName" className="form-label">APELLIDOS: <span className="text-danger">*</span></label>
  							<input type="text" className="form-control form-input" id="formRegistroInputFirstName"/>
						</div>
						<div className="mb-3">
  							<label htmlFor="formRegistroInputPhone" className="form-label">TELÉFONO: <span className="text-danger">*</span></label>
  							<input type="tel" className="form-control form-input" id="formRegistroInputPhone"/>
						</div>
						<div className="mb-3">
  							<label htmlFor="formRegistroInputAdress" className="form-label">DIRECCIÓN: <span className="text-danger">*</span></label>
  							<input type="text" className="form-control form-input" id="formRegistroInputAdress"/>
						</div>
					</section>

					<section className="form-section">
						<div className="form-section__title-box">
							<h3 className="title-box__title">Información de inicio de sesión</h3>
							<div className="title-box__title-accent"></div>
						</div>
						<div className="mb-3">
  							<label htmlFor="formRegistroInputEmail" className="form-label">CORREO ELECTRÓNICO: <span className="text-danger">*</span></label>
  							<input type="email" className="form-control form-input" id="formRegistroInputEmail"/>
						</div>
						<div className="mb-3">
  							<label htmlFor="formRegistroInputPass" className="form-label">CONTRASEÑA: <span className="text-danger">*</span></label>
  							<input type="password" className="form-control form-input" id="formRegistroInputPass"/>
						</div>
						<div className="mb-3">
  							<label htmlFor="formRegistroInputRepeatPass" className="form-label">CONTRASEÑA: <span className="text-danger">*</span></label>
  							<input type="password" className="form-control form-input" id="formRegistroInputRepeatPass"/>
						</div>
					</section>
			
					<div className="container-fluid p-0 d-flex justify-content-between">
						<button className="form-sumbit-btn">CREAR CUENTA</button>
						<Link className="form-cancel-btn" to="/">CANCELAR</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegistrationPage;
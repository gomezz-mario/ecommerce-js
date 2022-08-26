import "./forms.css";
import { Link } from "react-router-dom";

const RegistationForm = () => {
	return(
		<form action="">
			<section className="form-section">
				<div className="form-section__title-box">
					<h3 className="title-box__title">Información personal</h3>
					<div className="title-box__title-accent"></div>
				</div>

				<div class="mb-3">
  					<label for="formRegistroInputName" class="form-label">NOMBRE: <span className="text-danger">*</span></label>
  					<input type="text" class="form-control form-input" id="formRegistroInputName"/>
				</div>

				<div class="mb-3">
  					<label for="formRegistroInputFirstName" class="form-label">APELLIDOS: <span className="text-danger">*</span></label>
  					<input type="text" class="form-control form-input" id="formRegistroInputFirstName"/>
				</div>

				<div class="mb-3">
  					<label for="formRegistroInputPhone" class="form-label">TELÉFONO: <span className="text-danger">*</span></label>
  					<input type="tel" class="form-control form-input" id="formRegistroInputPhone"/>
				</div>

				<div class="mb-3">
  					<label for="formRegistroInputAdress" class="form-label">DIRECCIÓN: <span className="text-danger">*</span></label>
  					<input type="text" class="form-control form-input" id="formRegistroInputAdress"/>
				</div>

			</section>

			<section className="form-section">
				<div className="form-section__title-box">
					<h3 className="title-box__title">Información de inicio de sesión</h3>
					<div className="title-box__title-accent"></div>
				</div>

				<div class="mb-3">
  					<label for="formRegistroInputEmail" class="form-label">CORREO ELECTRÓNICO: <span className="text-danger">*</span></label>
  					<input type="email" class="form-control form-input" id="formRegistroInputEmail"/>
				</div>

				<div class="mb-3">
  					<label for="formRegistroInputPass" class="form-label">CONTRASEÑA: <span className="text-danger">*</span></label>
  					<input type="password" class="form-control form-input" id="formRegistroInputPass"/>
				</div>

				<div class="mb-3">
  					<label for="formRegistroInputRepeatPass" class="form-label">CONTRASEÑA: <span className="text-danger">*</span></label>
  					<input type="password" class="form-control form-input" id="formRegistroInputRepeatPass"/>
				</div>
			</section>
			
			<div className="container-fluid p-0 d-flex justify-content-between">
				<button className="form-sumbit-btn">CREAR CUENTA</button>
				<Link className="form-cancel-btn" to="/">CANCELAR</Link>
			</div>
		</form>
	);
};
export default RegistationForm;



import "./form-page.css";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useLoginContext } from "../Context/LoginContext";


const RegistrationPage = () => {

	const {createUser}  = useLoginContext();

	const [formSumbited, setFormSumbited] = useState(false);
	const [formData, setFormData] = useState({
		nombre: '',
		apellidos: '',
		telefono: '',
		email: '',
		password: '',
		direccion: ''
	});

	const [validate, setValidate] = useState(false);

	const changeHandler = (ev) => {
		const data = {...formData};
		data[ev.target.name] = ev.target.value;
		setFormData(data);
		formValidate();
	}

	const sumbitHandler = async (ev) => {
		ev.preventDefault();
		createUser(formData);
		setFormSumbited(true);
	}

	const formValidate = () => {
		console.log("Validando formulario..");
		let formValidated = false;
		if(formData.apellidos !== '' && formData.nombre !== '' && formData.email !== '' && formData.password !== '' && formData.telefono !== '' && formData.direccion !== ''){
			if(formData.email.includes('@')){
				if(formData.password.length > 5){
					console.log("Formulario validado");
					formValidated = true;
				}
			}
		}
		setValidate(formValidated);
	};
	
	if(formSumbited){
		return(
			<Navigate to="/" />
		);
	}

	return(
		<div className="container-fluid d-flex justify-content-center pt-5 pb-5">
			<div className="container-md">
				<h1 className="form-page-title">Crear nueva cuenta de cliente</h1>
				<form onSubmit={ev => sumbitHandler(ev)}>
					<section className="form-section">
						<div className="form-section__title-box">
							<h3 className="title-box__title">Información personal</h3>
							<div className="title-box__title-accent"></div>
						</div>
						<div className="mb-3">
  							<label htmlFor="formRegistroInputName" className="form-label">NOMBRE: <span className="text-danger">*</span></label>
  							<input name="nombre" type="text" className="form-control form-input" id="formRegistroInputName" onChange={ev => changeHandler(ev)}/>
						</div>
						<div className="mb-3">
  							<label htmlFor="formRegistroInputFirstName" className="form-label">APELLIDOS: <span className="text-danger">*</span></label>
  							<input name="apellidos" type="text" className="form-control form-input" id="formRegistroInputFirstName" onChange={ev => changeHandler(ev)}/>
						</div>
						<div className="mb-3">
  							<label htmlFor="formRegistroInputPhone" className="form-label">TELÉFONO: <span className="text-danger">*</span></label>
  							<input name="telefono" type="tel" className="form-control form-input" id="formRegistroInputPhone" onChange={ev => changeHandler(ev)}/>
						</div>
						<div className="mb-3">
  							<label htmlFor="formRegistroInputAdress" className="form-label">DIRECCIÓN: <span className="text-danger">*</span></label>
  							<input name="direccion" type="text" className="form-control form-input" id="formRegistroInputAdress" onChange={ev => changeHandler(ev)}/>
						</div>
					</section>

					<section className="form-section">
						<div className="form-section__title-box">
							<h3 className="title-box__title">Información de inicio de sesión</h3>
							<div className="title-box__title-accent"></div>
						</div>
						<div className="mb-3">
  							<label htmlFor="formRegistroInputEmail" className="form-label">CORREO ELECTRÓNICO: <span className="text-danger">*</span></label>
  							<input name="email" type="email" className="form-control form-input" id="formRegistroInputEmail" onChange={ev => changeHandler(ev)}/>
						</div>
						<div className="mb-3">
  							<label htmlFor="formRegistroInputPass" className="form-label">CONTRASEÑA: <span className="text-danger">*</span></label>
  							<input name="password" type="password" className="form-control form-input" id="formRegistroInputPass" onChange={ev => changeHandler(ev)}/>
						</div>
					</section>
			
					<div className="container-fluid p-0 d-flex justify-content-between">
						<button disabled={!validate} className="btn form-sumbit-btn">CREAR CUENTA</button>
						<Link className="form-cancel-btn" to="/">CANCELAR</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegistrationPage;



//en teoria estoy creando un nuevo usuario...
//cargando datos en el perfil de usuario...
//y accediendo.. iniciando sesion
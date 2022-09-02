import "./form-page.css";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useLoginContext } from "../Context/LoginContext";


const LoginPage = () => {

	const { userLogin, signInUser } = useLoginContext();

	const [userLog, setUserLog] = useState({
		email: "",
		password: ""
	});

	const [validate, setValidate] = useState(false);
	const changeHandler = (ev) => {
		const user = {...userLog};
		user[ev.target.name] = ev.target.value;
		setUserLog(user);
		formValidation();
	};
	const sumbitHandler = (ev) => {
		ev.preventDefault();
		signInUser(userLog.email, userLog.password);
	};

	const formValidation = () => {
		setValidate( userLog.email.includes('@') );
	};

	if(userLogin){
		return( <Navigate to="/"/> );
	}

	return(
		<div className="container-fluid d-flex justify-content-center pt-5 pb-5">
			<div className="container-md">
				<h1 className="form-page-title">Acceso del cliente</h1>
				<div className="container-fluid d-flex justify-content-around mt-3 p-0">
					<form onSubmit={ev => sumbitHandler(ev)}>
						<section className="form-section">
							<div className="form-section__title-box">
								<h3 className="title-box__title">Clientes registrados</h3>
								<div className="title-box__title-accent"></div>
							</div>
							<p>Si tiene una cuenta, inicie sesión con su dirección de correo electrónico.</p>
							<div className="mb-3">
  								<label htmlFor="formRegistroInputEmail" className="form-label">CORREO ELECTRÓNICO: <span className="text-danger">*</span></label>
  								<input type="email" name="email" onChange={ev => changeHandler(ev)} className="form-control form-input" id="formRegistroInputEmail"/>
							</div>

							<div className="mb-3">
  								<label htmlFor="formRegistroInputPass" className="form-label">CONTRASEÑA: <span className="text-danger">*</span></label>
  								<input type="password" name="password" onChange={ev => changeHandler(ev)} className="form-control form-input" id="formRegistroInputPass"/>
							</div>
							<button disabled={!validate} className="btn form-sumbit-btn">INICIAR SESIÓN</button>
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
import RegistationForm from "../../Componentes/Forms/RegistrationForm";
import "./registration-page.css";


const RegistrationPage = () => {
	return(
		<div className="container-fluid d-flex justify-content-center pt-5 pb-5">
			<div className="container-md">
				<h1 className="title-page">Crear nueva cuenta de cliente</h1>
				<RegistationForm/>
			</div>
		</div>
	);
}
export default RegistrationPage;
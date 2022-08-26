import "./header.css";
import { BsPerson, BsHandbag } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";


import Navbar from "../Navbar/Navbar";
import CartButton from "../CartButton/CartButton";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";

const Header = () => {

	const {isLogin, logout} = useLoginContext();
	
	const onLogout = () => {
		logout();
	} 

	return(
		<div className="container-fluid header-container p-0">
			<div className="container-fluid p-0 pt-2 pb-2">
				<div className="container-md d-flex justify-content-between">
					<div className="d-flex align-items-center">
						<img src="/assets/megatown.png" alt="logo" width={70} height={70} />
						<Link className="link" to="/">
							<h1 className="d-flex flex-column mb-0 mt-3">
								<span className="title">MEGATOWN</span>
								<span className="dom">.net</span>
							</h1>
						</Link>
					</div>
					
					<div className="d-flex mt-3 p-2">
					{
						isLogin ?
							<>
								<Link to='/' className="link">
									<div className="d-flex justify-content-center align-items-center p-2">
										<BsHandbag className="icon"/>
									</div>
								</Link>
								<CartButton/>
								<div className="d-flex justify-content-center align-items-center p-2 ms-5 btn-logout" onClick={onLogout}>
									<IoIosLogOut className="icon icon-size-23"/>
								</div>
							</>
							:
							<>
								<Link to='/acceso' className="link">
									<div className="d-flex justify-content-center align-items-center p-2">
										<BsPerson className="icon icon-size-23"/>
									</div>
								</Link>
								<CartButton/>
							</>
					}
					</div>

				</div>
			</div>
			<Navbar/>
		</div>
	);
}
export default Header;
import "./header.css";
import {BsHandbag} from "react-icons/bs";
import {VscAccount} from "react-icons/vsc";

import Navbar from "../Navbar/Navbar";
import CartButton from "../CartButton/CartButton";
import { Link } from "react-router-dom";

const Header = () => {
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
						<CartButton/>
						<div className="d-flex flex-column me-3 align-items-center">
							<BsHandbag className="icon"/>
							<span className="description">Compras</span>
						</div>
						<div className="d-flex flex-column me-3 align-items-center">
							<VscAccount className="icon"/>
							<span className="description">Cuenta</span>
						</div>
					</div>
				</div>
			</div>
			<Navbar/>
		</div>
	);
}
export default Header;
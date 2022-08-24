import "./item-count.css";
import {FaPlus, FaMinus} from "react-icons/fa";
const ItemCount = ({count, onCount})=>{
	return(
		<div className="d-flex justify-content-between mb-2 item-count__container">
			<button disabled={(count===1)} onClick={()=>{onCount(count -1)}} className="btn-count"><FaMinus/></button>
			<div className="d-flex align-items-center justify-content-center ms-2 me-2 item-count__count">
				<span>{count}</span>
			</div>
			<button onClick={()=>{onCount(count +1)}} className="btn-count"><FaPlus/></button>
		</div>
	);
}
export default ItemCount;

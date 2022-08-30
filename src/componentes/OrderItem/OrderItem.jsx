
import timeStampToString from "../../Utils";
import "./order-item.css";

const OrderItem = ({order}) => {
	
	
	return(
		<div className="container-fluid p-0 pt-2 pb-2 order-item-container mb-3">
			
			<span className="order-item-fecha ps-2">{timeStampToString(order.fecha)}</span>
			<hr className="p-0 pt-1 m-0"/>
			<div className="d-flex justify-content-between">
				<div className="d-flex p-2">
					<div className="order-item__image-container m-0 p-0 me-2">
						<img src={order.items[0].images[0]} width={80} height={80} alt="..." />
					</div>
					<div className="d-flex flex-column">
					{
						order.items.map(item => <span className="order-item__text-description">{item.quantity} u. {item.name}</span>)
					}	
					</div>
				</div>
				<div className="d-flex justify-content-center align-items-center me-5">
					<span className="order-item__total">${order.total}</span>
				</div>

			</div>
		</div>
	);
}



export default OrderItem;
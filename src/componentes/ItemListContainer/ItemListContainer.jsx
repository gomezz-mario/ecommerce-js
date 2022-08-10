import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import "./item-list-container.css";
import {useParams} from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"

export const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);
	const {marcaId} = useParams();

	useEffect(()=> {
		const db = getFirestore();
		const itemsCollection = collection(db, "items");
		if(marcaId){
			const q = query(itemsCollection, where("marca","==",marcaId));
			getDocs(q).then(snapshot => {
				const data = snapshot.docs.map(doc =>{
					const laData = doc.data();
					return {...laData, doc: doc.id};
				});
				setProductos(data);
			});
		}else{
			getDocs(itemsCollection).then(snapshot => {
				const data = snapshot.docs.map(doc => { 
					const laData = doc.data();
					return {...laData, id:doc.id};
				});
				setProductos(data);
			});
		}


		/*const getData = new Promise((resolve) => {
			setTimeout(()=>{resolve(catalogo)},3000);
		});
		if(marcaId){
			getData.then(data => setProductos(data.filter(producto => producto.marca === marcaId)));
		} else{
			getData.then(data => setProductos(data));
		}
		*/
		
	}, [marcaId]);

	return(
		<div className="item-list">
			<ItemList data={productos}/>
		</div>
	);
	
};

export default ItemListContainer;


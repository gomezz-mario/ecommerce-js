import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import "./item-list-container.css";
import {useParams} from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"

export const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);
	const {category} = useParams();

	useEffect(()=> {
		const db = getFirestore();
		const itemsCollection = collection(db, "items");
		if(category){
			const q = query(itemsCollection, where("category","==",category));
			getDocs(q).then(snapshot => {
				const data = snapshot.docs.map(doc =>{
					const laData = doc.data();
					return {...laData, id: doc.id};
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

		
		
	}, [category]);

	return(
		<div className="item-list">
			<ItemList data={productos}/>
		</div>
	);
	
};

export default ItemListContainer;


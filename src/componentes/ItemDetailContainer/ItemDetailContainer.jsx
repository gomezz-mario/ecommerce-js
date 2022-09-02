import React from "react";
import ItemDetail from "../ItemDetail/itemDetail";
import { useEffect, useState } from "react";

import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from "firebase/firestore"

export const ItemDetailContainer = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [data, setData] = useState({});	
	const {itemId} = useParams();

	useEffect(()=>{
		const db = getFirestore();
		const docRef = doc(db, "items", itemId);
		getDoc(docRef).then(docSnap => {
			if (docSnap.exists()) {
			//	console.log("Document data:", docSnap.data());
				setData({id: docSnap.id,...docSnap.data()});
				setIsLoaded(true);
		  	} else {
				console.log("No such document!");
		  	}
		
		});
		
	},[isLoaded, itemId]);

	if(isLoaded){
		return <ItemDetail data={data}/>
	} else{
		return <></>;
	}

};

export default ItemDetailContainer;
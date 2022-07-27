import React from "react";
import ItemDetail from "../ItemDetail/itemDetail";
import { useEffect, useState } from "react";

import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";


const catalogo = [
	{
		"id":1,
		"name":"Celular Samsung Galaxy A33",
		"images":["https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Galaxy_A33_5_G_Frente_min_0ef938f0ef.png"],
		"price":1,
		"marca":"Samsung",
		"category":"Celulares",
		"stock": 5
	},
	{
		"id":2,
		"name":"Celular Samsung Galaxy S21",
		"images":["https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Galaxy_S21_Fe_Gris_Frente_min_2d6f1d0629.png"],
		"price":1,
		"marca":"Samsung",
		"category":"Celulares",
		"stock": 5
	},
	{
		"id":3,
		"name":"Celular Samsung Galaxy S22+",
		"images":["https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/S22_Plus_Green_min_140b18c3f1.png"],
		"price":1,
		"marca":"Samsung",
		"category":"Celulares",
		"stock": 5
	},
	{
		"id":4,
		"name":"Celular Samsung Galaxy A23",
		"images":["https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/SG_A23_Blanco_min_00a23e0cc2.png"],
		"price":1,
		"marca":"Samsung",
		"category":"Celulares",
		"stock": 5
	},
	{
		"id":5,
		"name":"Celular Samsung Galaxy A53",
		"images":["https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Galaxy_A53_Azul_Frente_min_c3aafed4be.png"],
		"price":1,
		"marca":"Samsung",
		"category":"Celulares",
		"stock": 5
	},
	{
		"id":6,
		"name":"Celular Samsung Galaxy A52",
		"images":["https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Samsung_Galaxy_A52s_Negro_b595cb26c1.png"],
		"price":1,
		"marca":"Samsung",
		"category":"Celulares",
		"stock": 5
	},
	{
		"id":7,
		"name":"Celular Samsung Galaxy A13",
		"images":["https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Galaxy_A13_64_GB_Negro_R30_min_b791c205ea.png"],
		"price":1,
		"marca":"Samsung",
		"category":"Celulares",
		"stock": 5
	},
	{
		"id":8,
		"name":"Celular Motorola Edge 30 Pro",
		"images":["https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_Edge_30_Pro_Front_min_8c83d62849.png"],
		"price":1,
		"marca":"Motorola",
		"category":"Celulares",
		"stock": 5
	},
	{
		"id":9,
		"name":"Celular Motorola Moto g51",
		"images":["https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G51_Azul_frente_min_f97b2b7415.png"],
		"price":1,
		"marca":"Motorola",
		"category":"Celulares",
		"stock": 5
	},
	{
		"id":10,
		"name":"Celular Motorola Moto g22",
		"images":["https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G22_Negro_min_cc94a3a7a1.png"],
		"price":1,
		"marca":"Motorola",
		"category":"Celulares",
		"stock": 5
	},
	{
		"id":11,
		"name":"Celular Motorola Moto g60s",
		"images":["https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G60s_Frente_min_39c217a159.png"],
		"price":1,
		"marca":"Motorola",
		"category":"Celulares",
		"stock": 5
	},
	{
		"id":12,
		"name":"Celular Motorola Moto g100",
		"images":["https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/PMTANG_1_HN_01_883a210555.png"],
		"price":1,
		"marca":"Motorola",
		"category":"Celulares",
		"stock": 5
	}
];

export const ItemDetailContainer = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [data, setData] = useState({});	
	const {itemId} = useParams();

	useEffect(()=>{
		const getData = new Promise(resolve => {
			setTimeout(resolve(catalogo), 200);
		});
		getData.then(res => {
			setData(res.find(producto => producto.id === parseInt(itemId)));
			setIsLoaded(true);
		});
	},[isLoaded]);

	if(isLoaded){
		return <ItemDetail data={data}/>
	} else{
		return <></>;
	}

};

export default ItemDetailContainer;
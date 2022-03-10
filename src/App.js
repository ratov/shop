import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Child from "./components/Child/Child";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";

import axios from 'axios';

import "./style/style.scss";

function App() {

	const [shoes, setShoes] = useState([]);

	useEffect(() => {
		axios('https://v1-sneakers.p.rapidapi.com/v1/sneakers', {
			params: { limit: '50' },
			headers: {
				'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
				'x-rapidapi-key': '3e13a342fbmsh72a8f276c1fde90p1d98c5jsnc76acad57629'
			}
		}).then(({ data }) => setShoes(data.results))
			.catch((err) => console.log('Ошибка'))
	}, []);

	return (
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home shoes={shoes} />} />
					<Route path="/men" element={<Men shoes={shoes} />} />
					<Route path="/women" element={<Women shoes={shoes} />} />
					<Route path="/child" element={<Child shoes={shoes} />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
	);
}

export default App;

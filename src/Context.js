import React, { createContext, useState } from "react";

export const CustomContext = createContext();

export const Context = (props) => {

	const [cart, setCart] = useState([]);

	const addCard = (id, shoes, size, count) => {
		const find = cart.findIndex((item) => item.shoe[0].id === id && item.shoe[0].defaultSize === size);
		if (find >= 0) {
			cart[find].count = cart[find].count + count;
			setCart([...cart]);
		} else {
			setCart([...cart, {
				shoe: shoes.filter(item => item.id === id),
				count: count
			}])
		}
	};

	const plusCountCart = (id, size) => {
		setCart(cart.map(item => {
			if (item.shoe[0].id === id && item.shoe[0].defaultSize === size) {
				return { ...item, count: item.count + 1 }
			} else {
				return item;
			}
		}));
	};

	const minusCountCart = (id, size) => {
		const find = cart.findIndex((item) => item.shoe[0].id === id && item.shoe[0].defaultSize === size);
		if (cart[find].count < 2) {
			setCart(cart.filter(item => item.shoe[0].id !== id || item.shoe[0].defaultSize !== size));
		} else {
			setCart(cart.map(item => {
				if (item.shoe[0].id === id && item.shoe[0].defaultSize === size) {
					return { ...item, count: item.count - 1 }
				} else {
					return item;
				}
			}));
		}
	};

	const count = cart.reduce((acc, rec) => {
		return acc + rec.count;
	}, 0);

	const [user, setUser] = useState({
		userName: 'user',
		email: null,
		token: null,
		id: null
	});

	const addUser = (state) => {
		setUser({
			...user,
			email: state.email,
			token: state.token,
			id: state.id
		})
	};

	const removeUser = () => {
		setUser({
			...user,
			email: null,
			token: null,
			id: null
		})
	};

	const value = {
		cart,
		addCard,
		plusCountCart,
		minusCountCart,
		count,
		user,
		addUser,
		removeUser
	};

	return <CustomContext.Provider value={value}>
		{props.children}
	</CustomContext.Provider>
}
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, Navigate } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<Navigate to="/login" />
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
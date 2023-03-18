import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
	const [cartIsEmpty] = useState(true);

	return (
		<div className="App">
			<BrowserRouter>
				<nav>
					<h1>The Ninja Clothing Company</h1>
					<Link to="/">Home</Link>
					<Link to="/about/">About</Link>
					<Link to="/products">Products</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about/*" element={<About />} />
					<Route path="/products/:id/*" element={<ProductDetails />} />
					<Route path="/products/" element={<Products />} />
					<Route
						path="/test"
						element={
							<div>
								<h1>Hello, from Test!!</h1>
							</div>
						}
					/>
					<Route path="/redirect" element={<Navigate to="/test" />} />
					<Route
						path="/checkout"
						element={
							!cartIsEmpty ? <Navigate to="/products" /> : <p> Checkout</p>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

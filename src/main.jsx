import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Routes/Routes.jsx";
import AuthProvider from "./Components/Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div className="bg-white max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
			<AuthProvider>
				<RouterProvider router={router}></RouterProvider>
			</AuthProvider>
		</div>
	</React.StrictMode>
);

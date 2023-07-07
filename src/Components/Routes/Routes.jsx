import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Reginster from "../Login/Reginster";
import Detaiils from "../Home/Details/Detaiils";
import Payment from "../Payment/Payment";
import Detailss from "../Detailss/Detailss";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Reginster></Reginster>,
			},
			{
				path: "/details",
				element: (
					<PrivateRoute>
						<Detaiils></Detaiils>
					</PrivateRoute>
				),
			},
			{
				path: "/pay",
				element: <Payment></Payment>,
			},
			{
				path: "/detailss",
				element: <Detailss></Detailss>,
			},
		],
	},
]);

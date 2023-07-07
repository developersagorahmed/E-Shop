import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
	return (
		<Link to="detailss">
			<div className="card  glass  hover:bottom-6 duration-500">
				<figure>
					<img
						className=""
						src="https://i.ibb.co/7CCjjnN/iPhone.jpg "
						alt="car!"
					/>
				</figure>
				<h1 className="text-2xl font-semibold mx-auto pb-6">iPhone</h1>
			</div>
		</Link>
	);
};

export default Card;

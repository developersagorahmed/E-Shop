import React from "react";
import Card from "./card";

const Trending = () => {
	return (
		<div className="my-10">
			<h1 className="text-[#333340] text-4xl font-semibold pt-10 my-6">
				Trending Categories
			</h1>

			<div className="grid  lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-10">
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</div>
		</div>
	);
};

export default Trending;

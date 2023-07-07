import React from "react";
import Cart from "./Cart";
import { BsArrowRightShort } from "react-icons/bs";

const Latest = () => {
	return (
		<div className="py-10">
			<div className="flex justify-between">
				<h1 className="text-[#040405] text-4xl font-semibold pt-10 my-6">
					Latest Products
				</h1>
				<div className="flex mt-16">
					<h2 className="text-xl font-semibold mt-[2px] hover:text-[#E52E06] duration-500">
						View All Products
					</h2>
					<BsArrowRightShort className="text-4xl text-[#E52E06]"></BsArrowRightShort>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
				<Cart></Cart>
				<Cart></Cart>
				<Cart></Cart>
				<Cart></Cart>
				<Cart></Cart>
			</div>
		</div>
	);
};

export default Latest;

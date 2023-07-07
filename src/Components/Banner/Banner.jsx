import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import css from "./Banner.css";
import { BsArrowRightShort } from "react-icons/bs";
const Banner = () => {
	const divStyle = {
		backgroundImage: "url(../../../../assets/bg.jpg",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	};
	return (
		<div>
			<Carousel>
				<div
					style={{
						backgroundImage: `url("https://i.ibb.co/59dHw0L/bg.jpg")`,
						backgroundSize: "cover",
					}}
					className="w-full h-[80vh]"
				>
					<div className="text-left pt-[200px] ml-20">
						<h2 className="text-3xl text-[#E52E06]">SALE UP TO 30% OFF</h2>
						<h1 className="text-7xl font-semibold text-[#333333] mt-6">
							Apple Watch Series
						</h1>
						<p className="text-xl mt-7 leading-10 text-[#333333] font-semibold">
							Feature packed at a better value than ever Powerful sensors to
							<br /> monitor your fitness
						</p>
						<div>
							<button className="flex pt-5 rounded-full  px-8 mt-5 bg-[#E52E06] duration-500 hover:bg-[#333333] text-white text-2xl">
								<span className="mt-[1px] font-semibold">Shop Now</span>
								<BsArrowRightShort className=" mb-4 w-10 h-10"></BsArrowRightShort>{" "}
							</button>
						</div>
					</div>
				</div>
				<div
					style={{
						backgroundImage: `url("https://i.ibb.co/nszz7RP/bg2.jpg")`,
						backgroundSize: "cover",
					}}
					className="w-full h-[80vh]"
				>
					<div className="text-left pt-[200px] ml-20">
						<h2 className="text-3xl text-[#E52E06]">New arrivals collection</h2>
						<h1 className="text-7xl font-semibold text-[#333333] mt-6">
							iPhone Accessories
						</h1>
						<p className="text-xl mt-7 leading-10 text-[#333333] font-semibold">
							Snap on a case, wallet, wireless charger battery pack all
							<br /> accessories you’re looking
						</p>
						<div>
							<button className="flex pt-5 rounded-full  px-8 mt-5 bg-[#E52E06] duration-500 hover:bg-[#333333] text-white text-2xl">
								<span className="mt-[1px] font-semibold">Shop Now</span>
								<BsArrowRightShort className=" mb-4 w-10 h-10"></BsArrowRightShort>{" "}
							</button>
						</div>
					</div>
				</div>
			</Carousel>
		</div>
	);
};

export default Banner;

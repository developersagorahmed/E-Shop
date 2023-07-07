import React from "react";
import Banner from "../Banner/Banner";
import Trending from "../Trending/Trending";
import Footer from "../Footer/Footer";
import Latest from "../Latest/Latest";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Trending></Trending>
			<Latest></Latest>
			<Footer></Footer>
		</div>
	);
};

export default Home;

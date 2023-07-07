import { Avatar, Badge, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/pngwing.com.png";
import { BiHeart, BiSearch, BiUser } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { AuthContext } from "./Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const navigate = useNavigate();
	const logoutBtn = () => {
		Swal.fire({
			title: "Are you sure You won't to Logout?",
			text: "You won't to Logout",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, Logout",
		}).then((result) => {
			if (result.isConfirmed) {
				logOut().then();
				navigate("/");
				localStorage.removeItem("access-token");
				Swal.fire("Logout", "You has been Logout.", "success");
			}
		});
	};
	return (
		<div className="navbar bg-white ">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<Link underline="hover" color="inherit" href="#">
							Home
						</Link>
						<li>
							<a>Parent</a>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div>
				<img className="w-[170px] h-[80px]" src={logo} alt="" />
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link className="text-xl font-bold hover:text-[#E74F06] duration-500 text-[#333339]">
							HOME
						</Link>
					</li>
					<li>
						<Link className="text-xl font-bold hover:text-[#E74F06] duration-500 text-[#333339]">
							ELECTRONICS
						</Link>
					</li>
					<li>
						<Link className="text-xl hover:text-[#E74F06] duration-500 font-bold text-[#333339]">
							BLOG
						</Link>
					</li>
					<li>
						<Link className="text-xl hover:text-[#E74F06] duration-500 font-bold text-[#333339]">
							PAGES
						</Link>
					</li>
					<li>
						<Link className="text-xl hover:text-[#E74F06] duration-500 font-bold text-[#333339]">
							CONTACT
						</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<div className="flex mr-10">
					<BiSearch className="mr-3 text-[40px] text-[#333339] hover:text-[#e74f06] duration-500"></BiSearch>
					<BiHeart className="text-[40px] mr-3 text-[#333339] hover:text-[#e74f06] duration-500"></BiHeart>
					<div>
						<FiShoppingCart className="text-[40px] mr-3 text-[#333339] hover:text-[#e74f06] duration-500"></FiShoppingCart>
					</div>
				</div>
				{user ? (
					<>
						<div className="dropdown mt-2 mr-4 border border-black rounded-full dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-full  rounded-full">
									{user?.photoURL ? (
										<>
											<img src={user?.photoURL} alt="" />
										</>
									) : (
										<>
											<BiUser></BiUser>
										</>
									)}
								</div>
							</label>
						</div>
					</>
				) : (
					<></>
				)}
				<div>
					{user ? (
						<>
							<button
								onClick={logoutBtn}
								className="hover:text-black  hover:bg-[#333333] duration-500 bg-[#E52E06] p-4 rounded-full text-white  font-bold text-lg"
							>
								Logout
							</button>
						</>
					) : (
						<>
							<Link
								to="/login"
								className="hover:text-black  hover:bg-[#333333] duration-500 bg-[#E52E06] p-4 rounded-full text-white  font-bold text-lg"
							>
								LogIn
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;

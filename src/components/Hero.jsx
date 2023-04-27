import React from 'react';
import Pattern from '../assets/pattern.svg';
import Img from '../assets/Ellipse.png';
import Img1 from '../assets/Ellipse1.png';
import Img2 from '../assets/Ellipse2.png';
import Img3 from '../assets/Ellipse3.png';
import Img4 from '../assets/Ellipse4.png';
import Img5 from '../assets/Ellipse5.png';
import { Link } from 'react-router-dom';


const Hero = () => {
	return (
		<div className='hero'>
			<img className="pattern w-full h-full" src={Pattern} alt="" />
			<div className="absolute lg:text-left text-center lg:top-72 top-40 lg:mx-32 mx-6">
				<div className="lg:w-2/3 text-white">
					<div className="text-white font-bold heading lg:text-7xl text-4xl">
						let's build, connect, collaborate
					</div>
					<div className="lg:w-96 my-6">
						Join us to build a web3 community from this part of the world and
						beyond.
					</div>

					<Link to={"/about"}>
						<div className="hero-btns w-80 flex mt-[2rem]">
							{/* <img
							className="github-icon mr-[1rem]"
							src="white_paper_assets/github.svg"
							alt="github"
						/> */}
							<button className="btn btn-primary p-2">View our white paper</button>
						</div>
					</Link>
				</div>
			</div>
			<img
				className="top-40 absolute w-32 hidden lg:block right-32"
				src={Img}
				alt=""
			/>
			<img
				className="top-80 absolute w-52 hidden lg:block right-0"
				src={Img1}
				alt=""
			/>
			<img
				className="top-[600px] absolute hidden lg:block w-40 right-80"
				src={Img2}
				alt=""
			/>
			<img
				className="top-80 absolute w-20 hidden lg:block right-[500px]"
				src={Img3}
				alt=""
			/>
			<img
				className="top-[350px] absolute w-44 hidden lg:block right-[250px]"
				src={Img4}
				alt=""
			/>
			<img
				className="top-[450px] absolute w-32 hidden lg:block right-[500px]"
				src={Img5}
				alt=""
			/>
			<img
				className="top-[650px] absolute w-28 hidden lg:block right-[100px]"
				src={Img}
				alt=""
			/>
			<img
				className="top-[200px] absolute w-24 hidden lg:block right-[330px]"
				src={Img1}
				alt=""
			/>
		</div>
	);
};

export default Hero;

import React from 'react';
import Pattern from '../assets/pattern.svg';
import Discord from '../assets/Discord.svg';
import Img from '../assets/Ellipse.png';

const Hero = () => {
	return (
		<div>
			<img className="pattern" src={Pattern} alt="" />
			<div className="absolute lg:text-left text-center lg:top-72 top-40 lg:mx-32 mx-6">
				<div className="lg:w-2/3 text-white">
					<div className="text-white font-bold heading lg:text-7xl text-4xl">
						let's build, connect, collaborate
					</div>
					<div className="lg:w-96 my-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
						harum
					</div>
					<button className="rounded-full lg:p-4 p-2 btn lg:w-72 w-52 lg:mx-0 mx-auto flex justify-evenly">
						<img className="w-8 h-8" src={Discord} alt="" />
						<div className="my-auto"> Join our communlty</div>
					</button>
				</div>
			</div>
			<img
				className="top-40 absolute w-32 hidden lg:block right-32"
				src={Img}
				alt=""
			/>
			<img
				className="top-80 absolute w-52 hidden lg:block right-0"
				src={Img}
				alt=""
			/>
			<img
				className="top-[600px] absolute hidden lg:block w-40 right-80"
				src={Img}
				alt=""
			/>
			<img
				className="top-80 absolute w-20 hidden lg:block right-[500px]"
				src={Img}
				alt=""
			/>
			<img
				className="top-[350px] absolute w-44 hidden lg:block right-[250px]"
				src={Img}
				alt=""
			/>
			<img
				className="top-[450px] absolute w-32 hidden lg:block right-[500px]"
				src={Img}
				alt=""
			/>
			<img
				className="top-[650px] absolute w-28 hidden lg:block right-[100px]"
				src={Img}
				alt=""
			/>
			<img
				className="top-[200px] absolute w-24 hidden lg:block right-[330px]"
				src={Img}
				alt=""
			/>
		</div>
	);
};

export default Hero;

import React from 'react';
import Pattern from '../assets/pattern.svg';
import Discord from '../assets/Discord.svg';
import Img from '../assets/Ellipse.png';
import Img1 from '../assets/Ellipse1.png';
import Img2 from '../assets/Ellipse2.png';
import Img3 from '../assets/Ellipse3.png';
import Img4 from '../assets/Ellipse4.png';
import Img5 from '../assets/Ellipse5.png';


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
					<a href="https://discord.gg/tn7tc4GK" target="blank">
						<button className="rounded-full lg:p-4 p-2 btn w-72 lg:mx-0 mx-auto flex justify-evenly">
							<img className="w-8 h-8" src={Discord} alt="" />
							<div className="my-auto"> Join our communlty</div>
						</button>
					</a>
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

import React from 'react';
import Pattern from '../../assets/pattern.svg';
import { sponsorData } from './sponsorData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper';
// import { useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import './styles.css';

const Sponsor = () => {
	return (
		<div
			className="p-10 md:15 lg:p-20"
			style={{ backgroundImage: `url(${Pattern})` }}
		>
			<h2 className="heading text-white text-2xl md:text-4xl lg:text-5xl text-center">
				Sponsor/Partners
			</h2>

			<div className="mt-10 md:mt15 lg: 20">
				<Swiper
					slidesPerView={3}
					navigation
					grid={{
						rows: 2,
						fill: 'row',
					}}
					spaceBetween={20}
					pagination={{
						clickable: true,
					}}
					modules={[Grid, Navigation]}
					className="mySwiper"
					breakpoints={{
						320: {
							slidesPerView: 1,
							spaceBetween: 10,
              slidesPerColumn: 1,
						},
						480: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						640: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
					}}
				>
					{sponsorData.map((item) => (
						<SwiperSlide key={item.id}>
							<img className='' src={item.image} alt="" />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Sponsor;

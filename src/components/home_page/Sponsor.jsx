import React from 'react';
import Pattern from '../../assets/pattern.svg';
import { sponsorData } from './sponsorData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
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

			<div className="mt-10 md:mt-15 lg: 20">
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					navigation={true}
					modules={[Navigation]}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
				>
					{sponsorData.map((item) => (
						<SwiperSlide key={item.id}>
							<div>
								<img className='w-full rounded-md' src={item.image} alt="" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Sponsor;

import React from 'react';
import { Helmet } from 'react-helmet';
import purpleMarkerStripe from '../../img/overlays/purple-marker-stripe.svg';
import bkg from '../../img/coral-reef-bg.webp';

export default function Hero({ data }) {
	return (
		<>
			<Helmet>
				<link
					rel='preload'
					href={bkg}
					as='image'
				/>
			</Helmet>
			<header className='z-10 relative flex justify-center items-center w-full h-fit py-24  mb-[4rem] bg-hero  bg-center bg-cover'>
				<div className='p-4 rounded-md -translate-y-[20px] flex flex-col space-y-4 items-center justify-center h-full w-fit'>
					<div className='w-full items-center text-center flex flex-col'>
						<div className='relative flex flex-col -space-y-8'>
							<span className='drop-shadow-md z-10 break-words null:w-fit sm:w-[500px] lg:w-[740px] leading-none serif null:text-xxxl mobile:text-billboard text-center xbold text-dark dark:text-light/80  px-8 rounded-full'>
								{data.header}{' '}
								<span className='relative w-fit h-fit inline-block'>
									together.
									{/* <img
									className='-z-10 absolute -bottom-1 right-3 opacity-80 dark:opacity-50 w-[105%] ' // Adjust these properties
									src={purpleMarkerStripe}
									alt='Marker Stripe Background'></img> */}
								</span>
							</span>
						</div>
					</div>
					<div className='w-full justify-center items-center flex flex-col space-y-12'>
						<p className='drop-shadow-md xbold break-words sans null:text-md mobile:text-lg text-light dark:text-dark'>
							{data.subtext}
						</p>
						<div className='sans null:text-md xbold text-secondary dark:bg-dark bg-light cursor-pointer select-none md:hover:opacity-90 active:scale-95 py-2 px-6 rounded-md'>
							GET STARTED
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

import React, { useState } from 'react';
import SigninModal from '../sign in/SigninModal';
import UpcomingWebinarItem from './UpcomingWebinarItem';
import SeeMore from '../pieces/SeeMore';

export default function UpcomingWebinars({ webinars }) {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<div className='flex flex-col w-full lg:w-[50%] h-full space-y-4 items-center null:px-4 mobile:px-8 sm:px-20 justify-center'>
				<div className='text-dark dark:text-light/70 flex flex-col -space-y-2 sm:-space-y-3 null:text-lg xs:text-[24px] mobile:text-xl md:text-xxl'>
					<span className='serif w-[480px] text-center'>Register to save your seat in our</span>
					<span className='serif w-[480px] text-center'>next free weekly webinar.</span>
				</div>
				<div
					onClick={() => openModal()}
					className='null:text-md sm:text-lg bg-dark dark:bg-light/70 dark:text-darkAccent xbold select-none md:hover:opacity-50 active:scale-95 cursor-pointer text-light mt-20 p-2 rounded-md w-fit sans'>
					REGISTER NOW
				</div>
				<div className='flex w-full h-full items-center justify-center'>
					<div className='flex w-full justify-between items-end border-b-2 border-dark/10'>
						<span className='sans xbold text-md text-nowrap text-dark dark:text-light/70'>
							UPCOMING WEBINARS
						</span>
						<SeeMore
							text='See all'
							colorClass='text-four'
						/>
					</div>
				</div>
				<div className='overflow-x-auto flex w-full h-full space-x-4 pb-4 px-4 justify-start'>
					{webinars.map((webinar, index) => (
						<UpcomingWebinarItem
							key={index}
							webinar={webinar}
						/>
					))}
				</div>
			</div>
			<SigninModal
				isModalOpen={isModalOpen}
				closeModal={closeModal}
				showSignin={false}
			/>
		</>
	);
}

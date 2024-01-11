import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SeeMore from '../pieces/SeeMore';
import VideoItem from '../webinar/VideoItem';

export default function ResourcesSection({ content }) {
	const videoCatalog = [
		{
			title: 'Christmas came early',
			date: 'Jun 2024',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-secondary',
		},
		{
			title: 'Adam Driver does it again',
			date: 'Mar 2024',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-four',
		},
		{
			title: 'Robin Williams best moments',
			date: 'Jan 2024',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-primary',
		},
		// Add more video items as needed
	];

	const previousWebinars = [
		{
			title: 'Superman sees the skies',
			date: 'Dec 2023',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-primary',
		},
		{
			title: 'Me at the zoo',
			date: 'Oct 2023',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-secondary',
		},
		{
			title: 'Garfield eats lasagna',
			date: 'Sep 2023',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-tertiary',
		},
		// Add more video items as needed
	];

	return (
		<section
			id='resources'
			className='w-full h-full'>
			<div className='flex flex-col space-y-2 justify-center items-center'>
				<div className='flex flex-col -space-y-1 w-full text-start'>
					<span className={`text-xxl serif`}>Resources</span>
					<span className={`sans text-md `}>
						Explore our collection of informative videos and previous webinars.
					</span>
				</div>
				<span className='w-full border-b-2 border-dark/10'></span>
			</div>
			<div className='flex flex-col text-start justify-center'>
				<div className='flex flex-col -space-y-1 my-4 text-end'>
					<span className={`sans text-sm `}>SEE US IN ACTION</span>
					<span className={`text-xl serif`}>Video catalog</span>
				</div>
				<div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
					{videoCatalog.map((video, index) => (
						<VideoItem
							key={index}
							video={video}
						/>
					))}
				</div>
				<SeeMore />
			</div>
			<div className='w-full flex flex-col justify-center my-12'>
				<div className='flex flex-col -space-y-1 my-4 text-end'>
					<span className={`sans text-sm `}>FREE WEEKLY WEBINARS</span>
					<span className={`text-xl serif`}>Previous webinars</span>
				</div>

				<div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
					{previousWebinars.map((video, index) => (
						<VideoItem
							key={index}
							video={video}
						/>
					))}
				</div>

				<SeeMore />
			</div>
		</section>
	);
}
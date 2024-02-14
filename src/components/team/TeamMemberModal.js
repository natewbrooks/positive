import React from 'react';
import Modal from '../Modal';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function TeamMemberModal({ member }) {
	const imageData = member.pic ? getImage(member.pic) : null;

	return (
		<Modal modalId={member.name}>
			<div className='text-dark dark:text-light/70 text-start flex w-full justify-between flex-col space-y-4 lg:flex-row lg:space-x-4 overflow-hidden'>
				<div className='flex items-center border-b-2 border-dark/10 dark:border-light/10 pb-4 lg:border-none xl:pb-0'>
					<div className='relative flex flex-col justify-center items-center space-y-4 w-full px-8'>
						<div className='w-fit h-fit bg-lightAccent dark:bg-dark/40  border-b-4 border-secondary rounded-t-full pt-4'>
							{imageData ? (
								<GatsbyImage
									image={imageData}
									alt={member.name}
									className='w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]'
								/>
							) : (
								<FaUser
									className={`w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[140px] md:h-[140px] xxl:w-[200px] xxl:h-[200px]`}
								/>
							)}
						</div>

						<div className='flex flex-col items-center space-y-2'>
							<div className='flex flex-col items-center text-center text-nowrap -space-y-1'>
								<span className='sans dark:text-light/80 xbold text-lg'>{member.name}</span>
								<span className='sans text-sm'>{member.position}</span>
							</div>
							<div className='flex flex-row space-x-2'>
								<FaLinkedin size={24} />
								<FaEnvelope size={24} />
							</div>
						</div>
					</div>
				</div>
				<div className='null:w-fit lg:w-[800px] flex flex-col overflow-y-auto'>
					<div className='flex flex-col space-y-1 border-l-4 p-4 border-primary'>
						<span className='sans text-sm xbold dark:text-light/80 '>CAREER BACKGROUND</span>
						<span className='sans text-md'>{member.careerBackground}</span>
					</div>
					<div className='flex flex-col space-y-1 border-l-4 p-4 border-secondary'>
						<span className='sans text-sm xbold dark:text-light/80 '>SPECIALTIES</span>
						<span className='sans text-md'>{member.specialities}</span>
					</div>
					<div className='flex flex-col space-y-1 border-l-4 p-4 border-tertiary'>
						<span className='sans text-sm xbold dark:text-light/80 '>INDUSTRY EXPERIENCE</span>
						<span className='sans text-md'>{member.industryExperience}</span>
					</div>
					<div className='flex flex-col space-y-1 border-l-4 p-4 border-four'>
						<span className='sans text-sm xbold dark:text-light/80 '>CERTIFICATIONS</span>
						<span className='sans text-md'>{member.certifications}</span>
					</div>
					<div className='flex flex-col space-y-1 border-l-4 p-4 border-primary'>
						<span className='sans text-sm xbold dark:text-light/80 '>EDUCATION</span>
						<span className='sans text-md'>{member.education}</span>
					</div>
				</div>
			</div>
		</Modal>
	);
}

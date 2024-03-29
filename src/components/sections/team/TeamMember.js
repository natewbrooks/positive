import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import TeamMemberModal from './TeamMemberModal';
import { useModal } from '../../../contexts/ModalContext';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function TeamMember({ member, color, modalId, className, isLastItem }) {
	const { openModal } = useModal();
	const imageData = member.pic ? getImage(member.pic) : null;

	return (
		<div
			className={`${className} ${
				isLastItem ? 'w-fit' : 'w-full'
			} max-h-[420px] flex flex-col justify-end items-end group`}>
			<div
				onClick={() => openModal(modalId)}
				className={`justify-end items-end md:group-hover:cursor-pointer bg-dark/10 md:group-hover:bg-opacity-50 transition-all duration-300 bg-${color} flex flex-col w-[300px] h-[240px] rounded-md aspect-square`}>
				<div className='relative flex flex-col h-fit w-full'>
					{imageData ? (
						<GatsbyImage
							image={imageData}
							alt={member.name}
							className='absolute bottom-0 w-full h-auto max-h-[520px]'
						/>
					) : (
						<FaUser
							size={180}
							className='text-dark'
						/>
					)}
				</div>
				<div
					className={`pl-2 bg-light dark:bg-dark pt-1 w-full h-full flex flex-col text-start pb-1 border-b-[3px] border-x-[3px]  rounded-b-md border-${color} leading-snug`}
					onClick={() => openModal(modalId)}>
					<span className='sans xbold text-lg dark:text-light/80'>{member.name}</span>
					<span className='sans text-sm'>{member.position}</span>
				</div>
			</div>

			<TeamMemberModal member={member} />
		</div>
	);
}

// TeamMember.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	title: PropTypes.string.isRequired,
// 	description: PropTypes.string,
// };

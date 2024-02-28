import React from 'react';
import TeamMembers from '../../team/TeamMembers';
import SeeMore from '../../pieces/SeeMore';

const teamColors = ['four', 'tertiary', 'secondary', 'primary'];

export default function TeamSection({ data }) {
	return (
		<div className='text-dark dark:text-light/60 flex flex-col items-center justify-center w-full null:space-y-12 sm:space-y-8'>
			<div className='flex w-full flex-col leading-snug text-end'>
				<span className='sans text-sm '>{data.subtext.toUpperCase()}</span>

				<span className='text-xxl serif dark:text-light/80 leading-none'>{data.header}</span>
			</div>

			<TeamMembers
				gridItems={data.members}
				colors={teamColors}
			/>
		</div>
	);
}

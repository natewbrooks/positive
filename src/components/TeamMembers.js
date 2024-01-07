import React from 'react';
import PropTypes from 'prop-types';
import TeamMember from './TeamMember';

export default function TeamMembers({ gridItems }) {
	return (
		<div className='w-full h-full flex justify-center'>
			<div className='flex flex-col md:grid md:grid-cols-2 gap-y-8 md:gap-x-8 w-fit h-fit'>
				{gridItems.map((item, index) => (
					<TeamMember key={index} member={item} />
				))}
			</div>
		</div>
	);
}

// TeamMembers.propTypes = {
// 	gridItems: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			name: PropTypes.string.isRequired,
// 			title: PropTypes.string.isRequired,
// 			description: PropTypes.string,
// 		})
// 	).isRequired,
// };

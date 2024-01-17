import React from 'react';
import PropTypes from 'prop-types';
import { VideoPostTemplate } from '../../templates/video-post';

const VideoPostPreview = ({ entry, widgetFor }) => {
	const tags = entry.getIn(['data', 'tags']);
	const title = entry.getIn(['data', 'title']);
	const description = entry.getIn(['data', 'description']);
	const date = entry.getIn(['data', 'date']);
	const videofile = entry.getIn(['data', 'videofile']);

	return (
		<VideoPostTemplate
			content={widgetFor('body')}
			description={description}
			tags={tags && tags.toJS()}
			title={title}
			helmet={null} // Helmet not needed for preview
			date={date}
			videofile={videofile} // Adjust based on how videofile data is structured in your CMS
		/>
	);
};

VideoPostPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
};

export default VideoPostPreview;

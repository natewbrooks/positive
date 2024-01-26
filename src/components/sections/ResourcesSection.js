import React from 'react';
import { graphql } from 'gatsby';
import SeeMore from '../pieces/SeeMore';
import VideoItem from '../webinar/VideoItem';
import BlogPostItem from '../blog/BlogPostItem';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import bgTop from '../../img/bg-waves/dark-purple-waves/dark-purple-wave-top.svg';
import bgBottom from '../../img/bg-waves/dark-purple-waves/dark-purple-wave-bottom.svg';

export default function ResourcesSection({ data }) {
	if (!data) {
		return <div>Loading...</div>;
	}

	const blogPosts = data.blogs;
	const videoCatalog = data.videos;
	const previousWebinars = data.videos;

	return (
		<section
			id='resources'
			className='w-full h-full '>
			<div className='z-0 absolute w-full h-full left-0'>
				<img
					src={bgTop}
					style={{ transform: 'translateY(-90%)' }}
					className='absolute w-full top-0'></img>
				<div className='absolute bg-four w-full h-full'></div>
			</div>

			<div className='z-10 w-full h-full flex flex-col space-y-8 text-dark'>
				<div className='z-10 flex flex-col space-y-2 justify-center items-center'>
					<AnchorLink
						to='/resources/'
						className='group text-start flex flex-col -space-y-1 w-full '>
						<span className={`group-md:hover:opacity-50 text-xxl serif`}>Resources</span>
						<span className={`sans text-md w-full`}>
							Explore our collection of informative videos and previous webinars.
						</span>
					</AnchorLink>
					<span className='border-b-2 dark:border-dark/10 border-light/10 w-full'></span>
				</div>
				<div className='z-10 flex flex-col text-start justify-center'>
					<AnchorLink
						to='/resources/blog/'
						className='w-full group flex flex-col -space-y-1 my-4 text-end'>
						<span className={`sans text-sm `}>READ OUR STORIES</span>
						<span className={`group-md:hover:opacity-50 text-xl serif`}>Blog posts</span>
					</AnchorLink>
					<div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-6 gap-x-4'>
						{blogPosts.map((post, index) => (
							<BlogPostItem
								key={index}
								post={{
									title: post.frontmatter.title,
									date: post.frontmatter.date,
									description: post.frontmatter.description,
									featuredpost: post.frontmatter.featuredpost,
									image: post.frontmatter.image,
									body: post.frontmatter.html,
									slug: post.fields.slug,
									authors: post.frontmatter.authors,
									isVideo: false,
								}}
							/>
						))}
					</div>
					<AnchorLink
						title='Blog'
						to='/resources/blog/'>
						<SeeMore />
					</AnchorLink>
				</div>
				<div className='z-10 flex flex-col text-start justify-center'>
					<AnchorLink
						to='/resources/videos/'
						className='group flex flex-col -space-y-1 my-4 text-end'>
						<span className={`sans text-sm `}>SEE US IN ACTION</span>
						<span className={`group-md:hover:opacity-50 text-xl serif`}>Video catalog</span>
					</AnchorLink>
					<div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4'>
						{videoCatalog.map((video, index) => (
							<VideoItem
								key={index}
								video={{
									title: video.frontmatter.title,
									date: video.frontmatter.date,
									description: video.frontmatter.description,
									videofile: video.frontmatter.videofile
										? video.frontmatter.videofile.publicURL
										: null,
									slug: video.fields.slug,
									isVideo: false,
								}}
							/>
						))}
					</div>
					<AnchorLink
						title='Videos'
						to='/resources/videos/'>
						<SeeMore />
					</AnchorLink>
				</div>
			</div>
		</section>
	);
}

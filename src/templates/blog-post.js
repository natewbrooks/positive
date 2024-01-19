import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ResourcesNav from '../components/resources/ResourcesNav';
import '../styles/blog-post.css';

export const BlogPostTemplate = ({
	description,
	title,
	helmet,
	date,
	featuredpost,
	image,
	body,
	authors,
}) => {
	const autuers = () => {
		if (authors !== undefined && Array.isArray(authors)) {
			return authors.join(', ').toUpperCase();
		} else if (authors !== undefined && typeof authors === 'string') {
			return authors.toUpperCase();
		}
		return '';
	};

	const daet = () => {
		if (typeof date === 'string') {
			return date.toUpperCase();
		}
		return '';
	};

	return (
		<>
			{helmet || ''}
			<div className='pt-4 null:px-2 mobile:px-6 sm:px-8 md:px-10 lg:px-20 xl:px-60 2xl:px-80 w-full h-full'>
				<ResourcesNav pageTitle={'Return'} />
				<div className='justify-center items-center text-center flex w-full flex-col bg-dark/10 rounded-md null:py-20 md:px-20'>
					<div className='max-w-[80%] w-full null:text-xxl md:text-xxxl xl:text-billboard serif xbold text-dark leading-tight'>
						<div className='flex flex-col w-full px-8 text-dark/40'>
							<div className='text-center w-full null:text-md sm:text-lg sans xbold '>
								PUBLISHED {daet()}
							</div>
							<div className='text-center  w-full null:text-md sm:text-lg sans xbold text-dark/40'>
								{autuers()}
							</div>
						</div>
						{title}
					</div>
				</div>
				<section className='w-full h-full mt-8 mb-20 flex flex-col  items-center justify-center'>
					<div className='px-4 w-full h-full flex flex-col space-y-4 justify-center items-center'>
						<div className='w-full h-full flex flex-col'>
							<article
								className='blog-post-container xl:px-[4rem] xxl:px-[24rem] text-dark'
								dangerouslySetInnerHTML={{ __html: body }}
							/>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

BlogPostTemplate.propTypes = {
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object,
	featuredpost: PropTypes.bool,
	image: PropTypes.object,
	authors: PropTypes.object,
};

const BlogPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<BlogPostTemplate
				helmet={
					<Helmet titleTemplate='%s | Blog'>
						<title>{`${post.frontmatter.title}`}</title>
						<meta
							name='description'
							content={`${post.frontmatter.description}`}
						/>
					</Helmet>
				}
				description={post.frontmatter.description}
				date={post.frontmatter.date}
				title={post.frontmatter.title}
				featuredpost={post.frontmatter.featuredpost}
				image={post.frontmatter.image}
				authors={post.frontmatter.authors}
				body={post.html}
			/>
		</Layout>
	);
};

BlogPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default BlogPost;

export const pageQuery = graphql`
	query VideoPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				title
				date(formatString: "DD MMM YYYY")
				description
				featuredpost
				authors
				image {
					childImageSharp {
						gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
					}
				}
			}
		}
	}
`;

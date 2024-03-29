import React, { useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../../components/Layout';
import ResourcesNav from '../../../components/resources/ResourcesNav';
import ResourcesGridLayout from '../../../components/resources/ResourcesGridLayout';

const Blog = ({ data }) => {
	let blogs = data.allMarkdownRemark.nodes.map((node) => ({
		title: node.frontmatter.title,
		date: node.frontmatter.date,
		description: node.frontmatter.description,
		featuredpost: node.frontmatter.featuredpost,
		image: node.frontmatter.image,
		body: node.frontmatter.html,
		slug: node.fields.slug,
		authors: node.frontmatter.authors,
		isVideo: false,
		isWebinar: false,
	}));

	const [sortedBlogs, setSortedBlogs] = useState(blogs);

	useEffect(() => {
		const featured = blogs
			.filter((post) => post.featuredpost)
			.sort((a, b) => new Date(b.date) - new Date(a.date));
		const nonfeatured = blogs
			.filter((post) => !post.featuredpost)
			.sort((a, b) => new Date(b.date) - new Date(a.date));

		setSortedBlogs([...featured, ...nonfeatured]);
	}, [data]);

	return (
		<>
			<Layout>
				<div className='pt-[6rem] pb-[18rem] null:px-4 mobile:px-6 sm:px-8 md:px-10 lg:px-20 xl:px-60 2xl:px-80 w-full h-full text-center dark:text-light/70'>
					<ResourcesNav
						pageTitle={'Blog Posts'}
						showTitle={true}
					/>
					<ResourcesGridLayout mediaItems={sortedBlogs} />
				</div>
			</Layout>
		</>
	);
};

export default Blog;

export const query = graphql`
	query BlogQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
		) {
			nodes {
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
				fields {
					slug
				}
				html
			}
		}
	}
`;

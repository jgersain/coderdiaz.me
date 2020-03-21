import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import withBaseLayout from "../../layouts/BaseLayout";

const PostPage = ({ data }: any) => {
  const { excerpt, html, frontmatter } = data.post;

  return (<>
    <Helmet>
      <title>{frontmatter.title} ― Javier Diaz: Software Engineer and teacher</title>
      <meta name="description" content={excerpt} />
    </Helmet>
    <section className="bg-darken h-95">
      <div className="container px-4 sm:px-8 md:px-8 lg:max-w-screen-lg mx-auto relative">
        <h1 className="text-3xl lg:text-4xl font-montserrat md:text-center text-gray-300 pt-12 pb-5">{frontmatter.title}</h1>
        <div className="relative pb-72 md:pb-72 lg:pb-95">
          <LazyLoadImage
            className="mt-4 rounded-lg absolute object-cover h-full w-full"
            src={frontmatter.featured_image} />
        </div>
      </div>
    </section>
    <section className="min-h-screen mt-36 lg:mt-72 pb-20">
      <div
        className="__html container px-4 sm:px-8 md:px-8 lg:max-w-screen-lg mx-auto relative text-gray-500"
        dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  </>);
};

export default withBaseLayout(PostPage, true);

export const pageQuery = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug }}) {
      id
      excerpt(pruneLength: 120)
      html
      frontmatter {
        title
        featured_image
      }
      fields {
        slug
      }
    }
  }
`;

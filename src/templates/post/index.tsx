import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet-async";
import Img, { FluidObject } from "gatsby-image";
import { Disqus } from "gatsby-plugin-disqus";
import { format } from "date-fns";
import withBaseLayout from "../../layouts/BaseLayout";

interface IPostNode {
  title: string;
  published_at: string;
  featured_image: {
    childImageSharp: {
      fluid: FluidObject;
    }
  }
  substract: string;
  tags: string[];
}

interface IPostPageProps {
  data: {
    post: {
      id: string;
      excerpt: string;
      html: string;
      frontmatter: IPostNode;
    }
  }
  location: {
    href: String;
  }
}

const PostPage = ({ data, location }: IPostPageProps) => {
  const { id, html, frontmatter } = data.post;

  // Configuration for Disqus
  const disqusConfig = {
    url: location.href,
    title: frontmatter.title,
    identifier: id,
  };

  return (<>
    <Helmet>
      <title>{frontmatter.title} ― Javier Diaz: Software Engineer and teacher</title>
      <meta name="description" content={frontmatter.substract} />
    </Helmet>
    <section className="bg-darken h-150">
      <div className="container px-4 sm:px-8 md:px-8 mx-auto relative">
        <h1 className="text-3xl lg:text-4xl pt-12 font-montserrat lg:max-w-screen-lg md:text-center mx-auto text-gray-300 pb-5">
          {frontmatter.title}
        </h1>
        <div className="flex justify-center text-gray-600 pb-5 text-lg">
          {format(new Date(frontmatter.published_at), "LLLL dd, yyyy")}
        </div>
        <div className="relative pb-72 md:pb-72 lg:pb-95">
          <Img
            className="mt-4 rounded-lg absolute object-cover h-full w-full"
            fluid={frontmatter.featured_image.childImageSharp.fluid} />
        </div>
      </div>
    </section>
    <section className="min-h-screen mt-36 lg:mt-80 pb-20">
      <div className="container px-4 sm:px-8 lg:max-w-screen-lg md:px-8 mt-8 mx-auto relative text-gray-100 text-lg leading-loose">
        {frontmatter.substract}
      </div>
      <div
        className="__html container px-4 sm:px-8 md:px-8 lg:max-w-screen-lg mx-auto relative text-gray-500 text-lg mt-4"
        dangerouslySetInnerHTML={{ __html: html }} />
      <div className="container px-4 sm:px-8 lg:max-w-screen-lg md:px-8 mt-4 mx-auto relative">
        <div className="flex pt-8 text-lg">
          {frontmatter.tags.map(tag =>
            <span className="text-gray-400 font-bold px-2 py-2">
              {`# ${tag}`}
            </span>
          )}
        </div>
      </div>
      <div className="container px-4 sm:px-8 lg:max-w-screen-lg md:px-8 mt-8 mx-auto relative">
        <Disqus config={disqusConfig} />
      </div>
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
        published_at
        featured_image {
          childImageSharp {
            fluid(quality: 75) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        substract
        tags
      }
      fields {
        slug
      }
    }
  }
`;

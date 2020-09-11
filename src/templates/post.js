import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import {MDXRenderer} from 'gatsby-plugin-mdx';


export const query = graphql`
    query($slug: String!){
        mdx(frontmatter: {slug : {eq: $slug}}){
        frontmatter {
            title
            author
        }
        body
        }
    }
`;
const TemplatePost = ({data}) => {
    return(
        <Layout>
            <h1>{data.mdx.frontmatter.title}</h1>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Layout>
    )
};
export default TemplatePost;
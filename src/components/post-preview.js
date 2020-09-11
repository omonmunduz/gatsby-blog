import React from 'react';
import { css } from '@emotion/core';
import ReadLink from '../utility-components/readPost';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const PostPreview = ({post}) => (
    <article
    css = {css`
            padding:0.75rem;
            border-bottom: 1px solid #2660A4;
            display: flex;
        `}>
        <Link to= {post.slug}
        css={css` width: 100px; height: 100px;`}>
            <Image fluid = {post.image.sharp.fluid} alt = {post.title}/>
        </Link>
        <div css = {css` margin-left: 30px;`}>
            <h3>
            <ReadLink to = {post.slug}
            css={css`color:#2660A4`}>{post.title}</ReadLink>
            </h3>
            <p>{post.excerpt}</p>
            <ReadLink to = {post.slug}> read this post &rarr;</ReadLink>
        </div>
    </article>
);
export default PostPreview;
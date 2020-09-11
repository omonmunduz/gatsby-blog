import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import GoToBtn from '../utility-components/GoToBtn';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
import Hero from '../components/hero';

export default () => {
    const posts = usePosts()

    return(
        <>
            <Hero/>
            <Layout>
                <h1>Hello Frontend Masters!</h1>
                <GoToBtn><Link to="/about/">Learn about me &rarr;</Link></GoToBtn>
                <h3>Recent posts</h3>
                {
                    posts.map(post => (
                        <PostPreview key = {post.slug} post = {post} />
                    ))}
            </Layout>
        </>
    )
    
}



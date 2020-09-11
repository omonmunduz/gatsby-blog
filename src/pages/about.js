import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import GoToBtn from '../utility-components/GoToBtn';

export default () => (
    <Layout>
        <h1>About page</h1>
        <p>This is an about page</p>
        <GoToBtn><Link to="/">&larr; go back to home</Link></GoToBtn>
    </Layout>
)
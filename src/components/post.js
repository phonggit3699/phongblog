import React from 'react';

import './css/posts.css';

const posts = ( { post }) =>{

    function createMarkup(html) {
        return { __html: html };
    }

    const usingHtmlInDB = function MyComponent(html) {
        return <div dangerouslySetInnerHTML={createMarkup(html)}/>;
    }

    return(
        <div className="posts-container">
            <h4 className="title">{post.title}</h4>
            <div className="img-des">
                <img src={ post.img} alt="PhotoIT" />
                {usingHtmlInDB(post.des)}
            </div>
        </div>
    );
}

export default posts;
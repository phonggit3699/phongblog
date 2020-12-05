import './css/relatedPosts.css'
import React, { useState, useEffect } from 'react';
import { getCategoryPostFromAPI } from '../API';
import { Link } from "react-router-dom";

const RelatedPosts = ({ category }) => {

    const getCategory = category;

    const [getRelatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        async function getCategoryPostFromAPIF() {
            const res = await getCategoryPostFromAPI(getCategory);
            setRelatedPosts(res.data);
        }
        getCategoryPostFromAPIF();
    }, [getCategory])

    return (
        <div className='relatedPosts-container'>
            <h3>Các bài viết liên quan</h3>
            <div className='relatedPosts-container-content'>
                {
                    getRelatedPosts.map((post) => (
                        <Link  to={`/post/${post._id}`} key={post._id} className='box'>
                            <img src={post.img} alt="Related Post"  />
                            <p className='relatedTitle'>{post.title}</p>
                        </Link>
                    ))
                }
            </div>
        </div>

    )
}

export default RelatedPosts;
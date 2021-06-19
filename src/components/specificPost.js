import './css/specificPost.css';
import React, { useState, useEffect } from 'react';
import { getSpecificPostFromAPI } from '../API';
import Spinner from './spinner';
import { useRouteMatch } from "react-router-dom";
import RelatedPosts from './relatedPosts'
const SpecificPost = () => {

    const match = useRouteMatch();

    const [specificPost, setSpecificPost] = useState([]);

    const [viewSpinner, setViewSpninner] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        setViewSpninner(true);
    }, [match.params.id]);


    useEffect(() => {
        async function getSpecificPostFromAPIF() {
            const res = await getSpecificPostFromAPI(match.params.id);
            setSpecificPost(res.data);
            document.title = `${res.data.title} | FongBlog`;
            setViewSpninner(false);

        }
        getSpecificPostFromAPIF();

    }, [match.params.id]);


    function createMarkup(html) {
        return { __html: html };
    }

    const usingHtmlInDB = function MyComponent(html) {
        return <div dangerouslySetInnerHTML={createMarkup(html)} />;
    }


    const dateAt = new Date(specificPost.date).toLocaleDateString();

    return (
        <div className="specificPost-container">
            {viewSpinner ? <Spinner /> : ''}
            <div className={viewSpinner ? 'displayNone' : 'displayBlock'}>
                <h2 className='title'>{specificPost.title}</h2>
                {usingHtmlInDB(specificPost.des)}
                <img src={specificPost.img} alt='ImgSpecificPost' />
                {usingHtmlInDB(specificPost.post)}
                <small>Thể loại: {specificPost.category}</small>
                <div className="inforPost">
                    <span>{`Tác giả: ${specificPost.author}`} </span>
                    <span>{dateAt} </span>
                </div>
                <RelatedPosts category={specificPost.category} />
                <div className="fb-comments fb-chat" data-href="http://localhost:3000/page" data-numposts="3" data-width="100%"></div>
            </div>
        </div>
    );
}

export default SpecificPost;
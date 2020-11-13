import React, { useState, useEffect } from 'react';
import { getSpecificPostFromAPI } from '../API';
import Spinner from './spinner';
import { useRouteMatch } from "react-router-dom";
import './css/specificPost.css';
const SpecificPost = () => {

    const match = useRouteMatch();

    const [specificPost, setSpecificPost] = useState([]);

    const [viewSpinner, setViewSpninner] = useState(true);

    useEffect(() => {
        let isMounted = true;
        getSpecificPostFromAPI(match.params.id).then((data) => {
            if (isMounted) {
                setSpecificPost(data);
                setViewSpninner(false);
            }
        })

    return () =>  isMounted = false ;
}, []);

const dateAt = new Date(specificPost.Date).toLocaleDateString();

return (
    <div className="specificPost-container container">
        {viewSpinner ? <Spinner /> : ''}
        <h2>{specificPost.title}</h2>
        <img src={specificPost.img} alt='ImgSpecificPost' />
        <p>{specificPost.post}</p>
        <div className="inforPost">
            <span>{`Tác giả: ${specificPost.author}`} </span>
            <span>{dateAt} </span>
        </div>
        <div className="fb-comments fbPlugin" data-href="http://localhost:3000" data-numposts="5" data-width="100%"></div>
    </div>
);
}

export default SpecificPost;
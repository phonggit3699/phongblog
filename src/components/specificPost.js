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
        async function getSpecificPostFromAPIF() {
            const res = await getSpecificPostFromAPI(match.params.id);
            setSpecificPost(res.data);
            document.title = `${res.data.title} | FongBlog`;
            setViewSpninner(false);

        }
        getSpecificPostFromAPIF();

    }, []);

    const dateAt = new Date(specificPost.date).toLocaleDateString();

    return (
        <div className="specificPost-container">
            {viewSpinner ? <Spinner /> : ''}
            <h2>{specificPost.title}</h2>
            <p>{specificPost.des}</p>
            <img src={specificPost.img} alt='ImgSpecificPost' />
            <h3>{specificPost.heading1}</h3>
            <p>{specificPost.paragraph1}</p>
            {specificPost.img2 && <img src={specificPost.img2} alt='ImgSpecificPost'/>}
            {specificPost.heading2 && <h3 >{specificPost.heading2}</h3>}
            {specificPost.paragraph2 && <p>{specificPost.paragraph2}</p>}
            {specificPost.img3 && <img src={specificPost.img3} alt='ImgSpecificPost'/>}
            {specificPost.heading3 && <h3 >{specificPost.heading3}</h3>}
            {specificPost.paragraph3 && <p>{specificPost.paragraph3}</p>}
            <div className="inforPost">
                <span>{`Tác giả: ${specificPost.author}`} </span>
                <span>{dateAt} </span>
            </div>

            <div className="fb-comments fb-chat" data-href="http://localhost:3000/page" data-numposts="3" data-width="100%"></div>

        </div>
    );
}

export default SpecificPost;
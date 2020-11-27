import './css/home.css';
import Posts from './post';
import React, { useState, useEffect, useMemo } from 'react';
import { getPostFromAPI, getTotalPostFromAPI } from '../API';
import 'dotenv';
import { Link } from "react-router-dom";
import Spinner from './spinner';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { scroller } from 'react-scroll';

const Home = ({ location }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
            },
        },
    }));

    const [viewSpinner, setViewSpninner] = useState(true);
    const [posts, setPost] = useState([]);
    const [offset, setOffset] = useState({
        skip: 0, limit: 10
    });
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    //Number '10' is limited of page
    const [pPage, setpPage] = useState(0);

    useMemo(() => {
        const offsetPage = (page - 1) * offset.limit;
        setOffset({ skip: offsetPage, limit: 10 });
    }, [page])

    useEffect(() => {
        async function getPostFromAPIF(offset){
            const res = await getPostFromAPI(offset)
            setPost(res.data);
            setViewSpninner(false);
        }
        getPostFromAPIF(offset);
    }, [page]);

    useEffect(() => {
        async function getTotalPostFromAPIF(){
            const num = await getTotalPostFromAPI()
            const p = Math.ceil(parseInt(num.data) / offset.limit)
            setpPage(p);
        }
        getTotalPostFromAPIF();
        document.title = "Home | FongBlog"
    }, [])

    const scrollToContent = () => {
        scroller.scrollTo('content', {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    return (
        <div className='home-container'>
            {viewSpinner ? <Spinner /> : ''}
            <div className='banner'>
                <h1>&lt;&#8725; Xin chào các bạn&gt;</h1>
                <h2>&lt;&#8725; Cùng tìm hiểu các thông tin về IT qua blog này nhé&gt;</h2>
                <h3>&lt;&#8725; More...&gt;</h3>
                <p className="arrowDown">&#8595;</p>
            </div>
            <div className="content">
                <h3>Thông tin về công nghệ thông tin</h3>
                <span>Chúc bạn một ngày tuyệt vời ❤🧡💛💚💙💜🤎!</span>
                <div className="items">
                    {posts.map((post) => (
                        <Link to={`/page/${post._id}`} key={post._id} className="specificPost"><Posts post={post} /></Link>
                    ))}
                </div>
                <div className={`Pagination ${useStyles.root}`}>
                    <Pagination
                        variant="outlined"
                        shape="rounded"
                        page={page}
                        count={pPage}
                        onClick={scrollToContent}
                        renderItem={(item) => (
                            <PaginationItem
                                component={Link}
                                to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
                                {...item}
                            />
                        )}
                    />
                </div>
            </div>
        </div>

    )
}

export default Home;
import './css/home.css';
import Posts from './post';
import { animateScroll as scroll } from 'react-scroll';
import React, { useState, useEffect, useMemo } from 'react';
import { getPostFromAPI, getTotalPostFromAPI } from '../API';
import 'dotenv';
import { NavLink, Link } from "react-router-dom";
import Spinner from './spinner';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

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
        setOffset( { skip: offsetPage, limit: 10 });
    }, [page])

    useEffect(() => {
        let isMounted = true;
        getPostFromAPI(offset).then((data) => {
            if (isMounted) {
                setPost(data);
                setViewSpninner(false);
            }
        })
        return () =>  isMounted = false ;
    }, [page]);

    useEffect(() => {
        let isMounted = true;
        getTotalPostFromAPI().then((num) => {
            if (isMounted) {
                const p = Math.ceil(parseInt(num) / offset.limit)
                setpPage(p);
            }
        })
        return () => { isMounted = false };
    }, [])


  

    const [stickyScrollTop, setStickyScrollTop] = useState(false);
    const stickyScrollTopF = () => {
        if (window.scrollY >= 700) {
            setStickyScrollTop(true);

        } else {
            setStickyScrollTop(false)
        }
    }
    window.addEventListener('scroll', stickyScrollTopF);
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
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
                        <NavLink to={`/page/${post._id}`} key={post._id} className="specificPost"><Posts post={post} /></NavLink>
                    ))}
                </div>
                <div className={`Pagination ${useStyles.root}`}>
                    <Pagination
                        variant="outlined"
                        shape="rounded"
                        page={page}
                        count={pPage}
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
            <button type="button" onClick={scrollToTop} className={`scrollTop  ${stickyScrollTop ? 'stickyScrollTop' : ''}`}>&#8682;</button>

        </div>

    )
}

export default Home;
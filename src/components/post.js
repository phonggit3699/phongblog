import './css/posts.css';
import defaultImg from './images/default.png';

const posts = ( { post }) =>{

    return(
        <div className="posts-container">
            <h4 className="title">{post.title}</h4>
            <div className="img-des">
                <img src={post.img} alt="PhotoIT" />
                <p className="des">{post.des}</p>
            </div>
        </div>
    );
}

export default posts;
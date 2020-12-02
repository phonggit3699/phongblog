import React, {useEffect} from 'react';

const Topics = () =>{
    useEffect(() => {
        document.title = "Topics | FongBlog"
    }, []);
    return(
        <div>
            <h1>This will come soon</h1>
        </div>

    )
}

export default Topics;
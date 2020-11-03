import React from 'react';

import { useRouteMatch } from "react-router-dom";
const About = () => {
    let match = useRouteMatch().path.slice(1);

    return (
        <div className="container">
            This is about
        </div>

    )
}

export default About;
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="text-center mt-5">
        <h1>Oops!</h1>
        <h3>Sorry, the page not found</h3>
        <p>The link you followed probably broken or the page has been removed.</p>
        <Link to='/' className="not-found-btn">Back to home page</Link>
    </div>
);

export default NotFound;
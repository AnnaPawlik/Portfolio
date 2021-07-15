import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import SmallTitle from '../../common/SmallTitle/SmallTitile';
import './SingleProject.scss';

const SingleProject = ({count, title, content, image, link, demo, letter}) => (

    <div className="content content-wrapper">
        <div className="grid">
            <div className="content-text">
                <div className="count">{count}</div>
                <SectionTitle>Projekty</SectionTitle>
                <SmallTitle>{title}</SmallTitle>
                <p>{content}</p>
                <Link to={{pathname:link}} target="_blank" className="link github mx-2">Github</Link>
                {/* <Link to={{pathname: demo}} target="_blank" className="link demo mx-2">Demo</Link> */}
            </div>
            <div className="content">
                <div className="content-overlay"></div>
                    <img className="image img-fluid img-thumbnail" src={image} alt="project"/>
                    <div className="content-details">
                        <h1>{letter}</h1>
                    </div>
                </div>
            </div>
    </div>
);

SingleProject.propTypes = {
    count: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
    demo: PropTypes.string,
    letter: PropTypes.string.isRequired,
}

export default SingleProject;
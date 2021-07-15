import React from 'react';
import SingleProject from './SingleProject';

const Projects = ({items}) => (
    <div className="section container-fluid" id="projects">
        <div className="m-5 d-flex flex-wrap">
            {items.map(item => (
                <SingleProject key={item.name} {...item}/>
            ))}
        </div>
    </div>
);

export default Projects;
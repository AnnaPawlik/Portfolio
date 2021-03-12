import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faNpm } from '@fortawesome/free-brands-svg-icons';
import { faYarn } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';
import tailwindcssIcon from '@iconify-icons/logos/tailwindcss-icon';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import '../Technology/Technology.scss';

class Technology extends React.Component {
    render() {
        return(
            <div className="section container-fluid w-75" id="technology">
                <SectionTitle>Technologie i narzędzia</SectionTitle>
                <div className="skills-stack d-flex flex-wrap justify-content-around align-items-center">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faHtml5} className="icons html"/>
                        <span className="icons-title d-block m-2">HTML5</span>
                    </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCss3Alt} className="icons css"/>
                        <span className="icons-title d-block m-2">CSS3</span>
                    </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faSass} className="icons sass"/>
                        <span className="icons-title d-block m-2">Sass</span>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faBootstrap} className="icons bootstrap"/>
                        <span className="icons-title d-block m-2">Bootstrap</span>
                    </div>
                    <div className="p-2">
                        <Icon icon={tailwindcssIcon} className="icons tailwind"/>
                        <span className="icons-title d-block m-2">Tailwind CSS</span>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faJs} className="icons js"/>
                        <span className="icons-title d-block m-2">JavaScript</span>
                    </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faReact} className="icons react"/>
                        <span className="icons-title d-block m-2">React + Redux</span>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faNode} className="icons node"/>
                        <span className="icons-title d-block m-2">Node.js</span>
                    </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faDatabase} className="icons db" />
                        <span className="icons-title d-block m-2">MongoDB</span>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faGitAlt} className="icons git"/>
                        <span className="icons-title d-block m-2">Git</span>
                    </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faNpm} className="icons npm"/>
                        <span className="icons-title d-block m-2">NPM</span>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faYarn} className="icons yarn"/>
                        <span className="icons-title d-block m-2">YARN</span>
                    </div>
                </div>
            </div>
        );
    }
};

export default Technology;
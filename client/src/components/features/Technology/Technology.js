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
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import '../Technology/Technology.scss';

class Technology extends React.Component {
    render() {
        return(
            <div className="section container-fluid" id="technology">
                <div className="content content-wrapper">
                    <SectionTitle>Technologie</SectionTitle>
                    <div className="skills-stack d-flex flex-wrap justify-content-center">
                        <div className="d-flex p-2">
                            <div className="d-flex flex-column align-items-center m-2 skills">
                                <FontAwesomeIcon icon={faHtml5} className="icons html"/>
                                <span className="icons-title m-2">HTML5</span>
                            </div>
                            <div className="d-flex flex-column align-items-center m-2 skills">
                                <FontAwesomeIcon icon={faCss3Alt} className="icons css"/>
                                <span className="icons-title m-2">CSS3</span>
                            </div>
                        </div>
                        <div className="d-flex p-2">
                            <div className="d-flex flex-column align-items-center m-2 skills">
                                <FontAwesomeIcon icon={faBootstrap} className="icons bootstrap"/>
                                <span className="icons-title d-block m-2">Bootstrap</span>
                            </div>
                            <div className="d-flex flex-column align-items-center m-2 skills">
                                <FontAwesomeIcon icon={faSass} className="icons sass"/>
                                <span className="icons-title d-block m-2">Sass</span>
                            </div>
                        </div>
                        <div className="d-flex p-2">
                            <div className="d-flex flex-column align-items-center m-2 skills">
                                <FontAwesomeIcon icon={faJs} className="icons js"/>
                                <span className="icons-title d-block m-2">JavaScript</span>
                            </div>
                            <div className="d-flex flex-column align-items-center m-2 skills">
                                <FontAwesomeIcon icon={faReact} className="icons react"/>
                                <span className="icons-title d-block m-2">React+Redux</span>
                            </div>
                        </div>
                        <div className="d-flex p-2">
                            <div className="d-flex flex-column align-items-center m-2 skills">
                                <FontAwesomeIcon icon={faNode} className="icons node"/>
                                <span className="icons-title d-block m-2">Node.js</span>
                            </div>
                            <div className="d-flex flex-column align-items-center m-2 skills">
                                <FontAwesomeIcon icon={faDatabase} className="icons db" />
                                <span className="icons-title d-block m-2">MongoDB</span>
                            </div>
                        </div>
                        <div className="d-flex p-2">
                            <div className="d-flex flex-column align-items-center m-2 skills">
                                <FontAwesomeIcon icon={faGitAlt} className="icons git"/>
                                <span className="icons-title d-block m-2">Git</span>
                            </div>
                            <div className="d-flex flex-column align-items-center m-2 skills">
                                <FontAwesomeIcon icon={faNpm} className="icons npm"/>
                                <span className="icons-title d-block m-2">NPM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Technology;
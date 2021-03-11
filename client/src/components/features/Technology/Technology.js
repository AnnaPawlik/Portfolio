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
            <div className="section container-fluid">
                <SectionTitle>Technologie i narzędzia</SectionTitle>
                <div className="skills-stack d-flex justify-content-around">
                    <div>
                        <FontAwesomeIcon icon={faHtml5} className="icons html"/>
                        <span className="icons-title">HTML5</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCss3Alt} className="icons css"/>
                        <span className="icons-title">CSS3</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faSass} className="icons sass"/>
                        <span className="icons-title">Sass</span>
                    </div> 
                    <div>
                        <FontAwesomeIcon icon={faBootstrap} className="icons bootstrap"/>
                        <span className="icons-title">Bootstrap</span>
                    </div>
                    <div>
                        <Icon icon={tailwindcssIcon} className="icons tailwind"/>
                        <span className="icons-title">Tailwind CSS</span>
                    </div> 
                    <div>
                        <FontAwesomeIcon icon={faJs} className="icons js"/>
                        <span className="icons-title">JavaScript</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faReact} className="icons react"/>
                        <span className="icons-title">React + Redux</span>
                    </div> 
                    <div>
                        <FontAwesomeIcon icon={faNode} className="icons node"/>
                        <span className="icons-title">Node.js</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faDatabase} className="icons db" />
                        <span className="icons-title">MongoDB</span>
                    </div> 
                    <div>
                        <FontAwesomeIcon icon={faGitAlt} className="icons git"/>
                        <span className="icons-title">Git</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faNpm} className="icons npm"/>
                        <span className="icons-title">NPM</span>
                    </div> 
                    <div>
                        <FontAwesomeIcon icon={faYarn} className="icons yarn"/>
                        <span className="icons-title">YARN</span>
                    </div>
                    
                   
                       
                      
                     
                      
                       
                       
                       
                                    

                    
                    {/* <div className="row">
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faHtml5} className="icons html"/>
                            <span className="icons-title">HTML5</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faCss3Alt} className="icons css"/>
                            <span className="icons-title">CSS3</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faSass} className="icons sass"/>
                            <span className="icons-title">Sass</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faBootstrap} className="icons bootstrap"/>
                            <span className="icons-title">Bootstrap</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Icon icon={tailwindcssIcon} className="icons tailwind"/>
                            <span className="icons-title">Tailwind CSS</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faJs} className="icons js"/>
                            <span className="icons-title">JavaScript</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faReact} className="icons react"/>
                            <span className="icons-title">React + Redux</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faNode} className="icons node"/>
                            <span className="icons-title">Node.js</span>
                        </div>
                    </div>
                    <div className="row">                      
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faDatabase} className="icons db" />
                            <span className="icons-title">MongoDB</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faGitAlt} className="icons git"/>
                            <span className="icons-title">Git</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faNpm} className="icons npm"/>
                            <span className="icons-title">NPM</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faYarn} className="icons yarn"/>
                            <span className="icons-title">YARN</span>
                        </div>
                    </div>                    */}
                </div>
            </div>
        );
    }
};

export default Technology;
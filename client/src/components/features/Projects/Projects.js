import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { Card, CardTitle, CardImg, CardText, CardSubtitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import Psd_html from '../../images/Psd_html.jpg';
import Panel_adm from '../../images/Panel_adm.jpg';
import Restaurant from '../../images/Restaurant.jpg';
import Biuro from '../../images/Biuro.jpg';
import Sklep_int from '../../images/Sklep_int.jpg';
import Blog from '../../images/Blog.jpg';
import '../Projects/Projects.scss';

class Projects extends React.Component {
    render() {
        return(
            <div className="section container-fluid" id="projects">
                <SectionTitle>Projekty</SectionTitle>
                <div className="d-flex flex-wrap justify-content-center">
                        <Card className="m-4 card">
                            <CardImg top width="100%" src={Blog} alt="Card image cap" className="img"/>
                            <CardBody className="border-top border-light card-body">
                                <CardTitle tag="h5" className="text-uppercase">Blog</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Technologie:</CardSubtitle>
                                <CardText>Stack MERN: MongoDB, Express, React, Node.js, Tailwind CSS</CardText>
                                <Link to={{pathname:"https://blogappmern.herokuapp.com/"}} target="_blank" className="link btn btn-light mx-2">Demo</Link>
                                <Link to={{pathname:"https://github.com/AnnaPawlik/Stack-MERN"}} target="_blank" className="link btn btn-light mx-2">Github</Link>
                            </CardBody>
                        </Card>
                        <Card className="m-4 card">
                            <CardImg top width="100%" src={Sklep_int} alt="Card image cap" className="img"/>
                            <CardBody className="border-top border-light card-body">
                                <CardTitle tag="h5" className="text-uppercase">Sklep internetowy</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Technologie:</CardSubtitle>
                                <CardText>React, Redux, Bootstrap</CardText>
                                <Link to={{pathname:"https://homeshop-b1933.firebaseapp.com/"}} target="_blank" className="link btn btn-light mx-2">Demo</Link>
                                <Link to={{pathname:"https://github.com/AnnaPawlik/Final_Project"}} target="_blank" className="link btn btn-light mx-2">Github</Link>
                            </CardBody>
                        </Card>
                    </div>
                <div className="d-flex flex-wrap justify-content-center">
                        <Card className="m-4 card" >
                            <CardImg top width="100%" src={Restaurant} alt="Card image cap" className="img"/>
                            <CardBody className="border-top border-light card-body">
                                <CardTitle tag="h5" className="text-uppercase">Strona restauracji</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Technologie:</CardSubtitle>
                                <CardText>HTML, CSS, JavaScript, Bootstrap</CardText>
                                <Link to={{pathname:"https://annapawlik.github.io/Restaurant_Layout/"}} target="_blank" className="link btn btn-light mx-2">Demo</Link>
                                <Link to={{pathname:"https://github.com/AnnaPawlik/Restaurant_Layout"}} target="_blank" className="link btn btn-light mx-2">Github</Link>
                            </CardBody>
                        </Card>
                        <Card className="m-4 card">
                            <CardImg top width="100%" src={Biuro} alt="Card image cap" className="img"/>
                            <CardBody className="border-top border-light card-body">
                                <CardTitle tag="h5" className="text-uppercase">Strona biura podróży</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Technologie:</CardSubtitle>
                                <CardText>HTML, Sass, JavaScript</CardText>
                                <Link to={{pathname:"https://annapawlik.github.io/Travel_Project/"}} target="_blank" className="link btn btn-light mx-2">Demo</Link>
                                <Link to={{pathname:"https://github.com/AnnaPawlik/Travel_Project"}} target="_blank" className="link btn btn-light mx-2">Github</Link>
                            </CardBody>
                        </Card>
                    </div>
                <div className="d-flex flex-wrap justify-content-center">
                        <Card className="m-4 card">
                        <CardImg top width="100%" src={Psd_html} alt="Card image cap" className="img"/>
                            <CardBody className="border-top border-light card-body">
                                <CardTitle tag="h5" className="text-uppercase">Cięcie PSD do HTML</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Technologie:</CardSubtitle>
                                <CardText>HTML, Sass</CardText>
                                <Link to={{pathname:"https://annapawlik.github.io/Picture_perfect/"}} target="_blank" className="link btn btn-light mx-2">Demo</Link>
                                <Link to={{pathname:"https://github.com/AnnaPawlik/Picture_perfect"}} target="_blank" className="link btn btn-light mx-2">Github</Link>
                            </CardBody>
                        </Card>
                        <Card className="m-4 card">
                            <CardImg top width="100%" src={Panel_adm} alt="Card image cap" className="img"/>
                            <CardBody className="border-top border-light card-body">
                                <CardTitle tag="h5" className="text-uppercase">Panel administracyjny</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Technologie:</CardSubtitle>
                                <CardText>HTML, Sass, JavaScript</CardText>
                                <Link to={{pathname:"https://annapawlik.github.io/Administration_panel/"}} target="_blank" className="link btn btn-light mx-2">Demo</Link>
                                <Link to={{pathname:"https://github.com/AnnaPawlik/Administration_panel"}} target="_blank" className="link btn btn-light mx-2">Github</Link>
                            </CardBody>
                        </Card>
                    </div>
            </div>
        );
    }
};

export default Projects;
import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { Card, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Projects/Projects.scss';

class Projects extends React.Component {
    render() {
        return(
            <div className="section container-fluid">
                <SectionTitle>Projekty</SectionTitle>
                <div className="d-flex flex-wrap justify-content-center">
                    <Card className="m-4 card">
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="text-uppercase">Blog</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Technologie:</CardSubtitle>
                            <CardText>Stack MERN: MongoDB, Express, React, Node.js, Tailwind CSS</CardText>
                            <Link to={{pathname:"https://blogappmern.herokuapp.com/"}} target="_blank" className="link btn btn-light m-2">Demo</Link>
                            <Link to={{pathname:"https://github.com/AnnaPawlik/Stack-MERN"}} target="_blank" className="link btn btn-light m-2">Github</Link>
                        </CardBody>
                    </Card>
                    <Card className="m-4">
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="text-uppercase">Sklep internetowy</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Technologie:</CardSubtitle>
                            <CardText>React, Redux, Bootstrap</CardText>
                            <Link to={{pathname:"https://homeshop-b1933.firebaseapp.com/"}} target="_blank" className="link btn btn-light m-2">Demo</Link>
                            <Link to={{pathname:"https://github.com/AnnaPawlik/Final_Project"}} target="_blank" className="link btn btn-light m-2">Github</Link>
                        </CardBody>
                    </Card>
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                    <Card className="m-4" >
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="text-uppercase">Strona restauracji</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Technologie:</CardSubtitle>
                            <CardText>HTML, CSS, JavaScript, Bootstrap</CardText>
                            <Link to={{pathname:"https://annapawlik.github.io/Restaurant_Layout/"}} target="_blank" className="link btn btn-light m-2">Demo</Link>
                            <Link to={{pathname:"https://github.com/AnnaPawlik/Restaurant_Layout"}} target="_blank" className="link btn btn-light m-2">Github</Link>
                        </CardBody>
                    </Card>
                    <Card className="m-4">
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="text-uppercase">Strona biura podróży</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Technologie:</CardSubtitle>
                            <CardText>HTML, Sass, JavaScript</CardText>
                            <Link to={{pathname:"https://annapawlik.github.io/Travel_Project/"}} target="_blank" className="link btn btn-light m-2">Demo</Link>
                            <Link to={{pathname:"https://github.com/AnnaPawlik/Travel_Project"}} target="_blank" className="link btn btn-light m-2">Github</Link>
                        </CardBody>
                    </Card>
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                    <Card className="m-4 mw-25">
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="text-uppercase">Cięcie PSD do HTML</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Technologie:</CardSubtitle>
                            <CardText>HTML, Sass</CardText>
                            <Link to={{pathname:"https://annapawlik.github.io/Picture_perfect/"}} target="_blank" className="link btn btn-light m-2">Demo</Link>
                            <Link to={{pathname:"https://github.com/AnnaPawlik/Picture_perfect"}} target="_blank" className="link btn btn-light m-2">Github</Link>
                        </CardBody>
                    </Card>
                    <Card className="m-4 maxw-50">
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="text-uppercase">Panel administracyjny</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Technologie:</CardSubtitle>
                            <CardText>HTML, Sass, JavaScript</CardText>
                            <Link to={{pathname:"https://blogappmern.herokuapp.com/"}} target="_blank" className="link btn btn-light m-2">Demo</Link>
                            <Link to={{pathname:"https://github.com/AnnaPawlik/Stack-MERN"}} target="_blank" className="link btn btn-light m-2">Github</Link>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
};

export default Projects;
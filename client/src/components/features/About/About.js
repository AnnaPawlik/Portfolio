import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
// import Portfolio from '../../images/Portfolio.jpg';
// import arrowIcon from '../../images/right-arrow.svg';
import '../About/About.scss';

class About extends React.Component {
    render() {
        return(
            <div className="section container-fluid" id="about">
                <div className="content content-wrapper">
                    <SectionTitle>O mnie</SectionTitle>
                    <div className="intro text-left">
                        <p>Szukam możliwości rozpoczęcia kariery zawodowej jako Junior Front-End Developer.</p>
                        <p> Ukończyłam 9-miesięczny bootcamp Web Developer z zakresu front-end i back-end.</p>
                        <p> Znam podstawy HTML, CSS, JS, React pozwalające mi stworzyć podstawowe UI aplikacji.</p>
                        <p>Świetnie zarządzam czasem i organizacją pracy.</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default About;
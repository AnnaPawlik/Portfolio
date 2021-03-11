import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import SmallTitle from '../../common/SmallTitle/SmallTitile';
import Portfolio from '../../images/Portfolio.jpg';
import { List } from 'reactstrap';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../About/About.scss';

class About extends React.Component {
    render() {
        return(
            <div className="section container-fluid">
                <SectionTitle>O mnie</SectionTitle>
                <SmallTitle>Szukam pracy</SmallTitle>
                <div className="section-bg d-flex flex-wrap justify-content-center align-items-center">
                    <img src={Portfolio} alt="Portfolio" className="image rounded-circle p-4"/>
                    <div className="intro text-left">
                        <List type="unstyled">
                            <li><FontAwesomeIcon icon={faChevronRight} className="arrow" /> Jestem już po 30-tce więc robię kolejny szalony krok...</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className="arrow" /> Od 10 lat jestem związana z branżą beauty.</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className="arrow" /> 2 lata temu podjęłam decyzję o zmianie branży i sprawdzeniu się jako Front-End Developer.</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className="arrow" /> Ukończyłam 9-miesięczny bootcamp Web Developer z zakresu front-end i back-end.</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className="arrow" /> Cały czas ćwiczę i rozwijam swoje umiejętności - szczególnie w JavaScript i React.</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className="arrow" /> Chętnie nauczę się Wordpressa.</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className="arrow" /> Świetnie zarządzam czasem i organizacją pracy.</li>
                        </List>
                    </div>
                </div>
            </div>
        );
    }
};

export default About;
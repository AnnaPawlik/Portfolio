import React from 'react';
import PropTypes from 'prop-types';
import '../SectionTitle/SectionTitle.scss';

const SectionTitle = ({ children }) => (
  <div className="section-title">
    <div className="section-title-line"></div>
    <h4 className="section-title-name">
      {children}
    </h4>
  </div>
);

SectionTitle.propTypes = {
  children: PropTypes.string,
};

export default SectionTitle;
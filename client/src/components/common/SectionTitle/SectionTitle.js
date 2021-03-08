import React from 'react';
import PropTypes from 'prop-types';
import '../SectionTitle/SectionTitle.scss';

const SectionTitle = ({ children }) => (
  <h2 className="section-title text-uppercase text-center">
     {children}
  </h2>
);

SectionTitle.propTypes = {
  children: PropTypes.string,
};

export default SectionTitle;
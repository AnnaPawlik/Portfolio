import React from 'react';
import PropTypes from 'prop-types';
import '../SmallTitle/SmallTitle.scss';

const SmallTitle = ({ children }) => (
  <h2 className="small-title">
     {children}
  </h2>
);

SmallTitle.propTypes = {
  children: PropTypes.string,
};

export default SmallTitle;
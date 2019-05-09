import React from 'react';
import PropTypes from 'prop-types';

const Svg = props => {
  return (
    <svg className="slds-icon" aria-hidden="true">
      <use
        xmlns="http://www.w3.org/1999/xlink"
        href="/assets/icons/utility-sprite/svg/symbols.svg#check"
      />
    </svg>
  );
};

export default Svg;

import React from 'react';

import './Backdrop.css'
const backdrop = props => (
    <dive className="backdrop" onClick={props.click} />
);

export default backdrop;
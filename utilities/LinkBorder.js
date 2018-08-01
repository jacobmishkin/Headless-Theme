import React, {Component, Fragment} from 'react';

const LinkBorder = ({btnType}) => (
  <Fragment>
    <span className={`top ${btnType}`} />
    <span className={`right ${btnType}`} />
    <span className={`bottom ${btnType}`} />
    <span className={`left ${btnType}`} />
  </Fragment>
);

export default LinkBorder;

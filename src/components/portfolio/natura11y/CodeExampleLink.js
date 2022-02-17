import React, { Fragment } from 'react';

const CodeExampleLink = () => {
  return (
    <Fragment>
      <div className="container narrow margin-y-4 font-size-md">
        <a className="button button--outline button--has-icon text-color-link width-100" href="https://github.com/cavidano/natura11y/tree/main/src">
          <span className="icon icon-github"></span>
          <span className="button__text">View source code on Github</span>
        </a>
      </div>
    </Fragment>
  );
}

export default CodeExampleLink;
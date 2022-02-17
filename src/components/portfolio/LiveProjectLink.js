import React from "react";

const LiveProjectLink = (props) => {
  const { linkURL } = props; 
  return (
    <div className="container narrow margin-y-4">
      <a
        className="button button--outline button--has-icon text-color-link"
        href={linkURL ? linkURL : '#1'}
        target={linkURL ? '_blank' : '_self'}>
            <span className="button__text">See it live</span>
            <span className="icon icon-arrow-right"></span>
        </a>
    </div>
  )
}

LiveProjectLink.defaultProps = {
  linkURL: null
}

export default LiveProjectLink;
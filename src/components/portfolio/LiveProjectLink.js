import React from "react";

const LiveProjectLink = (props) => {
  const { linkURL } = props; 
  return (
    <div className="container narrow margin-y-4">
      <a
        className="button button--outline text-color-link"
        href={linkURL ? linkURL : '#1'}
        target={linkURL ? '_blank' : '_self'}>
            See it Live
        </a>
    </div>
  )
}

LiveProjectLink.defaultProps = {
  linkURL: null
}

export default LiveProjectLink;
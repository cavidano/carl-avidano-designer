import React from "react";

const IntroBlock = ({ children }) => {
  return (
    <div className="container narrow margin-y-4">
      <div className="h2 font-weight-bold">
        {children}
      </div>
    </div>
  )
}

export default IntroBlock;
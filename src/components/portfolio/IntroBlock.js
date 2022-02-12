import React from "react";

const IntroBlock = ({ children }) => {
  return (
    <div className="container narrow margin-y-4">
      <h2>
        {children}
      </h2>
    </div>
  )
}

export default IntroBlock;
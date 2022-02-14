import React from 'react'

const Footer = () => {
  return (
    <footer className="container narrow medium--lg padding-y-2 font-size-sm">

        <div className="display-flex justify-content-between">
            <span>
                © Copyright <span className="copyright-year"></span>. All rights resereved.
            </span>
            <a href="#" data-scroll="top">
                Back to Top
            </a>
        </div>
        
    </footer>
  )
}

export default Footer;
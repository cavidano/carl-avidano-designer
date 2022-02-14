import React from 'react'

const Footer = () => {
  return (
    <footer class="container narrow medium--lg padding-y-2 font-size-sm">

        <div class="display-flex justify-content-between">
            <span>
                © Copyright <span class="copyright-year"></span>. All rights resereved.
            </span>
            <a href="#" data-scroll="top">
                Back to Top
            </a>
        </div>
        
    </footer>
  )
}

export default Footer;
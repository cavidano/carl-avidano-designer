import React, { Fragment, useRef, useState } from 'react';

import LightBox from './Lightbox';

const FigureSingleBlock = ({ children, ...props }) => {

    const { caption, lightbox } = props;

    const [lightboxOpen, setlightboxOpen] = useState(false);

    const lightboxRef = useRef();

    const lightboxContainerRef = useRef();

    const handleOpen = (e) => {
                
        setlightboxOpen(true);

        const viewportHeight = window.innerHeight;

        const targetHeight = e.target.offsetHeight; 

        if(targetHeight < viewportHeight){
            lightboxContainerRef.current.style.setProperty('--lightbox-vertical-align', 'center');
        }

        document.querySelector('body').classList.add('modal-open');
    }

    const handleClose = () => {

        setlightboxOpen(false);

        document.querySelector('body').classList.remove('modal-open');
    }
        
    return (
        <Fragment>

            <figure className="medium margin-x-auto margin-y-5">

                {lightbox ? (

                <div className="zoomable" onClick={handleOpen}>
                    {children}
                </div>

                ) : (

                <Fragment>
                    {children}
                </Fragment>

                )}

                {caption != null && (
                    <figcaption className="container narrow font-size-md">
                        <p>
                            <em>
                                {caption}
                            </em>
                        </p>
                    </figcaption>
                )}

            </figure>

            {lightbox && (

            <LightBox
                ref={lightboxRef}
                lightboxContainerRef={lightboxContainerRef}
                lightboxOpen={lightboxOpen}
                handleClose={handleClose}>
                {children}
            </LightBox>
            
            )}

        </Fragment>
    );
}

FigureSingleBlock.defaultProps = {
    caption: null,
    lightbox: false
}

export default FigureSingleBlock;
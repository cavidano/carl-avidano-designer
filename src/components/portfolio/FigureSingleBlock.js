import React, { Fragment, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import LightBox from './Lightbox';

const FigureSingleBlock = ({ children, ...props }) => {

    const { caption, lightbox } = props;

    const lightboxID = uuidv4();

    const handleOpen = (e) => {
        const targetLightbox = document.getElementById(lightboxID);
        
        const lightboxContainer = targetLightbox.querySelector('.lightbox__container');
        
        const viewportHeight = window.innerHeight;

        const targetHeight = e.target.offsetHeight; 

        if(targetHeight < viewportHeight){
            lightboxContainer.style.setProperty('--lightbox-vertical-align', 'center');
        }

        targetLightbox.classList.add('shown');
        document.querySelector('body').classList.add('modal-open');
    }

    const handleClose = () => {
        const targetLightbox = document.getElementById(lightboxID);

        targetLightbox.classList.remove('shown');
        document.querySelector('body').classList.remove('modal-open');
    }
        
    return (
        <Fragment>

            <figure className="medium margin-y-5">

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
                id={lightboxID}
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
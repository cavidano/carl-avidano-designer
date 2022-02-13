import React, { Fragment, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import LightBox from './Lightbox';

const FigureSingleBlock = ({ children, ...props }) => {

    
    const { caption } = props;

    const lightboxID = uuidv4();

    function getPosition(element) {
        var xPosition = 0;
        var yPosition = 0;
    
        while(element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
    
        return { x: xPosition, y: yPosition };
    }

    const handleOpen = (e) => {
        const targetLightbox = document.getElementById(lightboxID);

        
        const winScrollY = window.scrollY;
        const elOffset = e.target.closest('span').offsetTop;
        const elWidth = e.target.offsetWidth;

        const elDistance = elOffset - winScrollY;

        console.log("my target is ======> ", e.target);
        console.log("my width is ======> ", e.target.offsetWidth);
        console.log("my height is ======> ", e.target.offsetHeight);
        console.log("my ofsset is ======> ", elOffset);
        console.log("the window scroll is ======> ", winScrollY);
        console.log("my distance is ======> ", elDistance);

        const lightboxContainer = targetLightbox.querySelector('.lightbox__container > span');

        lightboxContainer.style.setProperty('--lb-width', elWidth + 'px');
        lightboxContainer.style.setProperty('--lb-offset', elDistance + 'px');


        targetLightbox.classList.add('shown');

        setTimeout(() => {
            lightboxContainer.style.setProperty('--lb-width', '100%');
            lightboxContainer.style.setProperty('--lb-offset', 'initial');
        }, 10);


        


    }

    const handleClose = (e) => {
        const targetLightbox = document.getElementById(lightboxID);
        targetLightbox.classList.remove('shown');
    }
    
    return (
        <Fragment>

            <figure className="medium margin-y-5">

                <div className="zoomable" onClick={handleOpen}>
                    {children}
                </div>

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

            <LightBox
                id={lightboxID}
                handleClose={handleClose}>
                {children}
            </LightBox>

        </Fragment>
    );
}

FigureSingleBlock.defaultProps = {
    caption: null
}

export default FigureSingleBlock;
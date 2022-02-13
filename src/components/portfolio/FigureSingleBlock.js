import React, { Fragment } from 'react';

import { v4 as uuidv4 } from 'uuid';

import LightBox from './Lightbox';

const FigureSingleBlock = ({ children, ...props }) => {

    const { caption } = props;

    console.log("I am a petulant child! = ", uuidv4());

    const lightboxID = uuidv4();

    const handleOpen = () => {
        const targetLB = document.getElementById(lightboxID);

        targetLB.classList.add('shown');
    }

    const handleClose = () => {
        const targetLB = document.getElementById(lightboxID);

        targetLB.classList.remove('shown');
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

            <LightBox handleClose={handleClose} id={lightboxID}>
                {children}
            </LightBox>
            
        </Fragment>
    );
}

FigureSingleBlock.defaultProps = {
    caption: null
}

export default FigureSingleBlock;
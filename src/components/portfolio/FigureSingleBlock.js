import React, { Fragment } from 'react';

const FigureSingleBlock = ({ children, ...props }) => {

    const { caption } = props;
    
    return (
        <Fragment>
            <figure className="medium margin-y-5">

                {children}
            
                {caption != null && (
                    <figcaption className="container narrow font-size-md">
                        <p><em>{caption}</em></p>
                    </figcaption>
                )}

            </figure>
            {children}
        </Fragment>
    );
}

FigureSingleBlock.defaultProps = {
    caption: null
}

export default FigureSingleBlock;
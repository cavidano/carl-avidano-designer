import React from 'react';

const FigureSingleBlock = ({ children, ...props }) => {

    const { caption } = props;
    
    return (
        <figure className="medium margin-y-5">

            {children}
        
            {caption != null && (
                <figcaption className="container narrow font-size-md">
                    <p><em>{caption}</em></p>
                </figcaption>
            )}

        </figure>
    );
}

FigureSingleBlock.defaultProps = {
    caption: null
}

export default FigureSingleBlock;
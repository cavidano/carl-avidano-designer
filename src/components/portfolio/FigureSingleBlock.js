import React from 'react';

const FigureSingleBlock = ({ children, ...props }) => {

    const { caption, boxShadow } = props;
    
    return (
        <figure className={`medium margin-y-5 ${boxShadow && 'figure-has-shadow'}`}>

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
    caption: null,
    boxShadow: false
}

export default FigureSingleBlock;
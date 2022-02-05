import React from "react";

const FigureSingleBlock = ({children, ...props}) => {

    const { figureCaption } = props;

    return (
        <figure className="medium margin-y-4 border">
            {children}
            {figureCaption != null && (
                <p>whoa!! {figureCaption}</p>
            )}
        </figure>
    );
}

FigureSingleBlock.defaultProps = {
    figureCaption: null
}

export default FigureSingleBlock;
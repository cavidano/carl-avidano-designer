import React from 'react';

const Thumbnail = (props) => {

    const { 
        primaryColor,
        imgURL
     } = props;

    return (
        <div class="backdrop backdrop--fixed aspect-ratio-1x1 theme-primary justify-content-end border-radius" style={{'height': '100%', '--primary': `${primaryColor}`}}>

            <div class="backdrop__image gradient-veneer-bottom">
                <img src={imgURL} alt="Placeholder" />
            </div>

            <div class="backdrop__cover">

                <div class="container medium margin-y-3">
                    <h2 class="h3">
                        Project
                    </h2>
                </div>

            </div>

        </div>
    );
}

Thumbnail.defaultProps = {
    primaryColor: 'blue',
    imgURL: 'https://via.placeholder.com/1500x750'
}

export default Thumbnail;
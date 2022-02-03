import React from 'react';

const Thumbnail = (props) => {

    const { 
        primaryColor,
        imgURL
     } = props;

    return (
        <div class="backdrop backdrop--fixed theme-primary justify-content-end" style={{'height': '100%', '--primary': `${primaryColor}`}}>

            <div class="backdrop__image gradient-veneer-bottom">
                <img src={imgURL} alt="Placeholder" />
            </div>

            <div class="backdrop__cover">

                <div class="container medium margin-y-4">
                    <h1 class="text-shadow">
                        Project
                    </h1>
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
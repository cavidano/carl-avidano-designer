import React from 'react';

import { Link } from 'gatsby';

const Preview = (props) => {

    const { 
        primaryColor,
        imgURL,
        slug
     } = props;

    return (
        <Link
            class="backdrop backdrop--fixed aspect-ratio-1x1 theme-primary justify-content-end border-radius"
            style={{'--primary': `${primaryColor}`}}
            to={`${slug}`}>

            <div class="backdrop__image gradient-veneer-bottom">
                <img src={imgURL} alt="Placeholder" />
            </div>

            <div class="backdrop__cover">

                <div class="container medium margin-y-3">
                    <p class="h3">
                        Project
                    </p>
                </div>

            </div>

        </Link>
    );
}

Preview.defaultProps = {
    primaryColor: 'blue',
    imgURL: 'https://via.placeholder.com/1500x750',
    slug: null
}

export default Preview;
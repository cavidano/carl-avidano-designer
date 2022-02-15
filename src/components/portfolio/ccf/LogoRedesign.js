import React, { Fragment } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

function LogoRedesign() {
    return (
        <Fragment>
            <div className="medium margin-y-5">
                <div className="grid grid--column-2 gap-2">
                    <figure>
                        <StaticImage
                            src="../../../images/cheetah-conservation-fund/ccf-logo-legacy.jpg"
                            alt=""
                            placeholder="dominantColor"
                            layout="fullWidth"
                        />
                        <figcaption className="container">
                            <p>Old CCF logo</p>
                        </figcaption>
                    </figure>
                    <figure>
                        <StaticImage
                            src="../../../images/cheetah-conservation-fund/ccf-logo-redesign.jpg"
                            alt=""
                            placeholder="dominantColor"
                            layout="fullWidth"
                        />
                        <figcaption className="container">
                            <p>New CCF logo</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </Fragment>
    );
};

export default LogoRedesign;
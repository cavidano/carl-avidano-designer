import React from 'react';

const LightBox = ({children, handleClose, id}) => {
	return (
		<div className="lightbox" id={id} onClick={handleClose}>

			<div className="lightbox__actions font-size-md">

				<a class="button button--icon-only" href="#1" aria-label="Home">
					<span class="icon icon-close" aria-hidden="true"></span>
				</a>

			</div>

			<div className="lightbox__container">
				{children}
			</div>
		</div>
	);
};

export default LightBox;
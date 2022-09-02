import React from 'react';

const LightBox = ({ lightboxContainerRef, lightboxOpen, handleClose, children }) => {

	return (
		<div className={`lightbox ${lightboxOpen ? 'shown' : ''}` } onClick={handleClose}>

			<div className="lightbox__actions font-size-md">

				<a className="button button--icon-only" href="#1" aria-label="Close">
					<span className="icon icon-close" aria-hidden="true"></span>
				</a>

			</div>

			<div className="lightbox__container" ref={lightboxContainerRef}>
				{children}
			</div>

		</div>
	);
};

export default LightBox;
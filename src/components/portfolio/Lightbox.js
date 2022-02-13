import React from 'react';

const LightBox = ({children, handleClose, id}) => {
	return (
		<div className="lightbox" id={id} onClick={handleClose}>
			<div className="lightbox__container">

				{children}

			</div>
		</div>
	);
};

export default LightBox;
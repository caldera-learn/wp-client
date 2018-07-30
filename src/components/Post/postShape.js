import PropTypes from 'prop-types';

export const postShape =
	PropTypes.shape({
		ID: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
		title: PropTypes.shape({
			rendered: PropTypes.string,
		}).isRequired,
		content: PropTypes.shape({
			rendered: PropTypes.string,
		}).isRequired,
	}).isRequired;

import React from 'react';
import AppContent from '../components/AppContent';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
    mode: state.mode
});

const mapDispatchToProps = (dispatch) => ({
    
});

const AppContentContainer = ({mode}) => (
	<AppContent mode={mode} />
);

AppContentContainer.propTypes = {
	mode: PropTypes.string
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContentContainer);
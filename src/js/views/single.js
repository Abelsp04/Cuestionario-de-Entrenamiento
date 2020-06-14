import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	return <div className="jumbotron">Single Page</div>;
};

Single.propTypes = {
	match: PropTypes.object
};

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

// import "../../styles/demo.scss";
import { Question } from "../component/question";

export const Demo = () => {
	// const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Question />
		</div>
	);
};

import React from "react";

export const Question = () => {
	return (
		<form>
			<div className="form-group">
				<div className="card-body">
					<blockquote className="blockquote mb-0">
						<p className="card-text">
							The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
							interested.
						</p>
					</blockquote>
				</div>
				<div className="form-check mb-0">
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios1"
							value="option1"
						/>
						<label className="form-check-label" For="exampleRadios1">
							Default radio
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios2"
							value="option2"
						/>
						<label className="form-check-label" For="exampleRadios2">
							Second default radio
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios3"
							value="option3"
						/>
						<label className="form-check-label" For="exampleRadios3">
							third radio
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios4"
							value="option4"
						/>
						<label className="form-check-label" For="exampleRadios3">
							Fourth radio
						</label>
					</div>
				</div>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};

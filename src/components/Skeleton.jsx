import React from "react";
import "../styles/Skeleton.scss";

function Skeleton({ numberOfQuotes }) {
	return (
		<main>
			<div className="container skeleton-pad">
				<div className="cards-container">
					{Array.from({ length: numberOfQuotes }).map((_, index) => (
						<div key={index} className="card">
							<div className="image skeleton"></div>
							<div className="quote">
								<p className="skeleton skeleton-text"></p>
								<p className="skeleton skeleton-text"></p>
								<p className="skeleton skeleton-text"></p>
								<h2 className="skeleton skeleton-subtext"></h2>
								<div className="controls">
									<button className="skeleton skeleton-button"></button>
									<button className="skeleton skeleton-button"></button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}

export default Skeleton;

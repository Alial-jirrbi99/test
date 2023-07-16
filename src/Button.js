import React, { useState } from "react";

function Button() {
	const [status, setStatus] = useState("");

	return (
		<div>
			<p>Status: {status}</p>
			<button onClick={() => setStatus("Ready")}>
				Ready
			</button>
			<button onClick={() => setStatus("Cancelled")}>
				Cancelled
			</button>
		</div>
	);
}

export default Button;

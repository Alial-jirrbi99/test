import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
	const workerRef = useRef(null);
	const [remainingTime, setRemainingTime] = useState(60);
	const timerRef = useRef(null);

	useEffect(() => {
		workerRef.current = new Worker("timerWorker.js");

		workerRef.current.postMessage("start");

		const handleMessage = (event) => {
			const { data } = event;

			if (data === "tick") {
				setRemainingTime((prevTime) => prevTime - 1);
			} else if (data === "done") {
				clearInterval(timerRef.current);
				console.log("Timer finished!");
			}
		};

		workerRef.current.addEventListener("message", handleMessage);

		return () => {
			workerRef.current.terminate();
			workerRef.current.removeEventListener(
				"message",
				handleMessage
			);
		};
	}, []);

	return (
		<div>
			<h1>Timer</h1>
			{remainingTime > 0 ? (
				<h2>{remainingTime} seconds remaining</h2>
			) : (
				<h2>Timer finished!</h2>
			)}
		</div>
	);
};

export default Timer;

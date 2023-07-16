let timerId;

self.addEventListener("message", (event) => {
	const { data } = event;

	if (data === "start") {
		let seconds = 60;

		// Start the countdown
		timerId = setInterval(() => {
			if (seconds > 0) {
				seconds--;
				self.postMessage("tick");
			} else {
				clearInterval(timerId);
				self.postMessage("done");
			}
		}, 1000);
	}
});

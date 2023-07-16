import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

test("can receice a new user and show it on a list", () => {
	render(<App />);

	const nameInput = screen.getByRole("textbox", {
		name: /name/i,
	});

	const emailInput = screen.getByRole("textbox", {
		name: /email/i,
	});

	const button = screen.getByRole("button");

	user.click(nameInput);
	user.keyboard("ali");
	user.click(emailInput);
	user.keyboard("ali@ali.com");

	user.click(button);

	// const name = screen.getByRole("cell", { name: "ali" });
	// const email = screen.getByRole("cell", { name: "ali@ali.com" });

	// expect(name).toBeInTheDocument();
	// expect(email).toBeInTheDocument();
});
